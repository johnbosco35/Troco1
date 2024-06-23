import React from "react";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import pix from "../assets/pexels-photo.webp";
import google from "../assets/google-play-icon.png";
import apple from "../assets/apple.png";
import "./style.css";
// import Typewriter from "typewriter-effect";

const Hero = () => {
  const [texts, setTexts] = useState([
    "businesses",
    "startups",
    "entrepreneurs",
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Container id="home">
      <Wrapper>
        <Left>
          <h1
            style={{
              color: "black",
              position: "relative",
            }}
          >
            The most secure  <br />service to entrust<br /> your money 
          </h1>
          <p>
          Easy to download, install, register, and quickly enjoy the benefits of our troco escrow services
          </p>
          <ButHold>
            <Button>
              <Logo>
                <img src={google} alt="loading..." />
              </Logo>
              <Text>
                <span>
                  Download on <br />
                  Google Play
                </span>
              </Text>
            </Button>
            <Button>
              <Logo>
                <img src={apple} alt="loading..." />
              </Logo>
              <Text>
                <span>
                  Get it on <br />
                  Apple Store
                </span>
              </Text>
            </Button>
          </ButHold>
        </Left>
        <Right>
          <svg
            id="10015.io"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ height: "650px", position: "absolute", right: "5%" }}
          >
            <defs>
              <clipPath id="blob">
                <path
                  fill="#474bff"
                  d="M126.491039 30.806539174999997C142.71970475 38.93842155 164.29021375000002 41.074083474999995 181.83622775 60.852402575C195.7016305 73.2434394 205.08383600000002 106.92488285 197.018858 132.7864735C190.85011 151.32895275 172.48709125 171.32768625 150.67787825 175.194116C128.780686 178.98398075 118.72450325 151.14990749999998 99.84703615000001 157.8631515C81.056846625 164.5313705 72.231774825 195.5870515 57.1941516 193.31092575C44.79339440000001 190.95869525 39.012502677499995 164.50551149999998 33.67914436 155.40601625C27.885690415750005 146.47927825000002 29.541873142500005 152.08297575 23.924230705000003 150.69492275C19.83119795 148.50717115 10.739356144999999 126.91802915 7.349641954 97.53218495C4.2496396149999995 72.89367505 0.7548210900000001 45.004444250000006 7.5764463300000005 30.183900875000003C20.121105425000003 4.714656095000002 47.564332525 0.17075937750000048 65.4156078 3.9960364124999996C83.26689102499999 7.745439994999998 104.47816715 17.764468100249996 126.491039 30.806539174999997Z"
                />
              </clipPath>
            </defs>
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              clipPath="url(#blob)"
              xlinkHref={`${pix}?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNjMxMDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcyNDc3NDR8&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080`}
              preserveAspectRatio="xMidYMid slice"
            ></image>
          </svg>
        </Right>
      </Wrapper>
    </Container>
  );
};

// const ChangingText = () => {
//   return (
//     <Typewriter
//       options={{
//         strings: ["business", "startups", "entrepreneurs"],
//         autoStart: true,
//         loop: true,
//       }}
//     />
//   );
// };

export default Hero;

// const MyText = styled.span`
//   animation: changeText;
//   @keyframes changeText {
//     0% {
//       content: "business";
//     }
//     33% {
//       content: "startups";
//     }
//     66% {
//       content: "entrepreneurs";
//     }
//     100% {
//       content: "business";
//     }
//   }

//   .typewriter #changingText::before {
//     content: "";
//     display: inline-block;
//     animation: changeText 9s infinite;
//   }
// `;

const ButHold = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* flex-direction: column; */
  /* margin-left: 3px; */
  margin-top: 30px;
  gap: 15px;
`;

const Text = styled.div`
  /* background-color: red; */
  margin-left: 5px;
  width: 70%;
  span {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 28px;
    font-weight: 800;
    background-color: red;
    width: 0;
    height: 0;
    margin: 0;
  }
`;

const Logo = styled.div`
  margin-left: 5px;

  img {
    height: 40px;
  }
`;

const Right = styled.div`
  width: 450px;
  height: 480px;
  margin-left: 50px;
  margin-bottom: 90px;
  margin-top: 40px;
  position: relative;
  /* overflow: hidden; */
  /* opacity: 0; */
  /* animation: slideInFromRight 1s ease-in-out 0.5s forwards; */

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 250px;
    margin: 0;
    margin-top: 30px;
    animation: none;
    opacity: 1;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    width: 80%;
    height: 80%;
  }
  img {
    /* width: 100%; */
    height: 74%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  width: 190px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;

  @media screen and (max-width: 900px) {
    width: 120px;
    font-size: 14px;
    height: 45px;
  }
`;

const Left = styled.div`
  margin-top: 70px;
  /* opacity: 0;
  transform: rotate(-45deg); Initial rotation */
  /* animation: slideInAndRotate 1s ease-in-out 0.5s forwards; */

  @media screen and (max-width: 900px) {
    margin-top: 45px;
  }
  h1 {
    font-size: 60px;
    margin: 0;
    margin-bottom: 10px;
    line-height: 5rem;
    margin-top: 50px;

    span {
      @keyframes fall {
        0% {
          transform: translateY(-50px); /* Start position above */
          opacity: 0; /* Initially invisible */
        }
        100% {
          transform: translateY(0); /* End position */
          opacity: 1; /* Fully visible */
        }
      }
    }
    /* color: transparent; */

    @media screen and (max-width: 900px) {
      font-size: 35px;
    }
  }
  p {
    width: 500px;
    margin: 0;
    font-size: 19px;

    @media screen and (max-width: 900px) {
      font-size: 15px;
      width: 300px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #cde4e4;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    height: 600px;
  }
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    height: 370px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;

  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: block;
  }
  /* margin-top: 80px; */
`;
