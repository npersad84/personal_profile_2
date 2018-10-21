var NavMenu = React.createClass({
  render() {
    return (
      <ul className="nav justify-content-end nav-options">
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    );
  }
});
