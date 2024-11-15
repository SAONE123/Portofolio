import Background from "./background";
import Icons from "./icons";
import Textanimation from "./textanima";

function FirstPage() {
  return (
    <>
      <Background />
      <div className="firstContainer">
        <img src="./mypic.png" alt="err" className="images" />
        <Textanimation />
        <p className="desk">
          I'm a graduation in Universitas Sultan Ageng Tirtayasa Collage with
          Agribusiness Majoring, i have chance for completing Kampus Merdeka
          Porgram that have majoring skill in web develpment, it was good that i
          have web development skill before joining this major, hope that you
          can help me improve my skill.
        </p>
        <Icons />
      </div>
    </>
  );
}

export default FirstPage;
