import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Footer from '../../comps/Footer';
import Head from 'next/head';


export default function About (){
    return <main>

        <Header aboutcolor={"#15C4B6"} aboutfont="27pt" />

        <Head>
            <link rel="shortcut icon" href="/favicon2.svg" />
            <title>Claudia Castonguay - Digital Design</title>

            <meta name="description" content="Claudia is an aspiring Junior Digital Designer who recently graudated from British Columbia Institute of Technology (BCIT). She has experience designing and developing simple responsive websites and designing digital assets for marketing, advertising, and branding purposes." />
            <meta property="og:title" content="About Claudia Castonguay" />
        </Head>




        <div className='aboutmain'>
            <div className='aboutflex'>
                <div className='abouttext'>
                        <h1 className='abouttitle'>A bit about me.</h1>
                        <h5 className='abtext'>Hello! My name is Claudia Castonguay and I'm a very passionate digital designer. I love getting my hands on a computer and working with different softwares to create digital assets and layouts.</h5>
                        <h5 className='abtext'>Ever since I was very young I've had a love for technology. I've always loved to work with phones, computers, or anything in between. I admire seeing good UI/UX designs. They always inspire me to create effective and aesthetic layouts for different web and mobile applications.</h5>
                        <h5 className='abtext'>Now, with two years of digital design experience, I'm ready to put my skills into action. I'm looking forward to gaining valuable experience designing in a real work environment.</h5>

                        <div className='aboutbuttons'>
                            <div className='resumemargin'>
                                <Button text={"RESUME"} externallink={"https://drive.google.com/file/d/1Wh9ZB924WB01414JJrtBKvMv7O-A2GFK/view?usp=sharing"}/>
                            </div>
                                <Button text={"LINKEDIN"} externallink={"https://www.linkedin.com/in/claudiacastonguay/"}/>
                        </div>

                </div>

                <div className='aboutimg'>
                    <img className='me' src='/aboutpage.png' alt='Portrait photo of Claudia Castonguay' />
                </div>


            </div>
        </div>



        <div>
            <Footer />
        </div>



    </main>
}