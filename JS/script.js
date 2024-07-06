function changeImage(imageName) {
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = imageName;
}

function rating(n){

			
    const r1 = document.getElementById('r1');
    const r2 = document.getElementById('r2');
    const r3 = document.getElementById('r3');
    const r4 = document.getElementById('r4');
    const r5 = document.getElementById('r5');
    const rating = document.getElementById('rating');
    

    for( let i=0; i<n; i++){

    if(n==1){
        r1.src = './../img/star(1).png';
        r2.src = './../img/star.png';
        r3.src = './../img/star.png';
        r4.src = './../img/star.png';
        r5.src = './../img/star.png';
    }

    
    
    else if(n==2){
        r1.src = './../img/star(1).png';
        r2.src = './../img/star(1).png';
        r3.src = './../img/star.png';
        r4.src = './../img/star.png';
        r5.src = './../img/star.png';
    }
    

    else if(n==3){
        r1.src = './../img/star(1).png'
        r2.src = './../img/star(1).png'
        r3.src = './../img/star(1).png'
        r4.src = './../img/star.png';
        r5.src = './../img/star.png';
    }

    else if(n==4){

        r1.src = './../img/star(1).png'
        r2.src = './../img/star(1).png'
        r3.src = './../img/star(1).png'
        r4.src = './../img/star(1).png'
        r5.src = './../img/star.png';

    }

    else {

        r1.src = './../img/star(1).png'
        r2.src = './../img/star(1).png'
        r3.src = './../img/star(1).png'
        r4.src = './../img/star(1).png'
        r5.src = './../img/star(1).png'
    }

    rating.innerText = "Rating is: "+n+"/5"
            
        
    }
}