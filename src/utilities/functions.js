import React from 'react';
import { InformationBar } from "../components/sharedStyledComponents/index";

import * as constant from "./constants";

export function getInformationBar(){
    return (
        <InformationBar>I shall bring the light</InformationBar>
    )
}


export function getElementsPerScreen() {
    var showCards;
    window.innerWidth <= 765
      ? (showCards = constant.size.xs)
      : window.innerWidth <= 1099
      ? (showCards = constant.size.sm)
      : window.innerWidth <= 1399
      ? (showCards = constant.size.md)
      : window.innerWidth <= 1799
      ? (showCards = constant.size.lg)
      : (showCards = constant.size.xl);
    return showCards;
  }