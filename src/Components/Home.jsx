import React from "react";
import MainSec from "./MainSec";
import ListSec from "./ListSec";
import HowItWork from "./HowItWork";
import Testimonials from "./Testimonials";
function Home() {
  return (
    <main>
      <MainSec />
      <ListSec />
      <HowItWork />
      <Testimonials />
    </main>
  );
}

export default Home;
