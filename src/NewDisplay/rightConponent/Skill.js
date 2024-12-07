import { Logos } from "./component";
function Skill() {
  return (
    <>
      {Logos.map((data) => {
        return (
          <div key={data.key} className={`CONS ${data.key ? "visible" : ""}`}>
            <img src={data.img} alt="error" />
          </div>
        );
      })}
    </>
  );
}

export default Skill;
