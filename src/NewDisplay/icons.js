import { Iconscollection } from "./rightConponent/component";
function Icons() {
  return (
    <>
      <div className="iconscontainer">
        {Iconscollection.map((e) => {
          return (
            <a href={e.command}>
              <img src={e.img} alt="err" width={25} height={25} />
            </a>
          );
        })}
        <div className="resume">
          <a href="/RESUME.pdf" download="RESUME.pdf">
            <img src="/logos/cloud.svg" alt="err" width={25} height={25} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Icons;
