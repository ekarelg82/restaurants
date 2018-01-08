fetch('http://localhost:3000/projects/restaurant')
.then(res => res.json())
.then(restaurant => {
    var elements = '';
    restaurant.forEach(function(data){
        elements+=Decorate(data)
        document.getElementById('container').innerHTML = elements;
    })
    function Decorate(info){
        return `
        <div class='deco'>
            <h1>Name: ${info.name}</h1>
            <div class="link">
                <h2 id="${info.id}">DELETE!</h2>
            </div>
            <h2>Cuisine: ${info.cuisine}</h2>
            <h2>Grade: ${info.grades[0].grade}</h2>
            <h2>Address: ${info.address.building} ${info.address.street} ${info.address.zipcode}</h2>
        </div>
        <script>
        document.getElementById("${info.id}").addEventListener("click", deleteId);

        function deleteId() {
            return fetch("http://localhost:3000/projects/restaurant/${info.id}", {
                method: 'delete'
              }).then(response =>
                response.json().then(json => {
                  return json;
                })
              );
        }

        </script>
        `
    }
});
