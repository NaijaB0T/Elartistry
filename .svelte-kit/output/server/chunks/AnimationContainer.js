import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const AnimationContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animation = "fade-in" } = $$props;
  let { delay = 0 } = $$props;
  let { duration = 800 } = $$props;
  let { threshold = 0.1 } = $$props;
  let { once = true } = $$props;
  let element;
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0) $$bindings.animation(animation);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0) $$bindings.threshold(threshold);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0) $$bindings.once(once);
  return `<div${add_attribute("this", element, 0)}>${`<div class="opacity-0">${slots.default ? slots.default({}) : ``}</div>`}</div>`;
});
export {
  AnimationContainer as A
};
