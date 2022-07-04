import { createGlobalStyle } from 'styled-components'
import { Utils } from './utils'

const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
    font-family: ${({ theme }) => theme.fonts.mainFont};  
    color: ${({ theme }) => theme.colors.mainColor};
}

a {
    font-family: ${({ theme }) => theme.fonts.mainFont};  
    color: ${({ theme }) => theme.colors.mainColor};
    text-decoration: none;
}

.title {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    font-weight: 600;  
}


nav {
    font-weight: 500;
    background: ${({ theme }) => theme.colors.secondaryColor};
}

li {
    list-style-type: none;
}

footer {
    color: ${({ theme }) => theme.colors.secondaryColor};
    background-color: ${({ theme }) => theme.colors.mainColor};
    font-size: 3.4vw;
}

h1 {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    color: ${({ theme }) => theme.colors.secondaryColor};
    font-weight: 700;  
}

.button {
    background-color: ${({ theme }) => theme.colors.btnColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 4px;
    border: none;
}

/* Components buttom */

.button__registro--producto{
  height: 42px;
  background:none;
  border:none;
  border-radius: 5px;
  outline: none;
  border: 2px solid #517201;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size:18px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 600;
  padding: 0 20px;
  cursor: pointer;
}

.disable {
  background:rgba(81, 114, 1, 0.4);
  border: 2px solid rgba(81, 114, 1, 0.4);
  cursor: auto
}

.button-main {
  height: 42px;
  background: #517201;
  border:none;
  border-radius: 5px;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size:18px;
  color:  white;
  font-weight: 600;
  padding: 0 20px;
  cursor: pointer;
}

.button-secondary {
  height: 42px;
  background:none;
  border:none;
  border-radius: 5px;
  outline: none;
  border: 2px solid #517201;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size:18px;
  color:  #517201;
  font-weight: 600;
  padding: 0 20px;
  cursor: pointer;
}

.disable-secondary {
  background:rgba(81, 114, 1, 0.4);
  color:white;
  border: none;
  cursor: auto;
}

/* Components Inputs, Select, Textarea */

input, select{
  height: 56px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size:16px;
  padding-left: 10px;
  border:none;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray
}

textarea {
  height: 176px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size:16px;
  resize: none;
  padding-left: 10px;
  padding-top: 15px;
  border:none;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray
}

table {
  border: 1px solid #AAAAAA;
  color: #000000;
  font-family: ${({ theme }) => theme.fonts.tableFont};
  font-weight: 400;
  margin-top: 1rem;
  border-collapse: collapse;
}

th, td , tr{
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #AAAAAA;
  border-spacing: 0;                    
  height: 50px;
  width: 150px;
}  

input[type=file]{
  display:none
}

input[type=text]:focus,
input[type=email]:focus,
input[type=number]:focus
input[type=file]:focus,
input[type=password]:focus,
textarea:focus,
select:focus{
  border: 2px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
box-shadow: 0 0 0 30px white inset;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance:textfield;
}


/*Modal Css*/

.modal__container  {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  background-color: white;
  padding: 35px 25px;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 500;
}

.modal__wrapper{
  position: fixed;
  background-color: white;
  pointer-events: all;
  z-index: 500;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  width: 60%;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  padding: 35px 25px;
  border-radius: 5px;
}

.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(158, 158, 158, 0.6);
  z-index: 400
}

/*Preview Foto*/

.preview-foto--principal{
  width: 543px;
  height: 538px;
  object-fit: cover;
}

.preview-foto--anexa{
  width: 248px;
  height: 258px;
  object-fit: cover;
}

.swiper-slide {
  height: auto !important;
}

.swiper-button-prev {
  display: none !important;
}

.swiper-button-next {
  color: #517201 !important;
}

.swiper-container {
  width: 100% !important;
}

${Utils}
`

export default GlobalStyles
