import React from "react";
import {
  GridColumnMenuContainer,
  GridColumnMenuHideItem,
  GridColumnMenuFilterItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  console.log(props, "???");
  const { hideMenu, colDef, open } = props;

  return (
    <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} open={open}>
      <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef} />
      <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
