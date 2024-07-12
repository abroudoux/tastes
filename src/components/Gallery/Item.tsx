import { useRef, useEffect } from "react";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { useLoader } from "@react-three/fiber";

import { ItemInterface } from "@/utils/interfaces";

const Item = (props: ItemInterface) => {
  const meshRef = useRef(null);
  const texture = useLoader(TextureLoader, props.album.images[0].url);
  const album = {
    ...props.album,
    index: props.index,
    customPosition: props.position
  };

  return (
    <motion.mesh
      ref={meshRef}
      position={props.position}
      whileHover={{
        x: props.isSelected ? props.position[0] : props.position[0] + 0.2,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      animate={{
        scale: props.isSelected ? 2 : 1,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      }}
      onPointerEnter={(e: any) => {
        e.stopPropagation();
        if (!props.isSelected) {
          document.body.style.cursor = "pointer";
        }
        props.handleHover(album);
      }}
      onPointerOut={(e: any) => {
        e.stopPropagation();
        document.body.style.cursor = "auto";
        props.handleHover(album);
      }}
      onPointerDown={(e: any) => {
        e.stopPropagation();
        props.handleClick(album);
      }}>
      <planeGeometry args={props.size} />
      <motion.meshStandardMaterial
        map={texture}
        transparent
        animate={{
          opacity: props.isACoverClicked && !props.isSelected ? 0 : props.isSelected ? 1 : 0.95,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
      />
    </motion.mesh>
  );
};

export default Item;
