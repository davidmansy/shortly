window.Shortly = Backbone.View.extend({

  template: _.template(' \
      <h1>Shortly</h1> \
      <div id="main"></div> \
      <div id="container"></div>'
  ),

  events: {
    "click li a.index": function(e) {
      e.preventDefault();
      Backbone.history.navigate("index", {trigger: true});      
    },
    "click li a.create": function(e) {
      e.preventDefault();
      Backbone.history.navigate("shorten", {trigger: true});
    },
    "submit form#login": function(e) {
      e.preventDefault();
      Backbone.history.navigate("index", {trigger: true});
    },
    "click li a.logout": function(e) {
      e.preventDefault();
      Backbone.history.navigate("login", {trigger: true});      
    },
    "click li a.signup": function(e) {
      e.preventDefault();
      Backbone.history.navigate("signup", {trigger: true});      
    },
    "click li a.login": function(e) {
      e.preventDefault();
      Backbone.history.navigate("login", {trigger: true});      
    },
    "submit form#signup": function(e) {
      e.preventDefault();
      Backbone.history.navigate("register", {trigger: true});
    },
  },

  initialize: function(){
    console.log( "Shortly is running" );
    $('body').append(this.render().el);
    this.renderUserView(); // default view
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  },

  renderUserView: function(e){
    e && e.preventDefault();
    //Add the user login view
    var user = new Shortly.User();
    var userView = new Shortly.UserView( {model: user} );
    this.$el.find('#main').html( userView.render().el );
    this.$el.find('#container').html('');
  },

  renderSignupView: function(e){
    e && e.preventDefault();
    //Add the user login view
    var user = new Shortly.User();
    var signupView = new Shortly.SignupView( {model: user} );
    this.$el.find('#main').html( signupView.render().el );
    this.$el.find('#container').html('');
  },

  renderIndexView: function(e){
    e && e.preventDefault();
    //Add the navigation view
    var navView = new Shortly.NavView();
    this.$el.find('#main').html( navView.render().el );
    //Add the list of links
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView( {collection: links} );
    this.$el.find('#container').html( linksView.render().el );
    this.updateNav('index');
  },

  renderCreateView: function(e){
    e && e.preventDefault();
    var linkCreateView = new Shortly.LinkCreateView();
    this.$el.find('#container').html( linkCreateView.render().el );
    this.updateNav('create');
  },

  updateNav: function(className){
    this.$el.find('.navigation li a')
            .removeClass('selected')
            .filter('.'+className)
            .addClass('selected');
  }

});