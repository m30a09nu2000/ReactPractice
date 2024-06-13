// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   file: yup.mixed().test("required", "file required", (value) => {
//     return value && value.length > 0;
//   }),
//   name: yup.string().required("required"),
//   email: yup.string().email().required("required"),
//   password: yup.string().required("password required"),
//   mobile: yup.number().required("required").typeError("only numbers"),
// });

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const handleFile = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(handleFile)}>
//         <input type="text" placeholder="name" {...register("name")} />
//         <span>{errors.name?.message}</span>
//         <br />
//         <input type="text" placeholder="email" {...register("email")} />
//         <span>{errors.email?.message}</span>
//         <br />
//         <input type="text" placeholder="password" {...register("password")} />
//         <span>{errors.password?.message}</span>
//         <br />
//         <input type="text" placeholder="mobile" {...register("mobile")} />
//         <span>{errors.mobile?.message}</span>
//         <br />
//         <input type="file" name="file" {...register("file")} />

//         <span>{errors.file?.message}</span>
//         <br />
//         <button>Upload</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Mobile is required")
    .matches(/^[0-9]+$/, "Mobile must be a number")
    .max(10),
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

  const handleForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input type="text" {...register("phone")} />
        <span>{errors.phone?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
