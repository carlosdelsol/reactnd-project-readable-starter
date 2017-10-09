const API = `http://localhost:3001`;

const headers = { 'Authorization': 'carlosdelsol' };
  
export function fetchAPI (url) {
  return fetch(`${API}/${url}`, { headers })
    .then((res) => res.json())
}