import React, { useState } from 'react';
import { BasePropertyProps } from 'adminjs';


interface CustomNewComponentProps extends BasePropertyProps {
  customErrorMessage?: string;
}
const UploadVideo: React.FC<CustomNewComponentProps> = ({ onChange, property, record,customErrorMessage }) => {
  const [preview, setPreview] = useState<string | undefined>(record?.params?.[property.name] || '');

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    if (file) {
      setPreview(()=>(URL.createObjectURL(file))); // Update preview
      onChange(property.name, file);
    }
  };

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    let altUrl = event.target.value
    if(altUrl){
        setPreview(()=>altUrl); // Update preview
        onChange(property.name, altUrl);
    }
  };
  console.log({preview})
  const inputRef = React.useRef<HTMLInputElement>(null!)

  const handleFileInputClick = ()=>{
    inputRef.current.click()
  }
  React.useEffect(()=>{
    console.log({property,record})
    console.log(record.errors?.lessonvideo?.message)
  })
  React.useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div>
      <label htmlFor="">
        * {property.name}
      </label>
        <section style={{backgroundColor: "white",padding: "2rem 4rem",borderRadius: "0.375rem",position: "relative",}}>
            <div onClick={handleFileInputClick} style={{backgroundColor: "#FCFAF2", borderRadius: "0.5rem",borderWidth: "2px",borderStyle: "dashed",borderColor: "rgba(51, 51, 65, 0.75)",padding: "30.5px"}}>
              <div style={{display: "flex",justifyContent: "center",cursor: "pointer",}}>
              {preview ? <video key={preview} onClick={handleFileInputClick} style={{ marginTop: '10px', maxWidth: '400px' }} controls width="500">
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
                </video> : (<div
              style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
              <p>Click to upload</p>
              <p>Max no of video is 1</p>
              <p>.Mp4 Videos only*</p>
              </div>)}
              </div>

                <input type="file" id="videoUrl" ref={inputRef} style={{ display: "none" }} name="attachment" accept="video/*" onChange={handleChangeFile}/>
            </div>
            <p style={{marginTop : '10px'}}>or</p>
            <label htmlFor="videoUrl" style={{margin : '10px 0px', display : 'flex', flexDirection : "column", gap : '10px'}}>
                Video Url
                <input type="text" id="videoUrl"  name="videoUrl" accept="video/*" onChange={handleChangeLink} style={{padding : '5px 10px',borderRadius : '5px', border: '1px solid rgb(187, 195, 203)',color: 'rgb(12, 30, 41)', fontSize : '14px'}}/>
            </label>
        </section>
        
        <h1 style={{color : 'red', fontSize : '14px', marginBottom : '10px'}}>{record.errors?.lessonVideo?.message}</h1>
    </div>
  );
};

export default UploadVideo;
