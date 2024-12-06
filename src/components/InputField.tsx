import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder="Username"
        className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-red-500 text-xs">{error?.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
