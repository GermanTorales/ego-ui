import styled from "styled-components";

const styles = {
  Container: styled.div`
    position: relative;
  `,

  // NAVBAR
  NavbarContainer: styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
  `,

  // NAVBAR LEFT

  NavbarLeft: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
  `,

  LogoImage: styled.img`
    width: 38px;
    height: 48px;
    object-fit: contain;
  `,

  Breadcrumb: styled.div`
    display: flex;
    margin-left: 80px;
    @media (max-width: 600px) {
      display: none;
    }
  `,

  BreadcrumbItem: styled.div`
    font-family: "Montserrat-Semibold";
    font-size: 14px;
    margin-left: 50px;
    color: ${(props) => props.color};
    border-bottom: ${(props) => props.border};
    padding: calc(39px - 14px);
  `,

  // NAVBAR RIGHT

  NavbarRight: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 2%;
  `,

  Icon: styled.div``,

  MenuText: styled.p`
    margin-top: -3px;
    margin-right: 5px;
    width: 41px;
    height: 18px;
    font-family: "Montserrat-Regular";
    font-size: 14px;
    font-style: normal;
    letter-spacing: normal;
    color: #191919;
    @media (max-width: 600px) {
      display: none;
    }
  `,

  // MENU TOGGLE

  Divider: styled.div`
    width: 100%;
    float: right;
    border: 1px solid #efeeef;
  `,

  ToggleMenu: styled.div`
    z-index: 10;
    position: absolute;
    width: 35%;
    right: 0;
    text-align: right;
    padding: 20px 0;
    display: ${(props) => props.display};

    @media (max-width: 600px) {
      width: 100%;
    }
  `,

  MenuContainer: styled.div`
    padding: 20px 0;
    background: ${(props) => props.background};
  `,

  MenuList: styled.ul`
    list-style: none;
    padding-right: 40px;
  `,

  MenuItem: styled.li`
    text-decoration: none;
    padding: 10px 0;
    font-size: 20px;
    font-family: "Montserrat-Regular";
    cursor: pointer;
  `,

  CloseButtom: styled.div`
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  `,

  TextCloseButtom: styled.p`
    font-family: "Montserrat-Regular";
    font-size: 14px;
    padding-top: 3px;
    margin-right: 5px;
    cursor: pointer;
  `,
};

export default styles;
