// Event listeners and any other functions that are needed for the app to run
import { indexCampers, createCamper, showCamper, updateCamper, deleteCamper } from './api.js'
import { onIndexCamperSuccess, onFailure, onCreateCamperSuccess, onShowCamperSuccess, onUpdateCamperSuccess, onDeleteCamperSuccess } from './ui.js'

const createCamperForm = document.querySelector('#create-camper-form')
const indexCamperContainer = document.querySelector('#index-camper-container')
const showCamperContainer = document.querySelector('#show-camper-container')


indexCampers()
	.then((res) => res.json())
	.then((res) => {
    console.log(res)
    onIndexCamperSuccess(res.camper)})
	.catch(onFailure)

createCamperForm.addEventListener('submit', (event) => {
    event.preventDefault()
        const camperData = {
            camper: {
                firstName: event.target['firstName'].value,
                lastName: event.target['lastName'].value,
                class: event.target['class'].value,
                size: event.target['size'].value,
            },
        }
        createCamper(camperData)
            .then(onCreateCamperSuccess)
            .catch(onFailure)
    })

indexCamperContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    
    if (!id) return
    
    showCamper(id)
        .then((res) => res.json())
        .then((res) => onShowCamperSuccess(res.camper))
        .catch(onFailure)
})

showCamperContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const camperData = {
		camper: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
            class: event.target['class'].value,
			size: event.target['size'].value,
		},
	}
	updateCamper(camperData, id)
		.then(onUpdateCamperSuccess)
		.catch(onFailure)
})

showCamperContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCamper(id)
		.then(onDeleteCamperSuccess)
		.catch(onFailure)
})