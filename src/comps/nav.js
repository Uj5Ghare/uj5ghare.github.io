import React, { useState, useEffect, useCallback } from 'react';
import Resume from "./../assets/Resume.pdf"
import Avatar from "./../assets/Avatar.png"


import { Link } from 'react-scroll';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const [shownav, setShownav] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);


  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleNavItemClick = () => {
    setIsActive(false);
  }
  useEffect(() => {
    const handleResize = () => {
      setIsActive(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolledUp(currentScrollY > 0);

    if (currentScrollY > lastScrollY) {
      setShownav(false);
    } else {
      setShownav(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar]);


  return (
    <nav className={shownav ? 'active' : 'hidden'} style={{ backgroundColor: isScrolledUp ? '#0a192f' : 'transparent' }}>
      <Link to="hero" smooth={true} duration={500} onClick={handleNavItemClick}><img className='avatar' src={Avatar} alt='' loading="eager" /></Link>
      <div className={`navItems   ${isActive ? 'navsVisible' : ''}`}>
        <li>  <Link to="about" smooth={true} duration={500} onClick={handleNavItemClick}>About</Link></li>
        <li> <Link to="experience" smooth={true} duration={500} onClick={handleNavItemClick}>Experience</Link></li>
        <li> <Link to="works" smooth={true} duration={500} onClick={handleNavItemClick}>Works</Link></li>
        <li> <Link to="contact" smooth={true} duration={500} onClick={handleNavItemClick}>Contact</Link></li>
        <a href={Resume} rel="noreferrer" target="_blank" onClick={handleNavItemClick}><button className="button resume-btn">Resume</button></a>
      </div>
      <div className={`hamburger hamburger--spin ${isActive ? 'is-active' : ''}`}
        onClick={handleToggle}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>

    </nav>
  )
}

export default Nav
