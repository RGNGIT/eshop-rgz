import React from 'react';
import '../styles/landing-component.css';

export default function LandingComponent() {
  return (
    <div className="landing-container">
      <h1 className="main-heading">О нас</h1>
      <div className="columns-container">
        <div className="column">
          <h2 className="subheading">Что предоставляем</h2>
          <p className="text">Мы предоставляем полный спектр услуг по регистрации автомобилей. Наша команда профессионалов гарантирует быстрое и надежное оформление документов, избавляя вас от лишних забот.</p>
        </div>
        <div className="column">
          <h2 className="subheading">Что делаем</h2>
          <p className="text">Наша миссия — сделать процесс регистрации автомобилей максимально удобным и прозрачным для каждого клиента. Мы ценим ваше время и стремимся превзойти ваши ожидания.</p>
        </div>
      </div>
    </div>
  );
};