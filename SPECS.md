## Specifications

Please write a small web app, consisting of two pages.

- The __main page__ should display
  - a list of all servers that are returned from the `/nodes` endpoint
  - a list of recent events from the `/events` endpoint.
- Clicking on a server or an event should lead to a detailed server page

- The __detailed server page__ should display
  - the information that is returned from the `/nodes/:id` endpoint in a nice and easily digestable fashion
  - events related to that server (note that there is _no_ `/events/:id` endpoint)

- Both pages should refresh every few seconds by polling from the API (BONUS: have a button to enable/disable this)

- All navigation should be reflected in the browser url (e.g. via pushState or hash)

- There is no design specification. This is mostly about coding, but we would love if you could add some basic styles until you're satisfied with the user experience.

- Details on how to present data have been intentionally left out because we're really interested in what you come up with

__Please contact us if anything is unclear__
