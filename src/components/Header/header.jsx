import "./header.css";
import { Link } from "react-router-dom";
import img from "../../assets/Vector (15).png";
import img2 from "../../assets/Vector (16).png";
import img3 from "../../assets/Vector (17).png";
import { useState } from "react";

const Header = ({ count, count2 }) => {
  return (
    <>
      <header className="bg-[#EAEAEA] py-5 px-[180px] pb-[40px]">
        <div className="container flex justify-between ">
          <div className="flex justify-between w-[35%]">
            <Link to={"/"}>
              <h1 className="text-2xl">
                <strong> QPICK </strong>
              </h1>
            </Link>
            <div className="flex gap-5 py-1">
              <img width={15} height={21} src={img} alt="img" />
              <select className="bg-[#EAEAEA]" name="select">
                <option value="select">Every things </option>-
                <option value="select">Men's clothing</option>
                <option value="select">Women's clothing</option>
                <option value="select">Jewelery</option>
                <option value="select">Elecronics</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between w-[7%] py-1 ">
            <Link to={"/liked"}>
              <div className="flex">
                <img width={20} height={19} src={img2} alt="heart" />
                <span className="rounded-[50%] bg-orange-400  max-h-[18px] px-[6px]">
                  <p className="text-white text-[12px]">{count}</p>
                </span>
              </div>
            </Link>
            <Link to={"/korzinka"}>
              <div className="flex">
                <img width={19} height={19} src={img3} alt="korzinka" />
                <span className="rounded-[50%] bg-orange-400  max-h-[18px] px-[6px]">
                  <p className="text-white text-[12px]">{count2}</p>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
