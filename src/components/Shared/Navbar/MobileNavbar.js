import { useRouter } from "next/router";
import { useState } from "react";
import SideBarMenu from "./SidebarMenu/SidebarMenu";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import Image from "next/image";
import brandIcon from "../../../../public/images/brandIcon.svg";
import styles from "@/styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";

function MobileNavbar() {
  const router = useRouter();
  const [showSideBar, setShowBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pcbuild = useSelector((state) => state.pcbuild);

  return (
    <>
      {/* Header section */}
      <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:hidden block py-4 transition-all">
        <div className="flex items-center w-full justify-between  mb-4">
          <div className="flex items-center space-x-4">
            <div>
              {/* Open the sidebar when clicked */}
              <FaBars className="w-8 h-8" onClick={() => setShowBar(true)} />
            </div>
            <Link href={"/"}>
              <div className="flex items-center font-bold">
                <span>
                  <Image width={50} height={50} src={brandIcon} alt="" />
                </span>
                <span className={styles.brandName}> PC Wizardry </span>
              </div>
            </Link>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/pc-builder")}
          >
            <FaComputer className="xl:w-10 w-10 h-10 linkGlobals" />
            <div className="absolute -top-2 -right-1 rounded-full text-white bg-orange-400 p-1 flex items-center justify-center text-md font-medium">
              {pcbuild?.qty}
            </div>
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="py-2 px-4 w-full border rounded border-orange-500 focus:outline-orange-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 ">
            <FaSearch />
          </div>
        </div>
      </header>

      {/* Sidebar section */}
      <div
        className={`z-40 fixed inset-y-0 left-0 overflow-hidden transition-all duration-300  shadow-2xl  ${showSideBar ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <SideBarMenu closeSideBar={() => setShowBar(false)} />
      </div>
    </>
  );
}

export default MobileNavbar;
