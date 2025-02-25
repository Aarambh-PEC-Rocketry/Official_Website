import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

function Rocket(props) {
  const { nodes, materials } = useGLTF("../../public/rocket.glb");
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    //Intro Section

    tl.current.to(ref.current.position, {
      duration: 0.6,
      y: -1,
      z: 0,
    });

    tl.current.to(
      ref.current.rotation,
      {
        duration: 0.5,
        z: Math.PI / 2,
      },
      "<",
    );

    // Recovery Section

    tl.current.to(ref.current.position, {
      duration: 0.3,
      x: +3,
      y: -3,
      z: +2,
    });

    tl.current.to(
      ref.current.rotation,
      {
        duration: 0.1,
        z: 0,
      },
      "<",
    );

    //Avionics Section

    tl.current.to(ref.current.position, {
      duration: 0.5,
      x: -1,
      y: -2,
      z: +3,
    });

    //Structures Section

    tl.current.to(ref.current.position, {
      duration: 0.5,
      x: 2,
      y: 0,
      z: 0,
    });

    tl.current.to(
      ref.current.rotation,
      {
        y: 2 * Math.PI,
        duration: 0.5,
      },
      "<",
    );

    //Propulsion Section

    tl.current.to(ref.current.position, {
      y: 2.5,
      z: 1,
      x: -1,
      duration: 0.4,
    });

    tl.current.to(
      ref.current.rotation,
      {
        x: -Math.PI / 3.5,
        z: Math.PI / 20,
        duration: 0.3,
      },
      "<",
    );

    tl.current.to(ref.current.position, {
      y: 0,
      z: 0,
      duration: 0.5,
    });

    tl.current.to(
      ref.current.rotation,
      {
        x: 0,
        z: 0,
        duration: 0.5,
      },
      "<",
    );

    // Flying Animation

    tl.current.to(
      ref.current.position,
      {
        y: 0,
        x: 3,
        z: 1,
        duration: 1,
      },
      "<",
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group name="Sketchfab_Scene" position={[-0.25, -4, 0]} scale={0.412}>
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="Electron_Fairing_2"
            position={[0, 0, -16.323]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group name="Electron_Fairing_Left_0" position={[0, 0.007, 0]}>
              <mesh
                name="Object_6"
                geometry={nodes.Object_6.geometry}
                material={materials.Electron}
              />
              <mesh
                name="Object_7"
                geometry={nodes.Object_7.geometry}
                material={materials.Electron_Metal}
              />
            </group>
            <group name="Electron_Fairing_Right_1" position={[0, 0.007, 0]}>
              <mesh
                name="Object_9"
                geometry={nodes.Object_9.geometry}
                material={materials.Electron}
              />
              <mesh
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.Electron_Metal}
              />
            </group>
          </group>
          <group
            name="Electron_First_Stage_26"
            position={[0, 0, 0.032]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Object_12"
              geometry={nodes.Object_12.geometry}
              material={materials.Electron}
            />
            <group name="Electron_EngineMount001_5" scale={[0.5, 1, 0.5]}>
              <mesh
                name="Object_16"
                geometry={nodes.Object_16.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine001_4"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount003_7"
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_21"
                geometry={nodes.Object_21.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine003_6"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount004_9"
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_26"
                geometry={nodes.Object_26.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine004_8"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount005_11"
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_31"
                geometry={nodes.Object_31.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine005_10"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_33"
                  geometry={nodes.Object_33.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount006_13"
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_36"
                geometry={nodes.Object_36.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine006_12"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_39"
                  geometry={nodes.Object_39.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount007_15"
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_41"
                geometry={nodes.Object_41.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine007_14"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_43"
                  geometry={nodes.Object_43.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount002_17"
              rotation={[0, Math.PI / 4, 0]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_46"
                geometry={nodes.Object_46.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine002_16"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_49"
                  geometry={nodes.Object_49.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Electron_EngineMount_20"
              position={[0, 0.227, 0]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_51"
                geometry={nodes.Object_51.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine_18"
                position={[0, 0.129, 0]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_53"
                  geometry={nodes.Object_53.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials.Electron}
                />
              </group>
              <mesh
                name="Object_56"
                geometry={nodes.Object_56.geometry}
                material={materials.Electron_White}
                position={[0, 6.493, 0]}
                rotation={[0, -Math.PI / 4, 0]}
              />
            </group>
            <group
              name="Electron_EngineMount008_22"
              rotation={[0, -Math.PI / 4, 0]}
              scale={[0.5, 1, 0.5]}
            >
              <mesh
                name="Object_58"
                geometry={nodes.Object_58.geometry}
                material={materials.Electron}
              />
              <group
                name="Electron_Engine008_21"
                position={[0, 0.356, 0.787]}
                scale={[2, 1, 2]}
              >
                <mesh
                  name="Object_60"
                  geometry={nodes.Object_60.geometry}
                  material={materials.Electron_Nozzle}
                />
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials.Electron}
                />
              </group>
            </group>
            <group
              name="Runway_First_Stage_23"
              position={[-0.622, 6.086, 0.003]}
            >
              <mesh
                name="Object_63"
                geometry={nodes.Object_63.geometry}
                material={materials.Electron}
              />
              <mesh
                name="Object_64"
                geometry={nodes.Object_64.geometry}
                material={materials.Electron_Metal}
              />
            </group>
            <mesh
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials.Electron_Metal}
              position={[0, 0.465, 0]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
            />
            <mesh
              name="Object_66"
              geometry={nodes.Object_66.geometry}
              material={materials.Electron_Metal}
              rotation={[0, 0.419, 0]}
            />
            <mesh
              name="Object_68"
              geometry={nodes.Object_68.geometry}
              material={materials.Electron_Metal}
              position={[0, 1.055, 0]}
              rotation={[0, -Math.PI / 4, 0]}
            />
          </group>
          <group
            name="Electron_Second_Stage_28"
            position={[0, 0, -14.305]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Object_70"
              geometry={nodes.Object_70.geometry}
              material={materials.Electron}
            />
            <mesh
              name="Object_71"
              geometry={nodes.Object_71.geometry}
              material={materials.Electron_Gray}
            />
            <group name="Electron_Engine_Vacuum_27" position={[0, 0.002, 0]}>
              <mesh
                name="Object_73"
                geometry={nodes.Object_73.geometry}
                material={materials.Electron_Nozzle}
              />
              <mesh
                name="Object_74"
                geometry={nodes.Object_74.geometry}
                material={materials.Electron}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Rocket;
useGLTF.preload("../../public/rocket.glb");
