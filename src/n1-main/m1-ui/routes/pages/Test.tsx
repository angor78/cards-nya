import React from 'react';
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";

export const Test = () => {

  return(
    <div>
      <h2>Test</h2>
      <SuperCheckbox/>
      <SuperInputText/>
      <SuperButton>
        super button
      </SuperButton>

    </div>
  )
}