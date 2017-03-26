var React = require('react');
var Star = require('./Star');
var LearnMoreButton = require('./LearnMoreButton');
require("../js/slick.js");
var $ = require("jquery");


  var SliderItem = React.createClass({
    componentDidMount: function() {
      $('.slider').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1
           });
    },
    contextTypes: {
      LatestPosts: React.PropTypes.array,
      imgPath: React.PropTypes.string
    },
  render: function(props) {

  var sliderImgStyles = {
      maxHeight: '320px',
      width: 'auto',
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
      position: "relative",
      bottom: "-20px",
      left: '30px'

  };
  var sliderTextStyles = {
    color: '#fff'
  }
    return (
        <div className="mdl-grid sliderItem">
        <div className="mdl-cell mdl-cell--6-col">
          <img src={this.context.imgPath+this.props.imgSrc} style={sliderImgStyles}/>
        </div>
        <div style={{sliderTextStyles, borderRight:'solid 1px #fff'}} className="mdl-cell mdl-cell--6-col">
          <h5>{this.props.name} </h5>
          <Star/><Star/><Star/><Star/><Star/>
          <p id="overview"> {this.props.overview}</p>
          <LearnMoreButton linkTo={this.props.filmId}/>
        </div>
      </div>
    );
}

});
module.exports = SliderItem ;
