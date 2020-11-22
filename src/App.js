import { useEffect, useRef } from 'react';
import './App.scss';
import PageTitle from './components/PageTitle';
import logo from './assets/desktop/logo.svg';
import Platforms from './components/Platforms';
import RequestForm from './components/RequestForm';
import gsap from 'gsap';

function App() {

  const logoRef = useRef(null);
  const formRef = useRef(null);
  const pageBodyRef = useRef(null);
  const platformRef = useRef(null);
  const pageTitleRef = useRef(null);


  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(logoRef.current, { opacity: 0, y: '50%' }, { opacity: 1, y: '0%', duration: 0.5 });
    timeline.fromTo(pageTitleRef.current, { opacity: 0, y: '50%' }, { opacity: 1, y: '0%', duration: 1 });
    timeline.fromTo(pageBodyRef.current, { opacity: 0, x: '15%' }, { opacity: 1, x: '0%', duration: 1 }, "-=0.5");
    timeline.fromTo(formRef.current, { opacity: 0, x: '-15%' }, { opacity: 1, x: '0%', duration: 1 }, "-=0.5");
    timeline.fromTo(platformRef.current, { opacity: 0, x: '5%' }, { opacity: 1, x: '0%', duration: 1 }, "-=0.5");

  }, []);
  return (
    <div className="App">
      <div ref={logoRef} className="logo">
        <img src={logo} alt="site logo"/>
      </div>
      <div className="content-container">
        <PageTitle pageTitleRef={pageTitleRef} />
        <p ref={pageBodyRef} className="t-body page-body">Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
        <Platforms platformRef={platformRef} />
        <RequestForm formRef={formRef} />
      </div>
    </div>
  );
}

export default App;
