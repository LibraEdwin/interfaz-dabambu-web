import React from 'react'

export default function Marca() {
  return (
    <section className="marca">
      <img src="/marca.png" />
      <span>Das lo que recibes</span>
      <style jsx>{`
        .marca{
          display: flex;
          flex-direction: column;
          align-items: center;
          /* justify-content: center; */
          padding-top: 9rem;
          height: 85vh
        }

        .marca img{
          max-width: 15%;
          padding-bottom: 1rem;
        }

        @media screen and (min-width: 620px){
          .marca{
            height: 50vh;
            padding-top: 0;
            justify-content: center;
            font-size: 18px;
          }

          .marca img{
            max-width: 9%;
            padding-bottom: 1rem;
          }   
        }

        @media screen and (min-width: 960px){
          .marca{
            font-size: 24px;
            height:60vh;
          }

          .marca img{
            max-width: 5%;
            padding-bottom: 1rem;
          }  
        }`}
      </style>
    </section>
  )
}
