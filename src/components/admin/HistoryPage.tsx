'use client'

import React, { useEffect, useState } from 'react'
import Layout from './main-layout'
import Section from '@/components/admin/Section'
import { ParkT } from '@/types'
import updateHistory from '@/actions/updateHistory'
import Status from '@/components/admin/Status'
import Title from '@/components/admin/Title'

interface Props {
	park: ParkT
}

const HistoryPage: React.FC<Props> = ({ park }) => {
	const [saving, setSaving] = useState(false)

	const save = (formData: FormData) => {
		console.log('save')
		const first = formData.get('first') as string
		const second = formData.get('second') as string
		console.log(first, second)
		if (!first || !second) return
		updateHistory(park.slug, first, second)
	}

	return (
		<Layout id={park.slug} saving={saving}>
			<div className="w-full bg-[#333333]">
				<Title title={`${park.name} - History`} />
				<form action={save} method="POST" id={park.slug}>
					<Section
						title="Description 1"
						id="first"
						defaultValue={park.history.description.first}
					/>
					<Section
						title="Description 2"
						id="second"
						defaultValue={park.history.description.second}
					/>
					<Status setLoading={setSaving} />
				</form>
				<div className="">
					<div className="bg-enc-light-green w-full h-12 flex items-center pl-12">
						<h2 className="font-questrial text-2xl text-[#33333] text-light">
							Images
						</h2>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default HistoryPage
