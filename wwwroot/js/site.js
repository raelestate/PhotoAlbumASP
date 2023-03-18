////random quotes
//const quotes = [
//    "Be the change you wish to see in the world. - Mahatma Gandhi",
//    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
//    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//    "It does not matter how slowly you go as long as you do not stop. - Confucius",
//    "Believe you can and you're halfway there. - Theodore Roosevelt",
//    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
//    "The only way to do great work is to love what you do. - Steve Jobs",
//    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
//    "You miss 100% of the shots you don't take. - Wayne Gretzky",
//    "It is never too late to be what you might have been. - George Eliot"
//];

//const quotesContainer = document.getElementById('quotes-container');

//// Loop through each quote in the array and create a new paragraph element for it
//quotes.forEach(function (quote) {
//    const quoteElement = document.createElement('p');
//    quoteElement.textContent = quote;
//    quotesContainer.appendChild(quoteElement);
//});





// Check if nightSkyDivs has already been declared
if (typeof nightSkyDivs === 'undefined') {
    // Declare nightSkyDivs as an array
    var nightSkyDivs = [];
    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        nightSkyDivs.push(`
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="./Resources/images/100 Images/20 images of nightsky/night${i}.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">Night Sky ${i}</p>
/*                                    <div id="quotes-container"></div>*/
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View Picture</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `);
    }
}

// Append the night sky divs to the night-sky container
$('.night-sky').append(nightSkyDivs.join(''));


