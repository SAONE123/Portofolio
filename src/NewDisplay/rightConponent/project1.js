import { Projectdata } from "./component";
function Project1() {
  return (
    <>
      <div className="ProContain">
        {Projectdata.map((e) => {
          return (
            <div className="Project-component">
              <a href={e.url}>
                <div className="title">{e.title}</div>
              </a>
              <img src={e.img} alt="err" />
              <div className="deskripsi"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Project1;
