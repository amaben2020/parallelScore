"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardData = void 0;

var _hero = _interopRequireDefault(require("../img/hero.jpg"));

var _nat = _interopRequireDefault(require("../img/nat-9.jpg"));

var _nat2 = _interopRequireDefault(require("../img/nat-7.jpg"));

var _nat3 = _interopRequireDefault(require("./../img/nat-5.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardData = [{
  id: "1",
  title: "Find & Reserve",
  text: "Re-imagine the resort experience with All-Inclusive by Marriott",
  image: _hero["default"]
}, {
  id: "2",
  title: "Special Offers",
  text: "  The newest and most rewarding name in immersive vacations.  ",
  image: _nat["default"]
}, {
  id: "3",
  title: "Vacations",
  text: "We offer unprecedented all-inclusive getaways All-Inclusive by ",
  image: _nat2["default"]
}, {
  id: "4",
  title: "Our Brands",
  text: "In the most coveted destinations across the world All-Inclusive ",
  image: _nat3["default"]
}];
exports.cardData = cardData;