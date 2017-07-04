var catList = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HsYEnyngPOWpzy-hFFSlnj3Qoi43BRsT6ZgzEDGBKm2Rh8Tk',
    nicknames: [
        'Tabtab',
        'T-Bone',
        'Mr. T'
    ]}, {
    clickCount: 0,
    name: 'cat name',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVD5jIp0O3kopO0DUdGGPYZrqXRsD-bm2e_6K7a4Gk6s0Jsto7',
    nicknames: [
        'nickname 1',
        'nickname 2',
        'nickname 3'
    ]}
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);
    this.catLevel = ko.computed(function() {
        return Math.floor(this.clickCount() / 10);
    }, this);
}

var ViewModel = function() {
    var self = this;
    this.catArray = ko.observableArray([]);

    catList.forEach(function(aCat) {
        self.catArray.push(new Cat(aCat));
    });

    this.currentCat = ko.observable( this.catArray()[0] );
    

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }

    this.changeCat = function(aCat) {
        self.currentCat(aCat);
    }
}

ko.applyBindings(new ViewModel());