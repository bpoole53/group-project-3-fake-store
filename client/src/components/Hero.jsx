import '../App.css'
import React, {useRef, useEffect} from 'react';


export default function Hero () {

  function sendtoProducts(e) {
    window.location.replace('/products')
  }

  const videoSources = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video4.mp4'
  ];

  videoSources.forEach((videoSrc) => {
    const video = new Audio(videoSrc);
    video.preload = 'auto';
    video.load();
  });
  const videoRef = useRef(null);
 

  useEffect(() => {
    let currentVideoIndex = 0;

    const playNextVideo = () => {
      currentVideoIndex = (currentVideoIndex +1) % videoSources.length;
      videoRef.current.src = videoSources[currentVideoIndex];
      videoRef.current.play();
    };

    videoRef.current.addEventListener('ended', playNextVideo);

    videoRef.current.src = videoSources[currentVideoIndex];
    videoRef.current.play();

    return ()  => {
      videoRef.current.removeEventListener('ended', playNextVideo);
    };
  },[videoSources]);




  
  return (
    <>
       <div className="hero">
      <video ref={videoRef} autoPlay muted loop>
        <source src={videoSources[0]} type="video/mp4" />
      </video>
      </div>
      

  




      {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary" onClick={sendtoProducts}>Shop All</button>
        </div>
       </div>
      </div> */}
    </>
  )
}