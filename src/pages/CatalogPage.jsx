import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Основные стили Swiper
import 'swiper/swiper-bundle'; // Основные компоненты Swiper

export const CatalogPage = () => {
  return (
    <div className="parent">
      <main className="main-catalog">
     <div className="container">
     <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true} // Петля
        >
          <SwiperSlide className='slide'>
            <div className="rows-slide">
              <div className="text-slide">
                <h2 className="title-slide">Сайт-визитка</h2>
                <p className="decr-title-slide">
                Сайт-визитка предназначен для представления  вашей компании, организации, персонального  бренда или проекта в интернете
                </p>
                <div className="btn-price-slide">
                  <button className="buy">Заказать</button>
                  <p className="price">45 000 &#8376;</p>
                </div>
              </div>
              <div className="img-slide">
              <div className="vis-img"></div>
              </div>
             </div></SwiperSlide>
          <SwiperSlide className='slide'>  <div className="rows-slide">
              <div className="text-slide">
                <h2 className="title-slide">Сайт-визитка</h2>
                <p className="decr-title-slide">
                Сайт-визитка предназначен для представления  вашей компании, организации, персонального  бренда или проекта в интернете
                </p>
                <div className="btn-price-slide">
                  <button className="buy">Заказать</button>
                  <p className="price">45 000 &#8376;</p>
                </div>
              </div>
              <div className="img-slide">
              <div className="vis-img"></div>
              </div>
             </div></SwiperSlide>
          <SwiperSlide className='slide'><div className="rows-slide">
              <div className="text-slide">
                <h2 className="title-slide">Сайт-визитка</h2>
                <p className="decr-title-slide">
                Сайт-визитка предназначен для представления  вашей компании, организации, персонального  бренда или проекта в интернете
                </p>
                <div className="btn-price-slide">
                  <button className="buy">Заказать</button>
                  <p className="price">45 000 &#8376;</p>
                </div>
              </div>
              <div className="img-slide">
              <div className="vis-img"></div>
              </div>
             </div></SwiperSlide>
          <SwiperSlide className='slide'><div className="rows-slide">
              <div className="text-slide">
                <h2 className="title-slide">Сайт-визитка</h2>
                <p className="decr-title-slide">
                Сайт-визитка предназначен для представления  вашей компании, организации, персонального  бренда или проекта в интернете
                </p>
                <div className="btn-price-slide">
                  <button className="buy">Заказать</button>
                  <p className="price">45 000 &#8376;</p>
                </div>
              </div>
              <div className="img-slide">
              <div className="vis-img"></div>
              </div>
             </div></SwiperSlide>
      </Swiper>
      <div className="catalog-product">
        <div className="inner-catalog-product">
          <div className="product-block">
            <div className="img-block-product">
              
            </div>
            <div className="info-prodcut">
            <div className="title-price-product">
              <h2 className="title-product">Сайт-лендинг</h2>
              <h3 className="price-producut">35 000 &#8376;</h3>
              </div>
              <a href="#" className="link-prodcut">Подробнее</a>
            </div>
          </div>
          <div className="product-block">
            <div className="img-block-product">
              
            </div>
            <div className="info-prodcut">
            <div className="title-price-product">
              <h2 className="title-product">Сайт-лендинг</h2>
              <h3 className="price-producut">35 000 &#8376;</h3>
              </div>
              <a href="#" className="link-prodcut">Подробнее</a>
            </div>
          </div>
          <div className="product-block">
            <div className="img-block-product">
              
            </div>
            <div className="info-prodcut">
              <div className="title-price-product">
              <h2 className="title-product">Сайт-лендинг</h2>
              <h3 className="price-producut">35 000 &#8376;</h3>
              </div>
              <a href="#" className="link-prodcut">Подробнее</a>
            </div>
          </div>
          <div className="product-block">
            <div className="img-block-product">
              
            </div>
            <div className="info-prodcut">
              <div className="title-price-product">
                <h2 className="title-product">Сайт-лендинг</h2>
              <h3 className="price-producut">35 000 &#8376;</h3>
              </div>
              <a href="#" className="link-prodcut">Подробнее</a>
            </div>
          </div>
          
        </div>
      </div>
     </div>
      </main>

    </div>
  );
};
