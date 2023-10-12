import Dropdown from "@/components/Shared/Navbar/Dropdown";
import { NavbarDropdown } from "@/components/Shared/Navbar/constants";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiFillCaretRight,
  AiFillCaretDown,
  AiFillHome,
  AiOutlineDesktop,
} from "react-icons/ai";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import onClickOutside from "react-onclickoutside";
import brandIcon from "../../../../../public/images/brandIcon.svg";
import styles from "@/styles/Navbar.module.css";
import { FaUserCircle } from "react-icons/fa";

function SideBarMenu({ closeSideBar }) {
  // State to manage dropdown visibility
  const [dropDown, setDropDown] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Function to close the sidebar when clicking outside
  SideBarMenu.handleClickOutside = closeSideBar;

  // Function to handle sidebar item click
  const sideBarClickHandler = (href) => {
    closeSideBar();
    router.push(href);
  };

  // Get the user image or use a default one
  const userImage = session?.user?.image || <FaUserCircle />;

  return (
    <div className="relative h-full w-full sideBarMenu bg-white px-8 py-6 font-medium md:hidden">
      <Link href={"/"}>
        <div className="flex items-center font-bold">
          <span>
            <Image width={50} height={50} src={brandIcon} alt="" />
          </span>
          <span className={styles.brandName}> PC Wizardry </span>
        </div>
      </Link>
      <div className="h-0.5 my-4 w-full bg-gray-100"></div>
      <div className="my-8">
        {status === "loading" ? (
          <Skeleton circle={true} width={50} height={50} />
        ) : session?.user ? (
          <span
            className="relative"
            onClick={() => setDropDown((value) => !value)}
          >
            <span className="flex items-center cursor-pointer">
              <Image
                src={userImage}
                loading="lazy"
                alt=""
                width="24"
                height="24"
                className="object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
              />
              <AiFillCaretDown className="lg:w-6 w-4" />
            </span>
            {dropDown && (
              <div className="absolute top-14 right-1">
                <Dropdown
                  DropdownItem={NavbarDropdown}
                  hideDropDown={() => setDropDown(false)}
                />
              </div>
            )}
          </span>
        ) : (
          <Link href="/login">
            <button className="linkGlobals text500Globals">
              Login
            </button>
          </Link>
        )}
      </div>
      <div className="gap-4 flex flex-col">
        <div>
          <span
            onClick={() => sideBarClickHandler("/")}
            className="linkGlobals text500Globals inline-flex "
          >
            <AiFillHome className="w-5 mr-6" /> Home
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/pc-builder")}
            className="linkGlobals text500Globals inline-flex"
          >
            <AiOutlineDesktop className="w-5 mr-6" /> PC Builder
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/")}
            className="linkGlobals text500Globals inline-flex relative"
          >
            <AiFillCaretRight className="w-5 mr-6" /> Categories
          </span>
        </div>
        {session && (
          <div>
            <span
              onClick={() => {
                signOut();
              }}
              className="linkGlobals text500Globals inline-flex"
            >
              <FaArrowCircleLeft className="w-5 mr-6" /> Logout
            </span>
          </div>
        )}
      </div>
      <div className="absolute top-2 right-2">
        <FaXmark className="w-7" onClick={closeSideBar} />
      </div>
    </div>
  );
}

// Configuration to handle clicks outside the component
const clickOutsideConfig = {
  handleClickOutside: () => SideBarMenu.handleClickOutside,
};

// Export the component and apply the click outside configuration
export default onClickOutside(SideBarMenu, clickOutsideConfig);
