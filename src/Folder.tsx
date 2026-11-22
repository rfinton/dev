import { useEffect, useId, useRef } from "react";

export function Folder({ title }: { title: string }) {
	const guid = useId();
	const folderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const folder = folderRef.current;

		if (folder) {
			const timeout = setTimeout(() => {
				folder.style.animation = "phaser 0.05s linear forwards infinite";
				
			}, 1300);

			return () => clearTimeout(timeout);
		}
	}, []);

	return (
		<div id={guid} ref={folderRef} className="folder" style={{ width: "130px", position: "relative" }}>
			<div style={{
				height: "16px",
				width: "25%",
				backgroundColor: "rgb(29, 154, 166)",
				position: "absolute",
				top: "-8px",
				left: "0"
			}}></div>
			<div style={{ 
				height: "0", 
				width: "25%",
				borderTop: "8px solid transparent",
				borderBottom: "8px solid transparent",
				borderLeft: "8px solid rgb(29, 154, 166)",
				position: "absolute",
				top: "-8px",
				left: "25%"
			}}></div>
			<div className="folder-face" style={{
				opacity: "0.7",
				backgroundColor: "var(--accent)",
				border: "2px solid rgb(29, 154, 166)",
				height: "85px", 
				width: "100%",
				borderBottomLeftRadius: "4px",
				borderBottomRightRadius: "4px"
			}}></div>
			<small style={{ 
				display: "block", 
				textAlign: "center",
				color: "#fff"
			}}>
				{title}
			</small>
		</div>
	)
}