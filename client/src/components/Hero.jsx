import '../App.css'
import React, {useRef, useEffect} from 'react';


export default function Hero () {

  function sendtoProducts(e) {
    window.location.replace('/products')
  }

  const videoSources = [
    '/video1.mp4',
    // '/video2.mp4',
    // '/video3.mp4',
    // '/video4.mp4'
  ];

  // videoSources.forEach((videoSrc) => {
  //   const video = new Audio(videoSrc);
  //   video.preload = 'auto';
  //   video.load();
  // });
  // const videoRef = useRef(null);

  videoSources.forEach((videoSrc) => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'auto';
    video.load();
  });
  
  const videoRef = useRef(null);


  // useEffect(() => {
  //   let currentVideoIndex = 0;

  //   const videoElement = videoRef.current;

  //   videoRef.current.addEventListener('ended', playNextVideo);

  //   function playNextVideo () {
  //   if (currentVideoIndex < videoSources.length) {
  //     videoElement.src = videoSources[currentVideoIndex];
  //     videoElement.play().catch((error) => {
  //       console.error("error on play", error);
  //       })
  //   }
  //     // videoRef.current.src = videoSources[currentVideoIndex];
  //     // videoRef.current.play();
  //   };

    

  //   // videoRef.current.src = videoSources[currentVideoIndex];
  //   // videoRef.current.play();

  //   return ()  => {
  //     videoRef.current.removeEventListener('ended', playNextVideo);
  //   };
  // },[videoSources]);




  
  return (
    <>
      <div className="hero">
      <video ref={videoRef} autoPlay muted loop>
        <source src={videoSources[0]} type="video/mp4" />
      </video>
      <div className="hero-overlay bg-opacity-60"/>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">The waters are calling...</h1>
          <p className="mb-5">From beginning design to finished product, Hull & Deck ensures that our watercraft are equipped with the highest quality building products available. <br></br><br></br>From personal watercraft to exquisite yachts, our crafts are guaranteed to handle any body of water and last over time. Whether you are looking for a shipwright to build your dream custom boat or would like a pre-built vessel, we have you covered! </p>
          <button className="btn btn-primary" onClick={sendtoProducts}>Shop All Watercraft</button>
      </div>
      </div>
    </div>
    </>
  )
  }