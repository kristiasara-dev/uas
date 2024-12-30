import React, { useEffect, useState } from "react";

const HeaderSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <h1>Sticky Header</h1>
    </header>
  );
};

export default HeaderSticky;
