/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Set up image proxying
  if (event.url.pathname.startsWith('/images/')) {
    // This is a simple pass-through to the real images directory
    const response = await resolve(event);
    return response;
  }
  
  return await resolve(event);
}