import React from 'react'

export const Error404 = () => {
  return (
    <div>
      <main className="main-error">
        <div className="block-error">
          <h2 className='title-error'>404</h2>
          <p className='pre-title'>Страница не найдена</p>
          <p className='decr-title'>Извините, мы не нашли данную страницу</p>
          <a class="buy" href="/">На Главную</a>
        </div>
      </main>
    </div>
  )
}
