
let input = document.getElementById('input');
let div = document.getElementById('container');

let genre = document.querySelector('.genre');
let released = document.querySelector('.released');
let rated = document.querySelector('.rated');
let director = document.querySelector('.director');
let actor = document.querySelector('.actor');
let writer = document.querySelector('.writer');
let language = document.querySelector('.language');
let country = document.querySelector('.country');
let award = document.querySelector('.award');
let rating = document.querySelector('.rating');
let rating2 = document.querySelector('.rating2');
let rating3 = document.querySelector('.rating3');
let rating4 = document.querySelector('.rating4');
let para = document.querySelector('.para')
let suggestions = document.querySelector('#suggestion');
let boxoffice = document.querySelector('.boxoffice');



let api = 'https://www.omdbapi.com/?apikey=89ddbce3&t=';





function send() {
    let movie = input.value;
    let query = api + input.value;
    fetch(query).then((data) => data.json()).then((data) => {

        if(data.Error === 'Movie not found!'){
            para.innerText='Movie Not Found !!'
            para.classList.remove('hidden');
            para.classList.add('d');
            div.classList.remove('container');
            div.classList.add('hidden');
        }




        else{

        para.classList.remove('d');
        para.classList.add('hidden')
        document.getElementById('title').innerText = data.Title;
        img.src = data.Poster;
        genre.innerText=data.Genre;
        released.innerText=data.Released;
        rated.innerText=data.Rated;
        director.innerText=data.Director;
        actor.innerText=data.Actors;
        writer.innerText=data.Writer;
        language.innerText=data.Language;
        country.innerText=data.Country;
        award.innerText=data.Awards;


        if(data.Ratings.length === 1){
            let s1 = data.Ratings[0].Source;
            let v1 = data.Ratings[0].Value;
            rating.innerText=` ${s1} : ${v1} `;

        }

        else if (data.Ratings.length === 2){
            let s1 = data.Ratings[0].Source;
            let v1 = data.Ratings[0].Value;
            rating.innerText=` ${s1} : ${v1} `;
            let s2 = data.Ratings[1].Source;
            let v2= data.Ratings[1].Value;
            rating2.innerText=`${s2} : ${v2}`;

        }

        else if(data.Ratings.length === 3){
            let s1 = data.Ratings[0].Source;
            let v1 = data.Ratings[0].Value;

            rating2.innerText=` ${s1} : ${v1} `;
            let s2 = data.Ratings[1].Source;
            let v2= data.Ratings[1].Value;
            rating2.innerText=`${s2} : ${v2}`;


            let s3 = data.Ratings[2].Source;
            let v3 = data.Ratings[2].Value;
            rating3.innerText=`${s3} : ${v3}`

        }

        else if (data.Ratings.length === 4){
            let s1 = data.Ratings[0].Source;
            let v1 = data.Ratings[0].Value;

            rating2.innerText=` ${s1} : ${v1} `;
            let s2 = data.Ratings[1].Source;
            let v2= data.Ratings[1].Value;
            rating2.innerText=`${s2} : ${v2}`;


            let s3 = data.Ratings[2].Source;
            let v3 = data.Ratings[2].Value;
            rating3.innerText=`${s3} : ${v3}`


            let s4 = data.Ratings[3].Source;
            let v4 = data.Ratings[3].Value;
            rating4.innerText=`${s4} : ${v4}`;

        }




        boxoffice.innerText=data.BoxOffice;



        div.classList.remove('hidden');
        div.classList.add('container');

        if(data.imdbRating > 7){
         suggestions.innerText='Worth watching';
         suggestions.classList.remove('hidden');
         suggestions.classList.add('suggestions');
        }

        else{
            suggestions.classList.remove('suggestions');
            suggestions.innerText='Time waste';
            suggestions.classList.add('waste');

            // suggestions.classList.remove('suggestions');
            // suggestions.classList.add('hidden');
        }
        }


    });




}



