import { createFileRoute } from "@tanstack/react-router";
import CtaLink from "../components/CtaLink";
import Eyebrow from "../components/Eyebrow";
import projectsData from "../data/projects.json";

export const Route = createFileRoute("/projects")({
	component: ProjectsPage,
	head: () => ({
		meta: [{ title: "Projects | Christians in Tech" }],
	}),
});

function ProjectsPage() {
	return (
		<div>
			<section className="bg-paper py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-5xl mx-auto">
					<Eyebrow className="mb-3">Built in the open</Eyebrow>
					<h1 className="font-display font-bold uppercase tracking-[0.02em] text-[36px] md:text-[56px] leading-[1.1] mb-6">
						Projects
					</h1>
					<p className="text-base md:text-lg leading-[1.7] mb-16 max-w-2xl">
						We don't just talk about technology — we build it. Our projects come
						out of real needs we've encountered through CIT Serve, our meetups,
						and events like #HACK Columbus.
					</p>

					<ul className="space-y-10">
						{projectsData.projects.map((project) => (
							<li
								key={project.slug}
								className="border border-gray-200 p-8 md:p-10"
							>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
									<h2 className="font-display font-bold text-[20px] md:text-[24px]">
										{project.name}
									</h2>
									<span className="text-xs uppercase tracking-[0.25em] text-mist">
										{project.origin} · {project.status}
									</span>
								</div>
								<p className="text-base md:text-lg leading-[1.7] mb-6 max-w-3xl">
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
				</div>
			</section>

			<section className="bg-stone py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<Eyebrow className="mb-3">Join in</Eyebrow>
					<h2 className="font-display font-bold uppercase tracking-[0.02em] text-[28px] md:text-[36px] mb-6">
						Want to build with us?
					</h2>
					<p className="text-base md:text-lg leading-[1.7] mb-8 max-w-xl mx-auto">
						You don't need to be an expert. Our projects are built in the open,
						and contributing is one of the best ways to learn modern development
						and AI-assisted workflows alongside the community.
					</p>
					<CtaLink href="https://github.com/citorg/main-website" theme="dark">
						Start Contributing
					</CtaLink>
				</div>
			</section>
		</div>
	);
}
