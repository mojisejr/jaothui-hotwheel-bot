import { client } from "..";
import dayjs from "dayjs";

export const resetPointByRound = async (
  gameId: string,
  contractAddress: string
) => {
  const query = `*[_type == "game" && _id == "${gameId}"]{
      _id,
      title,
      "type": gameType,
      "image": image.asset->url,
      start,
      end,
      description,
      isActive
    }[0]`;

  const game = await client.fetch<any>(query);

  const canReset = dayjs()
    .tz("Asia/Bangkok")
    .isAfter(dayjs(game.end).tz("Asia/Bangkok"));

  console.log(
    "@reset time ",
    dayjs().add(1, "day").set("hour", 0).set("minute", 0).format()
  );

  if (canReset) {
    const query = `*[_type == "nftInGame" && contractAddress == "${contractAddress}"]`;
    const nfts = await client.fetch<any>(query);

    for (let i = 0; i < nfts.length; i++) {
      await client.patch(nfts[i]._id).set({ point: 0 }).commit();
      // .then((result) => console.log("Done"));
    }

    await client
      .patch(gameId)
      .set({
        end: dayjs()
          .add(1, "day")
          .set("hour", 0)
          .set("minute", 0)
          .toISOString(),
      })
      .commit();

    console.log("@status: reset complete!");
  }

  console.log("@status: next ->");
};