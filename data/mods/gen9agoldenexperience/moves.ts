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
		boosts: {
			spe: -2,
		},
		status: 'tox',
		desc: "Lowers the target's Speed by 2 stages and badly poisons it.",
		shortDesc: "Lowers the target's Speed by 2 and badly poisons it.",
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
	landslide: {
		inherit: true,
		isNonstandard: null,
	},
	downdraft: {
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
	},
	dragonclaw: {
		inherit: true,
		basePower: 90,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
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
		secondary: undefined, // no inherit
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
	powergem: {
		inherit: true,
		basePower: 90,
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
		desc: "Damage is calculated using the user's Sp. Defense stat as its Sp. Attack, including stat stage changes. Other effects that modify the Sp. Attack stat are used as normal. Has a higher chance for a critical hit.",
		shortDesc: "Uses user's Sp. Def stat as Sp. Atk in damage calculation. High critical hit ratio.",
		overrideOffensiveStat: 'spd',
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
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	baddybad: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		accuracy: 100,
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
		secondary: undefined, // no inherit
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Goes first. Always results in a critical hit.",
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
	},
	triplearrows: {
		inherit: true,
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
		desc: "100% chance to raise the user's Speed by 1 stage. High crit ratio. Target: 50% -1 Defense.",
		shortDesc: "100% chance to +1 Speed; high crit ratio; 50%: -1 Def to target.",
	},
	direclaw: {
		inherit: true,
		basePower: 90,
		desc: "Has a 30% chance to cause the target to become poisoned.",
		shortDesc: "30% chance to poison target.",
		secondary: {
			chance: 30,
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
		weather: 'snowscape',
		secondary: undefined, // no inherit
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
	lifedew: {
		inherit: true,
		onHit(pokemon) {
			pokemon.cureStatus();
		},
		desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status cured.",
		shortDesc: "Heals the user and its allies by 1/4 their max HP, status cured.",
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
	axekick: {
		inherit: true,
		type: "Dark",
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
		basePower: 120,
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
	meteorassault: {
		inherit: true,
		flags: {cantusetwice: 1, slicing: 1, protect: 1, mirror: 1, failinstruct: 1},
		self: null,
		shortDesc: "Cannot be selected the turn after it's used.",
	},
	psyblade: {
		inherit: true,
		terrain: 'electricterrain',
		shortDesc: "Sets Electric Terrain upon use. During Electric Terrain: 1.5x power.",
		desc: "Sets Electric Terrain upon use. During Electric Terrain: 1.5x power.",
	},
	revivalblessing: {
		inherit: true,
		flags: { heal: 1, nosketch: 1, noassist: 1 },
	},
	fatbombing: {
		inherit: true,
		isNonstandard: null,
	},
	poisonivy: {
		inherit: true,
		isNonstandard: null,
	},
	clusterexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	lightofruin: {
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
	fullmoonstrike: {
		inherit: true,
		isNonstandard: null,
	},
	seasonpass: {
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
	gigabbouncysplash: {
		inherit: true,
		isNonstandard: null,
	},
	xrayvoltshock: {
		inherit: true,
		isNonstandard: null,
	},
	sonicspeedstrike: {
		inherit: true,
		isNonstandard: null,
	},
	furiousarrowraid: {
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
	maxspikybarrage: {
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
	sweetsugarrush: {
		inherit: true,
		isNonstandard: null,
	},
	colorfulhit: {
		inherit: true,
		isNonstandard: null,
	},
	snaptrap: {
		inherit: true,
		basePower: 65,
	},
	oceanslance: {
		inherit: true,
		isNonstandard: null,
	},
	needlearm: {
		inherit: true,
		basePower: 95,
	},
	relicsong: {
		inherit: true,
		basePower: 95,
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		desc: "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active. This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes.",
		shortDesc: "10% chance to sleep foe(s). Meloetta transforms. Physical if user's Atk > Sp. Atk.",
	},






	// Eternal Winter field
	auroraveil: {
		inherit: true,
		onTry() {
			return this.field.isWeather(['hail', 'snowscape', 'eternalwinter']);
		},
	},
	blizzard: {
		inherit: true,
		onModifyMove(move) {
			if (this.field.isWeather(['hail', 'snowscape', 'eternalwinter'])) move.accuracy = true;
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
			case 'snowscape':
			case 'eternalwinter':
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
			case 'snowscape':
			case 'eternalwinter':
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
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snowscape', 'eternalwinter'];
			if (weakWeathers.includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snowscape', 'eternalwinter'];
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
			case 'snowscape':
			case 'eternalwinter':
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
			case 'snowscape':
			case 'eternalwinter':
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
			case 'snowscape':
			case 'eternalwinter':
				move.basePower *= 2;
				break;
			}
			this.debug('BP: ' + move.basePower);
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
