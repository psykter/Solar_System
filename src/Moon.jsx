import { useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Moon = () => {
    const moonRef = useRef()
    const [moonTexture] = useTexture(['/assets/moon_map.jpg'])

    // Calculate Moon's orbit around the Earth
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        moonRef.current.position.x = Math.sin(time * 0.4) * 2;
        moonRef.current.position.z = Math.cos(time * 0.4) * 2;
        moonRef.current.rotation.y += 0.0001;
    });

    return (
        <mesh castShadow ref={moonRef} position={[4, 0, 0]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshPhongMaterial map={moonTexture} />
        </mesh>
    )
}

export default Moon