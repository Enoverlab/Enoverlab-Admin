import React, { useState } from 'react';
import { BasePropertyProps } from 'adminjs';


interface CustomNewComponentProps extends BasePropertyProps {
  customErrorMessage?: string;
}
const UploadImage: React.FC<CustomNewComponentProps> = ({ onChange, property, record,customErrorMessage }) => {
  const [preview, setPreview] = useState<string | undefined>(record?.params?.[property.name] || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Update preview
      onChange(property.name, file);
    }
  };
  const inputRef = React.useRef<HTMLInputElement>(null!)

  const handleFileInputClick = ()=>{
    inputRef.current.click()
  }
  React.useEffect(()=>{
    console.log({property,record})
    console.log(record.errors?.image?.message)
  })

  return (
    <div>
      <label htmlFor="">
        * {property.name}
      </label>
        <section style={{backgroundColor: "white",padding: "2rem 4rem",borderRadius: "0.375rem",position: "relative",}}>
            <div onClick={handleFileInputClick} style={{backgroundColor: "#FCFAF2", borderRadius: "0.5rem",borderWidth: "2px",borderStyle: "dashed",borderColor: "rgba(51, 51, 65, 0.75)",padding: "30.5px"}}>
              <div style={{display: "flex",justifyContent: "center",cursor: "pointer",}}>
              {preview ? <img src={preview} alt="Preview" style={{ marginTop: '10px', maxWidth: '100px' }} onClick={handleFileInputClick}  /> : (<div
              style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
              <p>Click to upload</p>
              <p>Max no of Image is 1</p>
              <p>.Png, .Jpg images only*</p>
              </div>) }
              </div>

                <input type="file" id="image" ref={inputRef} style={{ display: "none" }} name="attachment" accept="image/*" onChange={handleChange}/>
            </div>
        </section>
        <h1 style={{color : 'red', fontSize : '14px', marginBottom : '10px'}}>{record.errors?.image?.message}</h1>
    </div>
  );
};

export default UploadImage;
