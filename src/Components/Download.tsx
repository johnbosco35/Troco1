import styled from "styled-components";
import Troco from "../assets/dashboard.png";
import google from "../assets/google-play-icon.png";
import apple from "../assets/apple.png";

const Portfolio = () => {
  return (
    <Container id="download">
      <Left>
        <Box>Download</Box>
        <h1>
        Easy-to-use and secure online escrow for both buyers and sellers.
        </h1>
        <p>
        This software makes sure that your transactions are easy and your money is safe with its user-friendly UI, cutting-edge security measures, and smooth experience. Easily handle transactions with ease and security at your fingertips by downloading the SafeDeposit,Troco,App now!
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
        <img src={Troco} alt="Troco..." />
      </Right>
    </Container>
  );
};

export default Portfolio;

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

const Logo = styled.div`
  img {
    height: 40px;
    margin-left: 10px;
  }
`;
const ButHold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
  margin-left: 80px;
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

const Box = styled.div`
  width: 130px;
  height: 30px;
  color: white;
  background: linear-gradient(to bottom, #398e3d, #3f8ebf);
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  /* margin-top: 80px; */
  margin-left: 80px;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: skewX(-15deg);
  transition: transform 0.5s; */

  img {
    height: 800px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    margin-left: 80px;
    font-size: 18;
    width: 600px;
    gap: 10px;
  }

  h1 {
    margin: 0;
    margin-left: 80px;
    font-size: 56px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  background-color: white;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    margin-top: 25px;
  }
  /* background-color: #f5f5f5; */

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;

    @media screen and (max-width: 900px) {
      font-size: 65px;
    }
  }

  h4 {
    position: absolute;
    top: 6%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;

    @media screen and (max-width: 900px) {
      top: 1.2%;
      font-size: 29px;
    }
  }
`;
