import { motion } from "framer-motion";

import { AlbumDetailsInterface } from "@/utils/interfaces";

const AlbumDetails = (props: AlbumDetailsInterface) => {
  const artists = props.album.artists.map((artist) => artist.name).join(", ");

  return (
    <div className="absolute left-[53%] h-[550px] top-1/2 -translate-y-1/2 flex flex-col gap-10">
      <div className="flex flex-col">
        <motion.h3
          className="text-3xl text-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}>
          {props.album.name}
        </motion.h3>
        <motion.h3
          className="text-xl font-light text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeOut"
          }}>
          {artists} • {props.album.release_date} • {props.album.total_tracks} songs
        </motion.h3>
      </div>

      <ul className="flex flex-col h-full overflow-y-scroll scroll-ml-10">
        {props.album.tracks?.map((song, index) => (
          <li key={song.id}>
            {index + 1}. {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumDetails;
