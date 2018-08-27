import "../Portfolio.html"

if (Meteor.isClient) {
    Template.Portfolio.onRendered(function () {

        for (var i = 1; i < 11; i++) {
            let imgName = "img/portfolio/" + i + ".jpg";
            let imgHolder = $('<div class="col-3 portfolio-image"></div>');
            let img = $('<img>');
            img.attr('src', imgName);
            imgHolder.append(img);
            $('.image-holder').append(imgHolder);
        }
    })
}










//Автоматически создавать  изображен














//  //Equivalent: $(document.createElement('img'))
// img.attr('src', responseObject.imgurl);
// img.appendTo('#imagediv');


// $this.attr('src','default.gif');