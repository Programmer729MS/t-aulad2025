//  loader

 function load () {
                    document.querySelector('.holder').classList.add('fade-out')
        }

        function fadeOut() {
                            setInterval((load), 3000);
        }

        window.onload = fadeOut;


        

function displayContent() {
    loader.style.display = 'none';
    document.getElementById(content).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
})


// Bottom Navigation Bar

function change(item){
    const button = document.querySelectorAll('ion-icon');
    button.forEach(function(obj){
        obj.classList.remove("active");
    });

    item.classList.add("active");
}

// aos animation

AOS.init();


 