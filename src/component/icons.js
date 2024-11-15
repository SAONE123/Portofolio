function Icons() {
  return (
    <>
      <div className="iconscontainer">
        <a href="https://github.com/SAONE123">
          <img src="/logos/github.svg" alt="err" width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/in/alfian-setyobudi-710b521b7/">
          <img src="/logos/linkedin.svg" alt="err" width={25} height={25} />
        </a>
        <a href="https://www.instagram.com/alfian_1920/">
          <img src="/logos/instagram.svg" alt="err" width={25} height={25} />
        </a>
        <a href="mailto:titanalfian112@gmail.com">
          <img src="/logos/mail.svg" alt="err" width={25} height={25} />
        </a>
        <div className="resume">
          <a href="/RESUME.pdf" download="RESUME.pdf">
            <div className="resume">
              <img
                src="/logos/cloud.svg"
                alt="err"
                width={25}
                height={25}
                className="m-2"
              />
              <p>RESUME</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Icons;
