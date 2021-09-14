import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetalA } from "../Page1DetalA";
import { Page1DetalB } from "../Page1DetalB";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {console.log(url)}
            <Route exact path={url}>
              <Page1 />
            </Route>
            {/* detalAはpage1配下である事が間違いない */}
            <Route path={`${url}/detailA`}>
              <Page1DetalA />
            </Route>
            {/* detalBはpage1の表記をミスした場合別のページ配下になってしまう */}
            <Route path="/page1/detailB">
              <Page1DetalB />
            </Route>
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
