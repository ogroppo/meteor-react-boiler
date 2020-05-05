import { Meteor } from "meteor/meteor";

Meteor.publish(null, function () {
  return Meteor.users.find({ _id: this.userId }, { fields: { personId: 1 } });
});
