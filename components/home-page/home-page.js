import React from "react";

import { PageContent } from "../layout/layout.style";
import {
  HomeWrap,
  HomeHeroTop,
  HomeHeroMedium,
  HomeHeroBottom,
} from "./home-page.style";

function HomePage() {
  return (
    <PageContent>
      <HomeWrap>
        <HomeHeroTop>I am</HomeHeroTop>
        <HomeHeroMedium>Rafał</HomeHeroMedium>
        <HomeHeroBottom>A frontend developer</HomeHeroBottom>
      </HomeWrap>
    </PageContent>
  );
}

export default HomePage;
