async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith("/images/")) {
    const response = await resolve(event);
    return response;
  }
  return await resolve(event);
}
export {
  handle
};
