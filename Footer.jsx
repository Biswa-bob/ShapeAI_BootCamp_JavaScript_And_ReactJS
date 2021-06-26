import React from "react";

function Footer() {
  const year = new Date();
  const newYear = year.getFullYear();
  return (
    <footer>
      <p>Copyright by ShapeAI @ {newYear}</p>
    </footer>
  );
}

export default Footer;
