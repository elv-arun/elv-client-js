const { ElvClient } = require("../src/ElvClient.js")

/*
 * Usage:
 * export PRIVATE_KEY=deadbeefbadf00dbadf00dbadf00dbadf00dbadf00dbadf00dbadf00dbadf00d
 * node SetupLive.js
 *
 * For clientConf, use EITHER configUrl OR contentSpaceId, fabricURIs, and ethereumURIs
 *
 * From the config json
 *   contentSpaceId is qspace.id
 *   fabricURIs/ingressNodeApiUrl is network.seed_nodes.fabric_api
 *   ethereumURIs is network.seed_nodes.ethereum_api
 *   ingressNodeId is node_id
 * 
 * TODO: Load configuration from a file
 */

const PRINT_DEBUG = false

const hlsStream = {
  ingestType: "hls", // default: hls
  maxDurationSec: 600, // 10m, default: 2h
  originUrl: "http://yourhlsplaylist", // required for hls
  sourceTimescale: 90000, // required
  txParams: {
    "duration_ts": 2700000, // 30s, required for hls
    "enc_height": 720, // required
    "enc_width": 1280, // required
    "force_keyint": 50,
    "format": "fmp4", // default: fmp4
    "seg_duration_ts": 2700000, // 30s @ 25 fps, required
    "video_bitrate": 8000000, // 8 Mbps
  },
}

const udpTsStream = {
  ingestType: "udp",
  maxDurationSec: 600,
  sourceTimescale: 90000,
  txParams: {
    "duration_ts": -1, 
    "enc_height": 720,
    "enc_width": 1280,
    "force_keyint": 120,
    "format": "fmp4-segment",
    "seg_duration_ts": 2702700, // 30s @ 60000/1001 fps
    "video_bitrate": 20000000, // 20 Mbps
  },
  udpPort: 21001 // required for udp
}

const streamParams = udpTsStream

const confLocal = {
  clientConf: {
    configUrl: "",
    contentSpaceId: "ispc2v1uV2Lr51zyAFXeV6qi5R8628nT",
    fabricURIs: ["http://localhost:8008"],
    ethereumURIs: ["http://localhost:8545"],
    noCache: false,
    noAuth: false
  },
  // ingressNodeApiUrl: "http://localhost:8008",
  // ingressNodeId: "inod2oZhwSumZZSYhaNaf77VVKCt3nu2",
  ingressNodeApiUrl: "",
  ingressNodeId: "",
  libraryId: "ilib3cDtpxmqQkEgJVdihcoMphVoEBMC",
  objectType: "hq__12hpW5caKJxSQCAjHoe73NCYzgPYZD9DNbyod7LkpCUnZBYcUXGseTMrp2KRGTToYm17xt7MNJ",
  signerPrivateKey: process.env.PRIVATE_KEY,
  originUrl: streamParams.originUrl,
  txParams: streamParams.txParams,
  sourceTimescale: streamParams.sourceTimescale,
  maxDurationSec: streamParams.maxDurationSec,
  ingestType: streamParams.ingestType,
  udpPort: streamParams.udpPort
}

/*
 * Creates object in: https://core.test.contentfabric.io/#/apps/fabric-browser/content/ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD
 *
 * For the private key, create an account at https://core.test.contentfabric.io/#/accounts
 */
const conf955210California = {
  clientConf: {
    // configUrl: "https://main.net955210.contentfabric.io",
    contentSpaceId: "ispc2zqa4gZ8N3DH1QWakR2e5UowDLF1",
    fabricURIs: ["https://host-35-233-145-232.test.contentfabric.io"],
    ethereumURIs: ["https://host-35-233-145-232.test.contentfabric.io/eth/"],
    noCache: false,
    noAuth: false
  },
  ingressNodeApiUrl: "https://host-35-233-145-232.test.contentfabric.io",
  ingressNodeId: "inod3jzKHgsuaBu3cqKu7t4N2fLLdkC4",
  libraryId: "ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD",
  objectType: "hq__aVeScS42SZYyRtud7ycv6UWqaxm76VGN398RamQ3w4b55Ycrn1z6DivNTJyaPhEs4m1TfR3bH",
  signerPrivateKey: process.env.PRIVATE_KEY,
  originUrl: streamParams.originUrl,
  txParams: streamParams.txParams,
  sourceTimescale: streamParams.sourceTimescale,
  maxDurationSec: streamParams.maxDurationSec,
  ingestType: streamParams.ingestType,
  udpPort: streamParams.udpPort
}

const conf955210London = {
  clientConf: {
    // configUrl: "https://main.net955210.contentfabric.io",
    contentSpaceId: "ispc2zqa4gZ8N3DH1QWakR2e5UowDLF1",
    fabricURIs: ["https://host-35-246-28-142.test.contentfabric.io"],
    ethereumURIs: ["https://host-35-246-28-142.test.contentfabric.io/eth/"],
    noCache: false,
    noAuth: false
  },
  ingressNodeApiUrl: "https://host-35-246-28-142.test.contentfabric.io",
  ingressNodeId: "inod3wynwpbH82fsCWxbatCKxCsgyP1c",
  libraryId: "ilibX37dYK6dj5F5ZQQC4eDLMNe1kZD",
  objectType: "hq__aVeScS42SZYyRtud7ycv6UWqaxm76VGN398RamQ3w4b55Ycrn1z6DivNTJyaPhEs4m1TfR3bH",
  signerPrivateKey: process.env.PRIVATE_KEY,
  originUrl: streamParams.originUrl,
  txParams: streamParams.txParams,
  sourceTimescale: streamParams.sourceTimescale,
  maxDurationSec: streamParams.maxDurationSec,
  ingestType: streamParams.ingestType,
  udpPort: streamParams.udpPort
}

