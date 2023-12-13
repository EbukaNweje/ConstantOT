import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HeroSection from "./HeroSection/HeroSection"
import Carousel from "./Carousels/Carousel"
import TradeChat from './Trade/TradeChat'
import MyHeroPage from "./Hero2/Hero"
import Authtomated from './Land6/Authtomated'
import HowToStart from "./HowToStart/HowToStart"
// import Question from "./Faq/Question"
import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';
import 'animate.css';



const LandingPages = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [numberChange, setNumberChange] = useState(0)

  // const ShowName = [
  //   {
  //     name: 'Eze'
  //   },
  //   {
  //     name: 'Favour'
  //   },
  //   {
  //     name: 'Ebuka'
  //   },
  // ]

  // useEffect(() => {
  //   // Function to toggle the component's visibility
  //   const toggleVisibility = () => {
  //     setIsVisible((prev) => !prev);
  //   };
  //   const toggleVisibilitynew = () => {
  //     const number = Math.floor(Math.random() * ShowName.length)
  //     setNumberChange(number)
  //     console.log(number)
  //   };

  //   // Set up an interval to toggle visibility every 60 seconds (1 minute)
  //   const intervalId = setInterval(toggleVisibility, 5000); // 60000 milliseconds = 60 seconds
  //   const intervalIdnew = setInterval(toggleVisibilitynew, 5000); // 60000 milliseconds = 60 seconds
  //   // Clear the interval when the component unmounts
 
  //   return () => {
  //     clearInterval(intervalId);
  //     clearInterval(intervalIdnew); 
  //   };
    
  // }, []);



  return (
    <LandingPagesBody>
        <HeroSection/>
        <Carousel/>
        <TradeChat/>
        <MyHeroPage/>
        <Authtomated/>
        <HowToStart/>
        <Footer/>
        <LastFoter/>
       {
          // isVisible && (<DisplayShow>
          //   <span>{ShowName[numberChange].name}</span>
          // </DisplayShow>)
        }
        
    </LandingPagesBody>
  )
}

export default LandingPages

const LandingPagesBody = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 4%;
  position: relative;
`
const DisplayShow = styled.div`
    width: 20%;
    height: 60px;
    background: #fff;
    position: fixed;
    bottom: 10px;
    border-radius: 5px;
    left: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: bounceInUp; 
    animation-duration: 2s;
`