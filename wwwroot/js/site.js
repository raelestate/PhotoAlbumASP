var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "If opportunity doesn't knock, build a door. - Milton Berle"
];


//Night Sky
// Check if nightSkyDivs has already been declared
if (typeof nightSkyDivs === 'undefined') {
    // Declare nightSkyDivs as an array
    var nightSkyDivs = [];

    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        var output = [];
        var randomQuotes = Math.floor(Math.random() * quotes.length);
        var quotesOutput = quotes[randomQuotes];
        nightSkyDivs.push(`
        <div class="col-md-4 mx-auto">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="./Resources/images/100 Images/20 images of nightsky/night${i}.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text"><b>Night Sky ${i}</b> <br>${quotesOutput}</p>
            </div>
          </div>
        </div>
        `);
    }
}
// Append the night sky divs to the night-sky container
$('#night-sky').append(nightSkyDivs.join(''));

//City
// Check if City has already been declared
if (typeof cityalbum === 'undefined') {
    // Declare nightSkyDivs as an array
    var cityalbum = [];
    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        cityalbum.push(`
            <div class="col-md-4 mx-auto">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="./Resources/images/100 Images/20 images of city/city${i}.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text"><b>City ${i}</b> <br>${quotesOutput}</p>
                </div>
              </div>
            </div>

        `);
    }
}
// Append the night sky divs to the night-sky container
$('#city-album').append(cityalbum.join(''));


//Sea
// Check if Sea has already been declared
if (typeof seaalbum === 'undefined') {
    // Declare nightSkyDivs as an array
    var seaalbum = [];
    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        seaalbum.push(`
            <div class="col-md-4 mx-auto">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="./Resources/images/100 Images/20 images of sea/sea${i}.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text"><b>Sea ${i}</b> <br>${quotesOutput}</p>
                </div>
              </div>
            </div>
        `);
    }
}
// Append the night sky divs to the night-sky container
$('#sea-album').append(seaalbum.join(''));

//Me
// Check if Sea has already been declared
if (typeof mealbum === 'undefined') {
    // Declare nightSkyDivs as an array
    var mealbum = [];
    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        mealbum.push(`
            <div class="col-md-4 mx-auto">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="./Resources/images/100 Images/20 images of Me/me${i}.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text"><b>Me ${i}</b> <br>${quotesOutput}</p>
                </div>
              </div>
            </div>
        `);
    }
}
// Append the night sky divs to the night-sky container
$('#me-album').append(mealbum.join(''));

//Nature
// Check if Sea has already been declared
if (typeof naturealbum === 'undefined') {
    // Declare nightSkyDivs as an array
    var naturealbum = [];
    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        naturealbum.push(`
            <div class="col-md-4 mx-auto">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="./Resources/images/100 Images/20 images of Nature/nature${i}.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text"><b>Nature ${i}</b> <br>${quotesOutput}</p>
                </div>
              </div>
            </div>
        `);
    }
}
// Append the night sky divs to the night-sky container
$('#nature-album').append(naturealbum.join(''));