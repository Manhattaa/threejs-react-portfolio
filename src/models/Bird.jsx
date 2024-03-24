import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();

  // loading birb animation
  const { scene, animations } = useGLTF(birdScene);

  // access to animation
  const { actions } = useAnimations(animations, birdRef);

  // plays the take1 animation in sketchfab - link above
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // update the movement based on a basic sine wave, math is fun right????
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // check if the birb reaches a point based on the cam pos
    if (birdRef.current.position.x > camera.position.x + 10) {
      // change direction to backwards
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // resets the movement and defaults to forward
      birdRef.current.rotation.y = 0;
    }

    // updates the x and z pos based on where it's heading
    if (birdRef.current.rotation.y === 0) {
      // fly forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // fly backwards
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    // display 3D element
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}
