import './App.css';
import {useState} from 'react'
import successIcon from './Photo/success.svg'
import desktopIMG from './Photo/mainPage.svg'
import iconList from './Photo/icon-list.svg'
import mobileIMG from './Photo/mobile.svg'

function App() {

  const [formWindow, setFormWindow] = useState(true);
  const [formSuccess, setFormSuccess] = useState(false);

  const [inputEmail, setInputEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState('');

  const [errorMessage, setErroreMessage] = useState('');

  const changeForm = (e) => {
    e.preventDefault()
    if(formWindow === true){
      const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const borderInput = document.querySelector('.main-window-input');
        if(!regExp.test(inputEmail)){
          setErroreMessage('Valid email required');
          borderInput.classList.remove('main-window-input');
          borderInput.classList.add('main-window-input-error');
          return
        }
      setFormWindow(false);
      setFormSuccess(true);
    }else{
      setFormWindow(true);
      setFormSuccess(false);
      setErroreMessage('');
    }
    setSaveEmail(inputEmail);
    setInputEmail('');
  };

  return (
    <>
      {formWindow &&(
        <>
          <div className='main-window'>
            <img className='main-window-info-mobile' src={mobileIMG}></img>
            <div className='main-window-info'>
              <h2>Stay updated!</h2>
              <p className='main-window-info-subtitle'>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className='main-window-info-list'>
                <div className='first-list-item'>
                  <img src={iconList}></img>
                  <p>Product discovery and building what matters</p>
                </div>
                <div className='second-list-item'>
                  <img src={iconList}></img>
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div className='third-list-item'>
                  <img src={iconList}></img>
                  <p>And much more!</p>
                </div>
              </div>
              <div className='main-window-info-email'>
                <p>Email address</p>
                <p className='main-window-info-email-error'>{errorMessage}</p>
              </div>
              <form onSubmit={changeForm} className='main-window-form'>
                <input
                  className='main-window-input'
                  value={inputEmail}
                  onChange={(e)=>setInputEmail(e.target.value)}
                  placeholder='email@company.com'
                ></input>
                <button className='main-window-button'>Subscribe to monthly newsletter</button>
              </form>
            </div>
            <div className='main-window-img'>
              <img src={desktopIMG}></img>
            </div>
          </div>
        </>
      )
      }

      {formSuccess&&(
        <>
          <div className='success-window'>
            <div className='success-window-block-info'>
              <img src={successIcon}></img>
              <h2>Thanks for subscribing!</h2>
              <p>A confirmation email has been sent to <span>{saveEmail}.</span> Please open it and click the button inside to confirm your subscription.</p>
              
                <button onClick={changeForm}>Dismiss message</button>
              
              
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
