import React from "react";
import style from "./Tabs.scss";

class Tabs extends React.Component {
  state = {
    activeTabIndex: 0
  }


  renderTabs() {
    const { tabs } = this.props;

    if (!tabs || !tabs.length) {
      return null;
    }

    return tabs.map((tab, i) => {
      const activeClass = i === this.state.activeTabIndex ? 'tabs__item tabs__item--active' : 'tabs__item';

      return (
        <div
          className={activeClass}
          key={i}
        >
          <h2 className="tabs__title">
            {tab}
          </h2>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}

        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Tabs;
