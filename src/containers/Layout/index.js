import React from "react";
import { Route } from "react-router-dom";
import { ExpandableTableShowcase, RatioBarShowcase } from "../UIExample";
import { Content, Header, Sidebar } from "../../components/Layout";

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
      </Content>
    </div>
  );
};

export default Layout;
