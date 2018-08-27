import "../Home.html"

if (Meteor.isClient) {
  Template.Home.onRendered(function(){
    $('nav ul li').hover(
        function () {
            $('ul', this).stop().slideDown(400);
        },
        function () {
            $('ul', this).stop().slideUp(400);
        }
    );
  })
}
