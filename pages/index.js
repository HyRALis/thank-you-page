import Head from "next/head";

import { Fragment, useState } from "react";
import fetch from "isomorphic-unfetch";
import Card from "../componets/Card";
import Slider from "../componets/Slider";

import styles from "../styles/Home.module.scss";

import translations from "../public/assets/translations.json";
import BackHomepage from "../componets/BackHomepage";
import Navbar from "../componets/Navbar";
import Rating from "../componets/Rating";
import Footer from "../componets/Footer";

const Home = ({ content }) => {
  const usaTranslations = [
    "Collect your required documentation.",
    "Send us your documents or let us pick them up.",
    "We check your documents upon arrival.",
    "The application is processed at the embassy.",
    "After completion we collect your visa / legalization and return it.",
    "You can always follow the status of your application yourself via your personal account.",
  ];
  const mkTranslations = [
    "Соберете ја вашата потребана документација.",
    "Пратете ни ги вашите документи или дозволете ние да ги собереме за Вас.",
    "Ние ги проверуваме Вашите документи откако ќе пристигнат.",
    "Вашата апликација се процесира во амбасадата.",
    "Откако ќе биде готова Вашата виза / легализација, ние ја земаме и Ви ја испраќаме.",
    "Вие во секое време можете да ја следите состојбата на вашата апликација преку Вашата лична сметка.",
  ];

  const fullContent = content.map((nl, index) => ({
    nl: nl,
    mk: mkTranslations[index],
    enUS: usaTranslations[index],
  }));

  const [language, setLanguage] = useState({ label: "", value: "nl" });
  const [staticText, setStaticText] = useState(translations.translations);
  return (
    <Fragment>
      <Head></Head>
      <header>
        <Navbar SetLanguage={setLanguage} />
        <div className={styles.headerScore}>
          <Rating Rating={9.3} Fill="#02B87A" Color="#000000" />
        </div>
      </header>
      <main className={styles.main}>
        <Slider Language={language.value} StaticText={staticText} />
        <section className={styles.sectionOne}>
          <h2>
            {`${staticText[language.value].message.split(".")[0]}.`}
            <br />
            {staticText[language.value].message.split(".")[1]}
          </h2>
          <div className={styles.cardsContainer}>
            {content &&
              fullContent.map((content, index) => (
                <Card
                  key={index}
                  Content={content[language.value]}
                  Index={index}
                />
              ))}
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <BackHomepage
            label={staticText[language.value].buttonLabel.toUpperCase()}
          />
        </section>
      </main>
      <Footer StaticText={staticText} Language={language.value} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("https://test-api.acc.tcc.rocks/api/content");
  const result = await res.json();
  return {
    props: {
      content: result,
    },
  };
}

export default Home;
