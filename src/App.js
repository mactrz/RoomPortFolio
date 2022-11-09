import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import {Model}  from './RoomFinalTexture';
import { Box, useHelper } from '@react-three/drei/core';
import { CameraHelper, DirectionalLightHelper } from 'three';

function App() {
  const ref = useRef();
  useHelper(ref, CameraHelper, 1)

  return (
    <React.Fragment>
      <OrbitControls enabled={false} />
      <ambientLight intensity={1}/>
      <directionalLight position={[4, 10, 6]} shadow-mapSize-width={2048} shadow-normalBias={0.05}
        shadow-mapSize-height={2048} intensity={2} shadow-camera-left={-30} shadow-camera-right={30} shadow-camera-top={30} shadow-camera-bottom={-30}
        shadow-camera-near={0.1} shadow-camera-far={60} castShadow/>
      <OrthographicCamera zoom={70} makeDefault position={[10, 10, 10]}/>
      {/* <gridHelper args={[20, 20, `white`, `gray`]} /> */}
      <Box receiveShadow castShadow position={[4, -2, 4]} scale={[20, 0.2, 20]}>
        <meshPhysicalMaterial color="green"/>
      </Box>
      <Suspense fallback={null}>
        <Model position={[0,0,0]} rotation={[0,4.7,0]}/>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
