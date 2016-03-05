import { BASE_URI } from "./constants";

let API = { fetch };

function fetch(path){
  let url = `${BASE_URI}/${path}`
  let request = new XMLHttpRequest();

  return new Promise( (resolve, reject) => {
    $.ajax({
      method: "GET",
      url: url
    }).done((response, status, jqXHR) => {
      if (status === 'success') {
        resolve(response);
      }
    }).fail((jqXHR, textStatus) => {
      reject(new Error("Error fetching posts"));
    });
  });
}

export default API;
