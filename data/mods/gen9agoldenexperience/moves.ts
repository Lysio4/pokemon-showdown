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
		pp: 10,
		desc: "Heals the user's status, and a 20% chance to freeze the target.",
		shortDesc: "Heals the user's status. 20% chance to freeze the target.",
		secondary: {
			chance: 20,
			status: 'frz',
		},
		critRatio: 1,
		onHit(pokemon) {
			pokemon.cureStatus();
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
		inherit: true,
		isNonstandard: null,
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
		inherit: true,
		isNonstandard: null,
	},
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	froststorm: {
		inherit: true,
		isNonstandard: null,
	},
	thunderstorm: {
		inherit: true,
		isNonstandard: null,
	},
	heatstorm: {
		inherit: true,
		isNonstandard: null,
	},
	genesiswave: {
		inherit: true,
		isNonstandard: null,
	},
	athosrapier: {
		inherit: true,
		isNonstandard: null,
	},
	aramisdagger: {
		inherit: true,
		isNonstandard: null,
	},
	porthosbroadsword: {
		inherit: true,
		isNonstandard: null,
	},
	razorwind: {
		inherit: true,
		basePower: 120,
		type: "Flying",
	},
	befuddlepowder: {
		inherit: true,
		isNonstandard: null,
	},
	piercingdart: {
		inherit: true,
		isNonstandard: null,
	},
	hindenburg: {
		inherit: true,
		isNonstandard: null,
	},
	ventilation: {
		inherit: true,
		isNonstandard: null,
	},
	emushdance: {
		inherit: true,
		isNonstandard: null,
	},
	rainofarrows: {
		inherit: true,
		isNonstandard: null,
	},
	wyvernflight: {
		inherit: true,
		isNonstandard: null,
	},
	bigbang: {
		inherit: true,
		isNonstandard: null,
	},
	psyshieldbash: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
	},
	ningencry: {
		inherit: true,
		isNonstandard: null,
	},
	mantisslash: {
		inherit: true,
		isNonstandard: null,
	},
	tropkick: {
		inherit: true,
		basePower: 90,
	},
	intrepidcrash: {
		inherit: true,
		isNonstandard: null,
	},
	doublehit: {
		inherit: true,
		basePower: 50,
	},
	timeparadox: {
		inherit: true,
		isNonstandard: null,
	},
	corrosiveacid: {
		inherit: true,
		isNonstandard: null,
	},
	jumpscare: {
		inherit: true,
		isNonstandard: null,
	},
	futuredoom: {
		inherit: true,
		isNonstandard: null,
	},
	brainblast: {
		inherit: true,
		isNonstandard: null,
	},
	rainbowdash: {
		inherit: true,
		isNonstandard: null,
	},
	waterslash: {
		inherit: true,
		isNonstandard: null,
	},
	marinebolt: {
		inherit: true,
		isNonstandard: null,
	},
	scaredyshell: {
		inherit: true,
		isNonstandard: null,
	},
	calmingbell: {
		inherit: true,
		isNonstandard: null,
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
		inherit: true,
		isNonstandard: null,
	},
	seasonpass: {
		inherit: true,
		isNonstandard: null,
	},
	versatiledance: {
		inherit: true,
		isNonstandard: null,
	},
	chistrike: {
		inherit: true,
		isNonstandard: null,
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
		inherit: true,
		isNonstandard: null,
	},
	threateningbite: {
		inherit: true,
		isNonstandard: null,
	},
	volttackle: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (pokemon.baseSpecies.name === "Raichu-Mega-X") {
				move.self = { boosts: { atk: 1 } };
			}
		},
	},
	stonesurge: {
		inherit: true,
		isNonstandard: null,
	},
	windrage: {
		inherit: true,
		isNonstandard: null,
	},
	howl: {
		inherit: true,
		onModifyMove(move, pokemon) {
			if (pokemon?.hasItem('rustedsword')) {
				move.boosts = { atk: 1, spa: 1, accuracy: 1 };
				move.heal = [1, 4];
			}
			else if (pokemon?.hasItem('rustedshield')) {
				move.boosts = { atk: 1, def: 1, spd: 1 };
				move.heal = [1, 4];
			}
		},
	},
	xrayvoltshock: {
		inherit: true,
		isNonstandard: null,
	},
	sunmothwrath: {
		inherit: true,
		isNonstandard: null,
	},
	taleofthemoon: {
		inherit: true,
		isNonstandard: null,
	},
	ultrapapercut: {
		inherit: true,
		isNonstandard: null,
	},
	maxscrewmeltdown: {
		inherit: true,
		isNonstandard: null,
	},
	armorbigblast: {
		inherit: true,
		isNonstandard: null,
	},
	thousandbladework: {
		inherit: true,
		isNonstandard: null,
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
