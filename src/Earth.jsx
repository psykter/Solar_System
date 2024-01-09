import { useTexture } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import Moon from './Moon'

const Earth = ({ displacementScale }) => {
    const earthRef = useRef()

    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
        useTexture([
            '/assets/earth_day.jpg',
            '/assets/earth_normal.jpg',
            '/assets/earth_specular.jpg',
            '/assets/earth_displacement.jpg',
        ])

    // Calculate Earth's orbit around the Sun
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        earthRef.current.position.x = Math.sin(time) * 18;
        earthRef.current.position.z = Math.cos(time) * 18;
        earthRef.current.rotation.y += 0.002;
    });

    return (
        <group ref={earthRef}>
            <mesh receiveShadow>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial
                    map={earthTexture}
                    normalMap={earthNormalMap}
                    specularMap={earthSpecularMap}
                    shininess={10}
                    displacementMap={earthDisplacementMap}
                    displacementScale={displacementScale}
                />
            </mesh>
            <Moon />
        </group>
    )
}

export default Earth