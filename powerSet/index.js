function removeDup(string){
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (output.indexOf(string[i]) === -1) {
      output += string[i]
    }
  }
  
  return output;
}

function sortItem(item){
  return item.split('').sort().join('');
}

function powerSet (string) {
  string = removeDup(string);
  var search = function(active, rest, output) {
    if (!active && !rest)
      return;
    if (!rest) {
      output.push(sortItem(active));
    } else {
      search(active + rest[0], rest.slice(1), output);
      search(active, rest.slice(1), output);
    }
    return output.sort();
  }
  return search("", string, ['']);
}
