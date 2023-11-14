$(document).ready(function() {
// Tabs Init
    $('.tabs').tabs();
    // Sidenmav Init
        $('.sidenav').sidenav({
            edge: 'right',
            inDuration: 400,
            outDuration: 400,
        });

// Dropdown Init
    $('.dropdown-trigger').dropdown();
});

$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function(){
    $('.carousel').carousel();
});

$(document).ready(function(){
    $('.modal').modal();
});

function showSweetAlert() {
    Swal.fire({
        title: 'Success',
        text: 'Your form has been received',
        icon: 'success',
        confirmButtonText: 'Got it!',
        confirmButtonColor: 'black'
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    });

var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = '//cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css';

    var s = document.createElement('script');
    s.src = '//cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';

    // Append the elements to the document head
    document.head.appendChild(s);
    document.head.appendChild(l);

    // Use var, let, or const to declare variables
    var watch4WOW = setInterval(function(){
        if(typeof WOW === 'function'){ // Use '===' for strict equality check
            clearInterval(watch4WOW);
            new WOW().init();
        }
    }, 100);
