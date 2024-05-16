import React from "react";

interface Props {
  className: string;
  label: string;
  type: string;
  id: string;
  labelSpan: string;
  labelClass: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const InputField: React.FC<Props> = ({
  className,
  label,
  type,
  id,
  labelSpan,
  onChange,
  labelClass,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label + labelSpan}
      </label>
      <input
        type={type}
        id={id}
        className="p-1 w-full outline-0 rounded-md"
        autoCapitalize="true"
        autoComplete="false"
        onChange={onChange}
      />
      <small className="w-full block">.</small>
    </div>
  );
};

export default InputField;
