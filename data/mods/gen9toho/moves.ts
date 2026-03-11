export const Moves: {[moveid: string]: ModdedMoveData} = {
	/*
	placeholder: {
		name: "",
		type: "",
		category: "",
		basePower: 0,
		accuracy: 100,
		pp: 10,
		shortDesc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "", target);
		},
		secondary: null,
		target: "normal",
	},
	*/
	dreamseal: {
		inherit: true,
		isNonstandard: null,
	},
	silverdagger: {
		inherit: true,
		isNonstandard: null,
	},
	forbiddenbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	shikigamirush: {
		inherit: true,
		isNonstandard: null,
	},
	lunaticbullet: {
		inherit: true,
		isNonstandard: null,
	},
	nervepoison: {
		inherit: true,
		isNonstandard: null,
	},
	'superscope3d': {
		inherit: true,
		isNonstandard: null,
	},
	cloudfist: {
		inherit: true,
		isNonstandard: null,
	},
	waterplates: {
		inherit: true,
		isNonstandard: null,
	},
	bodyswap: {
		inherit: true,
		isNonstandard: null,
	},
	dancingblow: {
		inherit: true,
		isNonstandard: null,
	},
	stonestacking: {
		inherit: true,
		isNonstandard: null,
	},
	sculptedarmor: {
		inherit: true,
		isNonstandard: null,
	},
	excavate: {
		inherit: true,
		isNonstandard: null,
	},
	ironchomp: {
		inherit: true,
		isNonstandard: null,
	},
	missile: {
		inherit: true,
		isNonstandard: null,
	},
	wickedenergy: {
		inherit: true,
		isNonstandard: null,
	},
	dustupheaval: {
		inherit: true,
		isNonstandard: null,
	},
	invokeamaterasu: {
		inherit: true,
		isNonstandard: null,
	},
	invokehonoikazuchi: {
		inherit: true,
		isNonstandard: null,
	},
	invokeishikoridome: {
		inherit: true,
		isNonstandard: null,
	},

	//vanilla
	toxicspikes: {
		inherit: true,
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasAbility('dexterity')) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', `[of] ${pokemon}`);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots')) {
					// do nothing
				} else if (this.effectState.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
	},
	stickyweb: {
		inherit: true,
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasAbility('dexterity') || pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({ spe: -1 }, pokemon, pokemon.side.foe.active[0], this.dex.getActiveMove('stickyweb'));
			},
		},
	},
	hyperspacefury: {
		inherit: true,
		onTry(source) {
			if (source.species.name === 'Junko') {
				return;
			}
			this.hint("Only a Pokemon whose form is Junko can use this move.");
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Hyperspace Fury');
			return null;
		},
	},
};
