import React from "react";
import { Route } from "react-router-dom";
import { ExpandableTableShowcase, RatioBarShowcase } from "../UIExample";
import { Content, Header, Sidebar } from "../../components/Layout";
import { Debounce, Throttling } from "../../components/Skills";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Content>
        <Route
          exact
          path="/"
          render={() => {
            return <div className="home">HOME</div>;
          }}
        />

        <Route path="/widget/ratio-bar" component={RatioBarShowcase} />
        <Route
          path="/widget/table-expandable"
          component={ExpandableTableShowcase}
        />

        <Route path="/skill/debounce" component={Debounce} />
        <Route path="/skill/throttling" component={Throttling} />
      </Content>
    </div>
  );
};

export default Layout;
