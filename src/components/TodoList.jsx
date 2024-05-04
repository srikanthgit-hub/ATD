
import TodoItem from "./TodoItem"
function TodoList(props) 
{

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
  
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="font-medium text-2xl">Today's Activity</h1>
            

            {activityArr.length===0?<p>You haven't added anything yet</p>:""}
            {
                activityArr.map(function(item,index){
                    return <TodoItem id = {item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                    // return <TodoItem id = {item.id} activity={item.activity} index={index}/>

                })
            }
        </div>
    )
}

export default TodoList