import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldProps = {
  label: string;
  id: string;
};

export function Input({
  label,
  id,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <input className="input" id={id} {...props} />
    </label>
  );
}

export function Select({
  label,
  id,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <select className="select" id={id} {...props}>
        {children}
      </select>
    </label>
  );
}

export function Textarea({
  label,
  id,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="field field--full" htmlFor={id}>
      <span>{label}</span>
      <textarea className="textarea" id={id} {...props} />
    </label>
  );
}
