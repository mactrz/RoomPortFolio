import React, { Suspense, useRef } from 'react';
import {Model}  from './RoomFinalTexture';
import { Box } from '@react-three/drei/core';
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei';

export default function Room( {scrollDistanceFromTop} ) {
    const ref = useRef();
    const { viewport } = useThree()
    useFrame(() => {
        ref.current.zoom = 60 + scrollDistanceFromTop * 20;
    })
    return(
        <>
            <OrbitControls enabled={false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[4, 10, 6]} shadow-mapSize-width={2048} shadow-normalBias={0.05}
            shadow-mapSize-height={2048} intensity={2} shadow-camera-left={-30} shadow-camera-right={30} shadow-camera-top={30} shadow-camera-bottom={-30}
            shadow-camera-near={0.1} shadow-camera-far={60} castShadow/>
            <OrthographicCamera ref={ref} zoom={70} makeDefault position={[10, 10, 10]}/>
            {/* <gridHelper args={[20, 20, `white`, `gray`]} /> */}
            <Box receiveShadow castShadow position={[4, -2, 4]} scale={[50, 0.2, 50]}>
            <meshPhysicalMaterial color="hotpink"/>
            </Box>
            <Suspense fallback={null}>
            <Model scale={viewport.width < 12 ? 0.4: 0.9} position={[0,0,0]} rotation={[0,1.5 * Math.PI,0]}/>
            </Suspense>
        </>
    )
}