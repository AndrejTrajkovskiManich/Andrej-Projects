import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGift,
  faPersonRunning,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import GridCard from "../components/GridCard";
import "./homepage.scss";
import img1 from "../img/neso.jpg";
import img2 from "../img/c2.jpg";
import img3 from "../img/c5.jpg";
import img4 from "../img/c4.jpg";
import img5 from "../img/banner.jpg";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

const carouselItems = [
  { img: img2 },
  { img: img1 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
];

const HomePage = () => {
  const [slide, setSlide] = useState(1);
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  const goNext = () => {
    if (slide === carouselItems.length) {
      setSlide(1);
      return;
    }
    setSlide((slide) => slide + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [slide]);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div className="homepage">
      <div ref={ref} className="carousel">
        {carouselItems.map((item, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{ transform: `translateX(${(i - slide + 1) * width}px)` }}
          >
            <img src={item.img} alt="" />
          </div>
        ))}

        <button
          className="back"
          onClick={() => {
            if (slide === 1) {
              setSlide(5);
              return;
            }

            setSlide((slide) => slide - 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="next"
          onClick={() => {
            goNext();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="circles-container">
          {carouselItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setSlide(i + 1)}
              className={`${
                slide === i + 1 ? "active-circle circle" : "circle"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="grid-card-container">
        <GridCard
          buttonShowing={true}
          text={
            "Станете претставник на AVON за да ги искористите различните попусти! Секој претставник добива до 30% попуст од цената на брошурата во рамките на одобрениот попуст за претставник, така што заштедувате пари за секоја трансакција што ќе ја направите. Можете да ја намалите вашата месечна потрошувачка на козметика со помош на AVON."
          }
        >
          <FontAwesomeIcon icon={faBagShopping} />
        </GridCard>
        <GridCard
          buttonShowing={true}
          text={
            "Кога нов Претставник ќе се приклучи на семејството на AVON, тие се пречекани со подарок. Не е тајна дека подарокот што прави дама да се чувствува посакувано и прекрасно може да ја направи среќна. Токму затоа AVON ви нуди можност да учествувате во инспиративни настани со привлечни производи од нашите најнови производни линии. Сега разбирате дека ентузијастичкото работење ќе ви овозможи да добивате инспиративни подароци"
          }
        >
          <FontAwesomeIcon icon={faGift} />
        </GridCard>
        <GridCard
          buttonShowing={true}
          text={
            "AVON го олеснува започнувањето со работа со тоа што ви дава посебна шанса да стекнете повеќе доколку имате соодветно слободно време. Сè што треба да направите за да станете претставник на AVON е да се регистрирате, што е брзо и едноставно. Можете да станете Координатор прилично брзо со напорна работа и посветеност."
          }
        >
          <FontAwesomeIcon icon={faPersonRunning} />
        </GridCard>
      </div>
      <div className="testimonial-text">
        <p>
          <span className="span-main">Ова е компанија </span>која ја додава{" "}
          <span>маскарата</span> на трепките и храна на масата. Која со едната
          рака се <span>бори</span> против брчките, а со другата против{" "}
          <span>ракот на дојката</span>. Која ја знае вредноста на{" "}
          <span>совршената усна</span>. Но, сепак ја отвора устата и{" "}
          <span>зборува против семејното насилство</span> и за финансиската{" "}
          <span>независност</span> на жените. Ова е компанијата која не само што
          носи <span>убавина</span> на вратите, туку и ги отвора. Компанијата
          која <span>поддржува</span> 6 милиони <span>претставници</span> во над
          100 земји. Ова е Avon. Компанијата која веќе<span> 125 години</span>{" "}
          се залага за <span>убавина, иновација, оптимизам</span> и пред се{" "}
          <span className="span-main">за жените.</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
