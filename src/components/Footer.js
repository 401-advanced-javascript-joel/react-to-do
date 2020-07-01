import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <footer>
      <a href='https://www.linkedin.com/in/joel3rbear'>
        <IconContext.Provider value={{ size: '2em' }}>
          <AiFillLinkedin />
        </IconContext.Provider>
      </a>
      <a href='https://github.com/JoelMWatson'>
        <IconContext.Provider value={{ size: '2em' }}>
          <AiFillGithub />
        </IconContext.Provider>
      </a>
      <a href='https://twitter.com/joel3rbear'>
        <IconContext.Provider value={{ size: '2em' }}>
          <AiFillTwitterCircle />
        </IconContext.Provider>
      </a>
    </footer>
  );
};

export default Footer;
