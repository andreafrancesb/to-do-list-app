
//add new item
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        li.append(inputValue);
        $('#list').append(li);
        //5. Clear and re-focus input
        $('#input').val('').focus();
    }
    
    //remove item
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
    	li.addClass("delete")
    }
   
    //4. Sorting the list
    $('#list').sortable();
}

//press enter to add
$('#input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $('#button').click();;  
    }
});

//prevent reload
$("#form").on("submit", function (e) {
    e.preventDefault();
});