'use strict';

class NavMenu extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      aboutPath:this.props.aboutPath,
      homePath:this.props.homePath
    }
  }

  render() {
    return (
      <ul className="nav justify-content-end nav-options">
        <li className="nav-item">
          <a className="nav-link active" href={(this.state.homePath || '#')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href={(this.state.aboutPath || '#')}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    );
  }
};
