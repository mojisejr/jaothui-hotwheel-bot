/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import qs from "qs";

export async function notify(message: string) {
  try {
    const token = process.env.line as string;
    const response = await axios.post(
      "https://notify-api.line.me/api/notify",
      /*การแจ้งเตือนสมัครสมาชิก✨️
  Wallet :

  ชื่อ : 

  สถานะ : ตลอดชีพ

  กรุณาตรวจสอบการโอนเงิน📍*/
      qs.stringify({
        message,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/x-www-form-urlencoded",
        },
      }
    );
    return true;
  } catch (error) {
    console.log("notification error: ", error);
  }
}
