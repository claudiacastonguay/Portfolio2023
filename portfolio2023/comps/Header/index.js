import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router from 'next/router';


const Container = styled.div`
    // width: 100vw;
    height: 80px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 5px rgba(68, 68, 68, 0.3);
`;

const Menu = styled.div`
    visibility: ${props=>props.showmenu ? "visible" : "hidden"};
    opacity: ${props=>props.fadein ? 1 : 0};
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(233, 233, 233);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition:opacity 0.25s;
    transition-timing-function: ease;
`;

const NavUI = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;
    color: ${props=>props.uicolor ? "#15C4B6" : "black"};

    &:hover{
        color: #15C4B6;
    }
`;

const NavGraphic = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;
    color: ${props=>props.graphiccolor ? "#15C4B6" : "black"};

    &:hover{
        color: #15C4B6;
    }
`;

const NavAbout = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;
    color: ${props=>props.aboutcolor ? "#15C4B6" : "black"};

    &:hover{
        color: #15C4B6;
    }
`;

const NavHome = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;

    &:hover{
        color: #15C4B6;
    }
`;

const MobileNavUI = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    font-size: ${props=>props.uifont ? "25pt" : "20pt"};
    transition: 0.25s;
    color: ${props=>props.uicolor ? "#15C4B6" : "black"};

    &:hover{
        color: #15C4B6;
    }
`;

const MobileNavGraphic = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    font-size: ${props=>props.graphicfont ? "25pt" : "20pt"};
    transition: 0.25s;
    color: ${props=>props.graphiccolor ? "#15C4B6" : "black"};

    &:hover{
        color: #15C4B6;
    }
`;

const MobileNavAbout = styled.h3`
    cursor: pointer;
    font-size: ${props=>props.aboutfont ? "25pt" : "20pt"};
    margin-bottom: 60px;
    transition: 0.25s;
    color: ${props=>props.aboutcolor ? "#15C4B6" : "black"};

    &:hover{
        color: #15C4B6;
    }
`;

const MobileNavHome = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    font-size: ${props=>props.homefont ? "25pt" : "20pt"};
    transition: 0.25s;
    color: ${props=>props.homecolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const Navigations = styled.div`
    display: ${props=>props.mobilehidden ? 'none' : 'flex'};
    @media (max-width: 1200px){
        display: none;
    }
`;

const HomeNav = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
`;

const SubCont = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
`;

const HamMenu = styled.img`
    height: 40px;
  display: ${props => props.show ? 'flex' : 'none'};
  margin-right: 20px;
  cursor: pointer;
`;

const Close = styled.img`
    display: ${(props) => (props.showclose ? 'flex' : 'none')};
    // display: flex;
    height: 40px;
    margin-right: 20px;
    cursor: pointer;
    z-index: 3;
    position: fixed;
    top: 3;
    right: 0;
`;

const LinksandMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;



function routeHome(){
    if(true){
        Router.push("/");
    }
}

function routeUIUX(){
    if(true){
        Router.push("/ui-ux-design");
    }
}

function routeGraphicDesign(){
    if(true){
        Router.push("/graphic-design");
    }
}

function routeAbout(){
    if(true){
        Router.push("/about")
    }
}





const Header = ({show, mobilehidden, uicolor, graphiccolor, aboutcolor, homecolor, graphicfont, uifont, homefont, aboutfont}) => {

    const [showmenu, setMenu] = useState(false);
    const [fadein, changeOpacity] = useState(0);
    const [showclose, setClose] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    



    return <Container>
        

        <Close src="close.svg" showmenu={showmenu} showclose={showclose} fadein={fadein} onClick={() => {
    setClose(!showclose);
    setMenu(!showmenu);
    changeOpacity(!fadein);
  }}/>

        <Menu showmenu={showmenu} fadein={fadein}>
        <MobileNavHome homecolor={homecolor} homefont={homefont} onClick={()=>{
            routeHome();
        }}>HOME</MobileNavHome>
            <MobileNavUI uicolor={uicolor} uifont={uifont} onClick={()=>{
            routeUIUX();
        }}>UI/UX DESIGN</MobileNavUI>
            <MobileNavGraphic graphiccolor={graphiccolor} graphicfont={graphicfont} onClick={()=>{
            routeGraphicDesign();
        }}>GRAPHIC DESIGN</MobileNavGraphic>
            <MobileNavAbout aboutcolor={aboutcolor} aboutfont={aboutfont} onClick={()=>{
            routeAbout();
        }}>ABOUT</MobileNavAbout>
        </Menu>

<SubCont>
        <HomeNav>
            <NavHome onClick={()=>{
            routeHome();
        }}>CLAUDIA CASTONGUAY</NavHome>
        </HomeNav>

<LinksandMenu>

        {isMobile ? null : (
          <Navigations mobilehidden={mobilehidden}>
            <NavUI uicolor={uicolor} onClick={()=>{
            routeUIUX();
        }}>UI/UX DESIGN</NavUI>

        <NavGraphic graphiccolor={graphiccolor} onClick={()=>{
            routeGraphicDesign();
        }}>GRAPHIC DESIGN</NavGraphic>

        <NavAbout aboutcolor={aboutcolor} onClick={()=>{
            routeAbout();
        }}>ABOUT</NavAbout>
          </Navigations>
        )}


     
          <HamMenu src="/menu.svg" show={'flex'} showmenu={showmenu} fadein={fadein} showclose={showclose} onClick={() => {
            setMenu(!showmenu);
            setClose(!showclose);
            changeOpacity(!fadein);
        }}
          />

</LinksandMenu>
       

    </SubCont>

    </Container>

   
};





Header.defaultProps = {
    show: 'none',
    textcolor: "black"
}


export default Header;

Header.getInitialProps = ({ req }) => {
    const isMobile = req ? req.headers['user-agent'].match(/Mobile/) !== null : false;
    return { isMobile };
  };