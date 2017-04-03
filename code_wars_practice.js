


//.sort()
// var words = ["aretheyhere", "yestheyarehere", "aehrsty", "aehrsty"]

function ArrNoDupe(a) {
    var temp = {};
    for (var i = 0; i < a.length; i++)
        temp[a[i]] = true;
    var r = [];
    for (var k in temp)
        r.push(k);
    return r;


function longest(s1, s2) {





}


function longest(s1, s2) {


  var string = s1 + s2;
  string = string.split("").sort();
  //console.log(string)

  var temp = {};

  for (var i = 0; i < string.length; i++)
      temp[string[i]] = true;

  // var r = [];

  var keys = Object.keys(temp)
  keys = keys.join("");
  return keys



  // for (var k in temp)
  //     r.push(k);
  //
  // return r;

}



.join("")









//
