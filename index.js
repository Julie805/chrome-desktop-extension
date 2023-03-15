async function imageCall () {
  const response = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature`)
  const data = await response.json()
  const body = document.querySelector('body')
  body.style.backgroundImage = `url('${data.urls.full}')`
  // console.log(data.urls.full)
}

imageCall()