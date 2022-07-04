import React, { useEffect, useState } from 'react'
import Button from './common/Button'

export default function Parallax() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleParallax = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener('scroll', handleParallax)
    return () => {
      window.removeEventListener('scroll', handleParallax)
    }
  }, [])

  return (
    <>
      {/* <div className="componente"> */}
      <section className="container__parallax">
        <div
          className="parallax"
          style={{ transform: `translateY(${offset * -0.1}px)` }}
        ></div>
        <h1 className="titulo__parallax">Una parte de la naturaleza contigo</h1>
        <p className="mensaje__parallax">
          Ya sea en un rincón del hogar o en oficinas, un bambú es la mejor
          compañía.
        </p>
        {/* <button className="boton__parallax button">IR A TIENDA</button> */}
        <Button as="a" href="/tienda" variante="banner">
          ir a tienda
        </Button>
      </section>
      {/* </div> */}
      <style jsx>{`
                // .componente{
                //     border: 1px solid #517201;                    
                // }

                .container__parallax{
                    position: relative;
                    height: 400px;
                    overflow: hidden;
                    margin: 2rem 0;
                    display: grid;
                    grid-template-rows: 9rem 5rem 3rem;
                    row-gap:1rem;
                    justify-items: center;
                }

                .parallax{
                    background-image: url(img_parallaxv3.jpg);    
                    background-position: 70% 70%;                
                    background-size: cover;
                    position: absolute;
                    height: 35rem;
                    width: 100%;
                    z-index: -1;
                }

                .titulo__parallax{
                    text-align: center;
                    justify-self: center;
                    margin-top: 4rem;  
                    width: 12rem;   
                    margin-bottom:1rem; 
                }

                .mensaje__parallax{
                    color: #ffffff;
                    text-align: center;  
                    justify-self: center; 
                    margin-bottom: 1rem;
                    width: 20rem;
                    line-height: 1.6rem;
                }

                .boton__parallax{
                    justify-self: center;
                    // width: 150px;
                    // height: 42px;
                    font-weight: 600;
                    font-family: Montserrat;
                } 

                @media screen and (min-width: 620px){
                    .container__parallax{
                        height: 26rem;
                        display: grid;
                        grid-template-rows: 9rem 5rem 3rem;
                    }

                    .parallax{   
                        background-position: 70% auto;   
                        height: 55vh;
                        width: 100%;
                    }

                    .titulo__parallax{
                        margin-top: 3.5rem;  
                        width: 25rem;    
                        font-size: 36px;           
                    }
    
                    .mensaje__parallax{; 
                        margin-bottom: 6rem;
                        width: 70%;
                        font-size: 24px; 
                        line-height: 2rem;
                    }
    
                    .boton__parallax{
                        justify-self: center;
                        width: 10rem;
                        font-size: 18px;
                    }                  
                }

                @media screen and (min-width: 1200px){
                    .container__parallax{
                        height: 520px;
                        grid-template-rows: 14rem 6rem 3rem;
                    }

                    .parallax{   
                        background-position: 70% auto;   
                        height: 700px;
                        width: 100%;
                    }

                    .titulo__parallax{
                        margin-top: 4rem;  
                        width: 903px;    
                        font-size: 64px;           
                    }
    
                    .mensaje__parallax{
                        margin-top: 1rem; 
                        margin-bottom: 6rem;
                        width: 1000px;
                        font-size: 24px; 
                        line-height: 2rem;
                    }
    
                    .boton__parallax{
                        width: 233px;
                        height: 42px;
                        font-size: 18px;
                    }         
            `}</style>
    </>
  )
}
