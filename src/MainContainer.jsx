import { useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import { useRef } from 'react'
import Sun from './PlanetSun.jsx'
import Earth from './Earth.jsx'
import * as THREE from 'three'

const MainContainer = () => {
    const directionalLightRef = useRef()
    const directionalLightRefTwo = useRef()

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')

    return (
        <>
            <color attach='background' args={['black']} />
            <AnimatedStars />
            <directionalLight castShadow ref={directionalLightRef} position={[0, 0, 10]} intensity={1} />
            <Sun />
            <Earth displacementScale={0.05} />
        </>
    )
}

export default MainContainer