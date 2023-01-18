// A place for our API calls
export const indexCampers = () => {
    return fetch(`http://localhost:8001/campers`)
  }

  export const createCamper = (data) => {
    return fetch(`http://localhost:8001/campers`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCamper = (id) => {
    return fetch(`http://localhost:8001/campers/${id}`)
  }