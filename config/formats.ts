// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// S/V Regular
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Regular",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9 Champions] OU",
		mod: 'champions',
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber', 'Moody', 'Quick Claw', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9 Champions] VGC 2026 Reg M-B",
		mod: 'champions',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer', 'Open Team Sheets'],
	},
	{
		name: "[Gen 9 Champions] VGC 2026 Reg M-B (Bo3)",
		mod: 'champions',
		gameType: 'doubles',
		ruleset: ['Flat Rules', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3'],
	},
	{
		name: "[Gen 9 Champions] Custom Game",
		mod: 'champions',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 50'],
		onBegin() {
			this.reportPercentages = true;
		},
	},
	{
		name: "[Gen 9] OU",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Tera Blast'],
	},
	{
		name: "[Gen 9] National Dex",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Anything Goes",
		mod: 'gen9',
		ruleset: ['Standard AG'],
	},
	{
		name: "[Gen 9] National Dex AG",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod'],
	},
	{
		name: "[Gen 9] Custom Game",
		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 9] Random Doubles Battle",
		mod: 'gen9',
		gameType: 'doubles',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Evasion Abilities Clause'],
		banlist: ['DUber', 'Shadow Tag', 'Commander'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja',
			'Solgaleo', 'Stakataka', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Commander', 'Power Construct', 'Shadow Tag', 'Eevium Z', 'Assist', 'Coaching', 'Dark Void', 'Swagger',
		],
	},
	{
		name: "[Gen 9] Doubles Custom Game",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 9 Champions] NatDex OU",
		mod: 'champions',
		searchShow: false,
		itemClauseDefault: true,
		ruleset: ['Standard', 'NatDex Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		checkCanLearn(move, species, setSources, set) {
			if (!this.ruleTable.has('natdexmod')) return this.checkCanLearn(move, species, setSources, set);
			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;
			const natDex = TeamValidator.get(`gen${this.gen}nationaldexag`).checkCanLearn(move, species, setSources, set);
			if (!natDex) return natDex;
			return this.checkCanLearn(move, species, setSources, set);
		},
		onValidateSet(set) {
			if (!this.ruleTable.has('natdexmod')) return;
			const species = this.dex.species.get(set.species);
			let tier = species.tier;
			if (tier === 'Illegal') tier = this.dex.mod('gen9').species.get(species.name).natDexTier;
			if (tier === 'Illegal') {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			const requireObtainable = this.ruleTable.has('obtainable');
			if (requireObtainable) {
				if (species.natDexTier === "Unreleased") {
					const basePokemon = this.toID(species.baseSpecies);
					if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`) ||
						this.ruleTable.has('+pokemontag:unobtainable')) {
						return;
					}
					return [`${set.name || set.species} does not exist in the National Dex.`];
				}
				for (const moveid of set.moves) {
					const move = this.dex.moves.get(moveid);
					if (move.isNonstandard === 'Unobtainable' && move.gen === this.dex.gen) {
						if (this.ruleTable.has(`+move:${move.id}`)) continue;
						const problem = `${set.name}'s move ${move.name} does not exist in the National Dex.`;
						if (this.ruleTable.has('omunobtainablemoves')) {
							const { outOfBattleSpecies } = this.getValidationSpecies(set);
							if (!this.omCheckCanLearn(move, outOfBattleSpecies, this.allSources(outOfBattleSpecies), set, problem)) continue;
						}
						return [problem];
					}
				}
			}
			// Any item that was legal in Gen 7 (Normal Gem for example) should be usable
			if (!set.item) return;
			let item = this.dex.items.get(set.item);
			let gen = this.dex.gen;
			while (item.isNonstandard && gen >= 7) {
				item = this.dex.forGen(gen).items.get(item.id);
				gen--;
			}
			if (requireObtainable && item.isNonstandard) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
	},
	{
		name: "[Gen 9 Champions] NatDex Draft",
		mod: 'champions',
		searchShow: false,
		itemClauseDefault: true,
		ruleset: ['Standard Draft', 'NatDex Mod'],
		checkCanLearn(move, species, setSources, set) {
			if (!this.ruleTable.has('natdexmod')) return this.checkCanLearn(move, species, setSources, set);
			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;
			const natDex = TeamValidator.get(`gen${this.gen}nationaldexag`).checkCanLearn(move, species, setSources, set);
			if (!natDex) return natDex;
			return this.checkCanLearn(move, species, setSources, set);
		},
		onValidateSet(set) {
			if (!this.ruleTable.has('natdexmod')) return;
			const species = this.dex.species.get(set.species);
			let tier = species.tier;
			if (tier === 'Illegal') tier = this.dex.mod('gen9').species.get(species.name).natDexTier;
			if (tier === 'Illegal') {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			const requireObtainable = this.ruleTable.has('obtainable');
			if (requireObtainable) {
				if (species.natDexTier === "Unreleased") {
					const basePokemon = this.toID(species.baseSpecies);
					if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`) ||
						this.ruleTable.has('+pokemontag:unobtainable')) {
						return;
					}
					return [`${set.name || set.species} does not exist in the National Dex.`];
				}
				for (const moveid of set.moves) {
					const move = this.dex.moves.get(moveid);
					if (move.isNonstandard === 'Unobtainable' && move.gen === this.dex.gen) {
						if (this.ruleTable.has(`+move:${move.id}`)) continue;
						const problem = `${set.name}'s move ${move.name} does not exist in the National Dex.`;
						if (this.ruleTable.has('omunobtainablemoves')) {
							const { outOfBattleSpecies } = this.getValidationSpecies(set);
							if (!this.omCheckCanLearn(move, outOfBattleSpecies, this.allSources(outOfBattleSpecies), set, problem)) continue;
						}
						return [problem];
					}
				}
			}
			// Any item that was legal in Gen 7 (Normal Gem for example) should be usable
			if (!set.item) return;
			let item = this.dex.items.get(set.item);
			let gen = this.dex.gen;
			while (item.isNonstandard && gen >= 7) {
				item = this.dex.forGen(gen).items.get(item.id);
				gen--;
			}
			if (requireObtainable && item.isNonstandard) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
	},

	// A Golden Experience
	///////////////////////////////////////////////////////////////////
	{
		section: "A Golden Experience",
	},
	{
		name: "[Gen 9] A Golden Experience OU",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Inaccurate Sleep Moves Clause', 'Data Mod'],
		banlist: [
			'Uber', 'AG', 'Moody', 'Power Construct', 'King\'s Rock',
			'Baton Pass', 'Last Respects', 'Quick Claw', 'Razor Fang', 'Shadow Tag', 'Shed Tail',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience Uber",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Inaccurate Sleep Moves Clause', 'Data Mod'],
		banlist: [
			'AG', 'King\'s Rock',
			'Baton Pass', 'Light Clay', 'Quick Claw', 'Razor Fang',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience UU",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Inaccurate Sleep Moves Clause', 'Data Mod'],
		banlist: [
			'Uber', 'AG', 'OU', 'UUBL', 'Moody', 'Power Construct', 'King\'s Rock',
			'Baton Pass', 'Last Respects', 'Quick Claw', 'Razor Fang', 'Shadow Tag', 'Shed Tail',
			'Drought', 'Light Clay',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience RU",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Inaccurate Sleep Moves Clause', 'Data Mod'],
		banlist: [
			'Uber', 'AG', 'OU', 'UUBL', 'UU', 'RUBL', 'Moody', 'Power Construct', 'King\'s Rock',
			'Baton Pass', 'Last Respects', 'Quick Claw', 'Razor Fang', 'Shadow Tag', 'Shed Tail',
			'Drizzle', 'Drought', 'Light Clay',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience NU",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Inaccurate Sleep Moves Clause', 'Data Mod'],
		banlist: [
			'Uber', 'AG', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'Moody', 'Power Construct', 'King\'s Rock',
			'Baton Pass', 'Last Respects', 'Quick Claw', 'Razor Fang', 'Shadow Tag', 'Shed Tail',
			'Drizzle', 'Drought', 'Light Clay',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience Doubles",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [
			'DUber', 'Shadow Tag', 'Eevium Z', 'Power Construct', 'Coaching', 'Dark Void', 'Swagger',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience Doubles Uber",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		mod: 'gen9agoldenexperience',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience VGC",
		mod: 'gen9agoldenexperience',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer', 'Open Team Sheets', 'Limit Two Restricted', 'Non-Signature Z-Move Clause', 'Data Mod'],
		restricted: ['Restricted Legendary'],
	},

	// AGE Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "AGE Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] A Golden Experience AAA",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9agoldenexperience',
		// searchShow: false,
		ruleset: ['Standard NatDex', '!Obtainable Abilities', 'Ability Clause = 2', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [
			'Annihilape', 'Arceus', 'Archeops', 'Baxcalibur', 'Blacephalon', 'Blastoise-Mega', 'Blaziken-Mega', 'Bisharp', 'Calyrex-Ice', 'Calyrex-Shadow', 'Ceruledge', 'Darkrai', 'Deoxys-Attack',
			'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh',
			'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Kartana', 'Keldeo', 'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lucario-Mega-Z', 'Lugia',
			'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Noivern-Sinnoh', 'Palkia', 'Palkia-Origin', 'Pheromosa', 'Rayquaza',
			'Regigigas', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike', 'Weavile', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian',
			'Zacian-Crowned', 'Zekrom', 'Zeraora', 'Zygarde-50%', 'Arena Trap', 'Comatose', 'Contrary', 'Explosive', 'Full Metal Body', 'Fur Coat', 'Gale Wings', 'Good as Gold', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Hydrophilic',
			'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Light Power', 'Magic Bounce', 'Magma Armor', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse',
			'Parental Bond', 'Poison Heal', 'Psychic Prowess', 'Punch Prodigee', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout',
			'Triage', 'Unburden', 'Water Bubble', 'Whiplash', 'Wonder Guard', 'King\'s Rock', 'Light Clay', 'Baton Pass', 'Electrify', 'Last Respects', 'Shed Tail',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience BH",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		mod: 'gen9agoldenexperience',
		// searchShow: false,
		ruleset: [
			'Standard AG', 'NatDex Mod', '!Obtainable',
			'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Data Mod'
		],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Eternatus-Eternamax', 'Greninja-Ash', 'Rayquaza-Mega', 'Shedinja', 'Terapagos-Stellar',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Hydrophilic', 'Illusion', 'Innards Out', 'Light Power', 'Magma Armor', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Psychic Prowess', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Berserk Gene',
			'Baddy Bad', 'Belly Drum', 'Bolt Beak', 'Ceaseless Edge', 'Chatter', 'Double Iron Bash', 'Electrify', 'Glitzy Glow', 'Imprison',
			'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Sappy Seed', 'Shed Tail', 'Shell Smash', 'Sizzly Slide', 'Sleep Talk', 'V-create',
		],
		restricted: ['Arceus'],
		unbanlist: ['Light of Ruin'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new this.dex.Multiset<string>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.add(species.baseSpecies);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 9] A Golden Experience Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Genesect Drives, Primal orbs, Origin orbs, Rusted items, Ogerpon Masks, Arceus Plates, and Silvally Memories with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		mod: 'mixandmegaage',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Inaccurate Sleep Moves Clause', 'Data Mod'],
		banlist: [
			'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Beedrillite', 'Blazikenite', 'Gengarite',
			'Kangaskhanite', 'Mawilite', 'Medichamite', 'Raichunite Y', 'Ribombinite',
			'Scovillainite', 'Slowbronite', 'Starminite', 'Wigglytite', 'Yanmeganite',
			'Baton Pass', 'Last Respects', 'Shadow Tag', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Calyrex-Ice', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Eternatus', 'Flutter Mane',
			'Gholdengo', 'Giratina', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kyurem-Black', 'Kyurem-White', 'Lugia',
			'Lunala', 'Manaphy', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram',
			'Shedinja', 'Slaking', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Xerneas', 'Yveltal', 'Zacian', 'Zekrom', 'Zygarde-Complete',
		],
		unbanlist: ['Light of Ruin'],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!(item.forcedForme && !item.zMove) && !item.megaStone &&
					!item.isPrimalOrb && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('natdexmod');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if (((item.itemUser?.includes(species.name) || item.forcedForme === species.name) &&
					!item.megaStone && !item.isPrimalOrb) || (natdex && species.name.startsWith('Necrozma-') &&
						item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each Mega Stone/Primal Orb/Rusted item/Origin item/Ogerpon Mask/Arceus Plate/Silvally Memory.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.join('/') !== pokemon.species.types.join('/')) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				this.add('-end', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] A Golden Experience STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'STABmons Move Legality', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Blaziken-Mega', 'Basculegion', 'Basculegion-F', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao',
			'Cloyster', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Incarnate',
			'Espathra', 'Eternatus', 'Flutter Mane', 'Garchomp', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kartana',
			'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lilligant-Hisui', 'Lucario-Mega', 'Lucario-Mega-Z', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Munkidori', 'Naganadel', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Ogerpon-Hearthflame',
			'Ogerpon-Wellspring', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier',
			'Tapu Koko', 'Tapu Lele', 'Terapagos', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui',	'Zygarde-50%', 'Moody', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass',
			'Comatose', 'Last Respects', 'Rage Fist', 'Shadow Tag', 'Shed Tail',
		],
		restricted: [
			'Belly Drum', 'Big Bang', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed',
			'Fillet Away', 'Final Gambit', 'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'Nihil Light', 'No Retreat', 'Revival Blessing', 'Sappy Seed', 'Shell Smash',
			'Shift Gear', 'Sizzly Slide', 'Thousand Arrows', 'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance',  'Wicked Blow',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		mod: 'gen9agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Godly Gift Mod', 'Mega Rayquaza Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Groudon-Primal', 'Koraidon', 'Miraidon', 'Shuckle', 'Xerneas',
			'Arena Trap', 'Huge Power', 'Light Power', 'Moody', 'Pure Power', 'Swift Swim', 'King\'s Rock', 'Quick Claw', 'Assist',
			'Baton Pass', 'Last Respects', 'Rage Fist', 'Shadow Tag', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Blaziken-Mega', 'Calyrex-Ice', 'Chi-Yu', 'Chien-Pao', 'Darmanitan-Galar', 'Deoxys-Normal', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dracovish',
			'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega', 'Kingambit',
			'Kyogre', 'Kyogre-Primal', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lucario-Mega-Z', 'Lugia', 'Lunala', 'Magearna', 'Marowak-Alola', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Pheromosa', 'Pikachu', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Scream Tail', 'Serperior', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Spectrier', 'Swellow', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned',
			'Zekrom', 'Power Construct',
		],
		unbanlist: ['Light of Ruin'],
	},
	{
		name: "[Gen 9] A Golden Experience Pokebilities AAA",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously, as well as one ability they cannot normally use.`,
		mod: 'pokebilitiesage',
		ruleset: ['Standard NatDex', '!Obtainable Abilities', 'Ability Clause = 2', 'AAA Restricted Abilities', 'Inaccurate Sleep Moves Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [
			'Annihilape', 'Arcanine-Hisui', 'Arceus', 'Archaludon', 'Azumarill', 'Basculegion', 'Basculin', 'Baxcalibur', 'Blaziken', 'Braviary-Hisui', 'Calyrex-Ice',
			'Calyrex-Shadow', 'Ceruledge', 'Cetitan', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Conkeldurr', 'Darkrai', 'Deoxys-Attack',
			'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Drednaw', 'Enamorus-Incarnate', 'Espathra', 'Eternatus', 'Excadrill', 'Floatzel',
			'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Hoopa-Unbound', 'Houndstone', 'Iron Bundle',
			'Iron Valiant', 'Kingambit', 'Kingdra', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala',
			'Magearna', 'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Noivern-Sinnoh', 'Ogerpon-Hearthflame', 'Palkia', 'Palkia-Origin',
			'Poliwrath', 'Porygon-Z', 'Raging Bolt', 'Rayquaza', 'Reshiram', 'Reuniclus', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna',
			'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Urshifu-Rapid-Strike', 'Venusaur', 'Victreebel', 'Volcarona', 'Walking Wake', 'Weavile', 'Xerneas', 'Yanmega',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zapdos-Galar', 'Zekrom', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Shadow Tag', 'Regenerator > 2', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Baton Pass', 'Shed Tail', 'Stored Power',
		],
		restricted: [
			'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Hydrophilic', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magma Armor', 'Orichalcum Pulse',
			'Parental Bond', 'Poison Heal', 'Psychic Prowess', 'Punch Prodigee', 'Pure Power', 'Quick Draw', 'Sand Veil', 'Simple', 'Snow Cloak', 'Speed Boost', 'Stakeout', 'Stench', 'Tinted Lens', 'Toxic Debris', 'Triage',
			'Unburden', 'Water Bubble', 'Whiplash', 'Wonder Guard',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					const effect = 'ability:' + this.toID(innate);
					pokemon.volatiles[effect] = this.initEffectState({ id: effect, target: pokemon });
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 9] A Golden Experience No Holds Barred!",
		desc: `Pok&eacute;mon combine their Attack and Special Attack stats, as well as their Defense and Special Defense stats.`,
		mod: 'gen9agoldenexperience',
		// searchShow: false,
		ruleset: ['Standard NatDex', 'Inaccurate Sleep Moves Clause', 'Non-Signature Z-Move Clause', 'Data Mod'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Blissey', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga',
			'Dialga-Origin', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Terapagos', 'Volcarona', 'Zacian', 'Zacian-Crowned',
			'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		actions: {
			getDamage(source, target, move, suppressMessages = false) {
				if (typeof move === 'string') move = this.dex.getActiveMove(move);

				if (typeof move === 'number') {
					const basePower = move;
					move = new Dex.Move({
						basePower,
						type: '???',
						category: 'Physical',
						willCrit: false,
					}) as ActiveMove;
					move.hit = 0;
				}

				if (!target.runImmunity(move, !suppressMessages)) {
					return false;
				}

				if (move.ohko) return this.battle.gen === 3 ? target.hp : target.maxhp;
				if (move.damageCallback) return move.damageCallback.call(this.battle, source, target);
				if (move.damage === 'level') {
					return source.level;
				} else if (move.damage) {
					return move.damage;
				}

				const category = this.battle.getCategory(move);

				let basePower: number | false | null = move.basePower;
				if (move.basePowerCallback) {
					basePower = move.basePowerCallback.call(this.battle, source, target, move);
				}
				if (!basePower) return basePower === 0 ? undefined : basePower;
				basePower = this.battle.clampIntRange(basePower, 1);

				let critMult;
				let critRatio = this.battle.runEvent('ModifyCritRatio', source, target, move, move.critRatio || 0);
				if (this.battle.gen <= 5) {
					critRatio = this.battle.clampIntRange(critRatio, 0, 5);
					critMult = [0, 16, 8, 4, 3, 2];
				} else {
					critRatio = this.battle.clampIntRange(critRatio, 0, 4);
					if (this.battle.gen === 6) {
						critMult = [0, 16, 8, 2, 1];
					} else {
						critMult = [0, 24, 8, 2, 1];
					}
				}

				const moveHit = target.getMoveHitData(move);
				moveHit.crit = move.willCrit || false;
				if (move.willCrit === undefined) {
					if (critRatio) {
						moveHit.crit = this.battle.randomChance(1, critMult[critRatio]);
					}
				}

				if (moveHit.crit) {
					moveHit.crit = this.battle.runEvent('CriticalHit', target, null, move);
				}

				// happens after crit calculation
				basePower = this.battle.runEvent('BasePower', source, target, move, basePower, true);

				if (!basePower) return 0;
				basePower = this.battle.clampIntRange(basePower, 1);
				// Hacked Max Moves have 0 base power, even if you Dynamax
				if ((!source.volatiles['dynamax'] && move.isMax) || (move.isMax && this.dex.moves.get(move.baseMove).isMax)) {
					basePower = 0;
				}

				const dexMove = this.dex.moves.get(move.id);
				if (source.terastallized && (source.terastallized === 'Stellar' ?
					!source.stellarBoostedTypes.includes(move.type) : source.hasType(move.type)) &&
					basePower < 60 && dexMove.priority <= 0 && !dexMove.multihit &&
					// Hard move.basePower check for moves like Dragon Energy that have variable BP
					!((move.basePower === 0 || move.basePower === 150) && move.basePowerCallback)
				) {
					basePower = 60;
				}

				const level = source.level;

				const attacker = move.overrideOffensivePokemon === 'target' ? target : source;
				const defender = move.overrideDefensivePokemon === 'source' ? source : target;

				const isPhysical = move.category === 'Physical';
				let attackStat: StatIDExceptHP = move.overrideOffensiveStat || (isPhysical ? 'atk' : 'spa');
				const defenseStat: StatIDExceptHP = move.overrideDefensiveStat || (isPhysical ? 'def' : 'spd');

				const statTable = { atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe' };

				const otherHalf: { [k: string]: StatIDExceptHP & Omit <StatIDExceptHP, "spe"> } = {
					'atk': 'spa',
					'def': 'spd',
					'spa': 'atk',
					'spd': 'def',
				};

				let atkBoosts = attacker.boosts[attackStat];
				let defBoosts = defender.boosts[defenseStat];

				let otherAtkBoosts = attackStat === 'spe' ? 0 : attacker.boosts[otherHalf[attackStat] as StatIDExceptHP];
				let otherDefBoosts = defenseStat === 'spe' ? 0 : defender.boosts[otherHalf[defenseStat] as StatIDExceptHP];

				let ignoreNegativeOffensive = !!move.ignoreNegativeOffensive;
				let ignorePositiveDefensive = !!move.ignorePositiveDefensive;

				if (moveHit.crit) {
					ignoreNegativeOffensive = true;
					ignorePositiveDefensive = true;
				}
				const ignoreOffensive = !!(move.ignoreOffensive || (ignoreNegativeOffensive && atkBoosts < 0));
				const ignoreDefensive = !!(move.ignoreDefensive || (ignorePositiveDefensive && defBoosts > 0));

				if (ignoreOffensive) {
					this.battle.debug('Negating (sp)atk boost/penalty.');
					atkBoosts = 0;
					otherAtkBoosts = 0;
				}
				if (ignoreDefensive) {
					this.battle.debug('Negating (sp)def boost/penalty.');
					defBoosts = 0;
					otherDefBoosts = 0;
				}

				let attack = attacker.calculateStat(attackStat, atkBoosts, 1, source);
				let defense = defender.calculateStat(defenseStat, defBoosts, 1, target);

				if (otherHalf[attackStat]) attack += attacker.calculateStat(otherHalf[attackStat], otherAtkBoosts, 1, source);
				if (otherHalf[defenseStat]) defense += defender.calculateStat(otherHalf[defenseStat], otherDefBoosts, 1, target);

				attackStat = (category === 'Physical' ? 'atk' : 'spa');

				// Apply Stat Modifiers
				attack = this.battle.runEvent('Modify' + statTable[attackStat], source, target, move, attack);
				defense = this.battle.runEvent('Modify' + statTable[defenseStat], target, source, move, defense);

				if (this.battle.gen <= 4 && ['explosion', 'selfdestruct'].includes(move.id) && defenseStat === 'def') {
					defense = this.battle.clampIntRange(Math.floor(defense / 2), 1);
				}

				const tr = this.battle.trunc;

				// int(int(int(2 * L / 5 + 2) * A * P / D) / 50);
				const baseDamage = tr(tr(tr(tr(2 * level / 5 + 2) * basePower * attack) / defense) / 50);

				// Calculate damage modifiers separately (order differs between generations)
				return this.modifyDamage(baseDamage, source, target, move, suppressMessages);
			},
		},
	},

	// Touhoumons
	///////////////////////////////////////////////////////////////////

	{
		section: "Touhoumons",
	},
	{
		name: "[Gen 9] Touhoumons",
		desc: `2hu`,
		mod: 'gen9toho',
		ruleset: ['Standard NatDex', '!Sleep Clause Mod', 'Terastal Clause', 'Z-Move Clause', 'Data Preview'],
		banlist: ['Bug Gem', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem', 'Grass Gem', 'Ground Gem', 'Ice Gem', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'],
		unbanlist: ['Light of Ruin'],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Toho') {
					return [set.species + ' is not a Touhou character.'];
				}
				if (set.species == 'Cirno-Tanned' && set.ability !== 'Drought')
					 return ["Cirno-Tanned can only have Drought as its ability."]
				if ((set.species !== 'Cirno-Tanned' && set.species !== 'Cirno') && set.ability === 'Drought')
					 return ["Only Cirno-Tanned can have Drought as its ability."]
			}
		},
	},
	{
		name: "[Gen 9] Touhoumons Doubles",
		desc: `2hu`,
		mod: 'gen9toho',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', '!Sleep Clause Mod', 'Terastal Clause', 'Z-Move Clause', 'Data Preview'],
		banlist: ['Bug Gem', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem', 'Grass Gem', 'Ground Gem', 'Ice Gem', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'],
		unbanlist: ['Light of Ruin'],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'DToho') {
					return [set.species + ' is not a Touhou character.'];
				}
				if (set.species == 'Cirno-Tanned' && set.ability !== 'Drought')
					 return ["Cirno-Tanned can only have Drought as its ability."]
				if ((set.species !== 'Cirno-Tanned' && set.species !== 'Cirno') && set.ability === 'Drought')
					 return ["Only Cirno-Tanned can have Drought as its ability."]
			}
		},
	},
];
