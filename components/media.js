import React from "react";

//CUSTOM COMPONENTS
import Home from "./home/";
import About from "./about/";
import Works from "./works";
import Contact from "./contact";

export const media = [
  {
    slug: "",
    children: <Home />,
  },
  {
    slug: "works",
    children: <Works />,
  },
  {
    slug: "about",
    children: <About />,
  },
  {
    slug: "contact",
    children: <Contact />,
  },
];

export const social = {
  EMAIL: "mailto:john@doe.com",
  LINKEDIN: "https://www.google.com",
  GITHUB: "https://www.google.com",
  INSTAGRAM: "https://www.google.com",
};
