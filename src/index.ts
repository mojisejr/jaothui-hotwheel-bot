import dotenv from "dotenv";
dotenv.config();
import "./helpers/dayjs";
import { job } from "./cron";

const main = async () => {
  console.log("bot start!");
  job.start();
};

(async () => await main())();
