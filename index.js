$(function() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        
/////we save the input value to a variable/////
        const newItemName = $(this).find(`input[name="shopping-list-entry"]`).val();
/////we then check if the variable is empty/////        
        if (!newItemName) {
            alert('Remember to type the name of the item you want to add')
        } 
/////if not empty we add a new list item containing that input////
        else {
        $(".shopping-list").append(`<li>
        <span class="shopping-item">${newItemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);}
    })
})
////on the list, in the event of clicking the check button, we change that element's class////
$(function() {
    $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        $(event.target).closest('li').find('.shopping-item').toggleClass('.shopping-item shopping-item__checked');
    })
})
////on the list, in the event of clicking the delete button, we erase that element////
$(function() {
    $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(event.target).closest('li').remove();
    })
})
