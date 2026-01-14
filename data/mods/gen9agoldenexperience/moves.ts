export const Moves: { [k: string]: ModdedMoveData; } = {
	tentacatch: {
		inherit: true,
		isNonstandard: null,
	},
	schuss: {
		inherit: true,
		isNonstandard: null,
	},
	goodfishing: {
		inherit: true,
		isNonstandard: null,
	},
	magisterialwind: {
		inherit: true,
		isNonstandard: null,
	},
	stellarpunch: {
		inherit: true,
		isNonstandard: null,
	},
	toxicthread: {
		inherit: true,
		status: 'tox',
		desc: "Lowers the target's Speed by 1 stage and badly poisons it.",
		shortDesc: "Lowers the target's Speed by 1 and badly poisons it.",
	},
	toxicsting: {
		inherit: true,
		isNonstandard: null,
	},
	detectmagic: {
		inherit: true,
		isNonstandard: null,
	},
	dispelmagic: {
		inherit: true,
		isNonstandard: null,
	},
	photopower: {
		inherit: true,
		isNonstandard: null,
	},
	draconicwrath: {
		inherit: true,
		isNonstandard: null,
	},
	purifyingstream: {
		inherit: true,
		isNonstandard: null,
	},
	railwaysmash: {
		inherit: true,
		isNonstandard: null,
	},
	goldenexperience: {
		inherit: true,
		isNonstandard: null,
	},
	dimensionalbleeding: {
		inherit: true,
		isNonstandard: null,
	},
	frostbite: {
		inherit: true,
		isNonstandard: null,
	},
	aspiravoid: {
		inherit: true,
		isNonstandard: null,
	},
	underdog: {
		inherit: true,
		isNonstandard: null,
	},
	flamingsphere: {
		inherit: true,
		isNonstandard: null,
	},
	fireball: {
		inherit: true,
		isNonstandard: null,
	},
	backfire: {
		inherit: true,
		isNonstandard: null,
	},
	highwater: {
		inherit: true,
		isNonstandard: null,
	},
	seajaws: {
		inherit: true,
		isNonstandard: null,
	},
	parallelcircuit: {
		inherit: true,
		isNonstandard: null,
	},
	condensate: {
		inherit: true,
		isNonstandard: null,
	},
	chillblain: {
		inherit: true,
		isNonstandard: null,
	},
	indomitablespirit: {
		inherit: true,
		isNonstandard: null,
	},
	martialpunch: {
		inherit: true,
		isNonstandard: null,
	},
	musclecare: {
		inherit: true,
		isNonstandard: null,
	},
	dissolution: {
		inherit: true,
		isNonstandard: null,
	},
	landslide: {
		inherit: true,
		isNonstandard: null,
	},
	epicenter: {
		inherit: true,
		isNonstandard: null,
	},
	downdraft: {
		inherit: true,
		isNonstandard: null,
	},
	clearmind: {
		inherit: true,
		isNonstandard: null,
	},
	golemstrike: {
		inherit: true,
		isNonstandard: null,
	},
	punishingblow: {
		inherit: true,
		isNonstandard: null,
	},
	contrariety: {
		inherit: true,
		isNonstandard: null,
	},
	blackflash: {
		inherit: true,
		isNonstandard: null,
	},
	hypnotichorror: {
		inherit: true,
		isNonstandard: null,
	},
	sneakyassault: {
		inherit: true,
		isNonstandard: null,
	},
	mercuryshot: {
		inherit: true,
		isNonstandard: null,
	},
	sweetheart: {
		inherit: true,
		isNonstandard: null,
	},
	chakraterrain: {
		inherit: true,
		isNonstandard: null,
	},
	naturepower: {
		inherit: true,
		onTryHit(target, pokemon) {
			let move = 'triattack';
			if (this.field.isTerrain('electricterrain')) {
				move = 'thunderbolt';
			} else if (this.field.isTerrain('grassyterrain')) {
				move = 'energyball';
			} else if (this.field.isTerrain('mistyterrain')) {
				move = 'moonblast';
			} else if (this.field.isTerrain('psychicterrain')) {
				move = 'psychic';
			} else if (this.field.isTerrain('chakraterrain')) {
				move = 'aurasphere';
			}
			this.actions.useMove(move, pokemon, target);
			return null;
		},
	},
	terrainpulse: {
		inherit: true,
		onModifyType(move, pokemon) {
			if (!pokemon.isGrounded()) return;
			switch (this.field.terrain) {
				case 'electricterrain':
					move.type = 'Electric';
					break;
				case 'grassyterrain':
					move.type = 'Grass';
					break;
				case 'mistyterrain':
					move.type = 'Fairy';
					break;
				case 'psychicterrain':
					move.type = 'Psychic';
					break;
				case 'chakraterrain':
					move.type = 'Fighting';
					break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
			}
		},
	},
	secretpower: {
		inherit: true,
		onModifyMove(move, pokemon) {
			if (this.field.isTerrain('')) return;
			move.secondaries = [];
			if (this.field.isTerrain('electricterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'par',
				});
			} else if (this.field.isTerrain('grassyterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'slp',
				});
			} else if (this.field.isTerrain('mistyterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spa: -1,
					},
				});
			} else if (this.field.isTerrain('psychicterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spe: -1,
					},
				});
			} else if (this.field.isTerrain('chakraterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						def: -1,
					},
				});
			}
		},
	},
	camouflage: {
		inherit: true,
		onHit(target) {
			let newType = 'Normal';
			if (this.field.isTerrain('electricterrain')) {
				newType = 'Electric';
			} else if (this.field.isTerrain('grassyterrain')) {
				newType = 'Grass';
			} else if (this.field.isTerrain('mistyterrain')) {
				newType = 'Fairy';
			} else if (this.field.isTerrain('psychicterrain')) {
				newType = 'Psychic';
			} else if (this.field.isTerrain('chakraterrain')) {
				newType = 'Fighting';
			}

			if (target.hasItem('identitycard')) return false;
			if (target.getTypes().join() === newType || !target.setType(newType)) return false;
			this.add('-start', target, 'typechange', newType);
		},
	},
	dragonpulse: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		desc: "This move has 10% chance to lower the opponent's SpD.",
		shortDesc: "10% chance to lower opponent's SpD.",
	},
	dragonclaw: {
		inherit: true,
		basePower: 95,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		shortDesc: "Has a 10% to lower the target's Def.",
	},
	sonicboom: {
		inherit: true,
		damage: null,
		basePower: 40,
		accuracy: 100,
		category: "Special",
		desc: "Priority +1, Sound move.",
		shortDesc: "Usually goes first. Sound Move.",
		name: "Sonic Boom",
		priority: 1,
		isNonstandard: null,
		flags: { sound: 1, bypasssub: 1, protect: 1, mirror: 1 },
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	rockwrecker: {
		inherit: true,
		shortDesc: "Cannot be selected the turn after it's used.",
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1, cantusetwice: 1 },
		self: null,
	},
	triplekick: {
		inherit: true,
		accuracy: 90,
		basePower: 20,
	},
	playrough: {
		inherit: true,
		accuracy: 100,
	},
	payback: {
		inherit: true,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Payback NOT boosted');
				return move.basePower;
			}
			this.debug('Payback damage boost');
			return move.basePower * 2;
		},
		shortDesc: "Usually goes last. Power doubles if the user moves after the target.",
		priority: -1,
	},
	avalanche: {
		inherit: true,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Avalanche NOT boosted');
				return move.basePower;
			}
			this.debug('Avalanche damage boost');
			return move.basePower * 2;
		},
		shortDesc: "Usually goes last. Power doubles if the user moves after the target.",
		priority: -1,
	},
	armthrust: {
		inherit: true,
		basePower: 25,
	},
	crosschop: {
		inherit: true,
		accuracy: 85,
		basePower: 120,
		pp: 10,
		shortDesc: "No additional effect.",
		desc: "No additional effect.",
	},
	submission: {
		inherit: true,
		isViable: true,
		accuracy: 100,
		basePower: 120,
		pp: 15,
		recoil: [33, 100],
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
	},
	powdersnow: {
		inherit: true,
		isViable: true,
		basePower: 20,
		pp: 20,
		secondary: {
			chance: 100,
			status: 'frz',
		},
		desc: "Has a 100% chance to freeze the target.",
		shortDesc: "100% chance to freeze the target.",
	},
	nightdaze: {
		inherit: true,
		isViable: true,
		accuracy: 100,
		basePower: 95,
		desc: "Has a 20% chance to lower the target's Attack by 1 stage.",
		shortDesc: "20% chance to lower the target's Atk by 1.",
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			},
		},
	},
	lowsweep: {
		inherit: true,
		basePower: 60,
	},
	powergem: {
		inherit: true,
		basePower: 95,
		desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
		shortDesc: "10% chance to raise user's Defense by 1.",
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
	},
	aeroblast: {
		inherit: true,
		accuracy: 100,
		desc: "Has a higher chance for a critical hit, and a 20% chance to freeze the target.",
		shortDesc: "High critical hit ratio. 20% chance to freeze the target.",
		secondary: {
			chance: 20,
			status: 'frz',
		},
	},
	multiattack: {
		inherit: true,
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
	},
	bouncybubble: {
		inherit: true,
		basePower: 90,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		basePower: 120,
		isNonstandard: null,
		shortDesc: "10% to paralyze target.",
		pp: 10,
		secondary: {
			chance: 10,
			status: 'par',
		},
	},
	sizzlyslide: {
		inherit: true,
		basePower: 85,
		isNonstandard: null,
		shortDesc: "30% chance to burn target.",
		secondary: {
			chance: 30,
			status: 'brn',
		},
	},
	glitzyglow: {
		inherit: true,
		isNonstandard: null,
		desc: "Lowers the target's Special Attack and Special Defense by 1 stage.",
		shortDesc: "Lowers target's Sp. Atk, Sp. Def by 1.",
		self: null,
		boosts: {
			spa: -1,
			spd: -1,
		},
	},
	baddybad: {
		inherit: true,
		isNonstandard: null,
		category: "Physical",
		desc: "Lowers the target's Attack and Defense by 1 stage.",
		shortDesc: "Lowers target's Atk, Def by 1.",
		self: null,
		boosts: {
			atk: -1,
			def: -1,
		},
	},
	sappyseed: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: null,
	},
	sparklyswirl: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	veeveevolley: {
		inherit: true,
		isNonstandard: null,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: null,
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
	},
	zippyzap: {
		inherit: true,
		isNonstandard: null,
		basePower: 50,
		willCrit: true,
		secondary: null,
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Goes first. Always results in a critical hit.",
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
	},
	bittermalice: {
		inherit: true,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'frz' || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		desc: "Has a 30% chance to freeze the target. Power doubles if the target has a non-volatile status condition.",
		shortDesc: "30% freeze. 2x power if target is already statused.",
		secondary: {
			chance: 30,
			status: 'frz',
		},
	},
	triplearrows: {
		inherit: true,
		volatileStatus: 'focusenergy',
		secondaries: [
			{
				chance: 50,
				boosts: {
					def: -1,
				},
			}, {
				chance: 100,
				self: {
					boosts: {
						spe: 1,
					},
				},
			},
		],
		desc: "100% chance to raise the user's Speed by 1 stage. Raise crit ratio by 2 stages. Target: 50% -1 Defense.",
		shortDesc: "100% chance to +1 Speed; +2 crit ratio; -1 Def to target.",
	},
	direclaw: {
		inherit: true,
		basePower: 90,
		shortDesc: "50% chance to poison the target.",
		secondary: {
			chance: 50,
			status: 'psn',
		},
	},
	fissure: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		ohko: false,
		desc: "10% chance to lower the target's Defense by 1.",
		shortDesc: "10% chance to lower the target's Defense by 1.",
		pp: 10,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
	},
	sheercold: {
		inherit: true,
		accuracy: 100,
		basePower: 150,
		ohko: false,
		desc: "Sets Snow. User faints after use.",
		shortDesc: "Sets Snow. User faints after use.",
		weather: 'snow',
		secondary: null,
		selfdestruct: "always",
	},
	mistyexplosion: {
		inherit: true,
		basePower: 150,
		desc: "Sets Misty Terrain. User faints after use.",
		shortDesc: "Sets Misty Terrain. User faints after use.",
		terrain: 'mistyterrain',
	},
	guillotine: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		ohko: false,
		desc: "Raises user's Attack by 1 if this KOes the target.",
		shortDesc: "Raises user's Attack by 1 if this KOes the target.",
		pp: 10,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({ atk: 1 }, pokemon, pokemon, move);
		},
	},
	horndrill: {
		inherit: true,
		accuracy: 85,
		basePower: 120,
		ohko: false,
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		pp: 10,
		type: "Steel",
	},
	hiddenpower: {
		inherit: true,
		basePower: 80,
		shortDesc: "Varies in type based on the user's IVs. Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerbug: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerdark: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerdragon: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerelectric: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerfighting: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerfire: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerflying: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerghost: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowergrass: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerground: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerice: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerpoison: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerpsychic: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerrock: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowersteel: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	hiddenpowerwater: {
		inherit: true,
		basePower: 80,
		shortDesc: "Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	snipeshot: {
		inherit: true,
		basePower: 60,
		willCrit: true,
		shortDesc: "Always results in a critical hit. Cannot be redirected.",
		desc: "Always results in a critical hit. Cannot be redirected.",
	},
	lightningassault: {
		inherit: true,
		isNonstandard: null,
	},
	conversionz: {
		inherit: true,
		isNonstandard: null,
	},
	zawalludo: {
		inherit: true,
		isNonstandard: null,
	},
	awakening: {
		inherit: true,
		isNonstandard: null,
	},
	fulldevotion: {
		inherit: true,
		isNonstandard: null,
	},
	braveblade: {
		inherit: true,
		isNonstandard: null,
	},
	teramorphosis: {
		inherit: true,
		isNonstandard: null,
	},
	happydance: {
		inherit: true,
		isNonstandard: null,
	},
	windscall: {
		inherit: true,
		isNonstandard: null,
	},
	houndshowl: {
		inherit: true,
		isNonstandard: null,
	},
	dantesinferno: {
		inherit: true,
		isNonstandard: null,
	},
	junglehealing: {
		inherit: true,
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.33));
			return pokemon.cureStatus() || success;
		},
		shortDesc: "User and allies: healed 1/3 max HP, status cured.",
	},
	lifedew: {
		inherit: true,
		onHit(pokemon) {
			pokemon.cureStatus();
		},
		heal: [1, 3],
		shortDesc: "User and allies: healed 1/3 max HP, status cured.",
	},
	lunarblessing: {
		inherit: true,
		pp: 10,
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.33));
			return pokemon.cureStatus() || success;
		},
		shortDesc: "User and allies: healed 1/3 max HP, status cured.",
	},
	monkeybusiness: {
		inherit: true,
		isNonstandard: null,
	},
	swarming: {
		inherit: true,
		isNonstandard: null,
	},
	hardwareheat: {
		inherit: true,
		isNonstandard: null,
	},
	shattering: {
		inherit: true,
		isNonstandard: null,
	},
	grassyglide: {
		inherit: true,
		basePower: 70,
	},
	milkdrink: {
		inherit: true,
		pp: 10,
	},
	recover: {
		inherit: true,
		pp: 10,
	},
	rest: {
		inherit: true,
		pp: 10,
	},
	roost: {
		inherit: true,
		pp: 10,
	},
	shoreup: {
		inherit: true,
		pp: 10,
	},
	slackoff: {
		inherit: true,
		pp: 10,
	},
	softboiled: {
		inherit: true,
		pp: 10,
	},
	bleakwindstorm: {
		inherit: true,
		shortDesc: "20% chance to freeze foe(s).",
		secondary: {
			chance: 20,
			status: 'frz',
		},
	},
	axekick: {
		inherit: true,
		type: "Dark",
		shortDesc: "30% confusion. User loses 50% max HP if miss.",
	},
	ragingbull: {
		inherit: true,
		basePower: 120,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		desc: "Has a 10% chance to lower the target's Def by 1. If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated. If the user's current form is a Paldean Tauros, this move's type changes to match. Fighting type for Combat Breed, Fire type for Blaze Breed, and Water type for Aqua Breed.",
		shortDesc: "10% chance to lower target's Def by 1. Destroys screens. Type depends on user's form.",
	},
	tidyup: {
		inherit: true,
		shortDesc: "User +1 Atk, Spe, Acc. Clears all substitutes/hazards on user's side.",
		onHit(pokemon) {
			let success = false;
			for (const active of this.getAllActive()) {
				if (active.removeVolatile('substitute')) success = true;
			}
			const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			const sides = [pokemon.side, ...pokemon.side.foeSidesWithConditions()];
			for (const side of sides) {
				for (const sideCondition of removeAll) {
					if (side.removeSideCondition(sideCondition)) {
						this.add('-sideend', side, this.dex.conditions.get(sideCondition).name);
						success = true;
					}
				}
			}
			if (success) this.add('-activate', pokemon, 'move: Tidy Up');
			return !!this.boost({ atk: 1, spe: 1, accuracy: 1 }, pokemon, pokemon, null, false, true) || success;
		},
	},
	hyperdrill: {
		inherit: true,
		shortDesc: "Bypasses protection without breaking it. 50% chance to lower target's Def by 2 stages.",
		secondary: {
			chance: 50,
			boosts: {
				def: -2,
			},
		},
	},
	blazingtorque: {
		inherit: true,
		isNonstandard: null,
	},
	combattorque: {
		inherit: true,
		isNonstandard: null,
	},
	magicaltorque: {
		inherit: true,
		isNonstandard: null,
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		shortDesc: "20% chance to lower target's Def by 1.",
		desc: "20% chance to lower target's Def by 1.",
	},
	noxioustorque: {
		inherit: true,
		isNonstandard: null,
	},
	wickedtorque: {
		inherit: true,
		isNonstandard: null,
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			},
		},
		shortDesc: "20% chance to lower target's Atk by 1.",
		desc: "20% chance to lower target's Atk by 1.",
	},
	roguewave: {
		inherit: true,
		isNonstandard: null,
	},
	natureswrath: {
		inherit: true,
		isNonstandard: null,
	},
	magicmissile: {
		inherit: true,
		isNonstandard: null,
	},
	chatter: {
		inherit: true,
		basePower: 80,
		isNonstandard: null,
		pp: 10,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		desc: "Has a 100% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Sp. Atk by 1.",
	},
	waterpulse: {
		inherit: true,
		basePower: 80,
	},
	shadowpunch: {
		inherit: true,
		secondary: {
			chance: 100,
			volatileStatus: 'healblock',
		},
		desc: "For 2 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected. Does not check accuracy.",
		shortDesc: "For 2 turns, the target is prevented from healing. Does not check accuracy.",
	},
	healblock: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (effect?.name === "Psychic Noise" || effect?.name === "Shadow Punch") {
					return 2;
				}
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Heal Block');
					return 7;
				}
				return 5;
			},
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Heal Block');
				source.moveThisTurnResult = true;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 20,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
				return false;
			},
			onRestart(target, source, effect) {
				if (effect?.name === 'Psychic Noise') return;

				this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
				if (!source.moveThisTurnResult) {
					source.moveThisTurnResult = false;
				}
			},
		},
	},
	meteorassault: {
		inherit: true,
		flags: {cantusetwice: 1, slicing: 1, protect: 1, mirror: 1, failinstruct: 1},
		self: null,
		shortDesc: "Cannot be selected the turn after it's used.",
	},
	psyblade: {
		inherit: true,
		onBasePower(basePower, source) {
			return basePower;
		},
		terrain: 'electricterrain',
		shortDesc: "Sets Electric Terrain upon use.",
		desc: "Sets Electric Terrain upon use.",
	},
	revivalblessing: {
		inherit: true,
		flags: {heal: 1, noassist: 1},
	},
	fatbombing: {
		inherit: true,
		isNonstandard: null,
	},
	poisonivy: {
		num: -62,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Poison Ivy",
		shortDesc: "Hits twice. This move does not check accuracy.",
		desc: "Hits twice. This move does not check accuracy.",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		multihit: 2,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Power Whip", target);
			this.add('-anim', source, "Sludge Wave", target);
			this.add('-anim', source, "Power Whip", target);
			this.add('-anim', source, "Sludge Wave", target);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: { basePower: 140 },
		maxMove: { basePower: 130 },
		contestType: "Cool",
	},
	twinbeam: {
		inherit: true,
		desc: "Lowers the target's Special Attack and Special Defense by 1 stage.",
		shortDesc: "Lowers target's Sp. Atk, Sp. Def by 1.",
		self: null,
		boosts: {
			spa: -1,
			spd: -1,
		},
	},
	clusterexplosion: {
		num: -63,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Cluster Explosion",
		shortDesc: "Hits adjacent Pokemon. Sets Spikes. User faints.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, noparentalbond: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Splintered Stormshards", pokemon);
		},
		onTryMove(source, target, move) {
			if (!move.hasSheerForce) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('spikes');
				}
			}
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Rock",
		contestType: "Beautiful",
	},
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	froststorm: {
		num: -64,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Frost Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, wind: 1},
		onModifyMove(move, pokemon, target) {
			if (target && ['hail', 'snow', 'everlastingwinter'].includes(target.effectiveWeather())) {
				move.secondaries.push({
					chance: 100,
					status: 'frz',
				});
			}
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hurricane", target);
			this.add('-anim', source, "Blizzard", target);
		},
		secondary: {
			chance: 30,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		shortDesc: "30% chance of Freeze, 100% in Snow.",
	},
	thunderstorm: {
		num: -65,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Thunder Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, wind: 1},
		onModifyMove(move, pokemon, target) {
			if (target && ['raindance', 'primordialsea'].includes(target.effectiveWeather())) {
				move.secondaries.push({
					chance: 100,
					status: 'par',
				});
			}
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hurricane", target);
			this.add('-anim', source, "Thunder", target);
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Electric",
		shortDesc: "30% chance of Para, 100% in Rain.",
	},
	heatstorm: {
		num: -66,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Heat Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, wind: 1},
		onModifyMove(move, pokemon, target) {
			if (target && ['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				move.secondaries.push({
					chance: 100,
					status: 'brn',
				});
			}
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hurricane", target);
			this.add('-anim', source, "Heat Wave", target);
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
		shortDesc: "30% chance of Burn, 100% in Sun.",
	},
	genesiswave: {
		num: -67,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Genesis Wave",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		boosts: {
			spe: 1,
		},
		onHit(target) {
			const type = this.dex.moves.get(target.moveSlots[0].id).type;
			if (target.hasType(type) || !target.addType(type)) return false;
			this.add('-start', target, 'typeadd', type);
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Genesis Supernova", target);
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		shortDesc: "Raises user's Speed by 1, and adds the type of user's first move to its type.",
	},
	athosrapier: {
		num: -68,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Athos Rapier",
		pp: 10,
		priority: 4,
		flags: {noassist: 1, failcopycat: 1, failinstruct: 1},
		stallingMove: true,
		volatileStatus: 'athosrapier',
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Smart Strike", source);
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: 1}, target, target, this.dex.getActiveMove("Athos Rapier"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: 1}, target, target, this.dex.getActiveMove("Athos Rapier"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user raise its Defense by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from damaging attacks. Contact: +1 Def.",
	},
	aramisdagger: {
		num: -69,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Aramis Dagger",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Leaf Blade", target);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
	},
	porthosbroadsword: {
		num: -70,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Porthos Broadsword",
		pp: 20,
		priority: -3,
		flags: {contact: 1, protect: 1, slicing: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1},
		priorityChargeCallback(pokemon) {
			pokemon.addVolatile('focuspunch');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['focuspunch']?.lostFocus) {
				this.add('cant', pokemon, 'Porthos Broadsword', 'Porthos Broadsword');
				return true;
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Porthos Broadsword');
			},
			onHit(pokemon, source, move) {
				if (move.category !== 'Status') {
					this.effectState.lostFocus = true;
				}
			},
			onTryAddVolatile(status, pokemon) {
				if (status.id === 'flinch') return null;
			},
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Stone Edge", target);
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move.",
		shortDesc: "Fails if the user takes damage before it hits.",
	},
	razorwind: {
		inherit: true,
		basePower: 120,
		type: "Flying",
	},
	befuddlepowder: {
		num: -71,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Befuddle Powder",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, powder: 1 },
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(2);
			}
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "G-Max Befuddle", target);
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
		shortDesc: "Double damage on targets that resist.",
	},
	piercingdart: {
		desc: "Hits Steel types for super effective damages.",
		shortDesc: "Super effective on Steel targets.",
		num: -72,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Piercing Dart",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, slicing: 1 },
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Pin Missile", target);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
	},
	hindenburg: {
		num: -73,
		accuracy: 100,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.item || pokemon.status === 'brn') {
				this.debug("BP doubled");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sky Drop", target);
			this.add('-anim', source, "Explosion", target);
		},
		category: "Special",
		name: "Hindenburg",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "any",
		type: "Ghost",
		contestType: "Cool",
		shortDesc: "Power doubles if the user has no held item or is burned.",
	},
	ventilation: {
		num: -74,
		accuracy: 90,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.volatiles['stockpile']?.layers === 3) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		name: "Ventilation",
		pp: 10,
		priority: 0,
		flags: {protect: 1, metronome: 1},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['stockpile']) pokemon.removeVolatile('stockpile');
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hurricane", target);
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Tough",
		shortDesc: "Lowers the target's Speed by 1. If user has 3 stacks of Stockpile, doubles in power.",
	},
	emushdance: {
		num: -75,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Emush Dance",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, metronome: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (this.field.isTerrain('grassyterrain') || this.field.isTerrain('chakraterrain')) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Zen Headbutt", target);
		},
		secondary: null,
		hasSheerForce: true,
		target: "normal",
		type: "Psychic",
		shortDesc: "Charges on turn 1, then hits on turn 2. No charge in Chakra Terrain or Grassy Terrain.",
	},
	rainofarrows: {
		num: -76,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Rain Of Arrows",
		pp: 15,
		priority: 0,
		flags: {mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Icicle Spear", target);
			this.add('-anim', source, "Thousand Arrows", target);
		},
		onHit(pokemon, source) {
			source.addVolatile('rainofarrows');
		},
		condition: {
			duration: 1,
			onResidual(pokemon) {
				this.actions.useMove('rainofarrows', target, source);
			},
		},
		shortDesc: "Hits once in this turn, then hits again in the next turn. Ignores protection.",
	},
	wyvernflight: {
		num: -77,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Wyvern Flight",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		selfSwitch: true,
		secondary: null,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Boomburst", target);
			this.add('-anim', source, "U-turn", target);
		},
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target.",
	},
	bigbang: {
		num: -78,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Big Bang",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		secondary: null,
		ignoreAbility: true,
		ignoreImmunity: true,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Boomburst", target);
		},
		onEffectiveness(typeMod, target, type) {
			if (target.getMoveHitData(move).typeMod < 0) return 0;
		},
		target: "allAdjacent",
		type: "Normal",
		contestType: "Tough",
		desc: "This move and its effects ignore the Abilities of other Pokemon, as well as resistances and immunities.",
		shortDesc: "Ignores the Abilities of other Pokemon, resistances and immunities.",
	},
	psyshieldbash: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
	},
	ningencry: {
		num: -79,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ningen Cry",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, dance: 1 },
		self: {
			boosts: {
				atk: 1,
			},
		},
		weather: 'snowscape',
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Snowscape", target);
		},
		secondary: null,
		target: "all",
		type: "Ice",
		shortDesc: "Raises the user's Atk by 1. Summons Snow.",
		zMove: { effect: 'clearnegativeboost' },
		contestType: "Beautiful",
	},
	mantisslash: {
		num: -80,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Mantis Slash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		self: {
			boosts: {
				spe: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		desc: "Lowers the user's Speed by 2 stages.",
		shortDesc: "Lowers the user's Speed by 2.",
	},
	tropkick: {
		inherit: true,
		basePower: 90,
	},
	intrepidcrash: {
		num: -81,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Intrepid Crash",
		shortDesc: "Has 33% recoil. Usually goes first.",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1 },
		recoil: [1, 3],
		secondary: null,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Brave Bird", target);
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	doublehit: {
		inherit: true,
		basePower: 50,
	},
	timeparadox: {
		num: -82,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		name: "Time Paradox",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Psywave", target);
		},
		target: "normal",
		type: "Psychic",
		contestType: "Tough",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
	},
	corrosiveacid: {
		num: -83,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Corrosive Acid",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		ignoreImmunity: true,
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Acid", target);
		},
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
		desc: "Has a 10% chance to poison the target. This move's type effectiveness against Steel is changed to be super effective no matter what this move's type is.",
		shortDesc: "10% chance to poison. Super effective on Steel.",
	},
	jumpscare: {
		num: -84,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Jumpscare",
		pp: 10,
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Jumpscare only works on your first turn out.");
				return false;
			}
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Scary Face", target);
			this.add('-anim', source, "Crunch", target);
			this.add('-anim', source, "Flash", target);
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
		desc: "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only. 100% flinch chance.",
	},
	futuredoom: {
		num: -85,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Future Doom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		volatileStatus: 'partiallytrapped',
		secondary: {
			chance: 100,
			volatileStatus: 'taunt',
		},
		target: "normal",
		type: "Psychic",
		shortDesc: "Traps the target for 5 turns, and applies Taunt.",
	},
	brainblast: {
		num: -86,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Brain Blast",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Brain Blast', '[of] ' + source);
				}
			}
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Kinesis", target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		desc: "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "1.5x damage if foe holds an item. Removes item.",
	},
	rainbowdash: {
		num: -87,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Rainbow Dash",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dazzling Gleam", target);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fairy",
		contestType: "Tough",
		shortDesc: "No additional effect.",
	},
	waterslash: {
		num: -88,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		overrideDefensiveStat: 'def',
		name: "Water Slash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aqua Cutter", target);
		},
		contestType: "Beautiful",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
	},
	marinebolt: {
		num: -89,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Marine Bolt",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, bullet: 1},
		overrideOffensiveStat: 'spe',
		secondary: null,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flame Burst", target);
		},
		target: "normal",
		type: "Fire",
		shortDesc: "Uses user's Speed stat instead of Attack in damage calculation.",
	},
	scaredyshell: {
		num: -90,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Scaredy Shell",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		selfSwitch: true,
		secondary: null,
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Iron Defense", source);
			this.add('-anim', source, "U-turn", target);
		},
		target: "normal",
		type: "Steel",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target.",
		switchOut: "#uturn",
	},
	calmingbell: {
		num: -91,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Calming Bell",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, sound: 1, bypasssub: 1 },
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Heal Bell", target);
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		shortDesc: "100% chance to lower the target's SpA by 1.",
	},
	paraboliccharge: {
		inherit: true,
		basePower: 75,
	},
	noretreat: {
		inherit: true,
		boosts: {
			atk: 2,
			def: 2,
			spa: 2,
			spd: 2,
			spe: 2,
		},
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 2 stages, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. Fails if the user has already been prevented from switching by this effect.",
		shortDesc: "Raises all stats by 2 (not acc/eva). Traps user.",
	},
	fullmoonstrike: {
		num: -92,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Full Moon Strike",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Head Smash", target);
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		desc: "Lowers the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
	},
	seasonpass: {
		num: -93,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Season Pass",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onModifyType(move, pokemon) {
			const types = pokemon.getTypes();
			let type = types[0];
			if (type === 'Bird') type = '???';
			if (type === '???' && types[1]) type = types[1];
			move.type = type;
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Weather Ball", target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
	},
	versatiledance: {
		num: -94,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Versatile Dance",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, dance: 1, metronome: 1 },
		boosts: {
			atk: 1,
			spa: 1,
			spe: 1,
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Work Up", source);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: { boost: { atk: 1 } },
		contestType: "Tough",
		desc: "Raises the user's Attack, Special Attack and Speed by 1 stage.",
		shortDesc: "Raises the user's Attack, Sp. Atk and Speed by 1.",
	},
	chistrike: {
		num: -95,
		accuracy: 100,
		basePower: 90,
		onModifyMovePriority: -5,
		onModifyMove(move, attacker, defender) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true && this.field.isTerrain('chakraterrain') && defender.isGrounded()) {
				this.hint(`${move.name}can hit grounded Ghost target.`);
				move.ignoreImmunity['Fighting'] = true;
			}
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aura Sphere", target);
		},
		category: "Physical",
		name: "Chi Strike",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: { basePower: 140 },
		desc: "If the current terrain is Chakra Terrain and the target is grounded, this move hits Ghost type targets.",
		shortDesc: "Hits Ghost type grounded targets in Chakra Terrain.",
	},
	psystrike: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
			if (target.getStat('def', false, true) > target.getStat('spd', false, true)) move.overrideDefensiveStat = 'spd';
		},
		shortDesc: "Physical if user's Atk > Sp. Atk. Deals damage based on Def or SpD, whichever one is the lowest.",
		desc: "Physical if user's Atk > Sp. Atk. Deals damage based on Def or SpD, whichever one is the lowest.",
	},
	cursedspeech: {
		num: -96,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Cursed Speech",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, sound: 1, bypasssub: 1 },
		secondary: {
			chance: 100,
			volatileStatus: 'torment',
		},
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Spite", target);
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		shortDesc: "Applies Torment to the target.",
		desc: "Applies Torment to the target.",
	},
	threateningbite: {
		num: -97,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Threatening Bite",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, cantusetwice: 1, bite: 1 },
		secondary: null,
		target: "normal",
		type: "Dark",
		onPrepareHit(target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Jaw Lock", target);
		},
		shortDesc: "Cannot be selected the turn after it's used.",
	},






	// Everlasting Winter field
	auroraveil: {
		inherit: true,
		onTry() {
			return this.field.isWeather(['hail', 'snow', 'everlastingwinter']);
		},
	},
	blizzard: {
		inherit: true,
		onModifyMove(move) {
			if (this.field.isWeather(['hail', 'snow', 'everlastingwinter'])) move.accuracy = true;
		},
	},
	dig: {
		inherit: true,
		condition: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail' || type === 'everlastingwinter') return false;
			},
			onInvulnerability(target, source, move) {
				if (['earthquake', 'magnitude'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'earthquake' || move.id === 'magnitude') {
					return this.chainModify(2);
				}
			},
		},
	},
	dive: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (attacker.hasAbility('gulpmissile') && attacker.species.name === 'Cramorant' && !attacker.transformed) {
				attacker.formeChange('cramorantgulping', move);
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail' || type === 'everlastingwinter') return false;
			},
			onInvulnerability(target, source, move) {
				if (['surf', 'whirlpool'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'surf' || move.id === 'whirlpool') {
					return this.chainModify(2);
				}
			},
		},
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
			case 'everlastingwinter':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
			case 'everlastingwinter':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	solarbeam: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow', 'everlastingwinter'];
			if (weakWeathers.includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow', 'everlastingwinter'];
			if (weakWeathers.includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
			case 'everlastingwinter':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	weatherball: {
		inherit: true,
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
			case 'snow':
			case 'everlastingwinter':
				move.type = 'Ice';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'hail':
			case 'snow':
			case 'everlastingwinter':
				move.basePower *= 2;
				break;
			}
			this.debug('BP: ' + move.basePower);
		},
	},
	// Karma field
	wish: {
		inherit: true,
		flags: {snatch: 1, heal: 1, metronome: 1, futuremove: 1},
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				if (source.hasAbility('karma')) {
					this.effectState.hp = 3* source.maxhp / 4;
				} 
				else {
					this.effectState.hp = source.maxhp / 2;
				}
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
		},
	},
	// Endless Dream field
	wakeupslap: {
		inherit: true,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'slp' || target.hasAbility('comatose') || this.field.getPseudoWeather('endlessdream')) return move.basePower * 2;
			return move.basePower;
		},
	},
	dreameater: {
		inherit: true,
		onTryImmunity(target, source) {
			return target.status === 'slp' || target.hasAbility('comatose') || this.field.getPseudoWeather('endlessdream');
		},
	},
	nightmare: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose') && !this.field.getPseudoWeather('endlessdream')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 9,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
	},
	sleeptalk: {
		inherit: true,
		onTry(source) {
			let usable = false;
			for (const opponent of source.adjacentFoes()) {
				if (this.field.getPseudoWeather('endlessdream')) {
					usable = true;
					break;
				}
			}
			return source.status === 'slp' || source.hasAbility('comatose') || usable;
		},
	},
	// Psychic Prowess
	amnesia: {
		inherit: true,
		onModifyMove(move, pokemon) {
			if (pokemon.hasAbility('psychicprowess')) move.boosts = {spa: 2, spd: 2};
		},
	},
};
