let data=`[]`;
const todotext=document.querySelector('#todotext');
const add=document.querySelector('#add');
const del=document.querySelector('#del');
add.addEventListener('click',function(){
    let todovalue=todotext.value;
    if(todovalue==''){
        alert('Enter Your text');
    }else{    
    let getdata=localStorage.getItem('todo');
    let setdata;
    if(getdata==null){
        setdata=JSON.parse(data);
    }
    else{
        setdata=JSON.parse(localStorage.getItem('todo'));
    }
    setdata.push(todovalue);
    localStorage.setItem('todo',JSON.stringify(setdata));
    location.reload();
}
})   

del.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
})

function display(){
    let getdatafromlocal=JSON.parse(localStorage.getItem('todo'));
    let todolist=document.querySelector('#todoitem');

        for (let i = 0; i < getdatafromlocal.length; i++) {
            todolist.innerHTML += `
            <li class="list-group-item my-2">
                <div class="d-flex justify-content-between">
                    <label id='todoitem'>${i} .
                    ${getdatafromlocal[i]}
                    </label>
                    <button id="del" class="btn btn-danger mt-2" onclick="deleteitem(${i})"><i class="far fa-trash-alt"></i></button> 
                </div>
            </li>`;
        } 
}
display();
function deleteitem(a){
    let deldata=JSON.parse(localStorage.getItem('todo'));
    deldata.splice(a,1);
    localStorage.setItem('todo',JSON.stringify(deldata));
    location.reload();
}