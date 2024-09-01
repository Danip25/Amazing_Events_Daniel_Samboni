export const loadData = async () => {
  return fetch("https://aulamindhub.github.io/amazing-api/events.json").then(response => response.json())
}
