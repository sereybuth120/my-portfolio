import React, { useState, useEffect } from "react";

import DesktopNav from "./_DesktopNav";
import MobileNavView from "./_MobileView";

const TopNav = () => {
  const [state, setState] = useState({ mobileView: false });
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return <>{state.mobileView ? <MobileNavView /> : <DesktopNav />}</>;
};

export default TopNav;
