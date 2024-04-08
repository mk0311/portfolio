import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import { pc } from "../../assets";

const Computers = ({ isMobile }) => {
  return (
    <img src={pc} alt="Computer" style={{ width: isMobile ? '100%' : '50%' }} />
  );
};

export default Computers;
