Wishlist = new Mongo.collection('wishlist');
console.log("Hello World");
if(Meteor.isClient){
  Template.wishlist.helpers({
    'wishlist' = function(){
      return wishlist.find()
    }
  });
}
if(Meteor.isServer){
}
