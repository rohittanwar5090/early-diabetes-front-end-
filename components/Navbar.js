import Link from "next/link";
import React from "react";

function NavBar() {


  const navigations = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "SignUp",
      link: "/signup",
      margin: true,
    },
  ];
  return (
    <div
      className="sticky z-10 top-0 w-full bg-blue-500 text-white flex items-center justify-between 
    h-[10vh] px-20"
    >
      <h2 className="flex-[0.5] text-3xl cursor-pointer">
        <Link href="/">
          <a>
            Home
          </a>
        </Link>
      </h2>

      <div className="flex-[0.5] flex items-center justify-end gap-x-5">
        <h2 className="text-3xl text-white cursor-pointer">
          <Link href="/models">
            <a>
              Models
            </a>
          </Link>
        </h2>
        <h2 className="text-3xl text-white cursor-pointer">
          <Link href="/predictor">
            <a>
              Predictor
            </a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
export default NavBar;
