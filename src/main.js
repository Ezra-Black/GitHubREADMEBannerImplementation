import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: false
})
  .pause(1000)
  .type('<span style="font-family: Segoe UI Emoji">🤓</span>', {
    html: true
  })
  .pause(300)
  .type("&nbspWelcome")
  .pause(1000)
  .type("&nbspI'm&nbspEzra&nbspBlack")
  .pause(1000)
  .delete(22)
  .type("A&nbspSwift&nbspEngineer")
  .pause(300)
  .delete(16)
  .type("Database&nbspOfficer")
  .pause(300)
  .delete(16)
  .pause(400)
  .delete(2)
  .type("A&nbspFather")
  .pause(400)
  .type(".")
  .pause(1000)
  .delete(9)
  .type("&nbspEngineering&nbsp&nbspThe&nbspFuture.")
  .pause(1000)
  .delete()
  .go();
