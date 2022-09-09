class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "")
  }

  static titleize(string){
    let newArr = []
    const stringArr = string.split(' ')
    const exceptW = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    stringArr.forEach(word=>{
      if (exceptW.indexOf(word)!==-1){
        if(stringArr.indexOf(word)===0){
          newArr.push(this.capitalize(word))
        } else {
          newArr.push(word)
        }
      } else {
        newArr.push(this.capitalize(word))
      }
    })
    return newArr.join(' ')
  }
}
