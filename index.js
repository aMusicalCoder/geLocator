var contents;

window.onload = (event) => 
{
  
  initSqlJs({ locateFile: filename => 'http://www.amusicalcoder.com/geLocator.github.io/' + filename }).then(function(SQL)
  {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://www.amusicalcoder.com/geLocator.github.io/ge_locations.db', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = e => {
      const uInt8Array = new Uint8Array(xhr.response);
      const db = new SQL.Database(uInt8Array);
      this.contents = db.exec("SELECT * FROM locations");
      console.log(this.contents);
      
    };
    xhr.send();

  });

  button = document.getElementById("enter_button");

  button.addEventListener('click', function(event) {
    document.getElementById("addressText").innerHTML = this.contents[document.getElementById("storeLabel").value]; //WHERE WE LEFT OFF. understand layout of contents to get data out
  });  
}