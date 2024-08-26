// export default function Todo({task}){
//     return(
//         <li>
//             Task: {task}
//         </li>
//     )
// }


// conditional  rendering option 1
// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>
//             Finised : {task}
//         </li>
//     }

//     else{
//         return <li>
//             Do again: {task}
//         </li>
//     }
// }

// conditional rendering option 2

// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>
//             Finised : {task}
//          </li>
//     }
//     return <li>
//             Do Again: {task}
//         </li>
// }

// conditional rendering option 3: Ternary


// export default function Todo({task,isDone}){
//     return(
//         <li> {isDone ? "Finished" : "Work on"} :{task}</li>
//     )
// }

// conditional rendering option  4: &&

// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone && "Done"} </li>
//     )
// }

// conditional rendering option 5: OR 

// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone || "notDone"} </li>
//     )
// }



// conditional rendering option 6: variable


export default function Todo({ task, isDone }) {

    let listItem;
    if (isDone) {
        listItem = <li>
            Finised : {task}
        </li>
    }

    else{
        listItem = <li>
            Finised not : {task}
        </li>
    }

    return listItem;
}