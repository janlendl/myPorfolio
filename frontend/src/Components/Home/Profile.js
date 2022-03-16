import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.linkedin.com/in/janlendlperalta/' target='_blank' rel="noopener noreferrer">
                <i className='fa fa-linkedin'></i>
              </a>
              <a href='https://github.com/janlendl' target='_blank' rel="noopener noreferrer">
                <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Lendl</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='profile-text'>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🤗",
                    1000,
                    "Full Stack Developer 👨‍💻",
                    1000,
                    "React Developer ⚛️",
                    1000,
                    "PERN Stack Dev 💻",
                    1000,
                    "Javascript ES6 ☕️",
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Enjoy building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              {""}
              Hire Me{" "}
            </button>
            <a href='Lendl_Peralta_Resume.pdf' download='Lendl Lendl_Peralta_Resume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}
