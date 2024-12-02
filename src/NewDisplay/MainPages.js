import Styles from "./NewDisplay.css";
import Skill from "./rightConponent/Skill";
import Icons from "./icons";
import Botnav from "./botnav";
import Sertive from "./rightConponent/certivicate";
import { useState } from "react";
import Project1 from "./rightConponent/project1";
import Boutmed from "./rightConponent/boutme";
function Mainpages() {
  const [skill, setSkill] = useState(false);
  const [Certi, setCerti] = useState(false);
  const [Projec, setProjec] = useState(false);
  const [About, setAbout] = useState(false);
  const dashskill = (data) => {
    setSkill(data);
    if (data) setCerti(false);
    if (data) setProjec(false);
    if (data) setAbout(false);
  };
  const dashCerti = (data) => {
    setCerti(data);
    if (data) setSkill(false);
    if (data) setProjec(false);
    if (data) setAbout(false);
  };
  const dashProj = (data) => {
    setProjec(data);
    if (data) setSkill(false);
    if (data) setCerti(false);
    if (data) setAbout(false);
  };
  const dashAbout = (data) => {
    setAbout(data);
    if (data) setSkill(false);
    if (data) setCerti(false);
    if (data) setProjec(false);
  };

  return (
    <>
      <div className="Main ">
        <div className="Second">
          <div className="Left">
            <img className="LeftPhotos" src="./mypic.png" alt="my-photos" />
            <p>
              I'm a graduation in Universitas Sultan Ageng Tirtayasa Collage
              with Agribusiness Majoring, i have chance for completing Kampus
              Merdeka Porgram that have majoring skill in web develpment, it was
              good that i have web development skill before joining this major,
              hope that you can help me improve my skill.
            </p>
            <div className="Third">
              <Icons />
            </div>
            <Botnav
              inputSKill={dashskill}
              inputserti={dashCerti}
              inputProj={dashProj}
              inputAbo={dashAbout}
            />
          </div>
          <div className="rightSkill">
            {skill && <Skill />}
            {Certi && <Sertive />}
            {Projec && <Project1 />}
            {About && <Boutmed />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpages;
