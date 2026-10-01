export const Moves: { [k: string]: ModdedMoveData; } = {
	// nihillight
	nihillight: {
		inherit: true,
		isNonstandard: null,
	},
	// new moves
	tentacatch: {
		inherit: true,
		isNonstandard: null,
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move. If the target is Poison-type weak, its Attack stat is lowered by 1.",
		shortDesc: "Traps and damages the target for 4-5 turns. Lowers the target's Atk by 1 stage if Poison-weak.",

		start: "  [POKEMON] has been caught by [SOURCE]'s tentacles!",
	},
	schuss: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
	},
	goodfishing: {
		inherit: true,
		isNonstandard: null,
		desc: "This move's power is multiplied by 1.5 if the target is holding an item, and the target loses its held item if the user has not fainted. A target with the Sticky Hold Ability does not lose its held item if it has not fainted. This move does not increase in power or remove the target's item if it is a Blue Orb, Red Orb, Adamant Crystal, Lustrous Globe, Griseous Core, Plate, Drive, Memory, Rusted Sword, Rusted Shield, Booster Energy, or Mask held by a Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, Paradox Pokemon, or Ogerpon, respectively, or if the user is one of those species and the target is holding the respective item. In this case, Paradox Pokemon include every species with the Protosynthesis and Quark Drive Abilities, except Gouging Fire, Raging Bolt, Iron Boulder, and Iron Crown. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "1.5x damage if foe holds an item. Removes item.",
	},
	magisterialwind: {
		inherit: true,
		isNonstandard: null,
		desc: "This move and its effects ignore the Abilities of other Pokemon. This move cannot be redirected to a different target by any effect.",
		shortDesc: "Ignores the Abilities of other Pokemon. Cannot be redirected.",
	},
	stellarpunch: {
		inherit: true,
		isNonstandard: null,
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon.",
	},
	toxicsting: {
		inherit: true,
		isNonstandard: null,
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Badly poisons target.",
		shortDesc: "User recovers 75% of the damage dealt and badly poisons target.",
	},
	dispelmagic: {
		inherit: true,
		isNonstandard: null,
		desc: "This move's type effectiveness against Fairy is changed to be super effective no matter what this move's type is.",
		shortDesc: "Super effective on Fairy.",
	},
	photopower: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Raises user's Sp. Atk by 2 and Speed by 1 in Sun.",
	},
	draconicwrath: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Usually goes last. Power doubles if the user moves after the target.",
	},
	purifyingstream: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Resets all of the target's stat stages to 0.",
	},
	railwaysmash: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
	},
	goldenexperience: {
		inherit: true,
		isNonstandard: null,
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
	},
	dimensionalbleeding: {
		inherit: true,
		isNonstandard: null,
		desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes.",
		shortDesc: "Physical if user's Atk > Sp. Atk.",
	},
	frostbite: {
		inherit: true,
		isNonstandard: null,
		desc: "The Pokémon at the user's position steals some of the target's maximum HP at the end of each turn. Damage begins at 1/16, rounded down, and increases each turn like Toxic. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out, the effect ends.",
		shortDesc: "Target's HP is restored to user every turn. Damage increases like Toxic.",
	},
	aspiravoid: {
		inherit: true,
		isNonstandard: null,
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
	},
	flamingsphere: {
		inherit: true,
		isNonstandard: null,
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
	},
	fireball: {
		inherit: true,
		isNonstandard: null,
		desc: "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, Psychic Terrain, and Chakra Terrain.",
		shortDesc: "Ends the effects of terrain.",
	},
	highwater: {
		inherit: true,
		isNonstandard: null,
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
	},
	seajaws: {
		inherit: true,
		isNonstandard: null,
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, unless the target is immune.",
	},
	parallelcircuit: {
		inherit: true,
		isNonstandard: null,
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Hits 2-5 times in one turn.",
	},
	condensate: {
		inherit: true,
		isNonstandard: null,
		desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is doubled.",
		shortDesc: "2x power if user is grounded in Misty Terrain.",
	},
	chillblain: {
		inherit: true,
		isNonstandard: null,
		desc: "Freezes the target.",
		shortDesc: "Freezes the target.",
	},
	indomitablespirit: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Power doubles if last move failed or was resisted.",
	},
	martialpunch: {
		inherit: true,
		isNonstandard: null,
		desc: "Deals damage to the target based on its Special Defense instead of Defense.",
		shortDesc: "Damages target based on Sp. Def, not Defense.",
	},
	musclecare: {
		inherit: true,
		isNonstandard: null,
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
	},
	landslide: {
		inherit: true,
		isNonstandard: null,
		desc: "Lowers the target's Speed by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of Speed.",
		shortDesc: "-1 Speed; ends user and target hazards.",
	},
	downdraft: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target isn't grounded, its Speed is lowered by 1 stage.",
		shortDesc: "Lowers target's Speed by 1 if it isn't grounded.",
	},
	golemstrike: {
		inherit: true,
		isNonstandard: null,
		desc: "Has a 10% chance to lower the target's Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Defense by 1.",
	},
	punishingblow: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If the target has boosts, this move always results in a critical hit.",
	},
	contrariety: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Every Pokemon on the field gets Contrary as an ability.",
	},
	blackflash: {
		inherit: true,
		isNonstandard: null,
		desc: "Lowers the user's Sp. Attack and Sp. Defense by 1 stage.",
		shortDesc: "Lowers the user's Sp. Atk and Sp. Def by 1.",
	},
	sneakyassault: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Hits three times. Each hit has 10% to lower the target's Def.",
	},
	mercuryshot: {
		inherit: true,
		isNonstandard: null,
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
	},
	sweetheart: {
		inherit: true,
		isNonstandard: null,
		desc: "User cures its status condition. Damage is calculated using the user's Sp. Defense stat as its Sp. Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
		shortDesc: "User cures its status. Uses user's Sp. Def stat as Sp. Atk in damage calculation.",
	},
	chakraterrain: {
		inherit: true,
		isNonstandard: null,
		desc: "For 5 turns, the terrain becomes Chakra Terrain. During the effect, the power of Fighting-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot be paralyzed; Pokemon already paralyzed are not healed of their status. Camouflage transforms the user into an Fighting type, Nature Power becomes Aura Sphere, and Secret Power has a 30% chance to lower target's Defense by 1 stage. Fails if the current terrain is Chakra Terrain.",
		shortDesc: "5 turns. Grounded: +Fighting power, can't be paralyzed.",
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
	lightningassault: {
		inherit: true,
		isNonstandard: null,
		desc: "The power of this move depends on (user's current Speed / target's current Speed), rounded down. Power is equal to 150 if the result is 4 or more, 120 if 3, 80 if 2, 60 if 1, 40 if less than 1. If the target's current Speed is 0, this move's power is 40.",
		shortDesc: "More power the faster the user is than the target.",
	},
	conversionz: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Fails if the user has an item. Raises all stats by 1, and user gets the type of its 3rd move.",
	},
	zawalludo: {
		inherit: true,
		isNonstandard: null,
		desc: "Raises the user's Attack by 1 stage. The user sets Trick Room.",
		shortDesc: "Raises user's Atk by 1. Sets Trick Room.",
	},
	awakening: {
		inherit: true,
		isNonstandard: null,
		desc: "The user restores 1/2 of its maximum HP, rounded half up, and reveal one of opponent's move.",
		shortDesc: "Heals the user by 50% of its max HP; reveals random opponent's move."
	},
	fulldevotion: {
		inherit: true,
		isNonstandard: null,
		desc: "Every Pokemon in the user's party is cured of its non-volatile status condition.",
		shortDesc: "Cures the user's party of all status conditions.",
	},
	braveblade: {
		inherit: true,
		isNonstandard: null,
		desc: "Ignores the target's stat stage changes, including evasiveness. This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the target's stat stage changes and the Abilities of other Pokemon.",
	},
	teramorphosis: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP. Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "Has 33% recoil. 100% chance to raise the user's Speed by 1.",
	},
	happydance: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Raises the user's Attack and Sp. Attack by 1. Summons Rain Dance.",
	},
	windscall: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Raises the user's Attack and Sp. Attack by 1. Sets Tailwind.",
	},
	houndshowl: {
		inherit: true,
		isNonstandard: null,
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
		shortDesc: "If a foe is switching out, hits it at 2x power.",
	},
	dantesinferno: {
		inherit: true,
		isNonstandard: null,
		desc: "For 5 turns, the weather becomes Sunny Day.",
		shortDesc: "Starts Sunny Day.",
	},
	swarming: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Lowers the user's and the target's Sp. Def by 1.",
		desc: "Lowers the user's and the target's Special Defense by 1 stage.",
	},
	hardwareheat: {
		inherit: true,
		isNonstandard: null,
		desc: "Lowers the user's Speed by 1 stage.",
		shortDesc: "Lowers the user's Speed by 1.",
	},
	shattering: {
		inherit: true,
		isNonstandard: null,
		desc: "The held item is lost and it activates for the target if applicable. If there is no target or the target avoids this move by protecting itself, the user's held item is still lost. The user can regain a thrown item with Recycle or the Harvest Ability. Fails if the user has no held item, if the held item cannot be thrown, if the user is under the effect of Embargo or Magic Room, or if the user has the Klutz Ability.",
		shortDesc: "Flings the user's item at the target.",
	},
	roguewave: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. Usually goes first.",
	},
	natureswrath: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Either Grass or Ground-type, whichever is more effective.",
	},
	magicmissile: {
		inherit: true,
		isNonstandard: null,
		desc: "Hits two to five times. This move does not check accuracy, ignores abilities, can't be redirected, and bypasses Screens.",
		shortDesc: "Hits 2-5 times in one turn. Does not check accuracy, ignores abilities, can't be redirected, and bypasses Screens.",
	},
	fatbombing: {
		inherit: true,
		isNonstandard: null,
		desc: "If Gravity is currently active, this move has its priority increased by 1.",
		shortDesc: "During Gravity: +1 priority.",
	},
	poisonivy: {
		inherit: true,
		isNonstandard: null,
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. This move does not check accuracy.",
		shortDesc: "Hits twice. This move does not check accuracy.",
	},
	clusterexplosion: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Hits adjacent Pokemon. Sets Stealth Rock. User faints.",
	},
	befuddlepowder: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If this move would deal not very effective damage on a target, deals double damage.",
	},
	piercingdart: {
		inherit: true,
		isNonstandard: null,
		desc: "This move's type effectiveness against Steel is changed to be neutral no matter what this move's type is.",
		shortDesc: "Neutral on Steel.",
	},
	hindenburg: {
		inherit: true,
		isNonstandard: null,
		desc: "Power doubles if the user has no held item, or if it is burned.",
		shortDesc: "Power doubles if the user has no held item or is burned.",
	},
	ventilation: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Lowers the target's Speed by 1. If user has 3 stacks of Stockpile, doubles in power.",
	},
	emushdance: {
		inherit: true,
		isNonstandard: null,
		desc: "This attack charges on the first turn and executes on the second. If the user is holding a Power Herb or the terrain is Chakra or Grassy, the move completes in one turn.",
		shortDesc: "Charges turn 1, hits turn 2. Chakra Terrain or Grassy Terrain: no charge.",
	},
	rainofarrows: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Hits once in this turn, then hits again in the next turn. Ignores protection.",
	},
	bigbang: {
		inherit: true,
		isNonstandard: null,
		desc: "This move and its effects ignore the Abilities of other Pokemon, as well as resistances and immunities.",
		shortDesc: "Ignores the Abilities of other Pokemon, resistances and immunities.",
	},
	mantisslash: {
		inherit: true,
		isNonstandard: null,
		desc: "Lowers the user's Speed by 2 stages.",
		shortDesc: "Lowers the user's Speed by 2.",
	},
	intrepidcrash: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. Usually goes first.",
	},
	timeparadox: {
		inherit: true,
		isNonstandard: null,
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
	},
	jumpscare: {
		inherit: true,
		isNonstandard: null,
		desc: "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only. 100% flinch chance.",
	},
	futuredoom: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Target can't use status moves its next 3 turns.",
	},
	brainblast: {
		inherit: true,
		isNonstandard: null,
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target.",
	},
	timecrash: {
		inherit: true,
		isNonstandard: null,
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
	},
	waterslash: {
		inherit: true,
		isNonstandard: null,
		desc: "Deals damage to the target based on its Special Defense instead of Defense.",
		shortDesc: "Damages target based on Sp. Def, not Defense.",
	},
	marinebolt: {
		inherit: true,
		isNonstandard: null,
		desc: "Damage is calculated using the user's Speed stat as its Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
		shortDesc: "Uses user's Speed stat as Atk in damage calculation.",
	},
	calmingbell: {
		inherit: true,
		isNonstandard: null,
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
	},
	seasonpass: {
		inherit: true,
		isNonstandard: null,
		desc: "If the user's current form is a Mega Sawsbuck, this move's type changes to match. Fairy type for Spring-Mega, Fire type for Summer-Mega, Fire type for Autumn-Mega, and Ice type for Winter-Mega.",
		shortDesc: "Type depends on user's form.",
	},
	chistrike: {
		inherit: true,
		isNonstandard: null,
		desc: "If the current terrain is Chakra Terrain and the target is grounded, this move hits Ghost type targets.",
		shortDesc: "Hits Ghost type grounded targets in Chakra Terrain.",
	},
	cursedspeech: {
		inherit: true,
		isNonstandard: null,
		desc: "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
		shortDesc: "Target can't select the same move twice in a row.",
	},
	threateningbite: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Cannot be selected the turn after it's used.",
	},
	stonesurge: {
		inherit: true,
		isNonstandard: null,
		desc: "If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any Pokemon uses Tidy Up, or if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
		shortDesc: "Sets Stealth Rock on the target's side.",
	},
	xrayshock: {
		inherit: true,
		isNonstandard: null,
		desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "100% chance to raise the user's Speed by 1.",
	},
	gigabbouncysplash: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "No additional effect.",
	},
	sonicspeedstrike: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "No additional effect.",
	},
	sweetsugarrush: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "No additional effect.",
	},
	colorfulhit: {
		inherit: true,
		isNonstandard: null,
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
	},
	oceanslance: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "No additional effect.",
	},
	goatup: {
		inherit: true,
		isNonstandard: null,
		desc: "Raises the user's Attack and Defense by 1 stage. If the terrain is Grassy Terrain, this move raises the user's Attack and Defense by 2 stages.",
		shortDesc: "Raises user's Attack and Def by 1; 2 in Grassy Terrain.",
	},
	poisonwhip: {
		inherit: true,
		isNonstandard: null,
		desc: "Power doubles if the target is poisoned.",
		shortDesc: "2x power if target poisoned.",
	},
	casinoroyal: {
		inherit: true,
		isNonstandard: null,
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2. Hits foe(s).",
	},
	mistystep: {
		inherit: true,
		isNonstandard: null,
		desc: "For 5 turns, the terrain becomes Misty Terrain. The user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		shortDesc: "Starts Misty Terrain. User switches out.",
	},
	prevailingwind: {
		inherit: true,
		isNonstandard: null,
		desc: "Has a 100% chance to make the target flinch. Fails if the target did not select a Wind-based physical or special attack for use this turn, or if the target moves before the user.",
		shortDesc: "100% flinch. Fails unless target using Wind-based attack.",
	},
	crazedpunch: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This attack is a critical hit if the target is poisoned.",
	},
	dirtyheadshot: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target is poisoned, its Speed will be lowered by 1.",
		shortDesc: "Lowers target's Speed by 1 if poisoned.",
	},
	cruelfeather: {
		inherit: true,
		isNonstandard: null,
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. If the target is poisoned, heals the user's status condition.",
		shortDesc: "Hits 2 times in one turn. Heals user's status if target is poisoned.",
	},
	midnightsnack: {
		inherit: true,
		isNonstandard: null,
		desc: "The target's stat stages greater than 0 are stolen from it and applied to the user before dealing damage.",
		shortDesc: "Steals target's boosts before dealing damage.",
	},
	// modified moves
	toxicthread: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		status: 'tox',
		desc: "Lowers the target's Speed by 2 stages and badly poisons it.",
		shortDesc: "Lowers the target's Speed by 2 and badly poisons it.",
	},
	sonicboom: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	triplekick: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 90,
		basePower: 20,
	},
	playrough: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
	},
	payback: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		basePower: 25,
	},
	crosschop: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 85,
		basePower: 120,
		pp: 10,
		shortDesc: "No additional effect.",
		desc: "No additional effect.",
	},
	submission: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		basePower: 120,
		pp: 15,
		recoil: [33, 100],
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
	},
	powdersnow: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		pp: 10,
		desc: "Damage is calculated using the user's Sp. Defense stat as its Sp. Attack, including stat stage changes. Other effects that modify the Sp. Attack stat are used as normal. Has a higher chance for a critical hit.",
		shortDesc: "Uses user's Sp. Def stat as Sp. Atk in damage calculation. High critical hit ratio.",
		overrideOffensiveStat: 'spd',
	},
	multiattack: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		basePower: 90,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		basePower: 85,
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		isNonstandard: null,
	},
	baddybad: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		isNonstandard: null,
	},
	sparklyswirl: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		isNonstandard: null,
	},
	triplearrows: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		shortDesc: "30% chance to poison or paralyze target.",
		secondary: {
			chance: 30,
			onHit(target, source) {
				const status = this.sample(['psn', 'par']);
				target.trySetStatus(status, source);
			},
		},
	},
	fissure: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	guillotine: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		basePower: 90,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		basePower: 60,
		willCrit: true,
		shortDesc: "Always results in a critical hit. Cannot be redirected.",
		desc: "Always results in a critical hit. Cannot be redirected.",
	},
	lifedew: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onHit(pokemon) {
			pokemon.cureStatus();
		},
		desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status cured.",
		shortDesc: "Heals the user and its allies by 1/4 their max HP, status cured.",
	},
	milkdrink: {
		inherit: true,
		shortDesc: "Restores 1/2 of the max HP of the user or an ally."
	},
	softboiled: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		target: "adjacentAllyOrSelf",
		shortDesc: "Restores 1/2 of the max HP of the user or an ally."
	},
	axekick: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		type: "Dark",
	},
	ragingbull: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	hyperdrill: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		isNonstandard: null,
	},
	combattorque: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		isNonstandard: null,
	},
	magicaltorque: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		isNonstandard: null,
	},
	wickedtorque: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	chatter: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	revivalblessing: {
		inherit: true,
		flags: { heal: 1, nosketch: 1, noassist: 1 },
	},
	psyshieldbash: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
	},
	doublehit: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		basePower: 45,
	},
	paraboliccharge: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		basePower: 75,
	},
	needlearm: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		basePower: 95,
	},
	relicsong: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		basePower: 95,
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		desc: "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active. This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes.",
		shortDesc: "10% chance to sleep foe(s). Meloetta transforms. Physical if user's Atk > Sp. Atk.",
	},
	tarshot: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		basePower: 80,
		category: "Special",
		flags: { protect: 1, metronome: 1 },
	},
	mysticalpower: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		accuracy: 100,
		basePower: 90,
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
			switch (pokemon.effectiveWeather(undefined, true)) {
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
			switch (pokemon.effectiveWeather(undefined, true)) {
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
			if (weakWeathers.includes(pokemon.effectiveWeather(undefined, true)) && !(['sandstorm'].includes(pokemon.effectiveWeather()) && pokemon.hasAbility('sandsoftime'))) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snowscape', 'eternalwinter'];
			if (weakWeathers.includes(pokemon.effectiveWeather(undefined, true)) && !(['sandstorm'].includes(pokemon.effectiveWeather()) && pokemon.hasAbility('sandsoftime'))) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather(undefined, true)) {
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
			switch (pokemon.effectiveWeather(undefined, true)) {
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
			switch (pokemon.effectiveWeather(undefined, true)) {
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
	// Noble Crest
	gmaxsteelsurge: {
		inherit: true,
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: G-Max Steelsurge');
			},
			onSwitchIn(pokemon) {
				const nobleMons = ["Arcanine-Hisui", "Electrode-Hisui", "Lilligant-Hisui", "Avalugg-Hisui", "Kleavor"];
				if (pokemon.hasItem('heavydutyboots') || (nobleMons.includes(pokemon.baseSpecies.name) && pokemon.hasItem('noblecrest'))) return;
				// Ice Face and Disguise correctly get typed damage from Stealth Rock
				// because Stealth Rock bypasses Substitute.
				// They don't get typed damage from Steelsurge because Steelsurge doesn't,
				// so we're going to test the damage of a Steel-type Stealth Rock instead.
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
				this.damage(pokemon.maxhp * (2 ** typeMod) / 8);
			},
		},
	},
	spikes: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers++;
			},
			onSwitchIn(pokemon) {
				const nobleMons = ["Arcanine-Hisui", "Electrode-Hisui", "Lilligant-Hisui", "Avalugg-Hisui", "Kleavor"];
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots') || (nobleMons.includes(pokemon.baseSpecies.name) && pokemon.hasItem('noblecrest'))) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
			},
		},
	},
	stealthrock: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn(pokemon) {
				const nobleMons = ["Arcanine-Hisui", "Electrode-Hisui", "Lilligant-Hisui", "Avalugg-Hisui", "Kleavor"];
				if (pokemon.hasItem('heavydutyboots') || (nobleMons.includes(pokemon.baseSpecies.name) && pokemon.hasItem('noblecrest'))) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * (2 ** typeMod) / 8);
			},
		},
	},
};
