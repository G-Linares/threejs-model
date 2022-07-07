/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: yassineCGI (https://sketchfab.com/yassineCGI)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/gameboy-advance-zelda-concept-2c77feea6c1a42d0b20adea68d09b756
title: Gameboy Advance - Zelda Concept
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Gb({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/gb.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.1}>
        <group rotation={[Math.PI / 2, -1.5, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={250}>
            <mesh
              geometry={nodes.Finam_Material_0.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gb.gltf");