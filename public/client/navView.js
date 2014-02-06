Shortly.NavView = Backbone.View.extend({

  className: 'navigation',

  template: _.template(' \
    <div> \
      <ul> \
        <li><a href="index" class="index">All Links</a></li> \
        <li><a href="shorten" class="create">Shorten</a></li> \
        <li><a href="login" class="logout">Logout</a></li> \
      </ul> \
    </div>'
  ),

  render: function() {
    this.$el.html( this.template() );
    return this;
  }

});