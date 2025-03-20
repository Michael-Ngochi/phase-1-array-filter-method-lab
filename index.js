// Code your solution here
let drivers=["Bob","Mary","Clif","Sam"]
let driverobj=[
    {name:"Bob",
     hometown:"Meru"
    },
    {name:"Jim",
    hometown:"Kisumu"
    },
    {
name:"Bob",
hometown:"Kiambu"
    }
]


function findMatching(Array,dname){

return Array.filter((name)=>name.toLowerCase() === dname.toLowerCase())
}


function fuzzyMatch(Array,letter){
    return Array.filter((name)=>name.toLowerCase().startsWith(letter.toLowerCase()))
    //return Array.filter((name)=>name[0].toLowerCase()===letter.toLowerCase())

}

function matchName(myobj,name){
    let check=(driver)=>{
            driver.name===name
    }
    return myobj.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
//console.log(drivers.filter((name)=>name==="Sam"));

console.log(fuzzyMatch(drivers,""));


console.log(matchName(driverobj,"Bob"));

console.log(findMatching(drivers,"Mary"));
