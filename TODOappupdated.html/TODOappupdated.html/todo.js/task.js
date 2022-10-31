document.querySelector('#enter').onclick = function(){
    if(document.querySelector('#tasktab input').value.length == 0){
        alert("Please enter a task!!")
    }

    else{
        document.querySelector('#task').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#tasktab input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}