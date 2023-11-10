// react imports
import React from "react";

// project imports
import { ListView } from "./components/ListView";
import Header from "../components/Header";
import Intro from "../components/Intro";

export default function Display() {

    return (
        <>
          <div className='lightBg'>
            <Intro />
          </div>
          <br />
          <br />
          <br />
          <ListView />
        </>
      )
}