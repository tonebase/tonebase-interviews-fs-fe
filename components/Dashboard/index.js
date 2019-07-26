import React from "react";
import style from "./Dashboard.scss";
import Tabs from "../Tabs";
import ConversationList from "../ConversationList";


class Dashboard extends React.Component {
  state = {
    tabs: ['Recent conversations', 'Other tab item']
  };
  render() {
    return (
      <div className="dashboard">
        <Tabs
          tabs={this.state.tabs}
        />

        <ConversationList />

        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Dashboard;
