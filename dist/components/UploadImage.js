import React, { useState } from 'react';
const UploadImage = ({ onChange, property, record, customErrorMessage }) => {
    const [preview, setPreview] = useState(record?.params?.[property.name] || '');
    const handleChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onChange(property.name, file);
        }
    };
    const inputRef = React.useRef(null);
    const handleFileInputClick = () => {
        inputRef.current.click();
    };
    React.useEffect(() => {
        console.log({ property, record });
        console.log(record.errors?.image?.message);
    });
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "" },
            "* ",
            property.name),
        React.createElement("section", { style: { backgroundColor: "white", padding: "2rem 4rem", borderRadius: "0.375rem", position: "relative", } },
            React.createElement("div", { style: { backgroundColor: "#FCFAF2", borderRadius: "0.5rem", borderWidth: "2px", borderStyle: "dashed", borderColor: "rgba(51, 51, 65, 0.75)", padding: "30.5px" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "center", cursor: "pointer", } }, preview ? React.createElement("img", { src: preview, alt: "Preview", style: { marginTop: '10px', maxWidth: '100px' }, onClick: handleFileInputClick }) : React.createElement("img", { src: "/public/upload.svg", alt: "", onClick: handleFileInputClick })),
                React.createElement("input", { type: "file", id: "image", ref: inputRef, style: { display: "none" }, name: "attachment", accept: "image/*", onChange: handleChange }))),
        React.createElement("h1", { style: { color: 'red', fontSize: '14px', marginBottom: '10px' } }, record.errors?.image?.message)));
};
export default UploadImage;
