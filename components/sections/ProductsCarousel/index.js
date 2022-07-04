import { Wrapper } from './productCarousel.styled'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from 'components/containers'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use([Navigation])

const ProductsCarousel = ({ title = '', items = [] }) => {
  const swiperRef = useRef(null)

  const handleClickSlideNext = () => swiperRef.current.swiper.slideNext()
  const handleClickSlidePrev = () => swiperRef.current.swiper.slidesPrev()

  return (
    <Wrapper>
      <h3 className="products-carousel__title">{title}</h3>
      <div className="products-carousel__inner">
        {items.length > 0 && (
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1.2}
            breakpoints={{
              400: {
                slidesPerView: 1.6
              },
              570: {
                slidesPerView: 2.2
              },
              600: {
                slidesPerView: 2.5
              },
              720: {
                slidesPerView: 3,
                spaceBetween: 0
              }
            }}>
            {
              items.map((item) => (
                <SwiperSlide key={item._id}>
                  <ProductCard
                    title={item.nombre}
                    price={item.precio}
                    thumbnail={item.fotoProducto}
                    to={item.nombreURL}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        )}
        <button className="products-carousel__prev" onClick={handleClickSlidePrev}>
          <img src="/left_arrow.svg" />
        </button>
        <button className="products-carousel__next" onClick={handleClickSlideNext}>
          <img src="/right_arrow.svg" />
        </button>
      </div>
    </Wrapper>
  )
}

export default ProductsCarousel
