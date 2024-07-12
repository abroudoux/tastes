import { useRef, useState } from "react";
import { TextureLoader, Mesh as ThreeMesh } from "three";
import { motion } from "framer-motion-3d";
import { useLoader } from "@react-three/fiber";

interface ItemInterface {
  position: [number, number, number];
  size: [number, number, number];
  album: { cover: string; [key: string]: any };
  handleClick: (albumData: any) => void;
  handleHover: (albumData: any) => void;
  index: number;
  isACoverClicked: boolean;
}

const Item = (props: ItemInterface) => {
  const meshRef = useRef<ThreeMesh>(null!);
  const [isClicked, setIsClicked] = useState(false);
  const texture = useLoader(TextureLoader, props.album.cover);
  const albumData = {
    ...props.album,
    index: props.index,
    position: props.position
  };

  return (
    <motion.mesh
      ref={meshRef as React.RefObject<ThreeMesh>}
      position={props.position}
      whileHover={{
        x: isClicked ? props.position[0] : props.position[0] + 0.2,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      animate={{
        scale: isClicked ? 2 : 1,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      }}
      onPointerEnter={(e: any) => {
        e.stopPropagation();
        if (!isClicked) {
          document.body.style.cursor = "pointer";
        }
        props.handleHover(albumData);
      }}
      onPointerOut={(e: any) => {
        e.stopPropagation();
        document.body.style.cursor = "auto";
        props.handleHover(null);
      }}
      onPointerDown={(e: any) => {
        e.stopPropagation();
        setIsClicked(true);
        props.handleClick(albumData);
      }}>
      <planeGeometry args={props.size} />
      <motion.meshStandardMaterial
        map={texture}
        transparent
        animate={{
          opacity: props.isACoverClicked && !isClicked ? 0 : isClicked ? 1 : 0.95,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
      />
    </motion.mesh>
  );
};

export default Item;
