import type { TravelData } from '@danmat/waypoints-core';
import { useEffect, useState } from 'react';

type Tile = { k: string; n: string; sub?: string; hl?: boolean; items?: string[] };

const uniqSorted = (arr: string[]) => [...new Set(arr)].sort((a, b) => a.localeCompare(b));

export function StatTiles({ data }: { data: TravelData }) {
	const t = data.stats.totals;
	const { places } = data;

	const tiles: Tile[] = [
		{
			k: 'Continents',
			n: String(t.continents),
			sub: '/ 7',
			hl: true,
			items: [...data.stats.continents],
		},
		{
			k: 'Countries',
			n: String(t.countries),
			sub: '/ 195',
			items: uniqSorted(places.map((p) => p.country)),
		},
		{ k: 'US states', n: String(t.usStates), sub: '/ 50', items: [...data.stats.usStates] },
		{
			k: 'Cities',
			n: String(t.cities),
			items: uniqSorted(places.map((p) => `${p.city}, ${p.country}`)),
		},
		{
			k: 'Regions',
			n: String(t.regions),
			items: uniqSorted(places.filter((p) => p.region).map((p) => `${p.region}, ${p.country}`)),
		},
		{ k: 'Nights away', n: String(t.nights) },
	];

	const [open, setOpen] = useState<{ title: string; items: string[] } | null>(null);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(null);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open]);

	return (
		<>
			<section className="stats" aria-label="Travel totals">
				{tiles.map((tile) => {
					const items = tile.items ?? [];
					const body = (
						<>
							<div className="stat-n">
								{tile.n}
								{tile.sub ? <small> {tile.sub}</small> : null}
							</div>
							<div className="stat-k">{tile.k}</div>
						</>
					);
					if (items.length === 0) {
						return (
							<div key={tile.k} className={tile.hl ? 'stat stat-hl' : 'stat'}>
								{body}
							</div>
						);
					}
					return (
						<button
							key={tile.k}
							type="button"
							className={tile.hl ? 'stat stat-hl stat-clickable' : 'stat stat-clickable'}
							onClick={() => setOpen({ title: tile.k, items })}
						>
							{body}
						</button>
					);
				})}
			</section>

			{open ? (
				<div className="stat-modal" role="dialog" aria-modal="true" aria-label={open.title}>
					<button
						type="button"
						className="stat-modal-backdrop"
						aria-label="Close"
						onClick={() => setOpen(null)}
					/>
					<div className="stat-modal-panel">
						<div className="stat-modal-head">
							<h3>
								{open.title} <span className="stat-modal-count">{open.items.length}</span>
							</h3>
							<button
								type="button"
								className="stat-modal-close"
								aria-label="Close"
								onClick={() => setOpen(null)}
							>
								×
							</button>
						</div>
						<ul className="stat-modal-list">
							{open.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			) : null}
		</>
	);
}
