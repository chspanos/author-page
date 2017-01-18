// ViewModel section
var ViewModel = function() {
  var self = this;

  this.publicationList = ko.observableArray([]);

  publications.stories.forEach(function(storyItem){
    self.publicationList.push(new Story(storyItem));
  });

  this.currentStory = ko.observable( self.publicationList()[0] );

  this.changeStory = function( selectedStory ) {
    self.currentStory(selectedStory);
  };

};

var viewModel = new ViewModel();
ko.applyBindings(viewModel);
