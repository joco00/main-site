import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navBar, container, image, navLinkItem, transition, xicon, baricon } from './navBar.module.css'
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import FadeImage from './fadeImage';



const NavBar = ({ links }) => {
    const [show, setShow] = useState(true);
    const [path, setPath] = useState('/');

    useEffect(() => {
        setPath(window.location.pathname)
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                console.log("back at top");
                setShow(true)
            } else if (show && window.pageYOffset > 10) {
                console.log("away from top");
                setShow(false)
            }

        }

        // return () => (window.onscroll = null);
    });


    return (
        <div className={navBar}
            style={show ? { backgroundColor: 'white' } : {}}>

            <div
                className={container}
                onClick={() => { setShow(!show); }}>

                <div
                    className={image}
                    style={!show ? { opacity: 1 } : { opacity: 0 }}>

                    {/* <StaticImage
                        src='../images/navBar.png'
                        alt="open navBar"
                        width={42} aspectRatio={1}
                        loading="eager" /> */}
                    <span className={baricon}>≡ </span>
                </div>
                <div
                    className={image}
                    style={show ? { opacity: 1 } : { opacity: 0 }}>

                    {/* <StaticImage
                        src='../images/x_good.png'
                        alt="close navBar"
                        width={42} aspectRatio={1}
                        loading="eager" /> */}

                    <span className={xicon}> 》 </span>
                </div>
            </div>



            <div
                className={transition}
                style={show ? { opacity: 1 } : { opacity: 0 }}
            >

                {/* <Router>
                    <Switch>
                        {links.map((link) => (
                            <Route path={link.url}
                                component={link.comp}
                                className={navLinkItem}
                                style={link.url === path ? { opacity: 1 } : { opacity: .5 }}>
                                {link.name}
                            </Route>

                        ))}
                    </Switch>
                </Router> */}
                {links.map((link) => (
                    <Link
                        to={link.url}
                        className={navLinkItem}
                        style={link.url === path ? { opacity: 1 } : { opacity: .5 }}>
                        {link.name}
                    </Link>))}
            </div>



        </div >
    )
}

export default NavBar