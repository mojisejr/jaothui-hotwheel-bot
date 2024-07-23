import { CronJob } from "cron";
import { resetPointByRound } from "../sanity/services/reset.service";
import dayjs from "dayjs";

export const job = new CronJob(
  "*/1 * * * *",
  async () => {
    console.log("processing");
    console.log("@server time: ", dayjs().format());
    console.log("@local time: ", dayjs().tz("Asia/Bangkok").format());

    const contractAddress = "0x07B2bCc269B100b51AB8598d44AB568C7199C7BC";
    const gameId = "3fc396c8-b968-46fd-849d-d2243102fe00";
    await resetPointByRound(gameId, contractAddress);
  },
  null,
  false,
  "Asia/Bangkok"
);
