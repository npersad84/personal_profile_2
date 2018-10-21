'use strict';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutPath:this.props.routes.about_path,
      homePath: this.props.routes.home_path
    }
  }
  
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark">
        <p id="navbar-me">Navin Persad, Esq.</p>
        <NavMenu 
          aboutPath={this.state.aboutPath}
          homePath={this.state.homePath}  
        />  
      </nav>
    );
  }
};