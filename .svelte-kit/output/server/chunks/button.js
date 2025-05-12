import { c as create_ssr_component, j as compute_rest_props, k as spread, l as escape_attribute_value, o as escape_object } from "./ssr.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "size", "class_", "disabled"]);
  let { variant = "default" } = $$props;
  let { size = "default" } = $$props;
  let { class_ = void 0 } = $$props;
  let { disabled = false } = $$props;
  let className = void 0;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.class_ === void 0 && $$bindings.class_ && class_ !== void 0) $$bindings.class_(class_);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  className = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-primary text-white hover:bg-primary/90": variant === "default",
      "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
      "border border-accent bg-transparent hover:bg-accent hover:text-secondary": variant === "outline",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
      "hover:bg-accent/20 hover:text-accent": variant === "ghost",
      "underline-offset-4 hover:underline text-primary": variant === "link",
      "h-10 py-2 px-4": size === "default",
      "h-9 px-3 rounded-md": size === "sm",
      "h-11 px-8 rounded-md": size === "lg",
      "h-10 w-10": size === "icon"
    },
    class_
  );
  return `<button${spread(
    [
      { class: escape_attribute_value(className) },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B,
  shuffleArray as s
};
