Shortly.UserView = Backbone.View.extend({

  className: 'user',

  template: _.template(' \
    <section class="loginform cf"> \
      <form id="login" action="login" accept-charset="utf-8"> \
        <h2>Login</h2> \
        <ul> \
          <li><label for="usermail">Email</label> \
          <input type="email" name="mail" placeholder="yourname@email.com" required></li> \
          <li><label for="password">Password</label> \
          <input type="password" name="password" placeholder="password" required></li> \
          <li> \
          <input type="submit" value="Login"></li> \
        </ul> \
      </form> \
    </section> \
    <section> \
      <ul> \
        <li class="linkTo">Not a user yet, please <a href="signup" class="signup">sign up</a></li> \
      </ul> \
    </section>'
  ),

  render: function() {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});