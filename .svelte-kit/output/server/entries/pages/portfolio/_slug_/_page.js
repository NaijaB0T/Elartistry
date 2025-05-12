import { p as portfolioData } from "../../../../chunks/photoData.js";
const prerender = true;
function load({ params }) {
  const projectId = params.slug;
  const project = portfolioData.projects.find((p) => p.id === projectId);
  return {
    project
  };
}
export {
  load,
  prerender
};