const conf = confLocal

const Test = async () => {
  try {
    let client
    if (conf.clientConf.configUrl) {
      client = await ElvClient.FromConfigurationUrl({
        configUrl: conf.clientConf.configUrl
      })
    } else {
      client = new ElvClient(conf.clientConf)
    }
    const wallet = client.GenerateWallet()
    const signer = wallet.AddAccount({ privateKey: conf.signerPrivateKey })
    client.SetSigner({ signer })
    const fabURI = client.fabricURIs[0]
    console.log("Fabric URI: " + fabURI)
    const ethURI = client.ethereumURIs[0]
    console.log("Ethereum URI: " + ethURI)

    /*
     * Create object for live streaming.
     */
    if (PRINT_DEBUG) console.log("CreateContentObject", conf.libraryId, conf.objectType)
    let response = await client.CreateContentObject({
      libraryId: conf.libraryId,
      options: {
        type: conf.objectType
      }
    })
    const objectId = response.id
    console.log("Object ID:", objectId)
    let writeToken = response.write_token

    /*
     * First finalize the object before creating the edge token, otherwise
     * the object type will be empty for the edge token.
     *
     * FIXME: Also sleep to make sure the operation is settled before
     * continuing, for the same reason.
     */
    if (PRINT_DEBUG) console.log("FinalizeContentObject", conf.libraryId, objectId, writeToken)
    await client.FinalizeContentObject({
      libraryId: conf.libraryId,
      objectId: objectId,
      writeToken: writeToken
    })
    if (PRINT_DEBUG) console.log("sleep 5 seconds")
    await sleep(5000)

    if (PRINT_DEBUG) console.log("EditContentObject", conf.libraryId, objectId)
    response = await client.EditContentObject({
      libraryId: conf.libraryId,
      objectId: objectId
    })
    const edgeToken = response.write_token
    console.log("Edge token:", edgeToken)

    /*
     * Set the metadata, including the edge token.
     */
    if (PRINT_DEBUG) console.log("EditContentObject", conf.libraryId, objectId)
    response = await client.EditContentObject({
      libraryId: conf.libraryId,
      objectId: objectId
    })
    writeToken = response.write_token

    if (PRINT_DEBUG) console.log("MergeMetadata", conf.libraryId, objectId, writeToken)
    await client.MergeMetadata({
      libraryId: conf.libraryId,
      objectId: objectId,
      writeToken: writeToken,
      metadata: {
        "description": "Lorem ipsum dolor sit amet",
        "edge_write_token": edgeToken,
        "ingress_node_api": conf.ingressNodeApiUrl,
        "ingress_node_id": conf.ingressNodeId,
        "name": "Live Test - " + Date().toLocaleString(),
        "origin_url": conf.originUrl,
        "tx_params": conf.txParams,
        "source_timescale": conf.sourceTimescale,
        "max_duration_sec": conf.maxDurationSec,
        "playout_type" : "live",
        "ingest_type": conf.ingestType,
        "udp_port": conf.udpPort
      }
    })

    if (PRINT_DEBUG) console.log("FinalizeContentObject", conf.libraryId, objectId, writeToken)
    response = await client.FinalizeContentObject({
      libraryId: conf.libraryId,
      objectId: objectId,
      writeToken: writeToken
    })
    const objectHash = response.hash
    console.log("Object hash:", objectHash)

    if (PRINT_DEBUG) console.log("AuthorizationToken", conf.libraryId, objectId)
    response = await client.authClient.AuthorizationToken({
      libraryId: conf.libraryId,
      objectId: objectId,
      versionHash: "",
      channelAuth: false,
      noCache: true
    })

    const curlCmd = "curl -s -H \"$AUTH_HEADER\" "
    const fabLibHashURI = fabURI + "/qlibs/" + conf.libraryId + "/q/" + objectHash
    const fabLibTokenURI = fabURI + "/qlibs/" + conf.libraryId + "/q/" + edgeToken

    console.log("\nSet Authorization header:\nexport AUTH_HEADER=\"" +
      "Authorization: Bearer " + response + "\"")

    console.log("\nInspect metadata:\n" +
      curlCmd + fabLibHashURI + "/meta | jq")

    console.log("\nInspect edge metadata:\n" +
      curlCmd + fabLibTokenURI + "/meta | jq")

    console.log("\nStart recording (returns HANDLE):\n" +
      curlCmd + fabLibTokenURI + "/call/live/start | jq")

    console.log("\nStop recording (use HANDLE from start):\n" +
      curlCmd + fabLibTokenURI + "/call/live/stop/HANDLE")

    console.log("\nPlayout options:\n" +
      curlCmd + fabLibHashURI + "/rep/live/default/options.json | jq")

    console.log("\nHLS playlist:\n" +
      fabLibHashURI + "/rep/live/default/hls-clear/playlist.m3u8")
  } catch (error) {
    console.error(error)
  }
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

Test()
