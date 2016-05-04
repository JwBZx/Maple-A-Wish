Wishlist = new Mongo.collection('wishlist');
console.log("Hello World");
if(Meteor.isClient){
  Template.wishlist.helpers({
    'wishlist' = function(){
      return wishlist.find()
    },
    'selectedWish': function(){
      var playerId = this._id;
      var selectedWish = Session.get('selectedWish');
      if(playerId === selectedWish){
        return "selected"
      }
    }
  });
  Template.wishlist.events({
    'click .player' = function(){
      var playerId = this._id;
      console.log("You clicked a .player element");
      Session.set('selectedWish', playerId);
    }
  });
}
if(Meteor.isServer){
}
