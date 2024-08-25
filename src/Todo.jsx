// export default function Todo({task}){
//     return(
//         <li>
//             Task: {task}
//         </li>
//     )
// }


// conditional 
export default function Todo({task,isDone}){
    if(isDone === true){
        return <li>
            Finised : {task}
        </li>
    }

    else{
        return <li>
            Do again: {task}
        </li>
    }
}