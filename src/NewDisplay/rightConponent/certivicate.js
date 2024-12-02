import Slides from "./Slides";
var dummydata = [
  {
    id: 1,
    imgUrl: "/serti/algoritma.png",
    content: "Sertivicate from Hacktivate on Next Algoritma",
    pdf: "/serti/algoritma.pdf",
  },
  {
    id: 2,
    imgUrl: "/serti/DOM.png",
    content: "Sertivicate from Hacktivate on DOM",
    pdf: "/serti/DOM.pdf",
  },
  {
    id: 3,
    imgUrl: "/serti/CSS.png",
    content: "Sertivicate from Hacktivate on Materialize CSS",
    pdf: "/serti/CSS.pdf",
  },
  {
    id: 3,
    imgUrl: "/serti/Webdev.png",
    content: "Sertivicate from Hacktivate on Webdev Kampus Merdeka",
    pdf: "/serti/Webdev.pdf",
  },
];
const Sertive = () => {
  return (
    <>
      <div>
        <Slides slides={dummydata} />
      </div>
    </>
  );
};
export default Sertive;
