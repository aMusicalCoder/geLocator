
initSqlJs({ locateFile: filename => 'http://www.amusicalcoder.com/geLocator.github.io/' + filename }).then(function(SQL)
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