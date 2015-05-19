function DNAStrand(s){
  var ans = '';
  var c = '';
  for(var i=0, len=s.length; i<=len-1; i++){
    c = s.charAt(i);
    switch (c) {
      case "T":
        ans+='A';  break;
      case "A":
        ans+='T';  break;
      case "U":
        ans+='C';  break;
       case "C":
        ans+='U';  break;
      default:
        console.log("No Match, Broken!");
    }
  }
  return ans;
}
