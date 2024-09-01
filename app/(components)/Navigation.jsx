"use client";
import Link from "next/link";
import { BsTicket } from "react-icons/bs";
import { GiSolarSystem } from "react-icons/gi";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4 ">
          <Link href={"/"}>
            <GiSolarSystem className="icon" />
          </Link>
          <Link href={"/TicketPages/new"}>
            <BsTicket className="icon" />
          </Link>
        </div>
        <div>
          <p className="text-default-text">
            <span className="text-black">dheeraj@gmail.com</span>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
