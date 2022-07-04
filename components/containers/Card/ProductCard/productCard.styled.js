import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 13rem;

  .buttons-contain {
    display: flex;           
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .product-card__thumbnail {
    margin: 0;
    width: 13rem;
    height: 13rem;
    position: relative;
    // width: 233px;
    // height: 233px;
  }

  .product-card__thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-card__content {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
  }

  .product-card__title,
  .product-card__price {
    font-size: 14px;
    font-weight: normal;
  }

  .product-card__title {
    width: 70%;
  }

  .product-card__price {
    width: 30%;
    text-align: right;
  }

  @media screen and (min-width: 540px) {
    .product-card__title,
    .product-card__price {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 720px) {
    margin: 0 auto;

    .buttons-contain {
      row-gap: 1rem;
    }
  }

  @media screen and (min-width: 960px) {
      width: 300px;

    .product-card__thumbnail {
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
      width: 350px;

    .product-card__thumbnail {
      width: 350px;
      height: 350px;
    }
  }
`
