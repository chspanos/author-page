// Publication data
var publications = {
  "stories": [{
      "title": "Growing Feathers",
      "genre": "children's fiction",
      "publisher": "Stories for Children Magazine",
      "date": "February 2010",
      "link": "",
      "cover": "images/SFC-Feb2010-150.jpg"
    },{
      "title": "Bones in the Cellar",
      "genre": "YA/MG fiction",
      "publisher": "Hunger Mountain, Vermont College Journal of Fine Arts",
      "date": "Spring 2010",
      "link": "http://www.hungermtn.org",
      "cover": "images/HungerMtn3-150.jpg"
    },{
      "title": "Counting",
      "genre": "YA/MG fiction",
      "publisher": "Beyond Centauri #30",
      "date": "October 2010",
      "link": "http://www.samsdotpublishing.com/beyondguide.htm",
      "cover": "images/BC-Oct2010-150.jpg"
    },{
      "title": "Sock Monster",
      "genre": "children's fiction",
      "publisher": "Stories for Children Magazine",
      "date": "Holiday (Dec/Jan) 2011",
      "link": "",
      "cover": "images/SFC-Dec2011-150.jpg"
    },{
      "title": "Holey Vole-y",
      "genre": "children's fiction",
      "publisher": "Stories for Children's Magazine",
      "date": "Winter (Feb/Mar) 2012",
      "link": "",
      "cover": "images/SFC-Feb2012-150.jpg"
    },{
      "title": "Are We There Yet?",
      "genre": "Literary fiction",
      "publisher": "California Writers Club Literary Review",
      "date": "Summer 2014",
      "link": "",
      "cover": "images/CWC-2014-150.jpg"
    }
  ]
};

var Story = function(data, index) {
  this.index = index;
  this.title = ko.observable(data.title);
  this.publisher = ko.observable(data.publisher);
  this.date = ko.observable(data.date);
  this.cover = ko.observable(data.cover);
};

// Featured Story
var featured = {
  "title": "Bones in the Cellar",
  "author": "Cheryl Spanos",
  "excerpt": "Finn's baggy trousers hadn't been able to hide his trembling knees. But no one called an O'Reilly a coward. Finn had bristled and accepted the challenge. Wherever Finn went, Ida followed. She'd had to accept the dare, too. Family honor depended on it.",
  "link": "http://hungermtn.org/bones-in-the-cellar/"
};

var Feature = function(data) {
  this.title = ko.observable(data.title);
  this.author = ko.observable(data.author);
  this.excerpt = ko.observable(data.excerpt);
  this.link = ko.observable(data.link);
};

// Awards
var awards = {
  "awards": [{
      "title": "Tougher Than Dragon Hide",
      "genre": "MG novel",
      "contest": "San Francisco Writers Conference Contest",
      "place": "Runner-up for Children's Fiction",
      "date": "2008",
      "link": "http://www.sfwriters.org"
    },{
      "title": "Bones in the Cellar",
      "genre": "YA/MG fiction",
      "contest": "Rosebud / Mary Wollstonecraft Shelley Award",
      "place": "One of 25 semi-finalists",
      "date": "2007",
      "link": "http://www.rsbd.net"
    },{
      "title": "Bones in the Cellar",
      "genre": "YA/MG fiction",
      "contest": "77th Annual Writer’s Digest Writing Competition",
      "place": "Honorable Mention for Mainstream/Literary Short Story",
      "date": "2008",
      "link": "http://www.writersdigest.com"
    },{
      "title": "Are We There Yet?",
      "genre": "Literary fiction",
      "contest": "77th Annual Writer’s Digest Writing Competition",
      "place": "Honorable Mention for Mainstream/Literary Short Story",
      "date": "2008",
      "link": "http://www.writersdigest.com"
    },
    {
      "title": "Fleeced",
      "genre": "Fiction",
      "contest": "Rosebud / Mary Wollstonecraft Shelley Award",
      "place": "One of 25 semi-finalists",
      "date": "2011",
      "link": "http://www.rsbd.net"
    }
  ]
};

// Novels - completed or WIP
var novels = {
  "novels": [{
      "title": "Tougher Than Dragon Hide",
      "genre": "MG fantasy",
      "description": ""
    },{
      "title": "Bedlam Bequeathed",
      "genre": "YA fantasy",
      "description": ""
    },{
      "title": "Unmarked",
      "genre": "YA fantasy",
      "description": ""
    }
  ]
};
