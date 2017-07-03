var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg');

    this.catLevel = ko.computed(function() {
        return Math.floor(this.clickCount() / 10);
    }, this);
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    }
}

ko.applyBindings(new ViewModel());