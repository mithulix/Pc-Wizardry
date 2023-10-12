import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import onClickOutside from "react-onclickoutside";

function Dropdown({ hideDropDown, DropdownItem }) {
  const router = useRouter();
  Dropdown.handleClickOutside = hideDropDown;

  return (
    <div className="font-medium w-36 bg-white text-sm rounded shadow overflow-hidden">
      {DropdownItem.map((item) => {
        // Check if the dropdown item is "Logout"
        if (item.name === "Logout") {
          return (
            <div
              key={item.id}
              className="w-full cursor-pointer hover:bg-orange-400 hover:text-white py-2 px-3"
              onClick={() => {
                // Sign the user out when this item is clicked
                signOut();
              }}
            >
              Logout
            </div>
          );
        }

        // For other items, navigate to the specified path on click
        return (
          <div
            key={item.id}
            className="w-full cursor-pointer hover:bg-orange-400 hover:text-white py-2 px-3"
            onClick={() => router.push(`/${item.path}`)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
