
initSqlJs({ locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js` }).then(function(SQL)
{
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://www.amusicalcoder.com/geLocator.github.io/ge_locations.db', true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = e => {
    const uInt8Array = new Uint8Array(xhr.response);
    const db = new SQL.Database(uInt8Array);
    const contents = db.exec("SELECT * FROM my_table");
    
  };
  xhr.send();

});