import React from "react";
import "./about.scss";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import ole from "../img/ole.jpg"

const About = () => {
  return (
    <>
      <div className="imWrapper">
        <h1>За AVON.</h1>
      </div>
      <div className="AboutWrapper">
        <div>
          <h2 className="h2">За Авон</h2>
          <p>Повеќе од компанија за убавина,Avon e глобално движење.</p>
          <a href="register">Зачлени се</a>
        </div>
        <div>
          <h2 className="h2">135 години се занимаваме со убавина поинаку.</h2>
          <p>
            Пионерски во слушањето на потребите на жените и зборувањето за нив.
            Стоејќи за она што им е важно. Поддршка на нивните напори.<br></br>
            Авон е компанија која ги поврзува луѓето преку убавина, споделување
            страст, иновации и експертиза - достапно.<br></br>
            Ја користиме моќта на убавината за да ги трансформираме животите на
            жените на подобро.
          </p>
        </div>
        <div>
          <h2 className="h2">Приказна за AVON</h2>
          <p>
            Основани се за да им обезбедат можност на жените да заработуваат и
            учат – донесувајќи им економска слобода на нивните советници за
            убавина за да можат сами да ја обликуваат својата иднина. Овој дух
            продолжува да го носат со нив и денес.
          </p>
        </div>
        <div>
          <img src={img1}></img>
        </div>
        <div>
          <img src={img2}></img>
        </div>
        <div>
          <h2 className="h2">Мрежа на советници за убавина</h2>
          <p>
            Авон верува во создавање флексибилни можности за секој да заработува
            и учи. Нивните независни претставници им обезбедуваат на милиони
            клиенти ширум светот доверливи, лични совети и производи за убавина
            за да им помогнат да ја изразат својата индивидуалност.
          </p>
        </div>
        <div>
          <h2 className="h2">Децениски убави иновации</h2>
          <p>
            Авон верува во демократијата за убавина: инклузивна убавина која е
            отворена за сите. Авон се страстни да ве држат во првите редови на
            убавината, создавајќи производи што ги прифаќаат најжешките трендови
            и врвната технологија, заедно со секојдневните основни работи кои ќе
            бидат основните елементи на вашиот комплет за убавина.
          </p>
        </div>
        <div>
          <img src={img3}></img>
        </div>
        <div><img src={ole}></img></div>
      <div><h2 className="h2">Запознајте си го менаџерот</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam eveniet et earum rem suscipit, error inventore nesciunt aliquam reprehenderit ut minus consequuntur iure ratione ipsam, temporibus cum vel sapiente asperiores mollitia quasi! Rem magni minima aut fugiat? Atque cupiditate obcaecati sapiente ipsam eveniet, doloribus dolor provident voluptate aliquam ab.</p></div>
      </div>
      
    </>
  );
};
export default About;
