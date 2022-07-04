import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 1rem;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  .products-carousel__inner {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .products-carousel__title {
    display: block;
    font-size: 22px;
    font-weight: 300;
    color: #517201;
    margin-bottom: 2rem;
  }

  .products-carousel__prev,
  .products-carousel__next {
    display: none;
    position: absolute;
    z-index: 99;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .products-carousel__prev {
    left: -10px;
  }

  .products-carousel__next {
    right: -10px;
  }

  @media screen and (min-width: 720px) {
    .products-carousel {
      padding: 0 1rem;
    }

    .products-carousel__title {
      font-size: 32px;
    }

    .products-carousel__prev,
    .products-carousel__next {
      display: inline-block;
    }
  }

  @media screen and (min-width: 1350px) {
    .products-carousel__prev {
      left: -35px;
    }

    .products-carousel__next {
      right: -35px;
    }
  }

  @media screen and (min-width: 1380px) {
    .products-carousel__prev {
      left: -60px;
    }
    
    .products-carousel__next {
      right: -60px;
    }
  }
`
