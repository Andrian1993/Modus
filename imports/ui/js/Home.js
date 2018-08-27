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

if (Meteor.isClient) {
    Template.Home.onRendered(function(){
      $('.site-color-purple').click(
          function () {
              $( 'nav, .footer' ).css( "background-color", "purple" );
          }
      );

      $('.site-color-aqua').click(
        function () {
            $( 'nav, .footer' ).css( "background-color", "#76c7c0" );
        }
    );

    $('.site-color-green').click(
        function () {
            $( 'nav, .footer' ).css( "background-color", "#70c570" );
        }
    );

    })
  }
/*asdasdasdasd*/