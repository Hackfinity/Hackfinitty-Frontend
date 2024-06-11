import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const PlanetAnimation = () => {
  const containerRef = useRef();

  useEffect(() => {
    let scene, camera, renderer;
    let planet;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();

      // Camera setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 10);

      // Renderer setup
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Create planet geometry
      const planetGeometry = new THREE.SphereGeometry(2, 64, 64);
      
      // Load planet texture
      const textureLoader = new THREE.TextureLoader();
      const planetTexture = textureLoader.load("path_to_planet_texture");

      // Apply planet texture
      const planetMaterial = new THREE.MeshPhongMaterial({ map: planetTexture });

      // Create the planet mesh
      planet = new THREE.Mesh(planetGeometry, planetMaterial);
      scene.add(planet);

      // Start animation loop
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the planet
      planet.rotation.y += 0.005;

      // Render the scene
      renderer.render(scene, camera);
    };

    // Initialize the scene
    init();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}>
      <div className="content-overlay">
        <h1>Internet Computer</h1>
        <p>
          Internet Computer enables decentralized computing, allowing developers to build and deploy applications directly on the internet.
        </p>
        <p>
          Features include smart contracts, scalable and efficient processing, internet identity, secure governance, and interoperability.
        </p>
        <p>
          Explore real-world use cases, developer tools, and the growing ecosystem, shaping the future of decentralized internet.
        </p>
      </div>
    </div>
  );
};

export default PlanetAnimation;
