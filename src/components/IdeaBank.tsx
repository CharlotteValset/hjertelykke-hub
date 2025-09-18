import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const IdeaBank = () => {
	const [idea, setIdea] = useState<string>("");

	const [ideas, setIdeas] = useLocalStorage<string[]>("ideas", []);

	function addIdea() {
		const trimmed = idea.trim();
		if (!trimmed) {
			return;
		}
		setIdeas((prev) => [trimmed, ...prev]);
		setIdea("");
	}

	function deleteIdea(index: number) {
		setIdeas((prev) => prev.filter((_, i) => i !== index));
	}

	function clearIdeas() {
		if (ideas.length === 0) return;
		if (confirm("Slette alle ideene?")) setIdeas([]);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		addIdea();
	}

	return (
		<section className="max-w-md my-8 p-6 bg-white rounded-2xl shadow">
			<h2 className="text-lg font-semibold mb-4">Idébanken</h2>

			<form onSubmit={handleSubmit} className="space-y-3" noValidate>
				<label htmlFor="idea" className="block text-sm text-gray-700 mb-1">
					Ny idé
				</label>
				<input
					id="idea"
					type="text"
					className="border rounded-lg px-3 py-2 w-full"
					placeholder="Skriv inn en idé"
					value={idea}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIdea(e.target.value.trimStart())}
				/>

				<div className="flex">
					<button
						type="submit"
						className="btn mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
						disabled={!idea.trimEnd()}
					>
						Lagre idé
					</button>
					<button type="button" className="btn-delete mt-4 ml-5" onClick={clearIdeas}>
						Tøm liste
					</button>
				</div>
			</form>
			<ul className="mt-6 space-y-2">
				{ideas.length === 0 ? (
					<li className="text-gray-500 text-sm">Ingen idéer ennå. Legg inn din første</li>
				) : (
					ideas.map((it, idx) => (
						<li key={idx} className="border rounded-xl px-3 py-2 flex items-start justify-between gap-3">
							{" "}
							<span className="leading-6">{it}</span>
							<button
								className="text-sm px-2 py-1 rounded border hover:bg-gray-50"
								onClick={() => deleteIdea(idx)}
								aria-label={`Slett idé nummer ${idx + 1}`}
							>
								Slett
							</button>
						</li>
					))
				)}
			</ul>
		</section>
	);
};
