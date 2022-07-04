import React from 'react'

export default function Beneficios () {
  return (
        <section className="container__beneficios">
            <div className="container__beneficios--info">
                <h2 className="container__beneficios--title title">Beneficios<br/>del bambú</h2>
                <ul className="container__beneficios--detalles">
                    <li>Es muy fácil de mantener.</li>
                    <li>Genera grandes cantidades de oxígeno.</li>
                    <li>Embellece el ambiente donde se encuentre.</li>
                    <li>Llena de paz y vitalidad al futuro dueño.</li>
                </ul>
            </div>
            <div className="container__beneficios--image">
                <img src="/beneficios.png"/>
            </div>
            <style jsx>{`
                .container__beneficios{
                    display: grid;
                    grid-template-columns: 1fr;
                    height: 95vh;
                    margin: 2.5rem;
                }

                .container__beneficios--info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }

                .container__beneficios--title{
                    font-size: 11.6vw;
                    /* font-size: 48px; */
                    line-height: 1.3;
                    padding-bottom: 2rem;
                }

                .container__beneficios--detalles{
                    padding-bottom: 3rem;
                }

                .container__beneficios--detalles li {
                    list-style-type:none;
                    background-image: url(bullet.svg);
                    background-repeat:no-repeat;
                    background-size: 2vw;
                    background-position: 1px;
                    padding-left: 1.5rem;
                    font-size: 18px;
                    margin-bottom:1rem
                }

                .container__beneficios--image img{
                    max-width: 100%;
                }

            @media screen and (min-width: 620px){

                .container__beneficios{
                    margin: auto;
                    width: 50%;
                    padding: 3rem 0;
                    height: auto;
                }

                .container__beneficios--title{
                    font-size: 40px;
                    line-height: 1.3;
                }

                .container__beneficios--detalles li {
                    background-size: 1.4vw;
                }

            }


            @media screen and (min-width: 960px){

                .container__beneficios{
                    width: 100%;
                    grid-template-columns: 0.5fr 0.5fr; 
                    gap: 3rem;
                    margin: 0;
                }

                .container__beneficios--info{
                    grid-column: 1/2;
                    padding-left: 4rem;

                    
                }

                .container__beneficios--image{
                    grid-column: 2/3;
                    margin-right: 9rem
                    width:100%;
                    padding-right: 2rem

                }

                .container__beneficios--detalles li {
                    background-size: 1vw;
                }

            }

            @media screen and (min-width: 1200px){

                .container__beneficios--info{
                    padding: 0 9.7rem;
                    
                }

                .container__beneficios--title{
                    font-size: 48px;
                }

                .container__beneficios--detalles li {
                    font-size: 24px;
                    background-size: 0.7vw;
                   
                }
           
            } 
                
            
            `}</style>
        </section>
  )
}
