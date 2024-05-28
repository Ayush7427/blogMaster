import React from "react";
import {  Oval  } from "react-loader-spinner";

function Loader() {
    return (
        <section className="h-screen w-screen flex justify-center items-center bg-white ">
          <Oval width="100" color="#FF3D00" />
        </section>
      );
} 

export default Loader