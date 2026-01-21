import { consoleips } from "../../../config/config-example";

export const Abilities: { [abilityid: string]: ModdedAbilityData; } = {
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
	longtail: {
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
	angelicnature: {
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
	everlastingwinter: {
		inherit: true,
		isNonstandard: null,
	},
	// other strong weathers
	deltastream: {
		inherit: true,
		desc: "On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land, Everlasting Winter or Primordial Sea.",
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'everlastingwinter'];
			if (this.field.getWeather().id === 'deltastream' && !strongWeathers.includes(weather.id)) return false;
		},
	},
	desolateland: {
		inherit: true,
		desc: "On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream, Everlasting Winter or Primordial Sea.",
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'everlastingwinter'];
			if (this.field.getWeather().id === 'desolateland' && !strongWeathers.includes(weather.id)) return false;
		},
	},
	primordialsea: {
		inherit: true,
		desc: "On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream, Desolate Land or Everlasting Winter.",
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'everlastingwinter'];
			if (this.field.getWeather().id === 'primordialsea' && !strongWeathers.includes(weather.id)) return false;
		},
	},
	// all snow and hail abilities
	icebody: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'hail' || type === 'everlastingwinter') return false;
		},
		onWeather(target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'snow' || effect.id === 'everlastingwinter') {
				this.heal(target.baseMaxhp / 16);
			}
		},
	},
	slushrush: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['hail', 'snow', 'everlastingwinter'])) {
				return this.chainModify(2);
			}
		},
	},
	overcoat: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'everlastingwinter' || type === 'powder') return false;
		},
	},
	// end of snow and hail abilities
	spikybody: {
		inherit: true,
		isNonstandard: null,
	},
	disillusioned: {
		inherit: true,
		isNonstandard: null,
	},
	leafdress: {
		inherit: true,
		isNonstandard: null,
	},
	invincible: {
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
	newtonslaw: {
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
	iceface: {
		inherit: true,
		onStart(pokemon) {
			if (this.field.isWeather(['hail', 'snow', 'everlastingwinter']) && pokemon.species.id === 'eiscuenoice') {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect?.effectType === 'Move' && target.species.id === 'eiscue') {
				this.add('-activate', target, 'ability: Ice Face');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, type, move) {
			if (!target) return;
			if (target.species.id !== 'eiscue') return;
			if (target.volatiles['substitute'] && !(move.flags['bypasssub'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (target.species.id !== 'eiscue') return;

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onWeatherChange(pokemon, source, sourceEffect) {
			// snow/hail resuming because Cloud Nine/Air Lock ended does not trigger Ice Face
			if ((sourceEffect as Ability)?.suppressWeather) return;
			if (!pokemon.hp) return;
			if (this.field.isWeather(['hail', 'snow', 'everlastingwinter']) && pokemon.species.id === 'eiscuenoice') {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		desc: "If this Pokemon is an Eiscue, the first hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Snow begins or when Eiscue switches in while Snow is active. Confusion damage also breaks the ice face.",
		shortDesc: "If Eiscue, the first hit it takes deals 0 damage. Effect is restored in Snow.",
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
	arenatrap: {
		inherit: true,
		onFoeTrapPokemon(pokemon) {},
		onFoeMaybeTrapPokemon(pokemon, source) {},
		onModifyDamage(damage, source, target, move) {
			if (!(source.activeMoveActions > 1)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe(spe, pokemon) {
			if (!(pokemon.activeMoveActions > 1)) {
				return this.chainModify(1.5);
			}
		},
		shortDesc: "This Pokemon's attacks deal x1.5 damage and has x1.5 Speed during 1 turn.",
	},
	shadowtag: {
		inherit: true,
		onFoeTrapPokemon(pokemon) {	},
		onFoeMaybeTrapPokemon(pokemon, source) {},
		desc: "While this Pokémon is present, all Pokémon are prevented from restoring any HP. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. Regenerator is also suppressed.",
		shortDesc: "While present, all Pokémon are prevented from healing and Regenerator is suppressed.",
		onStart(source) {
			let activated = false;
			for (const pokemon of this.getAllActive()) {
				if (!activated) {
					this.add('-ability', source, 'Shadow Tag');
				}
				activated = true;
				if (!pokemon.volatiles['healblock']) {
					pokemon.addVolatile('healblock');
				}
			}
		},
		onAnySwitchIn(pokemon) {
			if (!pokemon.volatiles['healblock']) {
				pokemon.addVolatile('healblock');
			}
		},
		onEnd(pokemon) {
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('shadowtag')) return;
			}
			for (const target of this.getAllActive()) {
				target.removeVolatile('healblock');
			}
		},
	},
	regenerator: { // modded for Shadow Tag
		inherit: true,
		onSwitchOut(pokemon) {
			for (const target of this.getAllActive()) {
				if (target.hasAbility('shadowtag')) {
					return;
				}
			}
			pokemon.heal(pokemon.baseMaxhp / 3);
		},
	},
	sandveil: {
		inherit: true,
		onSetStatus(status, target, source, effect) {
			if (this.field.isWeather('sandstorm')) {
				if ((effect as Move)?.status) {
					this.add('-immune', target, '[from] ability: Sand Veil');
				}
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && this.field.isWeather('sandstorm')) {
				this.add('-immune', target, '[from] ability: Sand Veil');
				return null;
			}
		},
		onModifyDef(def, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.3);
			}
		},
		onModifyAccuracy(accuracy) {},
		desc: "If Sandstorm is active, this Pokemon's Defense is multiplied by 1.3, and it cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sandstorm is active, this Pokemon's Def is 1.3x; cannot be statused and Rest will fail for it.",
	},
	snowcloak: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'hail' || type === 'everlastingwinter') return false;
		},
		onSetStatus(status, target, source, effect) {
			if (this.field.isWeather(['hail', 'snow', 'everlastingwinter'])) {
				if ((effect as Move)?.status) {
					this.add('-immune', target, '[from] ability: Snow Cloak');
				}
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && this.field.isWeather(['hail', 'snow', 'everlastingwinter'])) {
				this.add('-immune', target, '[from] ability: Snow Cloak');
				return null;
			}
		},
		onModifyDef(def, pokemon) {
			if (this.field.isWeather(['hail', 'snow', 'everlastingwinter'])) {
				return this.chainModify(1.3);
			}
		},
		onModifyAccuracy(accuracy) {},
		desc: "If Snow is active, this Pokemon's Defense is multiplied by 1.3, and it cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Snow is active, this Pokemon's Def is 1.3x; cannot be statused and Rest will fail for it.",
	},
	leafguard: {
		inherit: true,
		onModifyDef(def, pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(1.3);
			}
		},
		desc: "If Sunny Day is active, this Pokemon's Defense is multiplied by 1.3, and it cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokemon's Def is 1.3x; cannot be statused and Rest will fail for it.",
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
	},
	disguise: {
		inherit: true,
		onUpdate(pokemon) {
			if (['mimikyu', 'mimikyutotem'].includes(pokemon.species.id) && this.effectState.busted) {
				const speciesid = pokemon.species.id === 'mimikyutotem' ? 'Mimikyu-Busted-Totem' : 'Mimikyu-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 16, pokemon, pokemon, this.dex.species.get(speciesid)); // 6.25% instead of 12.5% HP lost
			}
		},
		desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/16 of its max HP. Confusion damage also breaks the disguise.",
		shortDesc: "(Mimikyu only) The first hit it takes is blocked, and it takes 1/16 HP damage instead.",
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
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
				return;
			}
			if (!['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} else if (['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode'); // in case of base Darmanitan-Zen
				pokemon.removeVolatile('zenmode');
			}
		},
		shortDesc: "If Darmanitan, changes Mode to Zen.",
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
	strongwill: {
		inherit: true,
		isNonstandard: null,
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
	truant: {
		inherit: true,
		onStart(pokemon) {},
		onBeforeMove(pokemon) {},
		shortDesc: "No competitive effect.",
		desc: "No competitive effect.",
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
	lusterswap: { // taken from M4A
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
	magician: {
		inherit: true,
		shortDesc: "On switch-in, identifies and copies the effect of the opponent's held item.",
		onStart(pokemon) {
			if (pokemon.side.foe.active.some(
				foeActive => foeActive && pokemon.isAdjacent(foeActive) && !foeActive.item
			)) {
				this.effectState.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;
			const possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && pokemon.isAdjacent(foeActive));
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				const target = possibleTargets[rand];
				const item = target.getItem();
				const additionalBannedItems = [
					// Zen Mode included here for compatibility with Gen 5-6
					'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'receiver', 'trace', 'zenmode', 'protosynthesis', 'quarkdrive',
				];
				if (!this.singleEvent('TakeItem', item, target.itemData, target, target, item) || additionalBannedItems.includes(target.item)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, item, '[from] ability: Magician', '[of] ' + target);
				pokemon.setAbility(item);
				return;
			}
		},
		onAfterMoveSecondarySelf(source, target, move) {},
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
	wanderingspirit: {
		inherit: true,
		onStart(pokemon) {
			// n.b. only affects Hackmons
			// interaction with No Ability is complicated: https://www.smogon.com/forums/threads/pokemon-sun-moon-battle-mechanics-research.3586701/page-76#post-7790209
			if (pokemon.adjacentFoes().some(foeActive => foeActive.ability === 'noability')) {
				this.effectState.gaveUp = true;
			}
			// interaction with Ability Shield is similar to No Ability
			if (pokemon.hasItem('Ability Shield')) {
				this.add('-block', pokemon, 'item: Ability Shield');
				this.effectState.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;

			const possibleTargets = pokemon.adjacentFoes().filter(
				target => !target.getAbility().flags['notrace'] && target.ability !== 'noability'
			);
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);
			const ability = target.getAbility();
			if (pokemon.setAbility(ability) && target.setAbility('wanderingspirit')) {
				this.add('-ability', pokemon, ability, '[from] ability: Wandering Spirit', '[of] ' + target);
			}
		},
		onDamagingHit(damage, target, source, move) {},
		desc: "On switch-in, this Pokemon swaps abilities with the target.",
		shortDesc: "On switch-in, this Pokemon swaps abilities with the target.",
	},
	heavyweapon: {
		inherit: true,
		isNonstandard: null,
	},
	lightpower: {
		inherit: true,
		isNonstandard: null,
	},
	comatose: {
		inherit: true,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		desc: "Heals 1/16 HP per turn. This Pokemon is considered to be asleep and cannot become affected by a non-volatile status condition or Yawn.",
		shortDesc: "Heals 1/16 HP per turn. This Pokemon cannot be statused, and is considered to be asleep.",
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
	contrarian: {
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
	mountainwalker: {
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
	stormemperor: {
		inherit: true,
		isNonstandard: null,
	},
	magiceye: {
		inherit: true,
		isNonstandard: null,
	},





	// Taken from Joltemons, for Magician, damn
	lifeorb: {
		onModifyDamage(damage, source, target, move) {
			return this.chainModify(1.3);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				this.add('-ability', source, 'Life Orb');
				this.damage(source.baseMaxhp / 10, source, source);
			}
		},
		name: "Life Orb",
	},
	assaultvest: {
		onModifySpDPriority: 1,
		onModifySpD(spd) {
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.moves.get(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		name: "Assault Vest",
	},
	choiceband: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice Band");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Choice Band Atk Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Choice Band",
	},
	choicespecs: {
		name: "Choice Specs",
		shortDesc: "This Pokemon's Sp. Atk is 1.5x, but it can only select the first move it executes.",
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice Specs");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon, move) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Choice Specs Sp. Atk Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
	},
	choicescarf: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice Scarf");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Choice Scarf Spe Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Choice Scarf",
	},
	eviolite: {
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		name: "Eviolite",
	},
	cursedbelt: {
		onAfterMoveSecondarySelf(target, source, move) {
			if (move.category === 'Status') {
				target.addVolatile('disable');
			}
		},
		onModifyDamage(damage, source, target, move) {
			if (source.volatiles['disable']) {
				return this.chainModify(1.2);
			}
		},
		name: "Cursed Belt",
	},
	focussash: {
		onStart(pokemon) {
			pokemon.addVolatile('focussash');
		},
		condition: {
			onDamagePriority: -100,
			onDamage(damage, target, source, effect) {
				if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
					this.add('-ability', target, 'Focus Sash');
					return target.hp - 1;
					target.removeVolatile('focussash');
				}
			},
		},
		name: "Focus Sash",
	},
	leftovers: {
		onResidualOrder: 5,
		onResidualSubOrder: 5,
		onResidual(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return;
			this.heal(pokemon.baseMaxhp / 16);
		},
		onTerrain(pokemon) {
			if (!this.field.isTerrain('grassyterrain')) return;
			this.heal(pokemon.baseMaxhp / 16);
		},
		name: "Leftovers",
	},
	rockyhelmet: {
		onDamagingHitOrder: 2,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.damage(source.baseMaxhp / 6, source, target);
			}
		},
		name: "Rocky Helmet",
	},
	/*
	mentalherb: {
		onStart(pokemon) {
			pokemon.addVolatile('mentalherb');
		},
		condition: {
			onAllyTryAddVolatile(status, target, source, effect) {
				if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
					if (effect.effectType === 'Move') {
						const effectHolder = this.effectState.target;
						this.add('-block', target, 'ability: Mental Herb', '[of] ' + effectHolder);
						target.removeVolatile('mentalherb');
					}
					return null;
				}
			},
		name: "Mental Herb",
	},
*/
	blacksludge: {
		onResidualOrder: 5,
		onResidualSubOrder: 5,
		onResidual(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return;
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		onTerrain(pokemon) {
			if (!this.field.isTerrain('grassyterrain')) return;
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		name: "Black Sludge",
	},
	flameorb: {
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('brn', pokemon);
		},
		name: "Flame Orb",
	},
	toxicorb: {
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('tox', pokemon);
		},
		name: "Toxic Orb",
	},
	paraorb: {
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		name: "Para Orb",
	},
	frozenorb: {
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('frz', pokemon);
		},
		name: "Frozen Orb",
	},
	widelens: {
		onSourceModifyAccuracyPriority: 4,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return accuracy * 1.2;
			}
		},
		name: "Wide Lens",
	},
	zoomlens: {
		onSourceModifyAccuracyPriority: 4,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && (!this.queue.willMove(target) || target.newlySwitched)) {
				this.debug('Zoom Lens boosting accuracy');
				return accuracy * 1.5;
			}
		},
		name: "Zoom Lens",
	},
	protector: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Protector neutralize');
				return this.chainModify(0.75);
			}
		},
		name: "Protector",
	},
	shedshell: {
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = pokemon.maybeTrapped = false;
		},
		name: "Shed Shell",
	},
	scopelens: {
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Scope Lens",
	},
	razorclaw: {
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Razor Claw",
	},
	abilityshield: {
		name: "Ability Shield",
		// Neutralizing Gas protection implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
		// and in Neutralizing Gas itself within data/abilities.ts
		onSetAbility(ability, target, source, effect) {
			if (effect && effect.effectType === 'Ability' && effect.name !== 'Trace') {
				this.add('-ability', source, effect);
			}
			this.add('-block', target, 'item: Ability Shield');
			return null;
		},
	},
	mirrorherb: {
		name: "Mirror Herb",
		onFoeAfterBoost(boost, target, source, effect) {
			if (effect?.name === 'Opportunist' || effect?.name === 'Mirror Herb') return;
			const boostPlus: SparseBoostsTable = {};
			let statsRaised = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! > 0) {
					boostPlus[i] = boost[i];
					statsRaised = true;
				}
			}
			if (!statsRaised) return;
			const pokemon: Pokemon = this.effectState.target;
			pokemon.useItem();
			this.boost(boostPlus, pokemon);
		},
	},
	punchingglove: {
		name: "Punching Glove",
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Punching Glove boost');
				return this.chainModify([4506, 4096]);
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move) {
			if (move.flags['punch']) delete move.flags['contact'];
		},
	},
	loadeddice: {
		name: "Loaded Dice",
		// partially implemented in sim/battle-actions.ts:BattleActions#hitStepMoveHitLoop
		onModifyMove(move) {
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
	},
	fairyfeather: {
		name: "Fairy Feather",
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fairy') {
				return this.chainModify([4915, 4096]);
			}
		},
	},
	covertcloak: {
		name: "Covert Cloak",
		onModifySecondaries(secondaries) {
			this.debug('Covert Cloak prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
	},
	pixieplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fairy') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Pixie Plate",
	},
	blackbelt: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Black Belt",
	},
	blackglasses: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Black Glasses",
	},
	charcoal: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Charcoal",
	},
	dragonfang: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Dragon Fang",
	},
	hardstone: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Hard Stone",
	},
	magnet: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Electric') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Magnet",
	},
	metalcoat: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steel') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Metal Coat",
	},
	miracleseed: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Miracle Seed",
	},
	mysticwater: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Mystic Water",
	},
	nevermeltice: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ice') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Never-Melt Ice",
	},
	poisonbarb: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Poison') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Poison Barb",
	},
	sharpbeak: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Sharp Beak",
	},
	silkscarf: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Normal') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Silk Scarf",
	},
	softsand: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Soft Sand",
	},
	spelltag: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ghost') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Spell Tag",
	},
	twistedspoon: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Twisted Spoon",
	},
	silverpowder: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Bug') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Silver Powder",
	},
	protectivepads: {
		onModifyMove(move) {
			delete move.flags['contact'];
		},
		name: "Protective Pads",
	},
	safetygoggles: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
		},
		onTryHit(pokemon, source, move) {
			if (move.flags['powder'] && pokemon !== source && this.dex.getImmunity('powder', pokemon)) {
				this.add('-activate', pokemon, 'ability: Safety Goggles', move.name);
				return null;
			}
		},
		name: "Safety Goggles",
	},
	bigroot: {
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) {
				return this.chainModify([0x14CC, 0x1000]);
			}
		},
		name: "Big Root",
	},
	utilityumbrella: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail') return false;
		},
		onWeather(target, source, effect) {
			if (this.field.isWeather(['sunnyday', 'desolateland', 'hail', 'raindance', 'primordialsea', 'sandstorm'])) {
				this.heal(target.baseMaxhp / 12);
			}
		},
		name: "Utility Umbrella",
	},
	fistplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Fist Plate",
	},
	dreadplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Dread Plate",
	},
	flameplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Flame Plate",
	},
	dracoplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Draco Plate",
	},
	stoneplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Stone Plate",
	},
	rockincense: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Rock Incense",
	},
	zapplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Electric') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Zap Plate",
	},
	ironplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steel') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Iron Plate",
	},
	meadowplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Meadow Plate",
	},
	roseincense: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Rose Incense",
	},
	splashplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Splash Plate",
	},
	seaincense: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Sea Incense",
	},
	waveincense: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Wave Incense",
	},
	icicleplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ice') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Icicle Plate",
	},
	toxicplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Poison') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Toxic Plate",
	},
	skyplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Sky Plate",
	},
	earthplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Earth Plate",
	},
	spookyplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ghost') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Spooky Plate",
	},
	mindplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Mind Plate",
	},
	oddincense: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Odd Incense",
	},
	insectplate: {
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Bug') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Insect Plate",
	},
	fullincense: {
		onFractionalPriority: -0.1,
		name: "Full Incense",
	},
	laggingtail: {
		onFractionalPriority: -0.1,
		name: "Lagging Tail",
	},
	muscleband: {
		onBasePowerPriority: 16,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Physical') {
				return this.chainModify([0x1199, 0x1000]);
			}
		},
		name: "Muscle Band",
	},
	wiseglasses: {
		onBasePowerPriority: 16,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Special') {
				return this.chainModify([0x1199, 0x1000]);
			}
		},
		name: "Wise Glasses",
	},
	focusband: {
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "ability: Focus Band");
				return target.hp - 1;
			}
		},
		name: "Focus Band",
	},
	metronome: {
		onStart(pokemon) {
			pokemon.addVolatile('metronome');
		},
		condition: {
			onStart(pokemon) {
				this.effectState.lastMove = '';
				this.effectState.numConsecutive = 0;
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasItem('metronome')) {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove'] && this.effectState.lastMove !== move.id) {
					this.effectState.numConsecutive = 1;
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				const dmgMod = [0x1000, 0x1333, 0x1666, 0x1999, 0x1CCC, 0x2000];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				return this.chainModify([dmgMod[numConsecutive], 0x1000]);
			},
		},
		name: "Metronome",
	},
};
