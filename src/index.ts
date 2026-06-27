console.log('ok i have no idea what im doing');

import { db } from "./db";
import { tracks } from "./schema";

await db.insert(tracks).values({
    title: "Black Car",
    duration: 251
})

const allTracks = await db.select().from(tracks);
console.log(allTracks)

// const a = 'lol';

// interface Track {
//     title: string;
//     duration: number;
//     artist: string;
// }

// const song: Track = {
//     title: 'Hand On Me',
//     duration: 231,
//     artist: 'Nourished by Time',
// };

// console.log(song);
