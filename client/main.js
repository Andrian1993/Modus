import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/js/Navbar.js'
import '../imports/ui/js/Footer.js'
import '../imports/ui/js/Home.js'
import '../imports/ui/js/Contacts.js'
import '../imports/ui/js/Portfolio.js'
import '../imports/ui/js/Blog.js'

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/Contacts', function () {
  this.render('Contacts');
});

Router.route('/Portfolio', function () {
  this.render('Portfolio');
});

Router.route('/Blog', function () {
  this.render('Blog');
});
