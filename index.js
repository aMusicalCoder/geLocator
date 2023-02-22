window.onload = (event) => 
{
  var contents;

  initSqlJs({ locateFile: filename => 'http://www.amusicalcoder.com/geLocator.github.io/' + filename }).then(function(SQL)
  {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://www.amusicalcoder.com/geLocator.github.io/ge_locations.db', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = e => {
      const uInt8Array = new Uint8Array(xhr.response);
      const db = new SQL.Database(uInt8Array);
      contents = db.exec("SELECT * FROM locations");
      
    };
    xhr.send();

  });

  button = document.getElementById("enter_button");

  button.addEventListener('click', function(event) {
    document.getElementById("addressText").innerHTML = contents[document.getElementById("storeLabel")];
  });  
}