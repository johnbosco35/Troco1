import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>
        {" "}
        Copyright &copy; {new Date().getFullYear()} Troco. All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  background-color: black;
  color: white;
  height: 70px;

  p {
    margin-top: 0;
    display: flex;
    align-items: center;
  }
`;
