import React from 'react'
import Link from 'next/link'

export default function Footer () {
  const fbLink = 'https://www.facebook.com/DaBambu-Bamb%C3%BAs-y-accesorios-109251668092906'
  const igLink = 'https://www.instagram.com/dabambuperu/'

  return (
        <>

            <footer className="footer">
                <ul className="footer__info">
                    <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
                    <li><Link href="/tienda"><a>Tienda</a></Link></li>
                    <li><Link href="/cuidados"><a>Guía de cuidados</a></Link></li>
                </ul>
                <div className="footer__images">
                    <img className="footer__logo" src="/logo_white.png" />
                    <div className="footer__social">
                        <Link href={fbLink}>
                            <a target="_blank">
                                <img src="/facebook_white.svg" />
                            </a>
                        </Link>
                        <Link href={igLink}>
                            <a target="_blank">
                                <img src="/instagram_white.svg" />
                            </a>
                        </Link>
                    </div>
                </div>

            </footer>

            <div className="footerInterfaz">
                    <div>Copyright © 2022 - DaBambú</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: '10px' }}>Desarrollado por</span><a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=51984162726&text=Hola%2C%20Interfaz" target="_blank"><img src="/interfaz-blanco.png" width="100" height="41"/></a></div>
            </div>

            <style jsx>{/* css */`
                
                .footerInterfaz{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    heigth: auto;
                    background-color: #2e4101;
                    color: white;
                    font-size: x-small;
                    padding: 10px 20px 10px 20px;

                //     position: fixed;
                // bottom: 0;
                // z-index: 1;
                }


                .footer{
                    display: flex;
                    justify-content: space-between;
                    padding: 2.5rem 1.5rem;  
                    line-height: 1.8;

                    // position: fixed;
                    // bottom: 0;
                    // z-index: 1;
                }

                .footer__logo{
                    width: 155px;
                    height: 40px;                    
                }

                .footer__social{
                    display:flex;
                    justify-content: center;
                    gap: 1.2rem;    
                }

                .footer__social img:first-child{
                    width:20px;
                    height:20px
                }

                .footer__social img:last-child{
                    width:26px;
                    height:24px
                }
                
                li{
                    list-style-type: none;
                }

                li a{
                    color: white
                }

              
                @media screen and (min-width: 620px){
                    .footer{
                        font-size: 16px
                    }

                    .footer__images{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .footerInterfaz{ 
                        flex-direction: row;
                        alignItems: center; 
                        justify-content: space-between;
                        backgroundColor: #2e4101; 
                        color: white; 
                        font-size: small; 
                        padding: 0px 20px 0px 20px;
                        
                    }
    
      
                }

                @media screen and (min-width: 960px){
                    .footer{
                        font-size: 24px;
                        padding: 3rem 4.5rem;  

                    }

                    .footer__logo{
                        width: 255px;
                        height: 60px;                    
                    }

                    .footer__social{
                        align-items: center;     
                    }

                    .footer__social img:first-child{
                        width:37px;
                        height:35px
                    }

                    .footer__social img:last-child{
                        width:46px;
                        height:46px
                    }
                }

                @media print {
                  .footer,
                  .footerInterfaz {
                    display: none;
                  }
                }
                
            
            
            `}</style>

        </>

  )
}
