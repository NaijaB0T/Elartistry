import { portfolioData } from '$lib/photoData';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const projectId = params.slug;
  const project = portfolioData.projects.find(p => p.id === projectId);
  
  return {
    project
  };
}