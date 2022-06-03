
function equalCheck(str1, str2) {
    s1L = str1.length;
    s2L = str2.length;
  
    for (let index = 0; index < s2L; index++) {
      if (str2[index] !== str2[index].toUpperCase()) {
        return 'FALSE';
      }
    }
  
    for (let i = 0; i < s2L; i++) {
      if (str1.toUpperCase().includes(str2[i].toUpperCase()) > 0) {
        return 'TRUE';
      } else {
        return 'FALSE';
      }
    }
  }
  
  console.log(equalCheck('ebCde', 'BCD')); //TRUE
  console.log(equalCheck('eCB', 'ECB')); //TRUE
  console.log(equalCheck('BcdEF', 'BCEF')); //TRUE
  console.log(equalCheck('BCD', 'BcD')); //FALSE