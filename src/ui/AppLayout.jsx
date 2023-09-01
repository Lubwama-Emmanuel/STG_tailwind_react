import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import { useState } from "react";
import NewsLetter from "./NewsLetter";

export default function AppLayout() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Header clicked={clicked} setClicked={setClicked} />
      {clicked && <MobileMenu />}

      <main>
        <Outlet />
      </main>

      <NewsLetter />
    </div>
  );
}
