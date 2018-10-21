'use strict';

class About extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
  	const routes = this.props.routes
    return (
	    <div>
	      <Home
	        routes={routes}
	      />
	      <div class="container">
				  <div class="row">
				    <div class="col">
				      1 of 2
				    </div>
				    <div class="col">
				      2 of 2
				    </div>
				  </div>
				</div>  
			</div>	
    );
  }
};