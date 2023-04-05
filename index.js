
window.onload = (event) => 
{
  initSqlJs({ locateFile: filename => 'https://www.amusicalcoder.com/geLocator.github.io/' + filename }).then(function(SQL)
  {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.amusicalcoder.com/geLocator.github.io/ge_locations.db', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = e => {
      const uInt8Array = new Uint8Array(xhr.response);
      const db = new SQL.Database(uInt8Array);
      const contents = db.exec("SELECT * FROM locations");

      const data = new Map();

      for(let i = 0; i < contents[0].values.length; i++)
      {
        data.set(contents[0].values[i][0], contents[0].values[i][1]);
      }

      button = document.getElementById("enter_button");

      var getValue = (event) => {
        document.getElementById("addressText").innerHTML = data.get(document.getElementById("storeNumText").value);
        event.preventDefault();
      };

      button.addEventListener('click', getValue);
      button.addEventListener('touchstart', getValue);
    };
    xhr.send();

  });

}

/*
DEBUG INFO

4/4/2023:
  iOS Debug via remotedebug_ios_webkit_adapter:
    "Not allowed to request resource
      XMLHttpRequest cannot load http://www.amusicalcoder.com/geLocator.github.io/ge_locations.db due to access control checks."
    SOLVED, CORS policy issue. serve https only and change get request to https://... 

*/