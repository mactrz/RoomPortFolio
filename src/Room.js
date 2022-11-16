import React, { Suspense, useEffect, useRef } from 'react';
import {Model}  from './RoomFinalTexture';
import { Box } from '@react-three/drei/core';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';

export default function Room( {scrollDistanceFromTop} ) {
    const ref = useRef();

    const getZoomValue = (scrollDistance) => {
        return scrollDistance < 1.63 ? scrollDistance : 1.63
    }

    const getZoomStartingValue = () => {
        return window.innerWidth < 680 ? 31 : 62; 
    }

    useEffect(() => {
        ref.current.zoom = getZoomStartingValue() + getZoomValue(scrollDistanceFromTop) * 50;
    }, [scrollDistanceFromTop])

    return(
        <>
            <OrbitControls enabled={false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[4, 10, 6]} shadow-mapSize-width={2048} shadow-normalBias={0.05}
            shadow-mapSize-height={2048} intensity={2} shadow-camera-left={-30} shadow-camera-right={30} shadow-camera-top={30} shadow-camera-bottom={-30}
            shadow-camera-near={0.1} shadow-camera-far={60} castShadow/>
            <OrthographicCamera ref={ref} far={70} near={0.1} makeDefault position={[15, 15, 15]}/>
            <Box receiveShadow castShadow position={[4, -2, 4]} scale={[100, 0.2, 100]}>
            <meshPhysicalMaterial color="hotpink"/>
            </Box>
            <Suspense fallback={null}>
            <Model scrollDistanceFromTop={scrollDistanceFromTop}/>
            </Suspense>
        </>
    )
}