// ViewModel section
var ViewModel = function() {
  var self = this;

  this.publicationList = ko.observableArray([]);

  publications.stories.forEach(function(storyItem, index){
    self.publicationList.push(new Story(storyItem, index));
  });

  this.currentStory = ko.observable( self.publicationList()[0] );

  this.featuredStory = new Feature(featured);

  // nextCover function advances to the next cover on the Publication List.
  // Activated by a click on the forward button.
  this.nextCover = function() {
    // compute the index of the next Story
    var index = self.currentStory().index + 1;
    if (index < self.publicationList().length) {
      // set Story to the next one on the list
      self.currentStory( self.publicationList()[index] );
    } else {
      // wrap around to the beginning of the list
      self.currentStory( self.publicationList()[0] );
    }
  };

  // previousCover function displays the previous cover on the Publication List.
  // Activated by the reverse button.
  this.previousCover = function() {
    // get the index of the current Story
    var index = self.currentStory().index;
    if (index === 0) {
      // wrap around to the end of the list
      index = self.publicationList().length - 1;
    } else {
      // get the previous story
      index -= 1;
    }
    self.currentStory( self.publicationList()[index] );
  };

};

var viewModel = new ViewModel();
ko.applyBindings(viewModel);
