import React, { useState, useEffect, useRef } from "react";

const Traductor = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    getUserMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="traductor-container">
      <h2>Traductor de Lenguaje de Señas</h2>
      <p>
        Este traductor utiliza la cámara para interpretar y traducir el lenguaje
        de señas. Coloque su mano dentro del rectángulo para que se realice la
        traducción.
      </p>
      <div className="traductor-content">
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="video-feed"
          ></video>
        </div>
        <div className="translation-box">
          <p>Traducción en tiempo real...</p>
          {/* Aquí iría la lógica para mostrar la traducción */}
        </div>
      </div>
    </div>
  );
};

export default Traductor;
