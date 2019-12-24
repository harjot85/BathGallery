import React from "react";

import { ColStyled } from "../../components/sharedStyledComponents/index";

export default function ProductCategory(props) {
  return (
    <ColStyled lg={12} md={12} sm={12}>
      <div style={{ textAlign: "left" }}>
        <h3>{props.category}</h3>
      </div>
    </ColStyled>
  );
}
