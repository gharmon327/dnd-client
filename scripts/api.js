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


  export const updateCamper = (data, id) => {
    return fetch(`http://localhost:8001/campers/${id}`, {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
}

export const deleteCamper = (id) => {
    return fetch(`http://localhost:8001/campers/${id}`, {
			method: 'DELETE'
		})
}