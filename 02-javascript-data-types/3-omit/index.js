/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let object = {}
    Object.assign(object, obj)
  
    for (let field of fields) {
      
        let temp = Object.entries(object)
        temp.forEach((value) => {
          
          if (value[0] == field) {
            
            let index = temp.indexOf(value)
            temp.splice(index, 1)
            object = Object.fromEntries(temp)
            
          }       
        })
      }
    return object
  };

