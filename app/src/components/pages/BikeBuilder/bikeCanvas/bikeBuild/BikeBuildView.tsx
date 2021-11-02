import { useEffect } from 'react'
import { BikeConfig } from '../../../../../types'
import * as THREE from 'three'
import BikePart from '../BikePartView'

interface Props {
	bikeParts: JSX.Element[]
}

const BikeBuildView = ({ bikeParts }: Props) => {
	return (
		<group name="bikeBuild" position={[0.2, -0.4, 0]}>
			{bikeParts.map((bikePart, idx) => {
				return <group key={idx}>{bikePart}</group>
			})}
		</group>
	)
}

export default BikeBuildView
