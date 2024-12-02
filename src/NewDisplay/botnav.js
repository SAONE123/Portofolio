import { useState } from "react";

function Botnav({ inputSKill, inputserti, inputProj, inputAbo }) {
  const [skills, setskills] = useState(true);
  const [serti, setserti] = useState(true);
  const [Proj, setProj] = useState(true);
  const [Abou, setAbou] = useState(true);
  const Changeskill = () => {
    inputSKill(skills);
  };
  const ChangeSerti = () => {
    inputserti(serti);
  };
  const ChangeProj = () => {
    inputProj(Proj);
  };
  const ChangeAbout = () => {
    inputAbo(Abou);
  };
  return (
    <>
      <div className="Bot-button">
        <button onClick={Changeskill}>Skill</button>
        <button onClick={ChangeAbout}>About</button>
        <button onClick={ChangeSerti}>Certivicate</button>
        <button onClick={ChangeProj}>Project</button>
        <button>
          <a href="https://wa.me/085691941488">Contact</a>
        </button>
      </div>
    </>
  );
}

export default Botnav;
