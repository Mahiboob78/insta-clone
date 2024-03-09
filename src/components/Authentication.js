import React, { useState } from 'react'
import "./Authentication.css"
import Login from './Login'
import Signup from './Signup'
// import styled from "styled-components";

function Authentication() {
  const [active, setActive] = useState("login")

  const handleChage = () => {
    setActive(active === "login" ? "signup" : "login")
  } 

  return (
    <div className='authentication'>
         <div className='auth_left'>
            <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
         </div>
         <div className='auth_right'>
          {/* <Login /> */}
          {active === "login" ? <Login /> : <Signup /> }
            <div className='auth_more'>
              
                <span>
                {active === "login" ? (<>Don't have an account? <button onClick={handleChage}>Sign up</button></>
                  ) 
                  : (
                      <>
                        Have an account? <button onClick={handleChage}>Log in</button>
                      </>
                    )} 
                </span>
            </div>
         </div>
    </div>
  )
}
export default Authentication

// const authentication = style.dev`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin: 0 50px 0 50px;

// > .auth_left{
//   flex: 0.5;
//   text-align: center;
// }

// > .auth_right{
//   flex: 0.5;
// }

// > .auth_left > img{
//   width: 400px;
//   margin-top: 40px;
// }

// > .auth_more{
//   border: 1px solid gray;
//   padding: 20px;
//   margin-left: 30px;
//   margin-right: 30px;
//   text-align: center;
//   margin-top: 15px;
// }

// > .auth_more > span{
//   font-weight: 500;
//   font-size: 14px;
// }

// > .auth_more > span > button{
//   background: 0;
//   border: 0;
//   font-weight: bolder;
//   color: #0095f6;
// }

// > .auth_more > span > button:hover{
//   cursor: pointer;
// }
// `