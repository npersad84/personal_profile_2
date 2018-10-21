'use strict';

class Home extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar 
          routes={this.props.routes}
        />
        <Body/>
      </div>
    );
  };
};