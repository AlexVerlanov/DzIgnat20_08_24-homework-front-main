import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s2 from "../../s1-main/App.module.css";
import s from "./HW7.module.css";

export type OptionType = {
  id: number;
  value: string;
};

const arr: OptionType[] = [
  { id: 1, value: "PreJunior" },
  { id: 2, value: "Junior" },
  { id: 3, value: "JuniorPlus" },
];

const HW7 = () => {
  const [value, onChangeOption] = useState<OptionType>(arr[0]);

  return (
    <div id={"hw7"}>
      <div className={s2.hwTitle}>Homework #7</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.selectWrapper}>
            <SuperSelect
              id={"hw7-super-select"}
              options={arr}
              value={value.id}
              onChangeOption={(option) => onChangeOption(option)}
            />
          </div>
          <div className={s.radioWrapper}>
            <SuperRadio
              id={"hw7-super-radio"}
              name={"hw7-radio"}
              options={arr}
              value={value.id}
              onChangeOption={(option) => onChangeOption(option)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW7;
