import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Dropdown from "./Dropdown";
import brandIcon from "../../../../public/images/brandIcon.svg";
import { NavbarCategories, NavbarDropdown } from "@/components/Shared/Navbar/constants";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "@/styles/Navbar.module.css";

function Navbar() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);
  const [categoriesDropDown, setCategoriesDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: session, status } = useSession();
  const userImage = session?.user?.image || <FaUserCircle />;

  return (
    <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
      <div className="flex items-center w-full max-w-screen-xl xl:space-x-16 lg:space-x-12 space-x-7 mx-auto">
        <Link href="/">
          {/* Logo section */}
          <div className="flex items-center font-bold justify-center hover:bg-indigo-50 p-2 rounded">
            <span>
              <Image width={50} height={50} src={brandIcon} alt="" />
            </span>
            <span className={styles.brandName}>PC Wizardry</span>
          </div>
        </Link>
        {/* Search bar section */}
        <div className="flex-grow flex items-center">
          <div className="relative w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 w-full border rounded border-orange-500 focus:outline-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3">
              <FaSearch />
            </div>
          </div>
        </div>

        {/* User account and categories section */}
        <div className="flex items-center xl:space-x-8 lg:space-x-4 space-x-2 font-semibold text-xl">
          {status === "loading" ? (
            // Display loading animation while user data is loading
            <Skeleton circle={true} width={40} height={40} />
          ) : !session?.user ? (
            // Display "Login" if the user is not authenticated
            <Link href="/login">
              <button className="linkGlobals text500Globals">
                Login
              </button>
            </Link>
          ) : (
            // Display user profile information and a dropdown when user is authenticated
            <div
              className="relative"
              onClick={() => setDropDown((value) => !value)}
            >
              <span className="flex items-center cursor-pointer text-orange-400">
                <Image
                  src={userImage}
                  loading="lazy"
                  alt=""
                  width="24"
                  height="24"
                  className="object-contain w-10 h-10 rounded-full border-2 border-orange-400 hover:shadow-md"
                />
                <AiFillCaretDown className="lg:w-6 w-4" />
              </span>

              {dropDown && (
                <div className="absolute top-14 pt-2">
                  {/* Dropdown component for user actions */}
                  <Dropdown
                    DropdownItem={NavbarDropdown}
                    hideDropDown={() => setDropDown(false)}
                  />
                </div>
              )}
            </div>
          )}
          <span
            className="relative"
            onClick={() => setCategoriesDropDown((value) => !value)}
          >
            {/* Categories dropdown */}
            <span className="flex items-center linkGlobals text500Globals">
              Categories
              <AiFillCaretDown className="lg:w-6 w-4" />
            </span>
            {categoriesDropDown && (
              <div className="absolute top-14">
                {/* Dropdown component for categories */}
                <Dropdown
                  hideDropDown={() => setCategoriesDropDown(false)}
                  DropdownItem={NavbarCategories}
                />
              </div>
            )}
          </span>
          <button
            className={styles.gradientButton}
            onClick={() => router.push("/pc-builder")}
          >
            PC Builder
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
