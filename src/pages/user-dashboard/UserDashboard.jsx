import React, { useEffect, useRef, useState } from "react";
import "./userdashboard.css";
import { Link, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import useOutsideClick from "../../hooks/useOutsideClick";
const UserDashboard = () => {
  const width = useDeviceWidth();
  const [isDesktop, setIsDesktop] = useState(true);
  const [isSidebar, setIsSidebar] = useState(true);
  const [dropdownMenu, setDropdownMenu] = useState("");
  const [nestedDropdownMenu, setNestedDropdownMenu] = useState("");
  const [activeItem, setActiveItem] = useState("profile");
  const sidebarRef = useRef()
  const outsideSidebar = useOutsideClick(sidebarRef);
  useEffect(() => {
    if (width > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    if(!isSidebar){
      setDropdownMenu(false)
      setNestedDropdownMenu(false)
    }
    if(!isDesktop && isSidebar && outsideSidebar){
      setIsSidebar(false)
    }
  }, [width,isSidebar,outsideSidebar]);
  const handleSidebarToggle = () =>{
    setIsSidebar((state)=>!state)
  }
  const onNestedItemClick = (key) => {
    if (key === activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(key);
    }
  };
  const handleNestedMenuToggle = (key) => {
    if (key === nestedDropdownMenu) {
      setNestedDropdownMenu("");
    } else {
      setNestedDropdownMenu(key);
    }
  };
  const handleDropdownToggle = (key) => {
    if(!isSidebar) setIsSidebar(true);
    if (key === dropdownMenu) {
      setDropdownMenu("");
    } else {
      setDropdownMenu(key);
    }
  };
  return (
    <div className="w-full">
      <div className="flex" ref={sidebarRef}>
        <aside
          className={`mobile-sidebar shadow bg-white  h-screen z-10 max-w-0 overflow-hidden transition-all duration-300 ${
            !isDesktop && isSidebar? "fixed top-0 bottom-0 left-0 !max-w-[200px]" : isDesktop && isSidebar ? '!max-w-[320px]': isDesktop && !isSidebar ? '!max-w-[60px]':''
          }`}
        >
          <div className="flex flex-col">
            <div className={`flex justify-between ${isDesktop && !isSidebar ? '!justify-center':''} items-center p-2`}>
              <Link to={"/"}>
                <img
                  src="/src/assets/VB-abstract.svg"
                  alt="venture-bridge"
                  className="w-[32px]"
                />
              </Link>
              <div className={`text-base cursor-pointer ${isDesktop && !isSidebar ? 'hidden':''}`} onClick={handleSidebarToggle}>
                <RxHamburgerMenu />
              </div>
            </div>
            <ul>
              <li
                className="px-3"
                onClick={() => handleDropdownToggle("dashboard")}
              >
                <div className="flex justify-between items-center bg-slate-100 p-2 rounded">
                  <div className="flex items-center gap-2 text-xs">
                    <CiMail />
                    <span className={` font-medium ${!isSidebar ? 'hidden':''}`}>Dashboard</span>
                  </div>
                  <div
                    className={`${
                      dropdownMenu === "dashboard" ? "rotate-90" : ""
                    } transition-all duration-200 ${!isSidebar ? 'hidden':''}`}
                  >
                    <GoChevronRight />
                  </div>
                </div>
              </li>
              <ul
                className={`max-h-0 pl-2 overflow-hidden transition-all duration-200 ${
                  dropdownMenu === "dashboard" ? "max-h-[50rem]" : ""
                }`}
              >
                <Link>
                  <li
                    className="px-3 pt-1"
                    onClick={() => onNestedItemClick("profile")}
                  >
                    <div
                      className={`flex items-center gap-2 text-xs ${
                        activeItem === "profile" ? "nested-item" : ""
                      } p-2 rounded`}
                    >
                      <FaRegCircle />
                      <span>Profile</span>
                    </div>
                  </li>
                </Link>
                <li
                  className="px-3 pt-1"
                  onClick={() => handleNestedMenuToggle("account-setting")}
                >
                  <div
                    className={`flex items-center gap-2 text-xs ${
                      activeItem === "account-setting" ? "bg-slate-100" : ""
                    } p-2 rounded`}
                  >
                    <FaRegCircle />
                    <span>Account Settings</span>
                  </div>
                </li>
                <ul
                  className={`max-h-0 pl-4 overflow-hidden transition-all duration-300 ${
                    nestedDropdownMenu === "account-setting"
                      ? "max-h-[50rem]"
                      : ""
                  }`}
                >
                  <Link to={"/user-dashboard/user-profile"}>
                    <li
                      className="px-3 pt-1"
                      onClick={() => onNestedItemClick("profile-setting")}
                    >
                      <div
                        className={`flex items-center gap-2 text-xs ${
                          activeItem === "profile-setting" ? "nested-item" : ""
                        } p-2 rounded`}
                      >
                        <FaRegCircle />
                        <span>Profile Settings</span>
                      </div>
                    </li>
                  </Link>
                  <Link>
                    <li
                      className="px-3 pt-1"
                      onClick={() => onNestedItemClick("security")}
                    >
                      <div
                        className={`flex items-center gap-2 text-xs ${
                          activeItem === "security" ? "nested-item" : ""
                        } p-2 rounded`}
                      >
                        <FaRegCircle />
                        <span>Security</span>
                      </div>
                    </li>
                  </Link>
                  <Link>
                    <li
                      className="px-3 pt-1"
                      onClick={() => onNestedItemClick("billing-plans")}
                    >
                      <div
                        className={`flex items-center gap-2 text-xs ${
                          activeItem === "billing-plans" ? "nested-item" : ""
                        } p-2 rounded`}
                      >
                        <FaRegCircle />
                        <span>Billing Plans</span>
                      </div>
                    </li>
                  </Link>
                </ul>
              </ul>
            </ul>
          </div>
        </aside>
        <div
          className={` bg-[#f8f7fa] p-4 ${
            !isDesktop && isSidebar ? "w-full blur-sm" : isDesktop && !isSidebar ? 'w-[calc(100%-60px)]':isDesktop && isSidebar ? "w-[calc(100%-200px)]":''
          }`}
        >
          {/* header */}
          <div className="flex items-center gap-2 mt-2">
            <div className={`text-sm cursor-pointer ${isDesktop && isSidebar ? 'hidden':''}`} onClick={handleSidebarToggle}>
              <RxHamburgerMenu />
            </div>
            <nav className="flex justify-between items-center bg-white shadow rounded-md w-full p-2">
              <div className="flex items-center">
                <div className="text-slate-400">
                  <CiSearch />
                </div>
                <input className="text-slate-400 border-none outline-none text-xs" type="text" placeholder="Search Here" />
              </div>
              <div className="text-slate-400">
                <FaUserCircle />
              </div>
            </nav>
          </div>
          {/* body content */}
          <div className="mt-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
