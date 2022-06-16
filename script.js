function expand_Close() {
    const aside = document.getElementById('aside');
    if (aside.style.visibility == 'hidden') {
        aside.style.visibility = 'visible';
    } else {
        aside.style.visibility = 'hidden';
    }
}


let listCount = 0;

function newList(){
    alert('updateListCount')
    listCount = listCount + 1;
    if(listCount > 0){
        document.getElementById('missing_list').style.visibility = 'hidden';
        document.getElementById('missing_list_text').style.visibility = 'hidden';
        document.getElementById('list_creator').style.visibility = "visible"

    }


}


