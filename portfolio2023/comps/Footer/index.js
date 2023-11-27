import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Container = styled.div`
    background-color: black;
    color: white;
    margin-top: 150px;
`;

const Name = styled.h1`
    margin: 0;
`;

const SubTitle = styled.h5`
    color: #c0c0c0;
    margin: 0;
`;

const MainText = styled.div`
    padding: 10%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2%;
`;

const Location = styled.p`
    font-size: 15pt;
    margin-top: 40px;
`;

const Email = styled.a`
    font-size: 13pt;
    font-family: 'Yantramanav', sans-serif;
    color: #15C4B6;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color:white;
    }
`;

const Phone = styled.p`
    font-size: 13pt;
    color: #15C4B6;
    font-weight: bold;
    margin: 0;
    margin-top: 15px;
`;

const Contacts = styled.div`
    margin-top: 70px;
`;

const Socials = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    // use when instagram added
    // max-width: 500px;
    max-width: 300px;
`;

const SocialLink = styled.a`
    cursor: pointer;
    font-family: NexaBold;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    :hover{
        color: #15C4B6;
    }
`;

const Name2 = styled.h1`
    margin: 0;
    font-size: 27pt;
`;

const SubTitle2 = styled.h5`
    color: #c0c0c0;
    margin: 0;
    margin-top: 10px;
    font-size: 13pt;
`;

const Location2 = styled.p`
    font-size: 13pt;
    margin-top: 40px;
`;

const SocialLink2 = styled.a`
    cursor: pointer;
    font-size: 11pt;
    font-family: NexaBold;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    :hover{
        color: #15C4B6;
    }
`;

const Socials2 = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    // use when instagram added
    // max-width: 285px;
    max-width: 230px;
`;

const Copyright = styled.p`
    color: lightgray;
    font-family: 'Yantramanav', sans-serif;
    font-size: 11pt;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`;

const GithubLink = styled.a`
    cursor: pointer;
    font-family: NexaBold;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    :hover{
        color: #15C4B6;
    }
    margin-left: 10px;
`;

const GithubCont = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    padding-top: 30px;
    margin-top: 80px;
`;

const GithubIcon = styled.img`
    height: 25px;
`;


const Footer = () => {


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (<Container>


    {isMobile ? (
        //MOBILE
    <MainText>
            <Name2>CLAUDIA CASTONGUAY</Name2>
            <SubTitle2>DIGITAL DESIGN / FRONT-END DEVELOPMENT</SubTitle2>
            <br />
            <Location2>Vancouver, BC <br /> Canada</Location2>

        <Contacts>
            <Email target='_blank' href={'mailto:claudcastonguay@gmail.com'}>claudcastonguay@gmail.com</Email>
            <br />
            <Phone>604-396-8378</Phone>
        </Contacts>

        <Socials2>
            <SocialLink2 target='_blank' href={'https://drive.google.com/file/d/1Wh9ZB924WB01414JJrtBKvMv7O-A2GFK/view?usp=sharing'}>RESUME</SocialLink2>
            <SocialLink2 target="_blank" href={'https://www.linkedin.com/in/claudiacastonguay/'}>LINKEDIN</SocialLink2>
            
            {/* ADD INSTAGRAM LATER */}

            {/* <SocialLink2 onClick={()=>{
                alert('Currently Unavailable');
            }}>INSTAGRAM</SocialLink2> */}
        </Socials2>

            <GithubCont>  
                <GithubIcon src='githubicon.svg' />
                <GithubLink target='_blank' href={'https://github.com/claudiacastonguay/Portfolio2023'}>Portfolio GitHub</GithubLink>
            </GithubCont> 
            
         </MainText>

) : (
     //DESKTOP  
        <MainText>
            <Name>CLAUDIA CASTONGUAY</Name>
            <SubTitle>DIGITAL DESIGN / FRONT-END DEVELOPMENT</SubTitle>
            <br />
            <Location>Vancouver, BC <br /> Canada</Location>

        <Contacts>
            <Email target='_blank' href={'mailto:claudcastonguay@gmail.com'}>claudcastonguay@gmail.com</Email>
            {/* <br /> */}
            <Phone>604-396-8378</Phone>
        </Contacts>

        <Socials>
            <SocialLink target='_blank' href={'https://drive.google.com/file/d/1Wh9ZB924WB01414JJrtBKvMv7O-A2GFK/view?usp=sharing'}>RESUME</SocialLink>
            <SocialLink target="_blank" href={'https://www.linkedin.com/in/claudiacastonguay/'}>LINKEDIN</SocialLink>
            
            {/* ADD INSTAGRAM LATER */}
            
            {/* <SocialLink onClick={()=>{
                alert('Currently Unavailable');
            }}>INSTAGRAM</SocialLink> */}
        </Socials>

            <GithubCont>  
                <GithubIcon src='githubicon.svg' />
                <GithubLink target='_blank' href={'https://github.com/claudiacastonguay/Portfolio2023'}>Portfolio GitHub</GithubLink>
            </GithubCont> 
            

         </MainText>

)} 

             

            {/* <Center>
                <Copyright>Copyright © 2021 Claudia Castonguay - All Rights Reserved</Copyright>
            </Center> */}

    </Container>
    );

};




Footer.defaultProps = {

}


export default Footer;