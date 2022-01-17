function funCall(){
  var myArray = [
    {name: "one", id:1, age: 22},
    {name: "two", id:2, age: 24},
    {name: "three",id:3, age: 25},
    {name: "four", id:4, age: 21}
  ]

  var html = "<table border='1|1'>"

  setTimeout(() =>{
    for(var i = 0; i< myArray.length; i++){
      html += '<tr>';
      html +='<td>'+myArray[i].id+'</td>';
      html +='<td>'+myArray[i].name+'</td>';
      html +='<td>'+myArray[i].age+'</td>';
      html +='</tr>';
    }
    document.getElementById("table").innerHTML = html
  },5000)
}

funCall();