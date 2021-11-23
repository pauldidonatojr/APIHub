'use strict'
const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

const render = (data, className = '') => {
    const html = `

        <article class="country ${className}">
          <img class="country__img" src=${data.flag} />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>

              <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
              ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
                data.currencies[0].name
            }</p>
          </div>
        </article>
       `
    countriesContainer.insertAdjacentHTML('beforeend', html)
}

const getCountryAndNeighbour = function (country) {
    const url_1 = `https://restcountries.com/v2/name/${country}`

    // AJAX call country 1
    const request_1 = new XMLHttpRequest()
    request_1.open('GET', url_1)
    request_1.send()

    request_1.addEventListener('load', function () {
        // Render country 1 //
        const [data] = JSON.parse(this.responseText)
        render(data)
        // ------------------  //

        // Get neighbor country (2)

        const [neighbor] = data.borders
        const url_2 = `https://restcountries.com/v2/alpha/${neighbor}`
        if (!neighbor) return
        // ------------------  //

        // AJAX call country 2
        const request_2 = new XMLHttpRequest()
        request_2.open('GET', url_2)
        request_2.send()

        request_2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText)
            render(data2, 'neighbor')
        })
        // ------------------  //
    })
}
const countries = ['USA']

// getCountryData('Mexico')
countries.map((x) => {
    // return getCountryAndNeighbour(x)
})
