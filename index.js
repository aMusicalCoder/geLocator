
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://github.com/aMusicalCoder/geLocator/blob/d0f56673455da5cd475025fc1b25b876a3478ebb/ge_locations.db', true);
xhr.responseType = 'arraybuffer';

xhr.onload = e => {
  const uInt8Array = new Uint8Array(xhr.response);
  const db = new SQL.Database(uInt8Array);
  const contents = db.exec("SELECT * FROM my_table");
  
};
xhr.send();