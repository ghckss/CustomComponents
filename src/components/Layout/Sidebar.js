import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const toggleSidebarItem = (e) => {
    if (e.target.classList.contains("sidebar__item")) {
      return;
    }
    const target = e.target.closest(".sidebar__dropdown");
    target.classList.toggle("sidebar__dropdown--active");

    changeIconDirection(target);
    const sidebarItems = target.querySelectorAll(".sidebar__item");

    Array.from(sidebarItems).forEach((item) => {
      item.classList.toggle("sidebar__item--hide");
    });
  };
  const changeIconDirection = (target) => {
    const icon = target.querySelector("i.fas");
    if (icon.classList.contains("fa-chevron-down")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-right");
    } else if (icon.classList.contains("fa-chevron-right")) {
      icon.classList.remove("fa-chevron-right");
      icon.classList.add("fa-chevron-down");
    }
  };
  return (
    <nav className="sidebar">
      <div className="sidebar__dropdown" onClick={toggleSidebarItem}>
        <div className="sidebar__name">
          UI 컴포넌트
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="sidebar__item sidebar__item--hide">비율 게이지</div>
        <div className="sidebar__item sidebar__item--hide">계층형 테이블</div>
      </div>
      <div className="sidebar__dropdown" onClick={toggleSidebarItem}>
        <div className="sidebar__name">
          FE 스킬
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
