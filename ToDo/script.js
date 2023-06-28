const form = document.getElementById('form')
const input = document.getElementById('input')
// get element ul, used for appending later 
const toDoUL = document.getElementById('todos')

//the name inside getItems need to be the same as the one the part before JSON.strigify()
const todoval=JSON.parse(localStorage.getItem('todos'))





//when you refresh, if you have some todoval
if(todoval){
    todoval.forEach(ele =>{
        addTodo(ele)
    });
}






// do not want the form to be submitted when you click enter, else will be submitted
form.addEventListener('submit', 
    (e)=>{
        // have to prevent default to change default action from occuring 
        e.preventDefault(); //would get submitted without preventDefault and wouldn't show the new list element

        addTodo();
    }
)







function addTodo(ele){
    //check if text exists
    let todotext=input.value;

    if(ele){
        todotext=ele.text;
    }

    // if some text exists we want to add it to the list
    if(todotext){

        // creates a list element and adds text 
        const todoEl=document.createElement("li");

        // if there is an data and it is completed  
        if(ele && ele.completed){
            todoEl.classList.add("completed");
        }

        todoEl.innerText=todotext;

        todoEl.addEventListener('click',
        ()=>{
            todoEl.classList.toggle("completed");
            updateLS()
        }
        );

        // this is a right click event, if you click with 2 fingers it deletes the list element 
        todoEl.addEventListener("contextmenu", (e)=>{
            e.preventDefault();
            todoEl.remove();
            updateLS()
            
        });

        // adds this list element(todo) into to toDos(the ul)
        toDoUL.appendChild(todoEl);

        input.value="";

        updateLS()
    }
}






function updateLS(){

    const todosEl = document.querySelectorAll("li");
    const todos=[];

    //from all queries(list val) push into array todos
    todosEl.forEach((ele)=>{
        todos.push({
            text: ele.innerText,
            completed: ele.classList.contains("completed"),

        });
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}
