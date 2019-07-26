import React from "react";
import style from "./Conversation.scss";

class Conversation extends React.Component {
  state = {
    isBodyAbbreviated: true
  }

  renderAvatar() {
    const avatarUrl = this.props.conversation.originalPostAuthorImageUrl;

    if (avatarUrl) {
      return (
        <img className='conversation__image' src={avatarUrl} alt="Original post author picture" />
      );
    }

    return (
      <div className="conversation__image-placeholder"></div>
    );
  };

  renderBody() {
    const { bodyText } = this.props.conversation;
    let abbreviatedBodyText = bodyText;

    if (bodyText.length > 96) {
      abbreviatedBodyText = bodyText.substring(0, 96) + '...';
    }

    if (this.state.isBodyAbbreviated) {
      return (
        <p className="conversation__body">
          {abbreviatedBodyText}
          <span
            className="conversation__abbreviation-button"
            onClick={() => this.setState({ isBodyAbbreviated: false })}
          > more</span>
        </p>
      );
    }

    return (
      <p className="conversation__body">
        {bodyText}
        <span
          className="conversation__abbreviation-button"
          onClick={() => this.setState({ isBodyAbbreviated: true })}
        > less</span>
      </p>
    );
  };

  render() {
    const {
      titleText,
      originalPostAuthor,
      originalPostAuthorStatus,
      topic,
      latestPostAuthor,
      numberOfReplies
    } = this.props.conversation;

    return (
      <div className="conversation">
        <div className="conversation__avatar">
          {this.renderAvatar()}
        </div>

        <div className="conversation__content">
          <h3 className="conversation__title">{titleText}</h3>
          <p className="conversation__details">
              Latest Post: <span className="conversation__details conversation__details--emphasis">
                {latestPostAuthor}
              </span>
               · in <span className="conversation__details conversation__details--emphasis">
               {topic}
             </span>
          </p>

          {this.renderBody()}

          <p className="conversation__details">
              Replies: <span className="conversation__details conversation__details--emphasis">
                {numberOfReplies}
              </span>
               · by: <span className="conversation__details conversation__details--emphasis">
               {originalPostAuthor}
             </span> / {originalPostAuthorStatus}
          </p>
        </div>

        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Conversation;
