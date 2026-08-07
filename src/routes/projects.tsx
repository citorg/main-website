import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";
import projectsData from "../data/projects.json";

export const Route = createFileRoute("/projects")({
	component: ProjectsPage,
	head: () => ({
		meta: [{ title: "Projects | Christians in Tech" }],
	}),
});

function ProjectsPage() {
	return (
		<div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
			<h1 className="font-bold text-4xl md:text-5xl uppercase mb-6">
				Projects
			</h1>
			<p className="text-lg text-gray-700 mb-16 max-w-2xl">
				We don't just talk about technology — we build it. Our projects come out
				of real needs we've encountered through CIT Serve, our meetups, and
				events like #HACK Columbus.
			</p>

			<ul className="space-y-10">
				{projectsData.projects.map((project) => (
					<li key={project.slug} className="border border-gray-200 p-8 md:p-10">
						<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
							<h2 className="text-2xl md:text-3xl font-bold">{project.name}</h2>
							<span className="text-xs uppercase tracking-widest text-gray-500">
								{project.origin} · {project.status}
							</span>
						</div>
						<p className="text-gray-800 leading-relaxed mb-6 max-w-3xl">
							{project.summary}
						</p>
						{project.contribute && "repo" in project.links && (
							<CtaLink href={project.links.repo} theme="dark">
								Contribute on GitHub
							</CtaLink>
						)}
					</li>
				))}
			</ul>

			<div className="mt-16 bg-gray-100 p-10 text-center">
				<h2 className="text-2xl font-bold uppercase mb-4">
					Want to build with us?
				</h2>
				<p className="text-gray-700 mb-8 max-w-xl mx-auto">
					You don't need to be an expert. Our projects are built in the open,
					and contributing is one of the best ways to learn modern development
					and AI-assisted workflows alongside the community.
				</p>
				<CtaLink href="https://github.com/citorg/main-website" theme="dark">
					Start Contributing
				</CtaLink>
			</div>
		</div>
	);
}
