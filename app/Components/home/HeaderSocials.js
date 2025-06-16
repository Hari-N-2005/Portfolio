import React from 'react';

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://www.instagram.com/_.h.a_r.i.__'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#E1306C' }} // Instagram pink
      >
        <i className='fa-brands fa-instagram'></i>
      </a>

      <a
        href='https://x.com/hari_n05'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#1DA1F2' }} // Twitter blue
      >
        <i className='fa-brands fa-twitter'></i>
      </a>

      <a
        href='https://github.com/Hari-N-2005/'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#ffffff' }} // White for GitHub
      >
        <i className='fa-brands fa-github'></i>
      </a>

      <a
        href='https://www.linkedin.com/in/hari-n05/'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#0077B5' }} // LinkedIn blue
      >
        <i className='fa-brands fa-linkedin'></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
