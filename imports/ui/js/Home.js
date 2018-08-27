import "../Home.html"


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
  