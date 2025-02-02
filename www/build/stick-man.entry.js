import { r as registerInstance, h } from './index-6227b3ed.js';

const stickmanCss = ":root{--walls:yellow;--hello:red}.stickman{position:relative;width:1500px;height:1500px}.leg{position:absolute;height:80px;width:5px;background-color:var(--hello);transform:rotate(30deg);top:500px;right:770px}.leg2{position:absolute;height:80px;width:5px;background-color:var(--hello);transform:rotate(150deg);top:500px;right:725px}.torso{position:absolute;height:100px;width:20px;background-color:var(--hello);top:405px;right:740px}.head{position:absolute;height:38px;width:38px;background-color:var(--hello);border-radius:100%;top:370px;right:732px}.headhole{position:relative;height:30px;width:30px;background:white;border-radius:100%;top:4px;left:4px}.arm{position:absolute;height:75px;width:5px;background-color:var(--hello);top:380px;right:775px;transform:rotate(150deg)}.arm2{position:absolute;height:75px;width:5px;background-color:var(--hello);top:410px;right:730px;transform:rotate(150deg)}#stick-house .wall{height:120px;width:120px;background-color:var(--walls)}#stick-house .roof{height:120px;background-color:var(--walls)}";

let Stickman = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "stickman" }, h("div", { class: "leg2" }), h("div", { class: "leg" }), h("div", { class: "torso" }), h("div", { class: "arm" }), h("div", { class: "arm2" }), h("div", { class: "head" }, h("div", { class: "headhole" }))));
  }
};
Stickman.style = stickmanCss;

export { Stickman as stick_man };
