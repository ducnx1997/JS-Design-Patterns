$(function() {
    var cats = [];
    var Cat = function(name, imgSrc) {
            this.name = name;
            this.clickCount = 0;
            this.imgSrc = imgSrc;
        }
        Cat.prototype.clicked = function() {
            this.clickCount++;
    }

    var controller = {
        init : function() {
            for (let i = 1; i <= 5; i++) {
                cats.push(new Cat("cat" + i, "cat_picture" + i + ".jpeg"));
            }
            view.init();
        },
        getCats : function() {
            return cats;
        },
        clicked : function(cat) {
            console.log(cat);
            cats[cat].clicked();
            view.render(cats[cat]);
        },
        getCat : function(cat) {
            return cats[cat];
        }
    }

    var view = {
        init : function() {
            var cats = controller.getCats();
            for (let i = 0; i < cats.length; i++) {
                $(".catlist").append('<button id=' + cats[i].name + '>' + cats[i].name +'</button>');
                $('#' + cats[i].name).click(function() {
                    //console.log(cats);
                    //console.log(i);
                    view.render(cats[i]);
                    view.currentCat = i;
                    //console.log(view.currentCat);
                })
            }
            $('.catPic').click(function() {
                controller.clicked(view.currentCat);
            })
            this.render(cats[0]);
        },
        render : function(cat) {
            $('.catname').text(cat.name);
            $('.catPic').attr('src', cat.imgSrc);
            $('.clickNum').text(cat.clickCount);
        },
        currentCat : 0
    }

    controller.init();

    
})