/*
    riverway/
*/
import React from 'react'
import AttractionsContainer from '@/components/AttractionsContainer'
import getPark from '@/utils/getPark'

export default async function RiverwayHistory() {
	const pictures = [
		// Populate this array with your picture objects
		'/park_images/photo1.jpg',
		'/park_images/photo2.jpg',
		'/park_images/photo2.jpg',
		// ...more pictures
	]

	const park = await getPark('riverway')

	return (
		<AttractionsContainer
			park="riverway"
			pictures={pictures}
			title="Riverway"
			bodyText={park.history.description.first}
		/>
	)
}
