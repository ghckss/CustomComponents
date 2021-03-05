import React from "react";
import produce from "immer";
import { NavLink } from "react-router-dom";
import { navs } from "./_nav";
import "./Sidebar.scss";

const Sidebar = () => {
  const [sidebarList, setSidebarList] = React.useState([]);

  React.useEffect(() => {
    setSidebarList(navs);
  }, []);

  const updateSidebarList = (index) => {
    setSidebarList(
      produce(sidebarList, (draftState) => {
        draftState.forEach((draft) => (draft.active = false));
        draftState[index].active = !sidebarList[index].active;
      })
    );
  };

  const renderSidebarItems = (dropdown) => {
    const items = dropdown.items;
    if (!items) return;
    return items.map((item, index) => {
      return (
        <div
          key={index}
          className={`sidebar__item ${
            dropdown.active ? "" : "sidebar__item--hide"
          }`}
        >
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link--active"
            to={item.to}
          >
            {item.name}
          </NavLink>
        </div>
      );
    });
  };
  const sidebarDropdown = sidebarList.map((dropdown, index) => {
    return (
      <div
        key={index}
        className="sidebar__dropdown"
        onClick={() => updateSidebarList(index)}
      >
        <div className="sidebar__name">
          {dropdown.name}
          <i
            className={`fas ${
              dropdown.active ? "fa-chevron-down" : "fa-chevron-right"
            }`}
          ></i>
        </div>
        {renderSidebarItems(dropdown)}
      </div>
    );
  });
  return <nav className="sidebar">{sidebarDropdown}</nav>;
};

export default Sidebar;
