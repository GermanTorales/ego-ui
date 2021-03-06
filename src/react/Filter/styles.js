import styled from "styled-components";

// FILTROS CONTAINER GENERAL
const styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #ccc;
  `,

  // DROPDOWN DEL MENU FILTER
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

  // TITLE MENU FILTER
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
    font-family: "Montserrat-SemiBold" !important;
    font-size: 14px;
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
    @media (max-width: 1120px) {
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
    background: ${(props) => props.background};
    border-radius: 10px;

    @media (max-width: 1100px) {
      display: block;
      width: 100%;
      height: 40px;
      padding: 10px;
    }
  `,

  MenuButtonItem: styled.div`
    font-size: 14px;
    color: #373737;
    font-family: "Montserrat-Regular" !important;
    border: none;
    background: transparent;
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

    @media (max-width: 600px) {
      font-size: 12px;
    }
  `,

  // ORDER BY

  DropdownOrder: styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 1120px) {
      width: 25%;
    }

    @media (max-width: 1000px) {
      width: 30%;
    }

    @media (max-width: 820px) {
      width: 35%;
    }

    @media (max-width: 700px) {
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
    height: 200px;
    box-shadow: 2px 8px 20px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    border-radius: 5px;
  `,

  MenuOrderList: styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
  `,

  MenuOrderItem: styled.li`
    width: 100%;
    height: 40px;
    padding: 10px 0 10px 10px;
    background: ${(props) => props.background};
  `,

  OrderButton: styled.button`
    font-size: 14px;
    color: #373737;
    font-family: "Montserrat-Regular" !important;
    border: none;
    background: transparent;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  `,
};
export default styles;
