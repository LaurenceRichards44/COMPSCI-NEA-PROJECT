import { useRef, useEffect, useState } from 'react'
import './WebcamFeed.css'


function WebcamFeed() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMirrored, setIsMirrored] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let cancelled = false;

    async function startCamera() {
      try {
        const cameraStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (cancelled) {
          cameraStream.getTracks().forEach(track => track.stop());
          return;
        }

        stream = cameraStream;
        videoRef.current!.srcObject = stream;
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    }

    startCamera();

    return () => {
      cancelled = true;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, [])

  return (
    <>
      <label>
        <input
          type="checkbox"
          role="switch"
          checked={isMirrored}
          onChange={() => setIsMirrored(!isMirrored)}
        />
        Mirror Video
      </label>
      
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ transform: isMirrored ? 'scaleX(-1)' : 'none' }}
        className="webcam-video"></video>
    </>
  )
}

export default WebcamFeed