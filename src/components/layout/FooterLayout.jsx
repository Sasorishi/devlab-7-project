import React from "react";

function Footer() {
  return (
    <footer className="shadow px-4 sm:px-6 pb-4 md:flex md:items-center md:justify-between ">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          IIM - @ GROUPE 7 | DEVLAB
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            À propos
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Politique de confidentialité
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licence
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
