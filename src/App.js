import React, { useState } from 'react';
import * as THREE from "three";
import Content from './Content';
import { Canvas } from '@react-three/fiber';
import Room from './Room'

function App() {
  const [scrollDistanceFromTop, changeScrollDistanceFromTop] = useState(0);

  return (
    <>
      <Canvas
      className='room'
      style={{position: 'fixed'}}
      shadows
      flat
      gl={{ alpha: false, physicallyCorrectLights: true,
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.CineonToneMapping,
        toneMappingExposure: 1.75,
        logarithmicDepthBuffer: true,
        shadowMap: {enabled: true, type: THREE.PCFSoftShadowMap}}}>
          <Room scrollDistanceFromTop={scrollDistanceFromTop}/>
      </Canvas>
      <Content changeScrollDistanceFromTop={changeScrollDistanceFromTop}/>
    </>
  );
}

export default App;
