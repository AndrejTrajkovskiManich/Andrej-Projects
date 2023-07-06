import "./newProducts.scss";
import img1 from "../img/Screenshot_1.png";
import img2 from "../img/Screenshot_2.png";
import img3 from "../img/Screenshot_3.png";
import img4 from "../img/Screenshot_4.png";
import img5 from "../img/Screenshot_5.png";
import img6 from "../img/Screenshot_6.png";
import img7 from "../img/Screenshot_7.png";
import img8 from "../img/Screenshot_8.png";
import img9 from "../img/Screenshot_9.png";
import img10 from "../img/Screenshot_10.png";
import img11 from "../img/Screenshot_11.png";
import img12 from "../img/Screenshot_12.png";
import img13 from "../img/Screenshot_13.png";
import img14 from "../img/Screenshot_14.png";

const newProducts = [
  {
    img: img1,
    text: "Комплет Black Suede",
  },
  {
    img: img2,
    text: "Kомплет лосион и парфем Lov U",
  },
  {
    img: img3,
    text: "Мицеларна вода збогатена со скапоцени масла",
  },
  {
    img: img4,
    text: "Измазнувачка подлога за шминка",
  },
  {
    img: img5,
    text: "Накит со мотиви на листови",
  },
  {
    img: img6,
    text: "Хидрација што го зголемуваат сјајот",
  },
  {
    img: img7,
    text: "Комплет за бањање со бел крин и мошус",
  },
  {
    img: img8,
    text: "Масло од јојоба",
  },
  {
    img: img9,
    text: "Детски чешел",
  },
  {
    img: img10,
    text: "Несесер со две прегради",
  },
  {
    img: img11,
    text: "Лед огледало за професионално сминкање и нега на кожа",
  },
  {
    img: img12,
    text: "Туш за очи-црното",
  },
  {
    img: img13,
    text: "Маскара - розевото",
  },
  {
    img: img14,
    text: "Повеќенаменски сјај за очи,усни и образи - црвениот",
  },
];

const NewProducts = () => {
  return (
    <div className="main-div">
      <div className="new-product-container">
        {newProducts.map(({ img, text }, i) => (
          <div key={i}>
            <div>
              <img src={img} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
