import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useRef } from "react";
import { GLTF } from "three-stdlib";
import { Mesh } from "three";

type GLTFResult = GLTF & {
  nodes: {
    tuebineB: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube009_1: THREE.Mesh;
    tuebineC: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    tuebineA: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Cylinder009: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

const TurbineModel: FC<JSX.IntrinsicElements["group"]> = (props) => {
  const { nodes, materials } = useGLTF("/models/turbine.glb") as GLTFResult;
  const turbineA = useRef<Mesh>(null!);
  const turbineB = useRef<Mesh>(null!);
  const turbineC = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (!turbineA.current || !turbineB.current || !turbineC.current) return;
    turbineA.current!.rotation.x = clock.getElapsedTime() * 2;
    turbineB.current!.rotation.x = clock.getElapsedTime() * 2;
    turbineC.current!.rotation.x = clock.getElapsedTime() * 2;
  });

  //Spin the turbines

  useThree(({ clock }) => {});

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        ref={turbineB}
        geometry={nodes.tuebineB.geometry}
        material={materials.Material}
        position={[1.63, 33.82, 8.06]}
        rotation={[-2.01, 0, Math.PI / 2]}
        scale={1.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 0.76, 8.09]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Material}
        position={[0, 0.76, 8.09]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.13, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Material}
        position={[0, -1.31, 8.09]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1.02, 1]}
      />
      <group position={[-62.94, -17.39, 7.82]} scale={[2.28, 1.62, 2.28]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        ref={turbineC}
        geometry={nodes.tuebineC.geometry}
        material={materials.Material}
        position={[-13.89, 36.03, -37.62]}
        rotation={[-2.01, 0, Math.PI / 2]}
        scale={1.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Material}
        position={[-15.52, 2.98, -37.59]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.13, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.Material}
        position={[-15.52, 0.9, -37.59]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1.02, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        ref={turbineA}
        geometry={nodes.tuebineA.geometry}
        material={materials.Material}
        position={[23.14, 36.03, -15.61]}
        rotation={[-2.01, 0, Math.PI / 2]}
        scale={1.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.Material}
        position={[21.51, 2.98, -15.59]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.13, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.Material}
        position={[21.51, -3.62, -15.59]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1.24, 1]}
      />
    </group>
  );
};

export default TurbineModel;
