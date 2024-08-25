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

export default function Todo({task,isDone}){
    if(isDone){
        return <li>
            Finised : {task}
         </li>
    }

    return <li>
            Do Again: {task}
        </li>

}