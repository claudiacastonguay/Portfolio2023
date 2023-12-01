import React, {useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Router from 'next/router';
import Footer from '../../comps/Footer';
import NextLink from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Head from 'next/head';



function ToTop(){
    document.documentElement.scrollTop = 0;
}




export default function UIUXDesign () {
    return <div className='uiux'>

    <Header uicolor={"#15C4B6"} uifont="30pt" />

    <Head>
        <link rel="shortcut icon" href="/favicon2.svg" />
        <title>Claudia Castonguay - Digital Design</title>

        <meta name="description" content="Below are my biggest web application projects that I've helped design and develop with different teams." />
        <meta property="og:title" content="UI/UX Design Projects - Claudia Castonguay" />
    </Head>


        {/* INTRO */}

        <div id='centeruititle'>

        <div className='uititlecont'>
            
            <div className='subtitlecont'>
                <h1 className='uiuxtitle'>UI/UX DESIGN</h1>
                <h5 className='uiuxsubtitle'>Below are my biggest web application projects that I've helped design and develop with different teams.</h5>
            </div>

            <NextLink className='scroll' href="/ui-ux-design#earthherotitle">
                <div className='downarrowcont2'>
                    <img className='downarrow' src='/whitedownarrow.svg' alt='scroll down arrow'></img>
                </div>
            </NextLink>
        </div>

        </div>



        {/* EARTH HERO */}

    <div id='earthherocont'>
        <h1 id='earthherotitle'>EARTH HERO</h1>
    </div>

        <div className='flexearthhero'>
            <div className='earthheroimg'>
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/earthherogallery.png' alt='Earth Hero mobile application (1/3)' />
                    <img src='/earthherogallery2.png' alt='Earth Hero mobile application (2/3)'/>
                    <img src='/earthherogallery3.png' alt="Earth Hero mobile application (3/3)"/>
                </Slider>
            </div>
        </div>

        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The PDFs of Earth Hero's style guide and user research documentation are available here:</h4>
                

                <div className="flexbuttons">

                    <div id="mobilebutton">
                        <Button text="STYLE GUIDE" externallink={"https://drive.google.com/file/d/1tC4xmnL_hHuwGkZ-MN74B2kE7ABWEeR9/view?usp=sharing"}/>
                     </div>
                     <div id='mobilebutton'>
                        <Button text="USER RESEARCH" externallink={"https://drive.google.com/file/d/10GdGj15OcSi283O86dAk0oBJm9tpzY3M/view?usp=sharing"}/>
                    </div>
                    <div>
                        <Button text="GITHUB" externallink={"https://github.com/mathieuharvey/Earth-Hero"}/>
                    </div>

                </div>
            </div>
        </div>

    <div className='uiprojectinfo'>
        <div className='subprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Earth Hero is a mobile educational web application that teaches users about climate change issues around the world. It allows you to select a topic to learn about and quizzes you afterwards on the information you've read. This app is aimed at a young target audience, specifically kids around 10-17 years of age. The language used in the app is simple for the users to understand. Earth Hero's UI is laid out in a clean and intuitive manner giving users an effortless learning experience.</p>
        <p className='uiprojecttext'>Climate change is still a severe problem to this day. The goal for Earth Hero is simply to educate and inform. The user for this app doesn't need to be someone in the younger generations; it can be for anyone who wants to learn and discover the different major climate change issues existing today.</p>
        <p className='uiprojecttext'>However, Earth Hero was not intended to be solely an informational app. So we implemented a page within each climate change topic that suggests a few ways the user can help to make a difference. We hope that this app will not only educate users but encourage them to make a contribution towards improving climate change.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>I was one of three team members that created this application. All three team members were enrolled as designers and front-end developers. I was responsible for most of the development of this app and only helped out with a few design aspects.</p>

        <h2 className='uisubtitle'>TRY IT OUT</h2>
        <p className='uiprojecttext'>You can try out Earth Hero on your phone's browser or on a desktop browser. If you choose to view it on a desktop, make sure you right-click the screen and click 'Inspect.' Then press <b>Ctrl (Cmd) + Shift + M</b> to switch to a mobile view.</p>

        <div className='uibutton'>
            <Button text='TRY EARTH HERO' externallink={"https://earth-hero.vercel.app/"}/>
        </div>

        </div>
    </div>



    <NextLink className='scroll' href="/ui-ux-design#craigslisttitle">
        <div className='downarrowcont'>
            <img className='downarrow' src='/downarrow.svg' alt='scroll down arrow'></img>
        </div>
    </NextLink>


    
    {/* CRAIGSLIST REDESIGN */}



    <div id='craigslistcont'>
        <h1 id='craigslisttitle'>CRAIGSLIST REDESIGN</h1>
    </div>

        <div className='flexearthhero'>
            <div className='craigslistgallery'>
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/craigslistgallery.png' alt="Craigslist Redesign (1/4)" />
                    <img src='/craigslistgallery2.png' alt="Craigslist Redesign (2/4)"/>
                    <img src='/craigslistgallery3.png' alt="Craigslist Redesign (3/4)"/>
                    <img src='/craigslistgallery4.png' alt="Craigslist Redesign (4/4)"/>
                </Slider>
            </div>
        </div>


        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The PDFs of the Craigslist Redesign style guide and user research documentation are available here:</h4>
                

                <div className="flexbuttons">
                    
                <div id="mobilebutton">
                    <Button text="STYLE GUIDE" externallink={"https://drive.google.com/file/d/1cfvHDrGYT3pkHCzYiLulWMQ53h4ApzFX/view?usp=sharing"}/>
                    </div>
                    <div>
                        <Button text="USER RESEARCH" externallink={"https://drive.google.com/file/d/1qNdOuBEtLCiNvrgJ5E3Y7-7srY4R8dLD/view?usp=sharing"}/>
                    </div>

                </div>
            </div>
        </div>


    <div className='uiprojectinfo'>
        <div className='subprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Most of us have visited <a target='_blank' href='https://craigslist.org'>Craigslist.com</a>, whether it be to buy something cheap, check out discussion forums, or sell something for a bit of extra cash. However, you may have noticed that Craigslist's website looks a little bit... messy? Cluttered and archaic too? As a UI/UX designer student, I was assigned to give Craigslist a whole new look. The project required that we completely redesign Craigslist and give it an entirely new user interface and a much better user experience.</p>

        <p className='uiprojecttext'>We noticed that the original Craigslist lacks a lot of white space. In addition, the links and text are all cluttered together and the interface is not all that intuitive. In our redesign we made use of lots of white space, more visuals, more color, and larger font. For a better UX we gave the new Craigslist some better functionalities. For instance, we added a clear and easy-to-use filter as well as some drop-down menus from the main navigation bar.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>I was one of four team members that created this application. The team consisted of one designer/front-end developer, one front-end developer, a full-stack developer for the back-end, and myself as a designer. I was responsible for the majority of the design of this web application. I created about 90% of the high-fidelity mockups which included both mobile and desktop versions.</p>

        <h2 className='uisubtitle'>PROTOTYPES</h2>
        <p className='uiprojecttext'>The prototypes of this app are available for you to check out below for desktop and mobile.</p>


        <div className='uibuttonflex'>
            <div className='uibutton'>
                <Button text='MOBILE PROTOTYPE' externallink={"https://xd.adobe.com/view/b4cb4a2b-74c9-42d6-8a9c-35e4b8345d7e-e198/?fullscreen"}/>
            </div>

            <div className='uibutton'>
                <Button text='DESKTOP PROTOTYPE' externallink={"https://xd.adobe.com/view/68a6fd50-d9a4-4b03-b4aa-ac426d8ea144-3df5/?fullscreen"} />
            </div>
        </div>

        </div>

    </div>







    <NextLink className='scroll' href="/ui-ux-design#sjtitle">
        <div className='downarrowcont'>
            <img className='downarrow' src='/downarrow.svg' alt='scroll down arrow'></img>
        </div>
    </NextLink>







    {/* SHIMA JAVAN DESIGN WEBSITE */}
    


    <div id='sjcont'>
        <h1 id='sjtitle'>SHIMA JAVAN <br /> INTERIOR DESIGN</h1>
        {/* <h3 id='sjsubtitle'>Shima Javan Interior Design</h3> */}
    </div>

        <div className='flexearthhero'>
            <div className="ddgallery">
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/sjgallery1.png' alt="Shima Javan Interior Design website design (1/3)" />
                    <img src='/sjgallery2.png' alt="Shima Javan Interior Design website design (2/3)"/>
                    <img src='/sjgallery3.png' alt="Shima Javan Interior Design website design (3/3)"/>
                </Slider>
            </div>
        </div>


        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The early prototypes for desktop and mobile of this website can be viewed here:</h4>
                    <h4 id='sjexplain'>(Prototypes are not exactly replicated in the real website due to design changes made during development; fake images are used in the mockups on all pages).</h4>
                

                <div className="flexbuttons">
                    
                    <div id='mobilebutton'>
                        <Button text="DESKTOP PROTOTYPE" externallink={"https://www.figma.com/proto/HnrdNzq3Uxs6YcFOaD0Bv9/SJD-Desktop-Hi-Fi?scaling=min-zoom&page-id=0%3A1&node-id=62%3A3905"}/>
                    </div>
                    <div>
                        <Button text="MOBILE PROTOTYPE" externallink={"https://www.figma.com/proto/6G3OyJn4ISI79JPc0rdQeR/SJD-Mobile-Hi-Fi?scaling=min-zoom&page-id=0%3A1&node-id=84%3A209"}/>
                    </div>

                </div>
            </div>
        </div>



    <div className='uiprojectinfo'>
        <div className='subprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Shima Javan Interior Design is a start-up interior design business. Since this business is new, it previously did not have an existing website and lacked many marketing and promotional strategies. Part of my job while working for this business was to design and develop its website.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>I designed this site alongside my co-worker and I was responsible for developing 90% of the website. This website was developed using <a target="_blank" href='https://squarespace.com'>Squarespace</a>. Due to Shima's preferences and requests, I had the opportunity to add lots of custom CSS to this website to achieve the desired layout and design.</p>

        <h2 className='uisubtitle'>VISIT THE SITE</h2>
        <p className='uiprojecttext'>Click below to visit Shima Javan Interior Design's website.</p>
        <p className='uiprojecttext'><b>*Note:</b> Design alterations have been made by a different contributor after 2022. The final website design I created is best depicted in the <a target="_bland" href='https://www.figma.com/proto/HnrdNzq3Uxs6YcFOaD0Bv9/SJD-Desktop-Hi-Fi?scaling=min-zoom&page-id=0%3A1&node-id=62%3A3905'>desktop</a> and <a target="_bland" href='https://www.figma.com/proto/6G3OyJn4ISI79JPc0rdQeR/SJD-Mobile-Hi-Fi?scaling=min-zoom&page-id=0%3A1&node-id=84%3A209'>mobile</a> prototypes.</p>


            <div className='uibutton'>
                <Button text='VISIT WEBSITE' externallink={"https://www.shimajavan.com"} />
            </div>
        
        </div>
    </div>







    <NextLink className='scroll' href="/ui-ux-design#ddtitle">
        <div className='downarrowcont'>
            <img className='downarrow' src='/downarrow.svg' alt='scroll down arrow'></img>
        </div>
    </NextLink>







    {/* DAIRY DELIGHT */}


    <div id='ddcont'>
        <h1 id='ddtitle'>DAIRY DELIGHT</h1>
    </div>

        <div className='flexearthhero'>
            <div className="ddgallery">
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/ddgallery.png' alt="Dairy Delight website design (1/3)" />
                    <img src='/ddgallery2.png' alt="Dairy Delight website design (2/3)" />
                    <img src='/ddgallery3.png' alt="Dairy Delight website design (3/3)" />
                </Slider>
            </div>
        </div>


        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The PDFs of Dairy Delight's style guide and wireframes are available here:</h4>
                

                <div className="flexbuttons">
                    
                    <div id='mobilebutton'>
                        <Button text="STYLE GUIDE" externallink={"https://drive.google.com/file/d/1GXxWpWGI94Mkb2Iux1WnP2hIhy1nUsdc/view?usp=sharing"}/>
                    </div>
                    <div>
                        <Button text="WIREFRAMES" externallink={"https://drive.google.com/file/d/1Lyjo9UaNr1XzoouNLnfp_UfGkVwZRLRx/view?usp=sharing"}/>
                    </div>

                </div>
            </div>
        </div>



    <div className='uiprojectinfo'>
        <div className='subprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Dairy Delight is a faux small ice cream business that sells ice cream, milkshakes, and cakes made with natural ingredients. They also offer an online delivery service providing tubs of ice cream on their website.</p>
        <p className='uiprojecttext'>The purpose of this project was to come up with any type of small business and give it branding and a website. This site was not developed; it was only made into a high-fidelity mockup.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>This project was completed by a team of two members, including myself. Since this project was solely design-focused, the design was split evenly between my team member and I. I was responsible for designing the Home page, the Menu page, and the Ice Cream Menu page. I also created the header and footer for this mockup.</p>

        <h2 className='uisubtitle'>PROTOTYPE</h2>
        <p className='uiprojecttext'>Click below to try out the desktop prototype of Dairy Delight!</p>


            <div className='uibutton'>
                <Button text='SEE PROTOTYPE' externallink={"https://xd.adobe.com/view/e920124e-9f4e-4bfa-ae13-5ab5774b44b8-bc73/?fullscreen"} />
            </div>
        
        </div>
    </div>


    <div className='margintop'>
        <div className='backtotopui'>
            <img onClick={ToTop} className='totoparrow' src='/uparrow.svg' alt='Back to Top arrow'/>
            <h4 className='totoptext'>Back to Top</h4>
        </div>
    </div>



    <div>
        <Footer />
    </div>



    </div>
}