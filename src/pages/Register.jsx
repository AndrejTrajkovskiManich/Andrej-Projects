import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faHeadset,
  faGift,
  faCircleInfo,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
import GridCard from "../components/GridCard";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./register.scss";

const Register = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errorValues, setErrorValues] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorValues(false);
    setErrorMsg(true);

    if (name === "" || city === "" || phone === "") {
      setErrorValues(true);
      return;
    }

    emailjs
      .sendForm(
        "service_l3nd60b",
        "template_y0fzlhp",
        form.current,
        "E10ELqVLTNZFZhxoF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("kk");
          setErrorMsg(false);
        },
        (error) => {
          console.log(error.text);
          setErrorMsg(false);
        }
      );
  };

  return (
    <>
      <h1 className="Registerh1">Зашто да ни се придружите?</h1>
      <main className="RegisterGrid">
        <div className="cardWrapperRegister">
          <GridCard
            text={
              "Веднаш штом ќе се пријавите, AVON ви обезбедува обука и бонуси за да ви помогне да имате силен почеток. Ќе бидете член на групата поединци што ги води вашиот менаџер за продажба и ќе може да го контактирате за било која ситуација."
            }
            heading={"ПОДДРШКА"}
          >
            <FontAwesomeIcon icon={faHeadset} />
          </GridCard>
        </div>
        <div className="cardWrapperRegister">
          <GridCard
            text={
              "Како претставник на АВОН вие работите за себе. Добивате заработка од вашата продажба, и колку ќе продадете зависи од Вас. Ако сакате да заработите екстра пари за 4 недели зошто не би биле тие убави пари. Авон издава 12 брошури годишно па имате добра можност за продажба. Тоа се различни брошури на секои 4 недели, така да имате секогаш свежи и нови производи за кои би говореле. Во зависност од висината на порачката може да добиете фантастичен процент на рабат од продажната цена."
            }
            heading={"ПРОФИТ"}
          >
            <FontAwesomeIcon icon={faMoneyBill} />
          </GridCard>
        </div>
        <div className="cardWrapperRegister">
          <GridCard
            text={
              "Најдобрите заработувачи можат да се придружат на ексклузивниот ТОП клуб на AVON и да добиваат подароци во текот на целата година, гратис, огромни попусти и специјални цени за избор на производи."
            }
            heading={"НАГРАДИ И БОНУСИ"}
          >
            <FontAwesomeIcon icon={faGift} />
          </GridCard>
        </div>
        <div className="cardWrapperRegister">
          <GridCard
            text={
              "Ќе ви бидат дадени најава и лозинка за да пристапите до веб-страната на AVON, која е специјално создадена за да ви помогне со вашата целосна помош, а оттаму можете да се справувате со продажбата, клиентите и заработката електронски од дома!!!'"
            }
            heading={"ЕЛЕКТРОНСКА ПОДДРШКА"}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </GridCard>
        </div>
        <div className="cardWrapperRegister">
          <GridCard
            text={
              "Како што напредувате во моделот на лидерство, го достигнувате следното ниво каде што, покрај сопствената продажба, градите и свој тим од луѓе. Вие им служите како тренер и советник во ова време, покажувајќи им како и тие можат да успеат и да заработат со продажба на козметика AVON. Вашиот успех е загарантиран и можете да напредувате токму сега, лидер на продажба!"
            }
            heading={"БРЗ НАПРЕДОК"}
          >
            <FontAwesomeIcon icon={faForwardFast} />
          </GridCard>
        </div>
      </main>

      <form ref={form} onSubmit={sendEmail} id="RegistrationForm">
        <label>Име и презиме</label>
        <input
          id="nameSurname"
          type="text"
          name="user_name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Град</label>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="tel"
          name="user_city"
          required
        />
        <label>Телефонски број</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="user_phone"
          required
        />
        <input
          type="submit"
          value="Send"
          id="submit"
          disabled={errorMsg ? true : false}
        />
      </form>
      {errorValues ? (
        <p className="error">*Ве молиме пополнете ги сите полиња</p>
      ) : null}
    </>
  );
};

export default Register;
