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

        <form data-id="${camper._id}">
        <input type="text" name="firstName" value="${camper.firstName}"/>
        <input type="text" name="lastName" value="${camper.lastName}"/>
        <input type="text" name="class" value="${camper.class}"/>
        <input type="number" name="size" value="${camper.size}"/>
        <input type="submit" value="Update Camper"/>
      </form>

      <button data-id="${camper._id}">Delete Camper</button>
    `
	showCamperContainer.appendChild(div)
}

export const onUpdateCamperSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteCamperSuccess = () => {
    messageContainer.innerText= 'Delete was successful :)'
}