import React, { useState, useRef, useEffect } from 'react';
import { BasePropertyProps } from 'adminjs';
import axios from 'axios';

interface CustomNewComponentProps extends BasePropertyProps {
  customErrorMessage?: string;
}

const UploadVideo: React.FC<CustomNewComponentProps> = ({ onChange, property, record, customErrorMessage }) => {
  const [preview, setPreview] = useState<string | undefined>(record?.params?.[property.name] || '');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0);

  const abortControllerRef = useRef<AbortController |null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null!);
  const videoElement = videoRef.current;

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile)); // Update preview
      setFile(selectedFile); // Save file, but don't upload yet
      if (videoElement) {
        videoElement.onloadedmetadata = () => {
          const duration = videoElement.duration; // Duration in seconds
          onChange('duration', `${Math.ceil(duration/60)} min`);
        };
      }
    }
  };

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const altUrl = event.target.value;
    if (altUrl) {
      setPreview(altUrl); // Update preview
      setFile(null); // Clear file because user is using a link instead
      onChange(property.name, altUrl); // Update AdminJS form immediately
      if (videoElement) {
        videoElement.onloadedmetadata = () => {
          const duration = videoElement.duration; // Duration in seconds
          onChange('duration', `${Math.ceil(duration/60)} min`);
        };
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'module_video_upload_preset');
    const abortController = new AbortController()
    abortControllerRef.current = abortController;
    try {
      setUploading(true);
      setProgress(0);
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/deudl0ryy/video/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
          },
        }
      );

      const videoUrl = response.data.secure_url;
      onChange(property.name, videoUrl); // Save uploaded video URL to AdminJS form
      setPreview(videoUrl); // Update preview to the cloud URL
      setDone(true)
      setFile(null); // Clear file after upload
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const cancelUpload = ()=>{
    if(abortControllerRef.current){
      abortControllerRef.current.abort()
      setUploading(false)
      console.log('not uploading')
    }
  }
  const handleFileInputClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    return () => {
      if (preview?.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div>
      <label>* {property.name}</label>

      <section style={{ backgroundColor: 'white', padding: '2rem 4rem', borderRadius: '0.375rem', position: 'relative' }}>
        <div
          onClick={handleFileInputClick}
          style={{
            backgroundColor: '#FCFAF2',
            borderRadius: '0.5rem',
            borderWidth: '2px',
            borderStyle: 'dashed',
            borderColor: 'rgba(51, 51, 65, 0.75)',
            padding: '30.5px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
            {preview ? (
              <video
                key={preview}
                ref={videoRef}
                style={{ marginTop: '10px', maxWidth: '400px' }}
                controls
                width="500"
              >
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Click to upload</p>
                <p>Max no of video is 1</p>
                <p>.Mp4 Videos only*</p>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={inputRef}
            style={{ display: 'none' }}
            accept="video/*"
            onChange={handleChangeFile}
          />
        </div>

        {/* Show Confirm Upload button if a file is selected */}
        {(file && !uploading) && (
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <button type="button" onClick={handleUpload} style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}>
              Confirm Upload
            </button>
          </div>
        ) 
        }
        {
          uploading && (<div style={{ marginTop: '10px', textAlign: 'center' }}>
            <button type="button" onClick={cancelUpload} style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer', backgroundColor : 'red' }}>
              Cancel Upload
            </button>
          </div>)
        }

        {/* Show upload progress */}
        {uploading && (
          <div style={{ marginTop: '10px' }}>
            <progress value={progress} max="100" style={{ width: '100%' }} />
            <p>{progress}% uploaded</p>
          </div>
        )}
        {(done && !uploading) && (
          <div style={{ marginTop: '10px' }}>
            {/* <progress value={progress} max="100" style={{ width: '100%' }} /> */}
            <p>{progress}% uploaded successfully</p>
          </div>
        )}

        <p style={{ marginTop: '10px' }}>or</p>

        <label style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          Video Url
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            onChange={handleChangeLink}
            style={{
              padding: '5px 10px',
              borderRadius: '5px',
              border: '1px solid rgb(187, 195, 203)',
              color: 'rgb(12, 30, 41)',
              fontSize: '14px',
            }}
          />
        </label>
      </section>

      <h1 style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
        {record.errors?.lessonVideo?.message || customErrorMessage}
      </h1>
    </div>
  );
};

export default UploadVideo;
