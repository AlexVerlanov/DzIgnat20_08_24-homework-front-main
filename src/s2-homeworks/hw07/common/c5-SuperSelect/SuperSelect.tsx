import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react";
import s from "./SuperSelect.module.css";
import type { OptionType } from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: OptionType[];
  onChangeOption?: (option: OptionType) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
        <option id={"hw7-option-" + o.id} value={o.id} key={o.id}>
          {o.value}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectId = Number(e.currentTarget.value); // Получаем выбранное значение как id
   const selectedOption = options?.find(o => o.id === selectId);
   if(selectedOption && onChangeOption){
     onChangeOption(selectedOption);
   }
  };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
