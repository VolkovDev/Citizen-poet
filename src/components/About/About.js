import './About.css';
import React from 'react';

function About() {
    return(
      <section className="about">
        <div className="about__avatar" />
        <div className="about__author">
          <h2 className="about__author-title">Info</h2>
          <p className="about__author-description">
            Мы команда Яндекс.Практикум Андрей, Павел и Мария, и перед вами наш проект Гражданин&nbsp;Поэт.
            Гражданин&nbsp;Поэт - это прототип приложения для гражданских инициатив. На дворе 2025 год, в стране цензура.
            Для защиты общественной нравственности к рассмотрению принимаются только обращения, написанные цитатами поэтов-классиков.
          </p>
          <p className="about__author-description">
            Другие наши проекты вы можете посмотреть на github.
            По вопросам сотрудничества, пишите в telegram.
          </p>
        </div>
      </section>
    );
}

export default About;
