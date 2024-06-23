import styled from "styled-components";
import abt from "../assets/oyiboMan.jpg";
import { Link } from "react-scroll";
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={abt} alt="" />
        </Left>
        <Right>
          <h2>
          Advantages of Troco
          </h2>
          <p>
          Customers can purchase and sell a range of goods and services on Troco.
           We have assisted our clients in the purchase and/or sale of both tangible and intangible goods,
            such as jewelry, cars, websites, graphic design, domain names, and artwork, in addition to services.
             Regardless of the amount of the transaction, our service is a terrific way to secure you and your 
             consumers if you manage an auction site, marketplace, e-commerce business, or any other platform.
          </p>
          <p>
          No matter where the transaction is taking place, people use Troco when they need to acquire or 
          sell something of value but don't know the other party.
           Our service has been utilized by clients to finish transactions for a variety of websites,
           including e-commerce, auction, and classified ad organizations.
          </p>
          <Link to="download" smooth={true} duration={500} offset={-100}>
            <button>DOWNLOAD</button>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;

const Left = styled.div`
  width: 600px;
  height: 600px;
  /* background-color: gold; */
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Right = styled.div`
  p {
    width: 650px;
    margin-left: 20px;
  }

  h2 {
    font-size: 50px;
    margin: 0;
    margin-left: 20px;
  }

  button {
    width: 150px;
    height: 45px;
    border-radius: 30px;
    background: linear-gradient(to bottom, #398e3d, #3f8ebf);
    margin-top: 20px;
    margin-left: 20px;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;
const Wrapper = styled.div`
  width: 90%;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
