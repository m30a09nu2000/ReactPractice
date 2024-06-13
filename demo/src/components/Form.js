import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  file: yup.mixed().test("required", "file required", (value) => {
    return value && value.length > 0;
  }),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFile = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleFile)}>
        <input type="file" name="file" {...register("file")} />
        <span>{errors.file?.message}</span>
        <button>Upload</button>
      </form>
    </div>
  );
}

export default Form;
