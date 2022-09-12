import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ContainerCartList = styled.ul`
  display: flex;
  flex-direction: row;

  gap: 20px;

  li {
    width: 200px;
    height: 310px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #ffffff;
    padding: 8px;
    border-radius: 8px;
  }

  li:hover {
    box-shadow: 2px 0 15px gray;
  }

  .cardImage {
    width: 90%;
    height: 40%;
  }

  img {
    width: 70px;
    height: 120px;
  }

  .cardInfo {
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .productTitle {
    margin: 0;

    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    color: #000;
  }

  .productprice {
    margin: 0;

    font-family: sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: blue;
  }

  button {
    width: 90%;
    height: 40px;

    background-color: #9533a7;
    border: none;
    border-radius: 10px;

    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #fff;

    cursor: pointer;
  }
`;
