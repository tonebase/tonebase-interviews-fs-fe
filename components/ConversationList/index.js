import React from "react";
import style from "./ConversationList.scss";
import Conversation from "../Conversation";

class ConversationList extends React.Component {
  state = {
    conversations: [
      {
        titleText: 'This is an example title. What should it say? I have NO ID...',
        bodyText: 'This is body copy. What should I say? I have even less of an idea but we got a lot more space to fill in this damn placeholder so here we go...',
        originalPostAuthor: 'grgeorge1',
        originalPostAuthorImageUrl: '',
        originalPostAuthorStatus: 'Active Member',
        topic: 'Lesson & Course Discussions',
        numberOfReplies: 12,
        latestPostAuthor: 'grgeorge1',
      },
      {
        titleText: 'This is an example title. What should it say? I have NO ID...',
        bodyText: 'This is body copy. What should I say? I have even less of an idea but we got a lot more space to fill in this damn placeholder so here we go...',
        originalPostAuthor: 'grgeorge1',
        originalPostAuthorImageUrl: '',
        originalPostAuthorStatus: 'Active Member',
        topic: 'Lesson & Course Discussions',
        numberOfReplies: 12,
        latestPostAuthor: 'grgeorge1',
      },
      {
        titleText: 'This is an example title. What should it say? I have NO ID...',
        bodyText: 'This is body copy. What should I say? I have even less of an idea but we got a lot more space to fill in this damn placeholder so here we go...',
        originalPostAuthor: 'grgeorge1',
        originalPostAuthorImageUrl: '',
        originalPostAuthorStatus: 'Active Member',
        topic: 'Lesson & Course Discussions',
        numberOfReplies: 12,
        latestPostAuthor: 'grgeorge1',
      },
      {
        titleText: 'This is an example title. What should it say? I have NO ID...',
        bodyText: 'This is body copy. What should I say? I have even less of an idea but we got a lot more space to fill in this damn placeholder so here we go...',
        originalPostAuthor: 'grgeorge1',
        originalPostAuthorImageUrl: '',
        originalPostAuthorStatus: 'Active Member',
        topic: 'Lesson & Course Discussions',
        numberOfReplies: 12,
        latestPostAuthor: 'grgeorge1',
      },
      {
        titleText: 'This is an example title. What should it say? I have NO ID...',
        bodyText: 'This is body copy. What should I say? I have even less of an idea but we got a lot more space to fill in this damn placeholder so here we go...',
        originalPostAuthor: 'grgeorge1',
        originalPostAuthorImageUrl: '',
        originalPostAuthorStatus: 'Active Member',
        topic: 'Lesson & Course Discussions',
        numberOfReplies: 12,
        latestPostAuthor: 'grgeorge1',
      },
      {
        titleText: 'This is an example title. What should it say? I have NO ID...',
        bodyText: 'This is body copy. What should I say? I have even less of an idea but we got a lot more space to fill in this damn placeholder so here we go...',
        originalPostAuthor: 'grgeorge1',
        originalPostAuthorImageUrl: '',
        originalPostAuthorStatus: 'Active Member',
        topic: 'Lesson & Course Discussions',
        numberOfReplies: 12,
        latestPostAuthor: 'grgeorge1',
      }
    ]
  }

  renderConversations() {
    const { conversations } = this.state;
    if (!conversations || !conversations.length) {
      return null;
    }

    return conversations.map((conversation, i) => {
      return (
        <Conversation
          conversation={conversation}
          key={i}
        />
      );
    });
  };

  render() {
    return (
      <div className="conversation-list">
        {this.renderConversations()}

        <style jsx>{style}</style>
      </div>
    );
  }
}

export default ConversationList;
