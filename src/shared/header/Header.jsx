import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
const Header = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [dropdownId, setDropdownId] = useState("");
  const handleuserDropdown = () => {
    setUserDropdown(!userDropdown);
  };
  const handleMobileDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };
  const toggleDropdownById = (id) => {
    if (dropdownId === "") {
      setDropdownId(id);
    } else {
      setDropdownId("");
    }
  };
  return (
    <div className="w-full bg-white shadow fixed top-0 mx-auto">
      <div
        className={`flex justify-between items-center p-2 container mx-auto md:min-h-[74px] ${
          mobileDropdown ? "shadow" : ""
        }`}
      >
        <div>
          <Link to={"/"}>
            <img
              src="src\assets\jobstack-fav.png"
              alt="main-logo"
              className="md:hidden"
            />
            <img
              src="src\assets\full-logo.png"
              alt="full-main-logo"
              className="max-md:hidden"
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-3 ">
          <ul className="flex items-center gap-x-2 max-[992px]:hidden">
            <li className="relative">
              <div className={`flex items-center gap-x-1 ${dropdownId === "sub-1" ? "text-green-500" : ""}`} onClick={()=>toggleDropdownById('sub-1')}>
                <span>Dropdown 1</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <ul className={`absolute top-[60px] shadow bg-white rounded flex-col items-center min-w-[180px] ${dropdownId === 'sub-1' ? 'flex':'hidden'}`}>
                <li className="px-4 py-2 w-full border-b border-solid border-neutral-200">Sub-item 1</li>
                <li className="px-4 py-2 w-full border-b border-solid border-neutral-200">Sub-item 2</li>
                <li className="px-4 py-2 w-full border-b border-solid border-neutral-200">Sub-item 3</li>
              </ul>
            </li>
          </ul>
          <div className="relative outline outline-[.2px] outline-neutral-200 py-1 px-3 rounded-3xl ">
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none text-sm w-36"
            />
            <div className="absolute top-1 right-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="relative">
            <div onClick={handleuserDropdown}>
              <i className="fa-solid fa-circle-user text-lg"></i>
            </div>
            {userDropdown ? (
              <div className="flex flex-col items-start absolute top-full right-1/2 shadow-md bg-white rounded-md overflow-hidden w-44">
                <div className="flex items-center gap-x-3 py-2 px-4 text-sm">
                  <i class="fa-regular fa-user"></i>
                  <span>Profile</span>
                </div>
                <div className="flex items-center gap-x-3 py-2 px-4 text-sm">
                  <i class="fa-solid fa-gears"></i>
                  <span>Settings</span>
                </div>
                <div className="h-[0.5px] w-full bg-neutral-200"></div>
                <div className="flex items-center gap-x-3 py-2 px-4 text-sm">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Logout</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div onClick={handleMobileDropdown} className="mobile-dropdown">
            <i className="fa-solid fa-bars text-lg"></i>
          </div>
        </div>
      </div>

      <ul
        className={`flex flex-col w-full overflow-hidden max-h-0 transition-all duration-200 ${
          mobileDropdown ? "max-h-[20rem]" : ""
        }`}
      >
        <li
          className={`flex justify-between items-center py-3 px-5 ${
            dropdownId === "sub-1" ? "text-green-500" : ""
          }`}
          onClick={() => toggleDropdownById("sub-1")}
        >
          <span>Dropdown 1</span>
          <div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
        <ul
          className={`max-h-0 ${
            dropdownId === "sub-1" ? "max-h-[10rem]" : ""
          } flex flex-col w-full overflow-hidden transition-all duration-200 ps-5`}
        >
          <li className="py-2 px-3">Sub Dropdown 1</li>
          <li className="py-2 px-3">Sub Dropdown 2</li>
          <li className="py-2 px-3">Sub Dropdown 3</li>
        </ul>
        <li
          className={`flex justify-between items-center py-3 px-5 ${
            dropdownId === "sub-2" ? "text-green-500" : ""
          }`}
          onClick={() => toggleDropdownById("sub-2")}
        >
          <span>Dropdown 2</span>
          <div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
        <ul
          className={`max-h-0 ${
            dropdownId === "sub-2" ? "max-h-[10rem]" : ""
          } flex flex-col w-full overflow-hidden transition-all duration-200 ps-5`}
        >
          <li className="py-2 px-3">Sub Dropdown 1</li>
          <li className="py-2 px-3">Sub Dropdown 2</li>
          <li className="py-2 px-3">Sub Dropdown 3</li>
        </ul>
        <li
          className={`flex justify-between items-center py-3 px-5 ${
            dropdownId === "sub-3" ? "text-green-500" : ""
          }`}
          onClick={() => toggleDropdownById("sub-3")}
        >
          <span>Dropdown 3</span>
          <div>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>
        <ul
          className={`max-h-0 ${
            dropdownId === "sub-3" ? "max-h-[10rem]" : ""
          } flex flex-col w-full overflow-hidden transition-all duration-200 ps-5`}
        >
          <li className="py-2 px-3">Sub Dropdown 1</li>
          <li className="py-2 px-3">Sub Dropdown 2</li>
          <li className="py-2 px-3">Sub Dropdown 3</li>
        </ul>
      </ul>
    </div>
  );
};

export default Header;
