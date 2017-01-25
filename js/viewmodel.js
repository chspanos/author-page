// ViewModel section
var ViewModel = function() {
  var self = this;

  // Variable to monitor length of welcome message
  this.shortMsg = ko.observable(true);

  // Toggle function to show more (or less) text, when Read button is clicked
  this.toggleMore = function() {
    this.shortMsg( !this.shortMsg() );
  };

  // computed function to update Read button label.
  // Button should be labeled "Read more" when the abbreviated message is
  // displayed and "Read less" when the full message is displayed.
  this.buttonLabel = ko.computed(function() {
    if (this.shortMsg()) {
      return "Read more";
    } else {
      return "Read less";
    }
  }, this);

  // Create observable array of published stories with which to populate DOM
  this.publicationList = ko.observableArray([]);

  publications.stories.forEach(function(storyItem, index){
    self.publicationList.push(new Story(storyItem, index));
  });

  // Current story for display in immage carousel
  this.currentStory = ko.observable( self.publicationList()[0] );

  // Featured story data for display in featured story section
  this.featuredStory = ko.observable(new Feature(featured));

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
  // Activated by click on the reverse button.
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
