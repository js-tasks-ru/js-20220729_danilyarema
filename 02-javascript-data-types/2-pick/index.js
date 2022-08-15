/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let object = {}
  
    for (let field of fields){
      let temp = Object.fromEntries(
        Object.entries(obj).filter(item => (item[0] === field))
      );
      
      Object.assign(object,temp)  
    }
    return object
  };

