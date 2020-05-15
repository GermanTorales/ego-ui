import styled from "styled-components";

const styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #ccc;
  `,

  Dropdown: styled.div`
    width: 80%;
    display: flex;

    @media (max-width: 1100px) {
      width: 40%;
      justify-content: flex-start;
      flex-direction: column;
      position: relative;
    }
  `,

  TitleContainer: styled.div`
    &:hover {
      cursor: pointer;
    }

    @media (max-width: 1100px) {
      display: flex;
      flex-direction: row;
    }
  `,

  IconUpFilter: styled.img`
    display: none;
    @media (max-width: 1100px) {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-top: 15px;
      margin-left: 5px;
      object-fit: contain;
      background-color: #fff;
    }
  `,

  DropdownTitle: styled.p`
    width: 100px;
    font-family: "Montserrat-Semibold";
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.08px;
    margin: 0;
    color: #373737;
    padding: 10px 0;
    align-self: center;
    cursor: default;
    @media (max-width: 1100px) {
      align-self: flex-start;
      cursor: pointer;
    }
  `,

  MenuFilterContainer: styled.div`
    width: 100%;
    @media (max-width: 1100px) {
      width: 70%;
      position: absolute;
      display: ${(props) => props.toggle};
      margin-top: 40px;
      height: 160px;
      box-shadow: 2px 8px 20px 0 rgba(0, 0, 0, 0.15);
      background-color: #ffffff;
      border-radius: 5px;
    }

    @media (max-width: 850px) {
      width: 70%;
    }

    @media (max-width: 670px) {
      width: 80%;
    }

    @media (max-width: 580px) {
      width: 90%;
    }

    @media (max-width: 525px) {
      width: 100%;
    }
  `,

  MenuFilterList: styled.ul`
    margin: 0 0 0 35px;
    padding: 0;
    list-style: none;
    @media (max-width: 1110px) {
      margin-left: 0;
    }
  `,

  MenuFilterItem: styled.li`
    text-decoration: none;
    display: inline-block;
    margin-right: 30px;
    font-size: 14px;
    color: #373737;
    font-family: "Montserrat-Regular";
    @media (max-width: 1100px) {
      display: block;
      width: 100%;
      height: 40px;
      padding: 10px;
      font-size: 10px;
    }
  `,

  MenuButtonItem: styled.button`
    border: none;
    background: #fff;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }

    @media (max-width: 1100px) {
      padding: 0;
      border: none;
    }
  `,

  // ORDER BY

  DropdownOrder: styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 1100px) {
      width: 25%;
    }

    @media (max-width: 930px) {
      width: 30%;
    }

    @media (max-width: 780px) {
      width: 35%;
    }

    @media (max-width: 665px) {
      width: 40%;
    }

    @media (max-width: 580px) {
      width: 45%;
    }
    @media (max-width: 440px) {
      width: 55%;
    }
  `,

  TitleOrderContainer: styled.div`
    &:hover {
      cursor: pointer;
    }

    display: flex;
    flex-direction: row;
  `,

  IconUpOrder: styled.img`
    width: 8px;
    height: 8px;
    margin-top: 15px;
    margin-left: 5px;
    object-fit: contain;
    background-color: #fff;
  `,

  MenuOrderContainer: styled.div`
    position: absolute;
    width: 100%;
    display: ${(props) => props.toggle};
    margin-top: 40px;
    height: 160px;
    box-shadow: 2px 8px 20px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    border-radius: 5px;
  `,

  MenuOrderList: styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    @media (max-width: 1100px) {
      margin-right: 20px;
    }
  `,

  MenuOrderItem: styled.li`
    font-size: 14px;
    width: 100%;
    height: 40px;
    padding: 10px 0 10px 10px;
    color: #373737;
    font-family: "Montserrat-Regular";
    @media (max-width: 700px) {
      font-size: 10px;
    }
  `,

  OrderButton: styled.button`
    background: #fff;
    border: none;
  `,
};
export default styles;
