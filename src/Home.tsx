import { useScrollFadeIn } from "./hooks/useScrollFadeIn";
import { Folder } from "./Folder"

function Home() {
	useScrollFadeIn('aside header, .skills li, .folder')

	return (
		<div className="home container">
			<h1 className="sweep">Build For The Future</h1>
			<p className="sweep ibm-plex-mono-bold" style={{ fontSize: "1.25rem" }}>RAYMOND FINTON</p>
			<p className="sweep ibm-plex-mono-regular">Frontend Developer &bull; Interactive Systems</p>
			<small className="sweep ibm-plex-mono-regular">Tulsa, OK | abcfinton@gmail.com</small>

			<div className="sweep home-content">
				<aside>
					<header style={{ display: "flex", alignItems: "flex-end", gap: ".5rem", margin: "2rem 0" }}>
						<span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontWeight: "700" }}>Skills</span>
						<hr />
					</header>

					<ul className="skills"  style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Angular</li>
						<li>Next.js</li>
						<li>Vite</li>
						<li>Git</li>
						<li>PHP</li>
						<li>MySQL</li>
						<li>Wordpress</li>
					</ul>
				</aside>

				<article>
					<p className="sweep" style={{ marginBottom: "1.5rem" }}>Greetings fellow traveler! Welcome to my outpost. For the past few years, I've been navigating the ever-evolving landscape of frontend development, crafting interactive systems users find engaging and intuitive. Turning ideas into seamless digital experiences is my craft, and I invite you to explore my journey through code and creativity.</p>
				</article>

				<div id="folders" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
					<Folder title="Landing Pages" />	
					<Folder title="Applications" />	
					<Folder title="Websites" />
				</div>
			</div>			
		</div>
	)
}

export default Home