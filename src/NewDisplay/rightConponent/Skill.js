import { Logos } from "./component";
function Skill() {
  return (
    <>
      {Logos.map((data) => {
        return (
          <div key={data.key} className="CONS">
            <img src={data.img} alt="error" />
          </div>
        );
      })}
    </>
  );
}

export default Skill;
