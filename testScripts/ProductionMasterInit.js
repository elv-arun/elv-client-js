/* eslint-disable no-console */

// initialize production master without uploading any files
// - use to turn a manually created object into a production master

// still need to pass in cloud credentials via env vars if files are remote

const { ElvClient } = require("../src/ElvClient");

const yargs = require("yargs");
const argv = yargs
  .option("libraryId", {
    description: "ID of the library containing master"
  })
  .option("objectId", {
    description: "ID of the master object"
  })
  .option("elv-geo", {
    type: "string",
    description: "Geographic region for the fabric nodes. Available regions: na-west-north|na-west-south|na-east|eu-west"
  })
  .option("config-url", {
    type: "string",
    description: "URL pointing to the Fabric configuration. i.e. https://main.net955210.contentfabric.io/config"
  })
  .demandOption(
    ["libraryId", "objectId"],
    "\nUsage: PRIVATE_KEY=<private-key> node ProductionMasterInit.js --libraryId <master-library-id> --objectId <master-object-id>  (--config-url \"<fabric-config-url>\") (--elv-geo eu-west) \n"
  )
  .argv;

const ClientConfiguration = (!argv["config-url"]) ? (require("../TestConfiguration.json")) : {"config-url": argv["config-url"]};

const ProductionMasterInit = async ({libraryId, objectId, access, elvGeo}) => {
  try {
    const client = await ElvClient.FromConfigurationUrl({
      configUrl: ClientConfiguration["config-url"],
      region: elvGeo
    });
    let wallet = client.GenerateWallet();
    let signer = wallet.AddAccount({
      privateKey: process.env.PRIVATE_KEY
    });
    await client.SetSigner({signer});

    console.log("\nCalling production_master/init");

    try {

      const response = await client.EditContentObject({libraryId, objectId});

      console.log(JSON.stringify(response));
      const {id, write_token} = response;

      const {data, errors, warnings, logs} = await client.CallBitcodeMethod({
        objectId,
        libraryId,
        method: "/media/production_master/init",
        writeToken: write_token,
        body: {access},
        constant: false
      });

      const finalizeResponse = await client.FinalizeContentObject({
        libraryId,
        objectId: id,
        writeToken: write_token,
        awaitCommitConfirmation: false
      });

      console.log(JSON.stringify(data, null, 2));

      if(errors && errors.length > 0) {
        console.error("Errors:");
        console.error(errors.join("\n"), "\n");
      }

      if(warnings && warnings.length > 0) {
        console.warn("Warnings:");
        console.warn(warnings.join("\n"), "\n");
      }

      if(logs && logs.length > 0) {
        console.log("Log:");
        console.log(logs.join("\n"), "\n");
      }

    } catch(error) {
      console.error("Unrecoverable error:");
      console.error(error.body ? error.body : error);
    }
  } catch(error) {
    console.error(error);
  }
};

let {libraryId, objectId, elvGeo} = argv;

// Example access if all files in filePaths are in S3 bucket
//
const access = [
  {
    "path_matchers": [".*"],
    "remote_access": {
      "protocol": "s3",
      "platform": "aws",
      "path": process.env.AWS_BUCKET + "/",
      "storage_endpoint": {
        "region":  process.env.AWS_REGION
      },
      "cloud_credentials": {
        "access_key_id": process.env.AWS_KEY,
        "secret_access_key": process.env.AWS_SECRET
      }
    }
  }
];


ProductionMasterInit({libraryId, objectId, elvGeo, access});
