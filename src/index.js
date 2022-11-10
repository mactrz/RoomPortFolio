import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import App from './App';
import * as THREE from "three";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Canvas
    className='room'
    style={{position: 'fixed'}}
    shadows
    flat
    // linear
    gl={{ alpha: false, physicallyCorrectLights: true,
      outputEncoding: THREE.sRGBEncoding,
      toneMapping: THREE.CineonToneMapping,
      toneMappingExposure: 1.75,
      logarithmicDepthBuffer: true,
      shadowMap: {enabled: true, type: THREE.PCFSoftShadowMap}}}>
      <React.Suspense>
        <App />
      </React.Suspense>
    </Canvas>
    <div className='main'>
      SIEMANO JA JEST MACIEŁE
    </div>
  </>
);
