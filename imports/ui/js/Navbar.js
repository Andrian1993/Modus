import "../Navbar.html"

if (Meteor.isClient) {
  Template.Navbar.onRendered(function(){
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
