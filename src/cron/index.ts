import { CronJob } from "cron";
import { resetPointByRound } from "../sanity/services/reset.service";
import dayjs from "dayjs";
import { jobData } from "./jobData";

export const job = new CronJob(
  "*/1 * * * *",
  async () => {
    for (let i = 0; i < jobData.length; i++) {
      console.log("processing index: #", i);
      console.log("@server time: ", dayjs().format());
      console.log("@local time: ", dayjs().tz("Asia/Bangkok").format());
      console.log("@gameId: ", jobData[i].gameId);
      await resetPointByRound(jobData[i].gameId, jobData[i].contractAddress);
    }
  },
  null,
  false,
  "Asia/Bangkok"
);
