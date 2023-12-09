import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';


const Backdrop = () => {

  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.20]}
    >
      <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.75}
          ambient={0.5}
          position={[5, 5, -10]}
      />

      <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.85}
          ambient={0.5}
          position={[-5, 5, -10]}
      />

      <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.35}
          ambient={0.5}
          position={[10, 5, -10]}
      />

    </AccumulativeShadows>
  )
}

export default Backdrop