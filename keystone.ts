import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { insertSeedData } from "./seed-data/index";

export default config({
  db: {
    provider: "postgresql",
    url: "postgres://oxumszkqqdwlve:614f84399149784587fcea36f43583e6991e376248993b9ce64297ffa5938e89@ec2-34-192-210-139.compute-1.amazonaws.com:5432/dcq0ffirhhdh2u",
    async onConnect(context) {
      if (process.argv.includes("--seed-data")) {
        await insertSeedData(context);
      }
    },
  },
  lists,
});
