import { consoleips } from "../../../config/config-example";

export const Abilities: { [abilityid: string]: ModdedAbilityData; } = {
	// ZA stuff
	dragonize: {
		inherit: true,
		isNonstandard: null,
	},
	megasol: {
		inherit: true,
		isNonstandard: null,
	},
	// custom stuff
	poisonousradula: {
		inherit: true,
		isNonstandard: null,
	},
	daredevil: {
		inherit: true,
		isNonstandard: null,
	},
	waterproof: {
		inherit: true,
		isNonstandard: null,
	},
	racketeering: {
		inherit: true,
		isNonstandard: null,
	},
	snobbery: {
		inherit: true,
		isNonstandard: null,
	},
	starsforce: {
		inherit: true,
		isNonstandard: null,
	},
	webweaver: {
		inherit: true,
		isNonstandard: null,
	},
	perforating: {
		inherit: true,
		isNonstandard: null,
	},
	doublespirit: {
		inherit: true,
		isNonstandard: null,
	},
	divination: {
		inherit: true,
		isNonstandard: null,
	},
	arcanemastery: {
		inherit: true,
		isNonstandard: null,
	},
	strangebody: {
		inherit: true,
		isNonstandard: null,
	},
	toymaker: {
		inherit: true,
		isNonstandard: null,
	},
	woodclearing: {
		inherit: true,
		isNonstandard: null,
	},
	microclimate: {
		inherit: true,
		isNonstandard: null,
	},
	voidheart: {
		inherit: true,
		isNonstandard: null,
	},
	convectioncurrent: {
		inherit: true,
		isNonstandard: null,
	},
	endlessdream: {
		inherit: true,
		isNonstandard: null,
	},
	evaporate: {
		inherit: true,
		isNonstandard: null,
	},
	desertsong: {
		inherit: true,
		isNonstandard: null,
	},
	sundownswitch: {
		inherit: true,
		isNonstandard: null,
	},
	coldvengeance: {
		inherit: true,
		isNonstandard: null,
	},
	blindrage: {
		inherit: true,
		isNonstandard: null,
	},
	hardrock: {
		inherit: true,
		isNonstandard: null,
	},
	forgery: {
		inherit: true,
		isNonstandard: null,
	},
	clairvoyance: {
		inherit: true,
		isNonstandard: null,
	},
	whiplash: {
		inherit: true,
		isNonstandard: null,
	},
	boarding: {
		inherit: true,
		isNonstandard: null,
	},
	lasttoxin: {
		inherit: true,
		isNonstandard: null,
	},
	chakrasurge: {
		inherit: true,
		isNonstandard: null,
	},
	striker: {
		inherit: true,
		isNonstandard: null,
	},
	insectivorous: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicenergy: {
		inherit: true,
		isNonstandard: null,
	},
	ignite: {
		inherit: true,
		isNonstandard: null,
	},
	nightlight: {
		inherit: true,
		isNonstandard: null,
	},
	parasitism: {
		inherit: true,
		isNonstandard: null,
	},
	explosive: {
		inherit: true,
		isNonstandard: null,
	},
	accumulate: {
		inherit: true,
		isNonstandard: null,
	},
	blowhole: {
		inherit: true,
		isNonstandard: null,
	},
	northwind: {
		inherit: true,
		isNonstandard: null,
	},
	eternalwinter: {
		inherit: true,
		isNonstandard: null,
	},
	// other strong weathers
	deltastream: {
		inherit: true,
		desc: "On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land, Eternal Winter or Primordial Sea.",
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'eternalwinter'];
			if (this.field.getWeather().id === 'deltastream' && !strongWeathers.includes(weather.id)) return false;
		},
	},
	desolateland: {
		inherit: true,
		desc: "On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream, Eternal Winter or Primordial Sea.",
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'eternalwinter'];
			if (this.field.getWeather().id === 'desolateland' && !strongWeathers.includes(weather.id)) return false;
		},
	},
	primordialsea: {
		inherit: true,
		desc: "On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream, Desolate Land or Eternal Winter.",
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'eternalwinter'];
			if (this.field.getWeather().id === 'primordialsea' && !strongWeathers.includes(weather.id)) return false;
		},
	},
	// all snow and hail abilities
	snowcloak: {
		inherit: true,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather(['hail', 'snowscape', 'eternalwinter'])) {
				this.debug('Snow Cloak - decreasing accuracy');
				return this.chainModify([3277, 4096]);
			}
		},
	},
	icebody: {
		inherit: true,
		onWeather(target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'snowscape' || effect.id === 'eternalwinter') {
				this.heal(target.baseMaxhp / 16);
			}
		},
	},
	slushrush: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['hail', 'snowscape', 'eternalwinter'])) {
				return this.chainModify(2);
			}
		},
	},
	iceface: {
		inherit: true,
		onStart(pokemon) {
			if (this.field.isWeather(['hail', 'snowscape', 'eternalwinter']) && pokemon.species.id === 'eiscuenoice') {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		onWeatherChange(pokemon, source, sourceEffect) {
			// snow/hail resuming because Cloud Nine/Air Lock ended does not trigger Ice Face
			if ((sourceEffect as Ability)?.suppressWeather) return;
			if (!pokemon.hp) return;
			if (this.field.isWeather(['hail', 'snowscape', 'eternalwinter']) && pokemon.species.id === 'eiscuenoice') {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
	},
	// end of snow and hail abilities
	disillusioned: {
		inherit: true,
		isNonstandard: null,
	},
	leafdress: {
		inherit: true,
		isNonstandard: null,
	},
	sonar: {
		inherit: true,
		isNonstandard: null,
	},
	unstableshell: {
		inherit: true,
		isNonstandard: null,
	},
	sleightofhand: {
		inherit: true,
		isNonstandard: null,
	},
	hyperthermia: {
		inherit: true,
		isNonstandard: null,
	},
	mentalfortitude: {
		inherit: true,
		isNonstandard: null,
	},
	unconcerned: {
		inherit: true,
		isNonstandard: null,
	},
	hydrophilic: {
		inherit: true,
		isNonstandard: null,
	},
	searingtouch: {
		inherit: true,
		isNonstandard: null,
	},
	virality: {
		inherit: true,
		isNonstandard: null,
	},
	oldschool: {
		inherit: true,
		isNonstandard: null,
	},
	justified: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				if (!this.boost({ atk: 1 })) {
					this.add('-immune', target, '[from] ability: Justified');
				}
				return null;
			}
		},
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move. Dark immunity.",
	},
	colorchange: {
		inherit: true,
		onAfterMoveSecondary(target, source, move) {},
		onTryHit(target, source, move) {
			if (!target.hp) return;
			const type = move.type;
			if (
				target.isActive && move.effectType === 'Move' && move.category !== 'Status' &&
				type !== '???' && !target.hasType(type)
			) {
				if (!target.setType(type)) return false;
				this.add('-start', target, 'typechange', type, '[from] ability: Color Change');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const action = this.queue.willMove(target);
					if (action && action.move.id === 'curse') {
						action.targetLoc = -1;
					}
				}
			}
		},
		shortDesc: "This Pokemon's type changes to the type of a move it's hit by before being hit, unless it has the type.",
	},
	powerspot: {
		inherit: true,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify(1.5);
			}
		},
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify(1.5);
			}
		},
		desc: "This Pokemon and its allies have the power of their moves multiplied by 1.5. This affects Doom Desire and Future Sight, even if the user is not on the field.",
		shortDesc: "This Pokemon and its allies have the power of their moves multiplied by 1.5.",
	},
	stickyhold: {
		//inherit: true,
		onTakeItem(item, pokemon, source) {
			if (!pokemon.hp || pokemon.item === 'stickybarb') return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff' || this.activeMove.id === 'brainblast') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.name === 'Knock Off' || move.name === 'Brain Blast') {
				this.debug('Sticky Hold weaken');
				return this.chainModify(0.67);
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.name === 'Poltergeist') {
				this.add('-immune', pokemon, '[from] ability: Sticky Hold');
				return null;
			}
		},
		name: "Sticky Hold",
		rating: 2,
		num: 60,
	},
	normalize: {
		inherit: true,
		desc: "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.5, and ignores type affinities. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.5x power, and ignore typing.",
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify(1.5);
		},
		onModifyMove(move, pokemon, target) {
			let type = move.type;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity[type] = true;
			}
		},
		onEffectiveness(typeMod, target, type) {
			if (target.getMoveHitData(move).typeMod < 0) return 0;
		},
	},
	watercompaction: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({def: 2})) {
					this.add('-immune', target, '[from] ability: Water Compaction');
				}
				return null;
			}
		},
		shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move. Water immunity.",
	},
	mimicry: {
		inherit: true,
		onTerrainChange(pokemon) {
			let types;
			switch (this.field.terrain) {
			case 'electricterrain':
				types = ['Electric'];
				break;
			case 'grassyterrain':
				types = ['Grass'];
				break;
			case 'mistyterrain':
				types = ['Fairy'];
				break;
			case 'psychicterrain':
				types = ['Psychic'];
				break;
			case 'chakraterrain':
				types = ['Fighting'];
				break;
			default:
				types = pokemon.baseSpecies.types;
			}
			const oldTypes = pokemon.getTypes();
			if (oldTypes.join() === types.join() || !pokemon.setType(types)) return;
			if (this.field.terrain || pokemon.transformed) {
				this.add('-start', pokemon, 'typeadd', types.join('/'), '[from] ability: Mimicry');
				if (!this.field.terrain) this.hint("Transform Mimicry changes you to your original un-transformed types.");
			} else {
				this.add('-activate', pokemon, 'ability: Mimicry');
				this.add('-end', pokemon, 'typeadd', '[silent]');
			}
		},
		desc: "This Pokemon gets a new type to match the active Terrain when this Pokemon acquires this Ability, or whenever a Terrain begins. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, Psychic type during Psychic Terrain, and Fighting type during Chakra Terrain. If this Ability is acquired without an active Terrain, or a Terrain ends, this Pokemon's types become the original types for its species.",
		shortDesc: "This Pokemon gets a new type to match the Terrain. Type reverts when Terrain ends.",
	},
	toxicboost: {
		inherit: true,
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				return false;
			}
		},
		shortDesc: "1.5x Attack while poisoned; Immune to poison status damage.",
	},
	flareboost: {
		inherit: true,
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				return false;
			}
		},
		shortDesc: "1.5x SpA while burned; Immune to burn damage.",
	},
	zenmode: {
		inherit: true,
		flags: {}, // yes deleting the flags is an ugly way to do it but I need to find a better one lol
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
				return;
			}
			if (!['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} 
			const abilityToGive = pokemon.species.forme === 'Zen' ? "Sheer Force" : "Gorilla Tactics";
			const oldAbility = pokemon.setAbility(abilityToGive);
			if (oldAbility) {
				this.add('-ability', pokemon, abilityToGive, '[from] ability: Zen Mode');
				return;
			}
			return oldAbility as false | null;
		},
		onResidual(pokemon) {},
		onEnd(pokemon) {},
		shortDesc: "If Darmanitan, changes Mode to Zen. Changes ability to Sheer Force (Darmanitan)/Gorilla Tactics (Darmanitan-Galar).",
	},
	runaway: {
		inherit: true,
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = pokemon.maybeTrapped = false;
		},
		shortDesc: "This Pokemon can't be trapped by any mean.",
	},
	illuminate: {
		inherit: true,
		onSourceModifyAccuracyPriority: 9,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('illuminate - enhancing accuracy');
			return accuracy * 1.3;
		},
		desc: "This Pokemon's Accuracy is x1.3. Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's Accuracy is x1.3. This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
	},
	honeygather: {
		inherit: true,
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && !pokemon.item) {
				pokemon.setItem('honey');
				this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Honey Gather');
			}
			if (pokemon.hasItem('honey')) {
				this.heal(pokemon.baseMaxhp / 8);
			}
		},
		shortDesc: "At the end of each turn, if this Pokemon has no item, it gets Honey. If it has honey, it heals 1/8 of its HP.",
	},
	defeatist: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.side.totalFainted === 5) {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.side.totalFainted === 5) {
				return this.chainModify(0.5);
			}
		},
		desc: "If this Pokemon is the last Pokemon of the team, its Attack and Special Attack are halved.",
		shortDesc: "If this Pokemon is the last Pokemon of the team, its Attack and Sp. Atk are halved.",
	},
	galewings: {
		inherit: true,
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1;
		},
		rating: 4,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
	},
	schooling: {
		inherit: true,
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.species.id === 'wishiwashi') {
				pokemon.formeChange('Wishiwashi-School');
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.species.id === 'wishiwashi') {
				pokemon.formeChange('Wishiwashi-School');
			}
		},
		onSourceModifyAccuracyPriority: 9,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('schooling - enhancing accuracy');
			return accuracy * 1.3;
		},
		desc: "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above, it changes to School Form, and raises its Accuracy by 1.3. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.",
		shortDesc: "If user is Wishiwashi, changes to School Form, else Solo Form. Accuracy x1.3.",
	},
	grasspelt: {
		inherit: true,
		onStart(pokemon) {
			if (
				!this.field.setTerrain('grassyterrain') &&
				this.field.isTerrain('grassyterrain') && pokemon.isGrounded()
			) {
				this.add('-activate', pokemon, 'ability: Grass Pelt');
			}
		},
		onTerrainChange(pokemon) {
			if (pokemon === this.field.weatherState.source) return;
			if (this.field.isTerrain('grassyterrain') && pokemon.isGrounded()) {
				this.add('-activate', pokemon, 'ability: Grass Pelt');
			}
		},
		onModifyDefPriority: 5,
		onModifyDef(def, attacker, defender, move) {
			if (this.field.isTerrain('grassyterrain') && attacker.isGrounded()) {
				this.debug('Grass Pelt boost');
				return this.chainModify([5461, 4096]);
			}
		},
		shortDesc: "On switch-in, summons Grassy Terrain. During Grassy Terrain, Def is 1.3333x.",
	},
	flowergift: {
		inherit: true,
		onModifyAtkPriority: 3,
		onModifyAtk(atk, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 4,
		onModifySpD(spd, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifyDefPriority: 4,
		onModifyDef(def, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (!(['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather()))) {
				return this.chainModify(1.5);
			}
		},
		desc: "If user is Cherrim and Sunny Day isn't active, its Def is 1.5x. If user is Cherrim and Sunny Day is active, it and its allies Atk and Sp. Def are 1.5x. and Cherrim gains the Fire type.",
		shortDesc: "Cherrim: If Sunny Day is active, it and its allies Atk and Sp. Def are 1.5x, and Cherrim gains the Fire type; otherwise Def x1.5.",
	},
	dodge: {
		inherit: true,
		isNonstandard: null,
	},
	reboundbelly: {
		inherit: true,
		isNonstandard: null,
	},
	faithfulcompanion: {
		inherit: true,
		isNonstandard: null,
	},
	cheerleader: {
		inherit: true,
		isNonstandard: null,
	},
	seedsower: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			this.field.setTerrain('grassyterrain');
			if (!source.hasType('Grass')) {
				this.add('-activate', target, 'ability: Seed Sower');
				source.addVolatile('leechseed', this.effectState.target);
			}
		},
		shortDesc: "When this Pokemon is hit by an attack, the effect of Grassy Terrain and Leech Seed begins.",
	},
	electromorphosis: {
		inherit: true,
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			target.addVolatile('charge');
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.volatiles['charge']) {
				return this.chainModify(0.75);
			}
		},
	},
	withering: {
		inherit: true,
		isNonstandard: null,
	},
	cacophony: {
		inherit: true,
		isNonstandard: null,
	},
	happygolucky: {
		inherit: true,
		isNonstandard: null,
	},
	mightywall: {
		inherit: true,
		isNonstandard: null,
	},
	karma: {
		inherit: true,
		isNonstandard: null,
	},
	souldevourer: {
		inherit: true,
		isNonstandard: null,
	},
	lingeringaroma: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {},
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.side === source.side) return;
			if (!move.ruinedDef) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Lingering Aroma Def drop');
			return this.chainModify(0.75);
		},
		onAllyModifyAtkPriority: 3,
		onAllyModifyAtk(atk, pokemon) {
			return this.chainModify(1.25);
		},
		desc: "Opposing Pokemon have their Defense reduced by 25%, and allies have their Attack raised by 25%.",
		shortDesc: "Opposing Pokemon have their Defense reduced by 25%, and allies have their Attack raised by 25%.",
	},
	soothingfragrance: {
		inherit: true,
		isNonstandard: null,
	},
	tempestuous: {
		inherit: true,
		isNonstandard: null,
	},
	ambush: {
		inherit: true,
		isNonstandard: null,
	},
	steelbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	rattled: {
		inherit: true,
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' || move.type === 'Ghost' || move.type === 'Dark') {
				this.debug('Rattled weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' || move.type === 'Ghost' || move.type === 'Dark') {
				this.debug('Rattled weaken');
				return this.chainModify(0.5);
			}
		},
		flags: {breakable: 1},
		desc: "Bug/Ghost/Dark resistances. This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or if an opposing Pokemon affected this Pokemon with the Intimidate Ability.",
		shortDesc: "Bug/Ghost/Dark resistances. Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.",
	},
	bitterhatred: {
		inherit: true,
		isNonstandard: null,
	},
	pollution: {
		inherit: true,
		isNonstandard: null,
	},
	freegullet: {
		inherit: true,
		isNonstandard: null,
	},
	blindeye: {
		inherit: true,
		isNonstandard: null,
	},
	counterstrike: {
		inherit: true,
		isNonstandard: null,
	},
	climaticchange: {
		inherit: true,
		isNonstandard: null,
	},
	hyperglycemia: {
		inherit: true,
		isNonstandard: null,
	},
	graviton: {
		inherit: true,
		isNonstandard: null,
	},
	solarenergy: {
		inherit: true,
		isNonstandard: null,
	},
	punchprodigee: {
		inherit: true,
		isNonstandard: null,
	},
	heavyweapon: {
		inherit: true,
		isNonstandard: null,
	},
	lightpower: {
		inherit: true,
		isNonstandard: null,
	},
	thermalswitch: {
		inherit: true,
		isNonstandard: null,
	},
	ironbody: {
		inherit: true,
		isNonstandard: null,
	},
	psychicprowess: {
		inherit: true,
		isNonstandard: null,
	},
	rewind: {
		inherit: true,
		isNonstandard: null,
	},
	hugeclamp: {
		inherit: true,
		isNonstandard: null,
	},
	merciless: {
		inherit: true,
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['psn', 'tox', 'brn', 'par', 'frz', 'slp'].includes(target.status)) return 5;
		},
		shortDesc: "This Pokemon's attacks are critical hits if the target is statused.",
	},
   	healingecho: {
		inherit: true,
		isNonstandard: null,
	},
	mountaineer: {
		inherit: true,
		isNonstandard: null,
	},
	meltingheart: {
		inherit: true,
		isNonstandard: null,
	},
	teravolt: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Teravolt boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Teravolt boost');
				return this.chainModify(1.5);
			}
		},
		desc: "This Pokemon's offensive stat is multiplied by 1.5 while using an Electric-type attack. This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Armor Tail, Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Earth Eater, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Good as Gold, Grass Pelt, Guard Dog, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Illuminate, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mind's Eye, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Purifying Salt, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Tera Shell, Thermal Exchange, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, Well-Baked Body, White Smoke, Wind Rider, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon. This Pokemon's offensive stat is multiplied by 1.5 while using an Electric-type attack.",
	},
	turboblaze: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Turboblaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Turboblaze boost');
				return this.chainModify(1.5);
			}
		},
		desc: "This Pokemon's offensive stat is multiplied by 1.5 while using an Fire-type attack. This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Armor Tail, Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Earth Eater, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Good as Gold, Grass Pelt, Guard Dog, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Illuminate, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mind's Eye, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Purifying Salt, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Tera Shell, Thermal Exchange, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, Well-Baked Body, White Smoke, Wind Rider, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon. This Pokemon's offensive stat is multiplied by 1.5 while using an Fire-type attack.",
	},
	magiceye: {
		inherit: true,
		isNonstandard: null,
	},
	corrosion: {
		inherit: true,
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
		},
		rating: 3,
		shortDesc: "This Pokemon can hit Steel types with Poison-type moves, and poison or badly poison a Pokemon regardless of its typing.",
	},
	truant: {
		inherit: true,
		onBeforeMove(pokemon, target, move) {
			if (pokemon.removeVolatile('truant')) {
				if (move.category !== 'Status') {
					this.add('cant', pokemon, 'ability: Truant');
					return false;
				}
				return true;
			}
			pokemon.addVolatile('truant');
		},
		onModifyMove(move) {
			delete move.flags['protect'];
		},
		shortDesc: "This Pokemon can only use status moves every other turn. Its moves ignore the target's protection.",
	},
	mightyhorn: {
		inherit: true,
		isNonstandard: null,
	},
	nightmareheart: {
		inherit: true,
		isNonstandard: null,
	},
	petrify: {
		inherit: true,
		isNonstandard: null,
	},
	fullmetalbody: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {},
		onTryHit(target, source, move) {
			if (move.category === 'Status' && target !== source) {
				this.add('-immune', target, '[from] ability: Good as Gold');
				return null;
			}
		},
		shortDesc: "This Pokemon is immune to Status moves.",
	},
};
