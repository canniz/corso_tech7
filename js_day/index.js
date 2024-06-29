import { Confetti } from "./libs/confetti.js";

document.addEventListener("DOMContentLoaded", () => {
  const confetti = new Confetti("trigger-confetti");

  confetti.setCount(75);
  confetti.setSize(1);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(false);
});
