import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  id: string;
  name: string;
  label: string;
};

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export default function TextField(props: InputProps | TextareaProps) {
  const { id, name, label, as = "input", ...rest } = props;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-dim uppercase tracking-wider">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className="input-field resize-none"
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          name={name}
          className="input-field"
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
