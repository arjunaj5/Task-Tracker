import './App.css';
function App(){
    return(
        <div className="myapp">
           
         <ul><ArrayComponent/></ul>   
         <Nav/>
       
        </div>
    )}

function random(max=1,min=1000){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arrayGen(){
    let arr=[]
    for(let i=0;i<100;i++){
        arr[i]=random();
    }
    return arr
}
var array=arrayGen()


function ArrayComponent(){
 
   let arrcmp= array.map(item=>{
        return(<li style={{height: item/2}}>{item}</li>)
    })
    return arrcmp
}
function Nav(){
    return (
        <div className="navbar">
            <button onClick={()=>{bubbleSort(array)
            console.log("clicked sort")
            console.log(array)
            }}>Bubble Sort</button>
        </div>
    )
}
function bubbleSort(arr){
     
    for(var i = 0; i < arr.length; i++){
        
      // Last i elements are already in place  
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
            
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp

        }
      }
    }
}



export default App