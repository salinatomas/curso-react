import React from "react";

import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          email={this.props.badge.email}
          className="BadgesListItem__avatar"
        />
        <div>
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
          </div>
          <div className="Twitter__name">
            <span className="Twitter__logo"></span>@{this.props.badge.twitter}
          </div>
          <div>{this.props.badge.jobTitle}</div>
        </div>
      </div>
    );
  }
}

export default BadgesListItem;
