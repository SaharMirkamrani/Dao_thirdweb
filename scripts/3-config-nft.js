import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xB22b2c152F4a522F19B34d70944c06C50e800781");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "SaharDAO banana land",
        description: "This NFT will give you access to SaharDAO!",
        image: readFileSync("scripts/assets/NFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
