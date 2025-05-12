// @ts-nocheck
import { portfolioData } from '$lib/photoData';

export const prerender = true;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {
  const projectId = params.slug;
  const project = portfolioData.projects.find(p => p.id === projectId);
  
  return {
    project
  };
}