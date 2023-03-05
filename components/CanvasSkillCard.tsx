import React, { FC, Suspense, useRef } from "react";

import { Environment, OrbitControls, Stage, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import TurbineModel from "./TurbineModel";

const CanvasSkillCard: FC = () => {
  return (
    <div className="w-[200px] webkit-overflow-hidden relative overflow-hidden  rounded-xl h-[200px]">
      <Canvas
        resize={{ scroll: false }}
        className="w-full h-full rounded-xl"
        camera={{ fov: 50 }}
        shadows
        dpr={[1, 2]}
      >
        <Sky
          distance={450000}
          sunPosition={[5, 1, 8]}
          inclination={0}
          azimuth={0.25}
        />
        <Stage environment="city" intensity={1} preset="rembrandt">
          <TurbineModel />
        </Stage>
        <OrbitControls autoRotate />
      </Canvas>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        className="absolute pl-3 pb-4 flex flex-col justify-end  h-[80px] w-full bottom-0 left-0"
      >
        <h4 className="text-white font-medium text-sm w-[80%] ">
          3D Interactive Web Experiences
        </h4>
      </div>
    </div>
  );
};

export default CanvasSkillCard;
