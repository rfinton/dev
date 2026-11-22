import { useEffect, useState } from 'react'

function Clock() {
	const [dateTime, setDateTime] = useState(new Date())
	
	useEffect(() => {
		const interval = setInterval(() => {
			setDateTime(new Date())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<time dateTime="2024-06-06" className="michroma-regular" style={{ fontSize: '.7rem' }}>
			{dateTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} &bull; 
			{dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
		</time>
	)
}

export default Clock