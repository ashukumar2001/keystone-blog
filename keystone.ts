import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { insertSeedData } from "./seed-data/index";

export default config({
  db: {
    provider: "postgresql",
    url: "postgres://kjxdtwdmagudoi:c07503cd13635529e971c5e31ce9fe5dda2cce3a26bef9fbbe501500a65007ed@ec2-44-194-4-127.compute-1.amazonaws.com:5432/d92jpgnc131jcp",
    async onConnect(context) {
      if (process.argv.includes("--seed-data")) {
        await insertSeedData(context);
      }
    },
  },
  lists,
});
