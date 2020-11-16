
const counter=(type, prevType, value, prevValues)=>{

    let result = [...prevValues]
    const last = result[result.length-1]
    if(value === "C"){
        return []
    }
    if(value === "="){
        if(prevType === "number"){
            return [countResalt(prevValues)]
        }
        if(prevType ==="operator" && last ==="/"){
            return [Math.sqrt(countResalt(deleteLastArrItem(prevValues)))]
        }
        if(prevType ==="operator" && last ==="*"){
            return [countResalt([countResalt(deleteLastArrItem(prevValues)),"*",countResalt(deleteLastArrItem(prevValues))])]
        }
        if(prevType ==="operator" && last ==="-"){
            return [countResalt([countResalt(prevValues),"-",countResalt(prevValues)])]
        }
        if(prevType ==="operator" && last ==="+"){
            return [countResalt([countResalt(prevValues),"+",countResalt(prevValues)])]
        }
        
    }
    if(value==="."){
        if(prevType==="operator" || prevType===null){
            return [...prevValues, "0."]
        }
        if(prevType==="number" && !last.includes(value)){
            return [...changeLastArrItem(result, value)]
        }
        if(prevType==="number" && last.includes(value)){
            return [...result]
        }
    }
    // ----- operator "+/-"
    if(value === "+/-"){        
        if(prevType === "number"){
            const newVal = last[0] ==="-"? last.replace("-","") : "-"+last
             return [...removeLastArrItem(result, newVal)]
        }
        if(prevType===null && result.length){
            
            return []
        }
        if(prevType===null && !result.length){
            
            return ["-"]
        }if(prevType ==="opertor"){
            return result
        }
    }
    // ----- if number 
    if(type === "number" ){

        if(prevType ==="operator"){
            return [...result, value]
        }
        if(prevType ==="number"){
            return [...changeLastArrItem(result, value)]
        }
        if( prevType ===null){
            return [...result, value]
        }
        
    }
    if(type = "operator"){
        if(prevType==="operator"){
            return [...removeLastArrItem(result, value)]
        }else{
            return [...prevValues, value]
        }
    } 

    return result
}


const removeLastArrItem = (arr, value)=> {
    const newarr = [...arr]
    newarr[newarr.length -1] = value;

    return newarr
}
const changeLastArrItem = (arr, value)=> {
    const newarr = [...arr]
    newarr[newarr.length -1] = newarr[newarr.length -1]+value;

    return newarr
}
const deleteLastArrItem = (arr, value)=> {
    const newarr = [...arr] 
    newarr.splice(arr.length-1, 1)
    return newarr
}

const countResalt = (inputs)=>{
    return eval(inputs.join(''))
    
  }

  module.exports = counter