  import Link from "next/link";
import React from "react";

  const MenuItems = ({ items , isFooter = false}) => {
    return (
      <div className={`items-container ${isFooter ? "footer-style" : ""}`}>
       {items.map((item, index) => (
        <Link key={index} href={item.path} className="navbar-link">
          {item.name}
        </Link>
      ))}
      </div>
    );
  };

  export default MenuItems;
