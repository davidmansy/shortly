Shortly.SignupView = Backbone.View.extend({

  className: 'signup',

  template: _.template(' \
    <section class="loginform cf"> \
      <form id="signup" action="signup" accept-charset="utf-8"> \
        <h2>Sign Up</h2> \
        <ul> \
          <li><label for="usermail">Email</label> \
          <input type="email" name="mail" placeholder="yourname@email.com" required></li> \
          <li><label for="password">Password</label> \
          <input type="password" name="password" placeholder="password" required></li> \
          <li> \
          <input type="submit" value="Signup"></li> \
        </ul> \
      </form> \
    </section> \
    <section> \
      <ul> \
        <li class="linkTo" >Already a user, please <a href="login" class="login">login</a></li> \
      </ul> \
    </section>'
  ),

  render: function() {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});