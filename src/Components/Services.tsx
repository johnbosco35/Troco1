import styled from "styled-components";

const Services = () => {
  return (
    <Container id="services">
      <Wrapper>
        <Up>
          <UpRight>
            <h1>
            Safety for Customers, Sellers, and Brokers
            </h1>
            <p>
            Troco Limited guarantees your peace of mind while offering you all the security required to carry out high-value transactions. Continue reading to learn how Troco services safeguard you as a customer, seller, or broker.
            </p>
          </UpRight>
          <UpLeft>
            <Cards>
              <Circle></Circle>
              <h3>Purchaser Safety</h3>
              <p style={{ width: "220px", marginBottom: "25px" }}>
              Troco Limited to safeguard you as a customer by making sure you get all of the products and/or services you were promised.
              </p>
              <a href="#">DOWNLOAD</a>
            </Cards>
            <Cards>
              <Circle></Circle>
              <h3>monetary security</h3>
              <p style={{ width: "200px", marginBottom: "25px" }}>
              Using the delivery details you supply, we monitor the delivery of goods that the buyer may trace.
              </p>
              <a href="#">DOWNLOAD</a>
            </Cards>
          </UpLeft>
        </Up>
        <Down>
          <Cards>
            <Circle></Circle>
            <h3>Seller Defense</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
            Seller Defense Troco Limited guarantees that after you provide the items being offered and/or services, you will get paid.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Financial Security</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
            Troco Limited confirms each and every payment. We will notify you when it is safe to deliver after we have verified the money.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Broker Defense</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
            Through the help of Troco Limited's three-party transaction solutions, you can easily open, manage, and conclude all of your trades as a broker.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Reduced Risk
            </h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
            Troco Limited uses a reliable and strong payment method to remove the risk of selling to an unidentified party.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Monetary security
            </h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
            monetary stability Payment to the Seller will not be disbursed until the agreed-upon inspection period has passed or until you have accepted the products.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Services;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #398e3d;
  border-radius: 50%;
  margin-top: 20px;
`;
const Down = styled.div`
  width: 100%;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  margin-top: 25px;
  justify-content: space-between;
`;
const UpRight = styled.div``;
const Cards = styled.div`
  border: 1px solid #398e3d;
  border-radius: 15px;
  padding-left: 13px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3e8eb2;
    color: white;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: none;
    background-position: right;
    a {
      color: white;
      text-decoration-color: #398e3d;
    }
  }
  a {
    color: #398e3d;
  }
`;
const UpLeft = styled.div`
  width: 40%;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
`;
const Up = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    width: 550px;
    margin: 0;
  }
  h1 {
    font-size: 55px;
    margin: 0;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;
