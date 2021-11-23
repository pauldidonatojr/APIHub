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
const renderError = (msg) => {
    countriesContainer.insertAdjacentText('beforeend', msg)
    // countriesContainer.style.opacity = 1
}
const getCountryData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Country not found ${response.status}`)
            }
            return response.json()
        })
        .then(([data]) => {
            render(data)
            const [neighbor] = data.borders
            if (!neighbor) return
            return fetch(`https://restcountries.com/v2/alpha/${neighbor}`)
        })
        .then((response) => response.json())
        .then((data) => render(data, 'neighbor'))
        .catch((err) => renderError(`Something went wrong ${err.message}`))
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}
