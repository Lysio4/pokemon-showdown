export const Abilities: {[k: string]: ModdedAbilityData} = {
	hakkero: {
		inherit: true,
		isNonstandard: null,
	},
	darkborder: {
		inherit: true,
		isNonstandard: null,
	},
	mistystep: {
		inherit: true,
		isNonstandard: null,
	},
	anemic: {
		inherit: true,
		isNonstandard: null,
	},
	maidstrick: {
		inherit: true,
		isNonstandard: null,
	},
	vampirism: {
		inherit: true,
		isNonstandard: null,
	},
	illusorybacking: {
		inherit: true,
		isNonstandard: null,
	},
	netherworldsspring: {
		inherit: true,
		isNonstandard: null,
	},
	demonparade: {
		inherit: true,
		isNonstandard: null,
	},
	nightsong: {
		inherit: true,
		isNonstandard: null,
	},
	werehakutaku: {
		inherit: true,
		isNonstandard: null,
	},
	brainofthemoon: {
		inherit: true,
		isNonstandard: null,
	},
	blackandwhite: {
		inherit: true,
		isNonstandard: null,
	},
	cursegathering: {
		inherit: true,
		isNonstandard: null,
	},
	swordofhisou: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.effectiveWeather()) {
				pokemon.addVolatile('ability:swordofruin');
			} else {
				pokemon.removeVolatile('ability:swordofruin');
			}
		},
		flags: {},
		name: "Sword of Hisou",
		shortDesc: "Activate Sword of Ruin while a weather effect is active.",
		isNonstandard: null,
	},
	dexterity: {
		onDamage(damage, target, source, effect) {
			if (effect && ['stealthrock', 'spikes', 'gmaxsteelsurge'].includes (effect.id)) {
				return false;
			}
		},
		flags: {},
		name: "Dexterity",
		shortDesc: "Immunity to entry hazards.",
		isNonstandard: null,
	},
	jealous: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.target === 'normal' || move.target === 'any') {
				return this.chainModify(Math.min(2, 1 + 0.1 * defender.positiveBoosts()));
			}
		},
		flags: {},
		name: "Jealous",
		shortDesc: "Gain 10% extra damage per increased stat stage on the opponent, max 100%.",
		isNonstandard: null,
	},
	recollection: {
		onSwitchIn(source) {
			const target = source.side.foe.active[source.side.foe.active.length - 1 - source.position];
			if (target) {
				for (let i = 0; i < Math.min(target.moveSlots.length, 4); i ++) {
					const moveSlot = target.moveSlots[i];
					if (source.moveSlots.filter(m => m.id === moveSlot.id).length) continue;
					if (moveSlot === null) break;
					this.attrLastMove('[still]');
					if (source.moveSlots.length < 0) return;
					const learnedMove = {
						move: this.dex.moves.get(moveSlot.id),
						id: moveSlot.id,
						pp: 5,
						maxpp: 5,
						target: moveSlot.target,
						disabled: false,
						used: false,
					};
					source.moveSlots[source.moveSlots.length] = learnedMove;
				}
			}
		},
		flags: {},
		name: "Recollection",
		shortDesc: "On switch-in, learn the opponent's moves in addition to your own.",
		isNonstandard: null,
	},
	delusion: {
		onResidual(pokemon) {
			if (pokemon.volatiles['confusion'] || this.field.isTerrain('psychicterrain')) {
				this.heal(pokemon.baseMaxhp / 8);
			}
		},
		flags: {},
		name: "Delusion",
		shortDesc: "Heal 12.5% at the end of each turn while confused or in psychic terrain.",
		isNonstandard: null,
	},
	surprise: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Surprise', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute'] || target.hasType('Psychic')) {
					this.add('-immune', target);
				} else {
					this.boost({spa: -1}, target, pokemon, null, true);
				}
			}
		},
		flags: {},
		name: "Surprise",
		shortDesc: "On switch-in, lower opponent's Sp. Atk. by 1 stage, Psychic-Types are immune.",
		isNonstandard: null,
	},
	summonnyuudou: {
		onSwitchOut(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Ichirin Kumoi') return;
			if (pokemon.species.forme !== 'Unzan') {
				pokemon.formeChange('Ichirin and Unzan', this.effect, true);
				pokemon.set.ability = 'Iron Fist';
			}
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Ichirin Kumoi') return;
			if (!this.effectState.heroMessageDisplayed && pokemon.species.forme === 'Ichirin and Unzan') {
				this.add('-activate', pokemon, 'ability: Summon Nyuudou');
				this.effectState.heroMessageDisplayed = true;
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1},
		name: "Summon Nyuudou",
		shortDesc: "Transforms Ichirin Kumoi into Ichirin and Unzan when switching out.",
		isNonstandard: null,
	},
	waterygrave: {
		inherit: true,
		isNonstandard: null,
	},
	devilsrecitation: {
		inherit: true,
		isNonstandard: null,
	},
	undefineddefense: {
		inherit: true,
		isNonstandard: null,
	},
	echo: {
		inherit: true,
		isNonstandard: null,
	},
	healbydesire: {
		inherit: true,
		isNonstandard: null,
	},
	'100medicines': {
		inherit: true,
		isNonstandard: null,
	},
	wickedpower: {
		inherit: true,
		isNonstandard: null,
	},
	growbigger: {
		inherit: true,
		isNonstandard: null,
	},
	pristinebeat: {
		inherit: true,
		isNonstandard: null,
	},
	dangoinfluence: {
		inherit: true,
		isNonstandard: null,
	},
	lunatictorch: {
		inherit: true,
		isNonstandard: null,
	},
	foolsgold: {
		inherit: true,
		isNonstandard: null,
	},
	cutdeep: {
		inherit: true,
		isNonstandard: null,
	},
	winterhearth: {
		inherit: true,
		isNonstandard: null,
	},
	fourseasons: {
		inherit: true,
		isNonstandard: null,
	},
	heavystone: {
		inherit: true,
		isNonstandard: null,
	},
	marchingorders: {
		inherit: true,
		isNonstandard: null,
	},
	blacksmoke: {
		inherit: true,
		isNonstandard: null,
	},
	property: {
		inherit: true,
		isNonstandard: null,
	},
	dragoneater: {
		inherit: true,
		isNonstandard: null,
	},
	bloodsucker: {
		inherit: true,
		isNonstandard: null,
	},
	void: {
		inherit: true,
		isNonstandard: null,
	},
	cactusdrive: {
		inherit: true,
		isNonstandard: null,
	},
	corruptdata: {
		inherit: true,
		isNonstandard: null,
	},
	immovable: {
		inherit: true,
		isNonstandard: null,
	},
	truthoverload: {
		inherit: true,
		isNonstandard: null,
	},
};
