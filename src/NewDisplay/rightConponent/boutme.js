import React, { useState } from "react";
import { AboutDesk } from "./component";
function App() {
  const [activeText, setActiveText] = useState("");
  const Education = AboutDesk.filter((item) => item.list === "Education");
  const Organisasi = AboutDesk.filter((item) => item.list === "Organisasi");
  const Hobby = AboutDesk.filter((item) => item.list === "Hobby");
  const handleClick = (text) => {
    setActiveText(text);
    setTimeout(() => {
      setActiveText("");
    }, 8000);
  };
  return (
    <div className="containerAbout">
      <h1>EDUCATION</h1>
      <div className="Education">
        {Education.map((e) => {
          return (
            <>
              <img
                src={e.img}
                alt={e.list}
                onClick={() => handleClick(e.deskripsi)}
              />
            </>
          );
        })}
      </div>
      <h1>Organitation</h1>
      <div className="Organitation">
        {Organisasi.map((e) => {
          return (
            <>
              <img
                src={e.img}
                alt={e.list}
                onClick={() => handleClick(e.deskripsi)}
              />
            </>
          );
        })}
      </div>
      <h1>HOBBY</h1>
      <div className="Hobby">
        {Hobby.map((e) => {
          return (
            <>
              <p>{e.ket}</p>
              <img
                src={e.img}
                alt={e.list}
                onClick={() => handleClick(e.deskripsi)}
              />
            </>
          );
        })}
      </div>
      {activeText && (
        <div className="overlay">
          <p>{activeText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
