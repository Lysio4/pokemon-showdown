import { consoleips } from "../../../config/config-example";

export const Abilities: { [abilityid: string]: ModdedAbilityData; } = {
	// tmp description
	runaway: {
		inherit: true,
		shortDesc: "This Pokemon can't be trapped by any mean.",
	},
	// new abilities
	poisonousradula: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Super effective Poison moves lowers the target's corresponding Defense stat by 1.",
	},
	daredevil: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon does not take recoil damage, except Struggle. Does not affect Life Orb damage or crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
	},
	waterproof: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon is immune to Water-type moves and Electric-type moves and raises its Speed by 1 stage when hit by an Water-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Water or Electric move; Water and Electric immunity.",
	},
	racketeering: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Raises the power of healing moves, Good Fishing, Knock Off, Midnight Snack, Pluck, Spectral Thief and Thief by 50%.",
	},
	snobbery: {
		inherit: true,
		isNonstandard: null,
		desc: "If a Pokemon uses a Bug-, Dark- or Poison-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Bug-/Dark-/Poison-type moves against this Pokemon deal damage with a halved offensive stat.",
	},
	starsforce: {
		inherit: true,
		isNonstandard: null,
		desc: "When this Pokémon has 1/3 or less of its maximum HP, rounded down, all of its stats are x1.5.",
		shortDesc: "At 1/3 or less of max HP, all stats are x1.5.",
	},
	webweaver: {
		inherit: true,
		isNonstandard: null,
    	shortDesc: "A the end of each turn, lowers the Speed of every other grounded Pokemon by 1.",
	},
	perforating: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Bug & Poison moves deal 2x damage if resisted, can poison Steel types, Poison moves hit Steel types",
	},
	doublespirit: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If Girafatak: Applies Power Trick before using a Physical/Special move, and is Normal/Dark before a Physical move, Normal/Psychic before a Special move.",
	},
	divination: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch-in, reveals a random move of each adjacent opponent.",
	},
	arcanemastery: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Psychic-type or a Dark-type attack.",
	},
	strangebody: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If this Pokemon is hit by a physical super effective move, it takes neutral damage.",
	},
	toymaker: {
		inherit: true,
		isNonstandard: null,
		desc: "At the end of each turn, if it doesn't have an held item, the user acquires a random item. (Leftovers, Sitrus Berry, Lum Berry, Figy Berry, Starf Berry, Choice Band, Choice Specs, Choice Scarf, Flame Orb, Para Orb, Toxic Orb, Light Ball, Iron Ball, Rocky Helmet, Heavy-Duty Boots)",
		shortDesc: "Gets a random item from a list at the end of the turn if the user doesn't already have one.",
	},
	woodclearing: {
		inherit: true,
		isNonstandard: null,
		desc: "If Grassy Terrain is active, this Pokemon's attacks have their power multiplied by 1.3. This Pokemon's attacks always hit Grass-type targets for super effective damage.",
		shortDesc: "This Pokemon's attacks do 1.3x in Grassy Terrain; always hits Grass targets for super effective.",
	},
	microclimate: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Reverses effects of Sun and Rain; negates Sand and Snow.",
	},
	voidheart: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon heals 25% of its max HP if it attacks and KOes another Pokemon.",
	},
	convectioncurrent: {
		inherit: true,
		isNonstandard: null,
		desc: "If Gravity is active, this Pokemon's Speed is doubled.",
		shortDesc: "If Gravity is active, this Pokemon's Speed is doubled.",
	},
	endlessdream: {
		inherit: true,
		isNonstandard: null,
		desc: "While this Pokemon is active, every other Pokemon is treated as if it has the Comatose ability. Pokemon that are either affected by Sweet Veil, or have Insomnia or Vital Spirit as their abilities are immune this effect.",
		shortDesc: "All Pokemon are under Comatose effect.",
	},
	evaporate: {
		inherit: true,
		isNonstandard: null,
		desc: "If the Pokemon or the opponent uses a Water type move, it triggers the Haze effect. Immune to Water.",
		shortDesc: "Haze when any Pokemon uses a Water move; Water immunity.",
	},
	desertsong: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's sound-based moves become Ground-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Ground type.",
	},
	sundownswitch: {
		inherit: true,
		isNonstandard: null,
		desc: "If Cacturne-Mega: Changes to Day form before using Grass move; to Night before using Dark move.",
	},
	blindrage: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a move.",
	},
	hardrock: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's Attack is multiplied by 1.5, and its Defense is doubled, but its Sp. Def is halved.",
	},
	forgery: {
		inherit: true,
		isNonstandard: null,
		desc: "If this Pokemon is Zoroark-Mega, it inherits the item of the last unfainted Pokemon in its party.",
		shortDesc: "If Zoroark-Mega: Inherits the item of the last party member.",
	},
	clairvoyance: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokémon's Psychic-type moves take effect two turns after being used. At the end of that turn, the damage is calculated at that time and dealt to the Pokémon at the position the target had when the move was used. Only one move can be delayed at a time. If the user is no longer active at the time an attacking move should hit, damage is calculated based on the user's natural Attack or Special Attack stat, types, and level, with no boosts from its held item or Ability. Status moves are used by the Pokémon at the position the user had when the move was used.",
		shortDesc: "Psychic-type moves delayed until two turns later, but only one at a time.",
	},
	whiplash: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's tail-based attacks have their priority increased by 1.",
	},
	boarding: {
		inherit: true,
		isNonstandard: null,
		desc: "If the target is under the effect of a trapping move or ability, then this Pokemon's attacks deal 1.3x more damages.",
		shortDesc: "This Pokemon deals 1.3x damage to trapped opponents.",
	},
	lasttoxin: {
		inherit: true,
		isNonstandard: null,
		desc: "When this Pokemon brings an opponent to 50% or under using an attacking move, it badly poisons that opponent.",
		shortDesc: "Badly poison enemies brought under half health.",
	},
	chakrasurge: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch-in, sets Chakra Terrain.",
	},
	striker: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's kick-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's kick-based attacks have 1.2x power.",
	},
	insectivorous: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon is immune to Bug-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Bug-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Bug moves; Bug immunity.",
	},
	cosmicenergy: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's attacks do not have to charge or recharge.",
		shortDesc: "Skip charging and recharging turns of moves.",
	},
	ignite: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fire type and have 1.2x power.",
	},
	nightlight: {
		inherit: true,
		isNonstandard: null,
		desc: "If a Pokemon uses a Dark- or Ghost-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Dark-/Ghost-type moves against this Pokemon deal damage with a halved offensive stat.",
	},
	parasitism: {
		inherit: true,
		isNonstandard: null,
		desc: "If this Pokemon is knocked out with a move, that move's user is affected by Leech Seed and Yawn.",
		shortDesc: "If this Pokemon is KOed by a move, that move's user is affected by Leech Seed and Yawn.",
	},
	explosive: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokémon does not suffer the drawbacks of recoil moves and sacrificial moves. All self-KO moves used by this Pokémon have x0.8 base power.",
		shortDesc: "Ignores recoil and self-KO effects of its moves. Self-KO moves have x0.8 BP.",
	},
	accumulate: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon gets 1 Stockpile at the end of each full turn it has been on the field.",
	},
	blowhole: {
		inherit: true,
		isNonstandard: null,
		desc: "Before this Pokemon uses any Water-type move, it sets Rain Dance.",
		shortDesc: "Sets Rain Dance before using a Water-type move.",
	},
	iceneedles: {
		inherit: true,
		isNonstandard: null,
		desc: "Pokemon making contact with this Pokemon lose an amount of their maximum HP factoring their weakness to Ice-type, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose an amount of their max HP depending on their Ice weakness.",
	},
	eternalwinter: {
		inherit: true,
		isNonstandard: null,
		desc: "On switch-in, the weather becomes Eternal Winter. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by Delta Stream, Desolate Land or Primordial Sea. Super effective moves only inflict 3/4 damages on this Pokemon.",
		shortDesc: "On switch-in, eternal winter begins until this Ability is not active in battle.",
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
	// end of snow and hail abilities
	disillusioned: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon is immune to Fairy-type moves and raises its Sp. Defense by 1 stage when hit by a Fairy-type move.",
		shortDesc: "This Pokemon's Sp. Def is raised 1 stage if hit by an Fairy move; Fairy immunity.",
	},
	leafdress: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If not Grass: gives Grass resists; if Grass: negates Grass weaknesses, status and hazard damage.",
	},
	unstableshell: {
		inherit: true,
		isNonstandard: null,
		desc: "Pokemon making contact with this Pokemon make it lose 1/4 of its max HP and lose double the amount, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon make it lose 1/4 of its max HP and lose double the amount.",
	},
	sleightofhand: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokémon's contact moves become special attacks and do not make contact with the target.",
		shortDesc: "This Pokémon's contact moves become special and non-contact.",
	},
	hyperthermia: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon can't have its stats dropped by any means, including its own attacks.",
		shortDesc: "This Pokemon can't have its stats dropped by any means, including its own attacks.",
	},
	unconcerned: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon ignores its own stat stages when taking or doing damage.",
	},
	hydrophilic: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's offensive stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
	},
	virality: {
		inherit: true,
		isNonstandard: null,
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Virality. Does not affect Pokemon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Megazord, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Sundown Switch, Tera Shift, Virality, Zen Mode, or Zero to Hero Abilities.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Virality.",
	},
	goodluck: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If this Pokémon's Speed is higher than its target's Speed, its critical rate ratio is raised by 3.",
	},
	dodge: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "When taking damages, this Pokemon adds 50% of its Speed to its corresponding defense.",
	},
	faithfulcompanion: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If the ally is Piratcy, gives to the ally this Pokemon's item, and steals an item from the opponent.",
	},
	cheerleader: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If the ally has Cheerleader: if Plusle, Attack, Special Attack and Speed x1.5; if Minun, Defense, Special Defense and Speed x1.5.",
		desc: "If the ally has Cheerleader: if Plusle, its Atk, Sp. Atk and Speed are x1.5; if Minun, its Def, Sp. Def and Speed are x1.5.",
	},
	withering: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's contact moves lower the target's Speed by 1 stage.",
	},
	cacophony: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.",
		shortDesc: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.",
	},
	happygolucky: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's Attack, Defense, Special Attack, and Special Defense get a boost depending on the happiness of the Pokemon (maximum 20%).",
		shortDesc: "Boosts Attack, Defense, Special Attack, and Special Defense by 1% per 12.5 happiness (max 20%).",
	},
	mightywall: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's Defense and Special Defense are multiplied by 1.5, and by 0.5 when it switches out.",
		shortDesc: "This Pokemon's Defense and Sp. Defense are multiplied by 1.5, and by 0.5 when it switches out.",
	},
	karma: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's delayed moves have their power multiplied by 1.5.",
	},
	souldevourer: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If any target is trapped, this target loses 1/8 of its max HP, and this Pokemon heals for the same amount.",
	},
	soothingfragrance: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Opposing Pokemon have their Attack reduced by 25%, and allies have their Defense raised by 25%.",
	},
	tempestuous: {
		inherit: true,
		isNonstandard: null,
		desc: "When replacing a fainted party member, this Pokémon charges power to double the power of its Electric-type move on its next Electric-type move.",
		shortDesc: "Gains the effect of Charge when replacing a fainted ally.",
	},
	ambush: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokémon's attacks are critical hits if the user moves before the target.",
	},
	steelbreaker: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokémon's attacks are critical hits if the target is a Steel-type Pokémon.",
	},
	bitterhatred: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 when hit.",
	},
	pollution: {
		inherit: true,
		isNonstandard: null,
		desc: "Poison Point. This Pokemon's offensive stat is doubled while using a Poison-type attack. If a Pokemon uses a Water-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Poison Point. This Pokemon's Poison power is 2x; Water power against it is halved.",
	},
	freegullet: {
		inherit: true,
		isNonstandard: null,
		desc: "Fails if this Pokemon isn't Cramorant-Mega. Surf/Dive, Gulping, Stockpile; Thunderbolt/Wild Charge, Gorging, Charge; Ventilation/Brave Bird, base form, enemy loses 1/8 HP. Surf/Dive have 1.5x power.",
		shortDesc: "Cramorant-Mega: Surf/Dive, Gulping, Stockpile; Thunderbolt/Wild Charge, Gorging, Charge; Ventilation/Brave Bird, base form, enemy loses 1/8 HP. Surf/Dive have 1.5x power.",
	},
	blindeye: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's type affinities are reversed.",
	},
	counterstrike: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon reflects 50% of the damage it receives.",
	},
	climaticchange: {
		inherit: true,
		isNonstandard: null,
		desc: "Upon using a Water, Fire, or Ice move, this Pokemon changes to that type and sets the corresponding weather.",
		shortDesc: "Changes type and weather when using Water/Fire/Ice moves.",
	},
	hyperglycemia: {
		inherit: true,
		isNonstandard: null,
		desc: "At the end of each turn, every Pokemon gets 1 Stockpile. Reduces the damage taken by X*10%, with X the amount of Stockpiles this Pokemon has, and boosts this Pokemon's damage by Y*10%, Y being the amount of Stockpiles the target has.",
		shortDesc: "Every Pokemon Stockpiles at the end of each turn. Reduces damage by X*10%, and boosts damage by Y*10%.",
	},
	graviton: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch-in, this Pokémon summons Gravity.",
	},
	solarenergy: {
		inherit: true,
		isNonstandard: null,
		desc: "If Sunny Day is active, this Pokémon can skip the charging and recharging turn of its moves. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokémon skips the charging and recharging turn of its moves.",
	},
	punchprodigee: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Gives a +1 priority to punch moves.",
	},
	heavyweapon: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Gives an ally Octillery +1 priority on all its moves.",
	},
	lightpower: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's Special Attack is doubled.",
	},
	thermalswitch: {
		inherit: true,
		isNonstandard: null,
		desc: "Immunity to Burn. This Pokemon has two forms, Passive and Active. It starts the fight with Passive form. If Sun is set or it's hit by a Fire-type move, it switches to Active form until it switches out. If Snow is set, it's frozen, or it's hit by an Ice-type move, it switches to Passive form.",
		shortDesc: "Burn immunity. Sun or Fire-type move: Active form; Snow, frozen or Ice-type move: Passive form.",
	},
	ironbody: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch in, adds Steel type to the user. Has no effect if the user is Steel-type.",
	},
	psychicprowess: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's offensive stat is doubled while using a Psychic-type attack. If a Pokemon uses a Psychic-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it. Using Amnesia also boosts this Pokémon's Special Attack by 2 stages.",
		shortDesc: "This Pokemon's Psychic power is 2x; it can't be paralyzed; Psychic power against it is halved; Amnesia also boosts SpA by 2.",
	},
	hugeclamp: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "This Pokemon's Atk is boosted by 1.5, but its Speed is halved.",
	},
   	healingecho: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity. Thousand Arrows can hit this Pokemon as if it did not have this Ability. When this Pokémon uses a Sound move, it is healed by 12.5% of its HP.",
		shortDesc: "This Pokemon is immune to Ground; heals 12.5% HP if the Pokémon uses a Sound move.",
	},
	mountaineer: {
		inherit: true,
		isNonstandard: null,
	},
	mightyhorn: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's drill-based attacks have their power and accuracy multiplied by 1.3.",
		shortDesc: "This Pokemon's drill-based attacks have 1.3x power and 1.3x accuracy.",
	},
	petrify: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch-in, the opposing targets' type is changed to Rock.",
	},
	muddyland: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch-in, summons Water Sport and Mud Sport.",
	},
	aerodynamism: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokemon's Wind moves do not miss. Wind move and Sandstorm immunity.",
	},
	sandsoftime: {
		inherit: true,
		isNonstandard: null,
		desc: "Under Sandstorm, user skips Charge and Recharge turns. Immunity to Sandstorm damage. (note: this also ignores sand's damage reduction to moves like Solar Beam)",
		shortDesc: "Under sandstorm, skips charge and recharge. Sand Immunity.",
	},
	megazord: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "Combination of the Intrepid Sword and Dauntless Shield Abilities.",
	},
	masquerade: {
		inherit: true,
		isNonstandard: null,
		desc: "This Pokémon inherits the Ability of the last unfainted Pokemon in its party until it takes direct damage from another Pokémon's attack. Permanent abilities cannot be copied.",
		shortDesc: "Inherits the Ability of the last party member. Wears off when attacked.",
	},
	meiji: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "On switch-in, uses Future Sight.",
	},
	// modified abilities
	justified: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Justified Atk weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Justified SpA weaken');
				return this.chainModify(0.5);
			}
		},
		desc: "If a Pokemon uses a Dark-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
		shortDesc: "Dark damage against this Pokemon is dealt with 1/2 offensive stat; Atk raised by 1 after it is damaged by a Dark-type move.",
	},
	colorchange: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
	iceface: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Eiscue' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 2 && !['Noice'].includes(pokemon.species.forme)) {
				this.add('-activate', target, 'ability: Ice Face');
				this.effectState.busted = true;
				return 0;
			}
		},
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
		desc: "If this Pokemon is an Eiscue, forme changes if its HP drop under 50%. Also, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Snow begins or when Eiscue switches in while Snow is active. Confusion damage also breaks the ice face.",
		shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. Effect is restored in Snow. Forme changes if its HP drop under 50%.",
	},
	stickyhold: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onTakeItem(item, pokemon, source) {
			if (!pokemon.hp || pokemon.item === 'stickybarb') return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff' || this.activeMove.id === 'goodfishing') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.name === 'Knock Off' || move.name === 'Good Fishing') {
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
		desc: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack, unless the attack knocks out this Pokemon. A Sticky Barb will be transferred to other Pokemon regardless of this Ability. Knock Off and Good Fishing are not boosted against this Pokemon, and Poltergeist fails when used against this Pokemon.",
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack. Knock Off and Good Fishing are not boosted against this Pokemon, and Poltergeist fails when used against this Pokemon.",
	},
	normalize: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		desc: "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.5, and deal double damage if the hit is not very effective. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.5x power, and deal double damage if the hit is not very effective.",
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify(1.5);
		},
		onEffectiveness(typeMod, target, type) {
			if (target.getMoveHitData(move).typeMod < 0) return 0;
		},
	},
	watercompaction: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
	illuminate: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
	galewings: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1;
		},
		rating: 4,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
	},
	schooling: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
		shortDesc: "On switch-in, summons Grassy Terrain. During Grassy Terrain, Def is 1.5x.",
	},
	flowergift: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	seedsower: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
		onSourceModifyDamage(damage, source, target, move) {
			if (target.volatiles['charge']) {
				return this.chainModify(0.75);
			}
		},
		shortDesc: "This Pokemon gains the Charge effect when it takes a hit from an attack. Takes 25% less damage from all moves while it has the Charge effect.",
	},
	lingeringaroma: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
	teravolt: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		modded: true, // this makes its description display in Data Mod
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
	truant: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
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
		onHitProtect(source, target, move) {
			if (move.flags['contact']) {
				target.getMoveHitData(move).bypassProtect = this.effect;
				return false;
			}
		},
		shortDesc: "This Pokemon can only use status moves every other turn. Its contact moves ignore a target's protection and deal 1/4 the usual damage.",
	},
	fullmetalbody: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onTryHit(target, source, move) {
			if (move.category === 'Status' && target !== source) {
				this.add('-immune', target, '[from] ability: Full Metal Body');
				return null;
			}
		},
		shortDesc: "This Pokemon is immune to Status moves. Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	shadowshield: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Shadow Shield", `[of] ${target}`);
			}
		},
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved. Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	arenatrap: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onFoeTrapPokemon(pokemon) {
			if ((pokemon.hasType('Grass') || pokemon.hasType('Ground') || pokemon.hasType('Rock')) && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.knownType || (pokemon.hasType('Grass') || pokemon.hasType('Ground') || pokemon.hasType('Rock'))) {
				pokemon.maybeTrapped = true;
			}
		},
		desc: "Prevents opposing Grass-type, Ground-type and Rock-type Pokemon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.",
		shortDesc: "Prevents opposing Grass-type, Ground-type and Rock-type Pokemon from choosing to switch out.",
	},
	windpower: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onSideConditionStart(side, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind' || this.field.isWeather('sandstorm')) {
				pokemon.addVolatile('charge');
			}
		},
		desc: "This Pokemon gains the Charge effect when it takes a hit from a wind move or when Tailwind or Sandstorm begins on this Pokemon's side. Sandstorm immunity.",
		shortDesc: "This Pokemon gains the Charge effect when hit by a wind move, Tailwind or Sandstorm begins. Sandstorm immunity.",
	},
	windrider: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onSideConditionStart(side, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind' || this.field.isWeather('sandstorm')) {
				this.boost({ atk: 1 }, pokemon, pokemon);
			}
		},
		desc: "This Pokemon is immune to wind moves and raises its Attack by 1 stage when hit by a wind move or when Tailwind or Sandstorm begins on this Pokemon's side.",
		shortDesc: "Attack raised by 1 if hit by a wind move or Tailwind or Sandstorm begins. Wind move and Sandstorm immunity.",
	},
	magmaarmor: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onSourceModifyAtkPriority: 5,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(2);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(2);
			}
		},
		desc: "This Pokemon's offensive stat is doubled while using a Fire-type attack. If a Pokemon uses an Ice-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be frozen. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Fire power is 2x; it can't be frozen; Ice power against it is halved.",
	},
	slowstart: {
		inherit: true,
		modded: true, // this makes its description display in Data Mod
		onStart(pokemon) {
			this.add('-start', pokemon, 'ability: Slow Start');
			this.effectState.counter = 1;
		},
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 1 turn.",
	},
};
