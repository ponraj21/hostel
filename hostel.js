if (Meteor.isClient) {
  // counter starts at 0
 

 
}

Router.route('/', function () {
  this.render('home');
  
 $(".right.carousel-control").click();
});
Router.route('/home', function () {
  this.render('home');
  $('.carousel').carousel({
  interval: 2000
});
});
Router.route('/contact', function () {
  this.render('contact');
 
});
Router.route('/facilities', function () {
  this.render('facilities');
 
});
/*Router.map(function(){
    this.route('navmenu', {path: '/'} );
    this.route('home',{path:'/home'});
});*/

if (Meteor.isServer) {
  Meteor.startup(function () {
	  Meteor.settings.contactForm = {
  emailTo: 'friendsladieshostel@gmail.com'
};
    // code to run on server at startup
  });
}
