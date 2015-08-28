var React = require('react');

var Header = require('./header.jsx');
var MapContainer = require('./mapContainer.jsx');
var Intro = require('./intro.jsx');

var App = React.createClass({
	render: function() {
		return (
			<main>
        <Header />
  			<MapContainer />
        <section id='sidebar'>
          <Intro />
          <div id='allGraphsContainer'>
            <article className='graphWrap' id='commuteContainer'>
              <h1>Average Commute Time</h1>
            </article>
            <article className='graphWrap' id='buildYearContainer'>
              <h1>Build Year Container</h1>
            </article>
          </div>

        </section>
			</main>
		)
	}
});

React.render(<App appName="MyHood" />, document.getElementById('content'));
