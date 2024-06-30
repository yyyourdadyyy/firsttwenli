import React from 'react'

export const MainPage = () => {
  return (
    <main className="main">
      <div className="inner-main">
        <div className="rows-img-text">
          <div className="text-main">
            <h1 className="title-main">
            Отличное  решение для  вашего бизнеса
            </h1>
            <p className="decr-title-main">
            Наша команда готова воплатить в жизнь ваши идеи  и предложить качественное решение для вашего бизнеса
            </p>
            <div className="btn-main-block">
              <a class="buy" href="/catalog">Продолжить</a>
            </div>
          </div>
          <div className="img-main-block">
            <img src="bar_chart.png" alt="Элюстрация роста" />
          </div>
        </div>
      </div>
      <div className="menu-mobilu">
        <div className="inner-mobilu-menu">
          <div className="link-page">
            <div className="link-block-menu">
            <img src="home-icons.svg" alt="icons" />
            <a href="#">Главная</a>
            </div>
            <div className="link-block-menu">
            <img src="catalog-icons.png" alt="icons" />
            <a href="#">Каталог</a>
            </div>
            <div className="link-block-menu">
            <img src="o-icons.png" alt="icons" />
            <a href="#">О нас</a>
            </div>
           <div className="link-block-menu zakaz-menu">
           <a href="#">Заказать</a>
           </div>
          </div>
        </div>
      </div>
    </main>
  )
}
