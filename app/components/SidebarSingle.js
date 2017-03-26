var React = require('react');
var TopViewed = require('./TopViewed');
var TopViewedItem = require('./TopViewedItem');
var GridItem = require('./GridItem');
var SidebarCard = require('./SidebarCard');

 function SidebarHomePage(props) {
   var whiteSidebar = {
     padding:"0px 10px",
     marginTop: "30px",
     marginLeft:"30px"
   };
    return (
      <div className="mdl-cell--3-col mdl-cell--12-col-phone" style={whiteSidebar}>
      {this.context.LatestPosts.map(function(post) {
        return (
        <SidebarCard
          key={post.id}
          name={post.title}
          imgSrc={post.poster_path}
          overview={post.overview}
          filmId = {post.id}/>
        )
      })}
      </div>

    );
  }

module.exports = SidebarHomePage;
