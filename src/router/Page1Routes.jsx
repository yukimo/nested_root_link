import { Page1 } from "../Page1";
import { Page1DetalA } from "../Page1DetalA";
import { Page1DetalB } from "../Page1DetalB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  { path: "/detailA", exact: false, children: <Page1DetalA /> },
  { path: "/detailB", exact: false, children: <Page1DetalB /> }
];
