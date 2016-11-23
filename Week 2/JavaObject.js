
<SCRIPT LANGUAGE = "JavaScript">
<--
// Your code here.
function deepEqual(x, y){
  if(typeof(x) == "object" && typeof(x) != null && typeof(y) == "object" && typeof(y) != null){
    var xCount = 0;
    var yCount = 0;
    for(p in x){
      xCount++;
    }
    for(p in y){
      yCount++;
    }
    if(xCount != yCount){
      return false;
    }
    for(p in x){
      var found = false;
      var test = p;
      for(m in y){
        if(m == test){
          found = true;
        }
      }
      if(!found){
        return false;
      }
    }
    for(var l in x){
    	var tester = deepEqual(x[l], y[l]);
    	if(tester == false){
      	return false;
      }
    }
    return true;
  }
  else {
    	return x === y;
    }
  }

//var /*obj = {here: {is: "an"}, object: 2};
/*document.getElementById("test 1").textContent = deepEqual(obj, obj);
// → true
document.getElementById("test 2").textContent = deepEqual(obj, {here: 1, object: 2});
// → false
document.getElementById("test 3").textContent = deepEqual(obj, {here: {is: "an"}, object: 2});
// → true
document.getElementById("test 4").textContent = deepEqual(obj, {here: 3, object: 2, an: 3});
*/
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
-->
</script>
