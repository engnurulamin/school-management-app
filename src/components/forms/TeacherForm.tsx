"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username must be at most 20 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  bloodType: z.string().min(1, { message: "Blood type is required." }),
  birthday: z.date({ message: "Birthday is required." }),
  sex: z.enum(["male", "female"], { message: "Sex is required." }),
  img: z.instanceof(File, { message: "Image is required." }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-sm text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          register={register}
          name="username"
          defaultValue={data?.username}
          error={errors?.username}
          inputProps={{ type: "text", placeholder: "Username" }}
        />
        <InputField
          label="Eamil"
          register={register}
          name="email"
          defaultValue={data?.email}
          error={errors?.email}
          inputProps={{ type: "email", placeholder: "Email" }}
        />
        <InputField
          label="Password"
          register={register}
          name="password"
          defaultValue={data?.password}
          error={errors?.password}
          inputProps={{ type: "password", placeholder: "Password" }}
        />
      </div>
      <span className="text-sm text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          register={register}
          name="firstName"
          defaultValue={data?.firstName}
          error={errors?.firstName}
          inputProps={{ type: "text", placeholder: "First Name" }}
        />{" "}
        <InputField
          label="Last Name"
          register={register}
          name="lastName"
          defaultValue={data?.lastName}
          error={errors?.lastName}
          inputProps={{ type: "text", placeholder: "Last Name" }}
        />{" "}
        <InputField
          label="Phone"
          register={register}
          name="phone"
          defaultValue={data?.phone}
          error={errors?.phone}
          inputProps={{ type: "text", placeholder: "Phone" }}
        />{" "}
        <InputField
          label="Address"
          register={register}
          name="address"
          defaultValue={data?.address}
          error={errors?.address}
          inputProps={{ type: "text", placeholder: "Address" }}
        />
        <InputField
          label="Blood Group"
          register={register}
          name="bloodType"
          defaultValue={data?.bloodType}
          error={errors?.bloodType}
          inputProps={{ type: "text", placeholder: "Blood Group" }}
        />
        <InputField
          label="Birth Day"
          register={register}
          name="birthday"
          defaultValue={data?.birthday}
          error={errors?.birthday}
          inputProps={{ type: "date", placeholder: "Birth Day" }}
        />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Sex</label>
        <select
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          {...register("sex")}
          defaultValue={data?.sex}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.sex?.message && (
          <p className="text-xs text-red-400">
            {errors.sex.message.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
        <label
          className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
          htmlFor="img"
        >
          <Image src="/upload.png" alt="" width={28} height={28} />
          <span>Upload a photo</span>
        </label>
        <input type="file" id="img" {...register("img")} className="hidden" />
        {errors.img?.message && (
          <p className="text-xs text-red-400">
            {errors.img.message.toString()}
          </p>
        )}
      </div>
      <button className="bg-blue-400 text-white py-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
