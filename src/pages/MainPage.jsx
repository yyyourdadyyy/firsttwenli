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
    </main>
  )
}
