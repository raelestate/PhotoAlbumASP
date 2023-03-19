//Night Sky
// Check if nightSkyDivs has already been declared
if (typeof nightSkyDivs === 'undefined') {
    // Declare nightSkyDivs as an array
    var nightSkyDivs = [];
    // Loop 20 times and push new divs to the array
    for (var i = 1; i <= 20; i++) {
        nightSkyDivs.push(`
            <div class="col-md-4 mx-auto">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="./Resources/images/100 Images/20 images of nightsky/night${i}.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">Night Sky ${i}</p>
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
                  <p class="card-text">City ${i}</p>
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
                <img class="card-img-top" src="./Resources/images/100 Images/20 images of city/city${i}.jpg" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">City ${i}</p>
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
                  <p class="card-text">Me ${i}</p>
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
                  <p class="card-text">Nature ${i}</p>
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
$('#nature-album').append(naturealbum.join(''));