import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
        break;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
        break;
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth
            ? '/surveys'
            : '/'} className="left brand-logo">Emaily
          </Link>
          <ul className="right">
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return ({auth: state.auth});
}

export default connect(mapStateToProps)(Header);
