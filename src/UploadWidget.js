import React, { useState } from "react";
import UploadIcon from "./assets/icons/logo.png";
import uploadFile from "./upload";
import { Wrapper, WidgetWrapper, ProgressBar, Count } from "./WidgetStyle";

function UploadWidget() {
    const [percentage, setPercentage] = useState(0);

    const handleFile = async (e) => {
      try {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
  
        await uploadFile(formData, setPercentage);
        setPercentage(0);
      } catch (err) {
        console.log(err.response);
        setPercentage(0);
      }
    };

  return (
    <Wrapper>
      <WidgetWrapper>
        <div className="left">
          <img src={UploadIcon} w="5rem" alt="file" />
        </div>
        <div className="right">
          <p>Click widget to select to browse</p>
          <ProgressBar percentage={percentage} className="progress_bar">
            <div />
          </ProgressBar>
        </div>
        <Count>{percentage} %</Count>
        <input type="file" onChange={handleFile} />
      </WidgetWrapper>
    </Wrapper>
  );
}

export default UploadWidget;
