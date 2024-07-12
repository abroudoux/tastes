import { OrthographicCamera } from "@react-three/drei";
import { Vector3, MathUtils, OrthographicCamera as ThreeOrthographicCamera } from "three";
import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";

import albums from "@/data/albums";

import { SceneInterface } from "@/utils/interfaces";

import Item from "@/components/Gallery/Item";

export default function Scene(props: SceneInterface) {
  const cameraRef = useRef<ThreeOrthographicCamera>(null);
  const { scrollY } = useScroll();
  const maxZ = (albums.length - 1) * -0.4 + 4;
  const zValue = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight],
    [4, maxZ]
  );
  const [cameraX, cameraY, cameraZ] = [3, 4, 4];

  useEffect(() => {
    return zValue.on("change", (latest) => {
      if (cameraRef.current && !props.albumData) {
        cameraRef.current.position.z = latest;
      }
    });
  }, [zValue, props.albumData]);

  useFrame(() => {
    if (props.albumData && cameraRef.current && props.albumData.customPosition) {
      cameraRef.current.position.lerp(
        new Vector3(1.5, 0.5, props.albumData.customPosition[2] + 2),
        0.1
      );
      cameraRef.current.rotation.x = MathUtils.lerp(cameraRef.current.rotation.x, 0, 0.06);
      cameraRef.current.rotation.y = MathUtils.lerp(cameraRef.current.rotation.y, 0, 0.06);
    }
  });

  useEffect(() => {
    if (!props.albumData && cameraRef.current) {
      cameraRef.current.position.x = cameraX;
      cameraRef.current.position.y = cameraY;
      cameraRef.current.position.z = cameraZ;
      cameraRef.current.rotation.x = Math.atan(-1 / Math.sqrt(2));
      cameraRef.current.rotation.y = Math.PI / 5;
    }
  }, [props.albumData, cameraX, cameraY, cameraZ]);

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        left={-1.5 * (window.innerWidth / window.innerHeight)}
        right={1.5 * (window.innerWidth / window.innerHeight)}
        top={1.5}
        bottom={-1.5}
        near={1}
        far={100}
        position={[cameraX, cameraY, cameraZ]}
        rotation-order="YXZ"
        rotation-y={Math.PI / 5}
        rotation-x={Math.atan(-1 / Math.sqrt(2))}
      />
      <ambientLight intensity={3} />
      <group>
        {albums.map((album, index) => {
          const position: [number, number, number] = [0.5, 0.5, index * -0.4];
          const size: [number, number, number] = [1, 1, 1];

          return (
            <Item
              isACoverClicked={!!props.albumData}
              isSelected={props.albumData?.id === album.id}
              position={position}
              size={size}
              key={album.id}
              album={{ ...album, customPosition: position }}
              index={index}
              handleClick={props.setAlbumData}
              handleHover={props.setHoveredAlbumData}
            />
          );
        })}
      </group>
    </>
  );
}
