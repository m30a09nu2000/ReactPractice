import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState("");
  const handleFile = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleFile}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFormData(e.target.value)}
        />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default Form;
