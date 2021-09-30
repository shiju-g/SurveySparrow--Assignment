

function myShow(){
    const Text = document.getElementById('chat');
    Text.style.display="block";

    const popin = document.getElementById('pop-btn1')
    popin.style.display="none";

    const popout = document.getElementById('pop-btn2')
    popout.style.display="block";

    const out = document.getElementById('chat-body1');
    out.style.display="block";

    const view = document.getElementById('chat-body2');
    view.style.display="none";
}

function myClose(){
    const popout = document.getElementById('pop-btn2')
    popout.style.display="none";

    const Text = document.getElementById('chat');
    Text.style.display="none";

    const popin = document.getElementById('pop-btn1')
    popin.style.display="block";
}

function myType(){
    const view = document.getElementById('chat-body2');
    view.style.display="block";

    const out = document.getElementById('chat-body1');
    out.style.display="none";
}

function myAlarm(){
    alert("submitted, our team will contact you.")
}