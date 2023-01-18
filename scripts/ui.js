// Handles messaging to the user
const indexCampersContainer = document.querySelector('#index-camper-container')
const messageContainer = document.querySelector('#message-container')
const showCamperContainer = document.querySelector('#show-camper-container')


export const onIndexCamperSuccess = (campers) => {
	campers.forEach((camper) => {
		const div = document.createElement('div')
		div.innerHTML = `
            <h3>${camper.firstName} ${camper.lastName}</h3>
            <button data-id="${camper._id}">Show Camper</button>
        `
		indexCampersContainer.appendChild(div)
	})
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}

export const onCreateCamperSuccess = () => {
    messageContainer.innerText = 'You have created a camper'
  }

export const onShowCamperSuccess = (camper) => {
    const div = document.createElement('div')
	div.innerHTML = `
        <h3>${camper.firstName} ${camper.lastName}</h3>
        <p>${camper.class}</p>
        <p>${camper.size}</p>
        <p>${camper._id}</p>
    `
	showCamperContainer.appendChild(div)
}