import React from 'react'

export default function cuidados() {
  return (
    <section className="container__cuidados">
      <h2 className="container__cuidados--title title">Cuidados para tu bambú</h2>

      <div className="container__cuidados--imagen">
        <img
          src="/cuidados.png"
          alt="cuidados"
        />
      </div>

      <ol className="container__cuidados--info">
        <li>
          <p>
            <b>Limpia el contenedor de tu bambú.</b> Mínimo, una vez al mes y
            cambia el agua cada semana para evitar que se formen algas.
          </p>
        </li>
        <li>
          <p>
            <b>Ubica tu bambú en un espacio con luz natural.</b> También lo puedes
            poner en la sombra pero el bambú suele crecer más con la luz del día.
            En un espacio iluminado estará más que bien.
          </p>
        </li>
        <li>
          <p>
            <b>El agua filtrada o hervida es mejor. </b> Así se mantendrán sus
            tallos humectados y saludables. Recuerda que debes darle siempre agua
            limpia.
          </p>

        </li>
        <li>
          <p>
            <b>Limpia delicadamente las hojas.</b> Utilizando un paño húmedo,
            limpio y de textura suave, trata de mantener las hojas libres del
            polvo.
          </p>
        </li>
      </ol>
      <div className="container__cuidados--blank"></div>

      <style jsx>{`
                .container__cuidados {
                    padding: 4rem 2.5rem 1rem 2.5rem;    
                    display: flex;
                    flex-direction: column;
                }

                .container__cuidados--title {
                    text-align: center;
                    padding-bottom: 1.4rem;
                    font-weight: normal;
                    font-size: 5.8vw;
                }

                .container__cuidados--imagen img{
                    max-width:100%; 
                }

                .container__cuidados--info {
                    line-height: 1.5rem;             
                    padding: 0 1rem;
                    margin-top: 1.5rem;  
                    font-size: 18px;
                    text-align: justify;
                }

                ol li {
                    padding-bottom:1.5rem;
                    font-weight: 500;
                }

                ol li p{
                    font-weight: normal;
                }

                ol li b {
                    font-weight: 500;
                } 
                
                .container__cuidados--blank{
                        height: 10vh
                    }
                
                @media screen and (min-width: 620px){

                    .container__cuidados {
                        padding: 4rem 4rem 1rem; 
                        font-size: 2.5vw;   
                         
                    }         

                    .container__cuidados--title {
                        text-align: start;
                        padding-bottom: 2rem;
                        font-size: 3.5vw;            
                    }

                    .container__cuidados--imagen {
                        display: flex;                      
                        align-items: center;
                    }

                    .container__cuidados--info {                    
                        margin-top: 2.5rem;                    
                    } 

                    .container__cuidados--blank{
                        height: 50vh
                    }
                }
                
                @media screen and (min-width: 960px){

                    .container__cuidados {
                        padding: 4rem 7rem 2rem;    
                    } 

                    .container__cuidados--info {
                        font-size: 24px;
                        line-height: 1.5em;

                    }

                    .container__cuidados--info li{
                        padding-bottom: 1.5em;             
                    }


                    .container__cuidados--title {
                        font-size: 36px;  
                        padding-bottom: 3rem;                              
                    }
                }
            `}</style>
    </section>
  )
}
