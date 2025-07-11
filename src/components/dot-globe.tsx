//@ts-nocheck

"use client";
import ReactDotGlobe from "react-dot-globe";

const DotGlobe = () => {
  const markers = [
    {
      name: "Istanbul",
      coordinates: [0.39732215474344723, 32.63954793590649],
      color: "#FF0000",
      height: 1,
      diameter: 0.05,
    },
  ];

  // const curves = [
  //   {
  //     point1: [41.106942, 29.008056],
  //     point2: [40.751925, -73.981963],
  //     name: `From Istanbul to New York`,
  //     color: "#FF0000",
  //     segments: 30,
  //     animationSpeed: 1000,
  //     clearAnimation: "forward", // backward
  //   },
  // ];
  return (
    <ReactDotGlobe
      className="dotGlobe" // CSS class of the canvas
      backgroundColor="black" // Background color of the canvas
      cameraPosition={[-6, 10, -10]} // Refer to the docs: https://doc.babylonjs.com/typedoc/classes/babylon.camera#position
      cameraMinZoom={16}
      cameraMaxZoom={16}
      cameraZoomSpeed={100}
      globeRotationAxis={[0, 1, 0]}
      globeRotationSpeed={0} // Rotation speed. 0 for no rotation
      dotDiameter={0.05} // Diameter of the dots
      dotHeight={0.01} // Height of the dots
      dotSegments={8} // Segments of the dots
      dotColor="#ffffff" // Color of the dots
      markers={markers}
      //   curves={curves}
      onClick={(e, hit) => console.log(hit)} // Refer to the docs: https://doc.babylonjs.com/typedoc/classes/babylon.scene#onpointerup
    />
  );
};

export default DotGlobe;
