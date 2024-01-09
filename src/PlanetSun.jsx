import React, { useRef } from "react";
import { Mesh, SphereGeometry, MeshBasicMaterial, Color, AdditiveBlending } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const PlanetSun = () => {
    const sunRef = useRef();
    const sunModelPath = null; // No specific 3D model path for a simple sphere
    const sunScale = 2; // Adjust the scale as needed for the Sun
    const sunPosition = [0, 0, 0]; // Set the position to [0, 0, 0] for the center

    // Load a simple sphere geometry as a placeholder for the Sun
    const sunModel = new Mesh(
        new SphereGeometry(1, 32, 32),
        new MeshBasicMaterial({ color: 0xffff00 }) // Yellow color as a placeholder
    );

    // Create a glow effect by adding a larger, semi-transparent sphere around the Sun
    const sunGlow = new Mesh(
        new SphereGeometry(1.2, 32, 32), // Slightly larger than the Sun
        new MeshBasicMaterial({
            color: new Color(0xffff00), // Same color as the Sun
            transparent: true,
            blending: AdditiveBlending,
            opacity: 0.6 // Adjust opacity for desired glow effect
        })
    );

    // Rotate the Sun for a dynamic effect
    useFrame(() => {
        sunRef.current.rotation.y += 0.01;
    });

    return (
        <group ref={sunRef} position={sunPosition}>
            {sunModelPath ? (
                // If a 3D model path is provided, load it using GLTFLoader
                <primitive object={useLoader(GLTFLoader, sunModelPath).scene} scale={sunScale} />
            ) : (
                // Otherwise, use the simple sphere as a placeholder
                <>
                    <primitive object={sunModel} scale={sunScale} />
                    <primitive object={sunGlow} scale={sunScale} />
                </>
            )}
        </group>
    );
};

export default PlanetSun;