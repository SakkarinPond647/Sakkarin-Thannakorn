var postText = 1;

function postFunction()
{
    var Text = document.getElementById("text1").value;

    var post1 = document.getElementById("post1");
    var replyPost1 = document.getElementById("reply1");
    var replyPost2 = document.getElementById("reply2");
    
    if(postText == 1 )
    {
        post1.innerHTML = Text;
        postText++;
    }
    else if(postText == 2 )
    {
        replyPost1.innerHTML = Text;
        postText++;
    }
    else if(postText == 3 )
    {
        replyPost2.innerHTML = Text;
        postText++;
    }
    else{ alert("กด Clear ก่อนสิวะ");}

    document.getElementById("text1").value = "";
}

function clearFunction()
{
    postText = 1;

    var post1 = document.getElementById("post1");
    post1.innerHTML = "";
    var replyPost1 = document.getElementById("reply1");
    replyPost1.innerHTML = "";
    var replyPost2 = document.getElementById("reply2");
    replyPost2.innerHTML = "";

    document.getElementById("text1").value = "";
}