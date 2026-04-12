export const Conditions: {[k: string]: ConditionData} = {
	// Champions stuff
	slp: {
		inherit: true,
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'slp', '[from] ability: ' + sourceEffect.name, `[of] ${source}`);
			} else if (sourceEffect && sourceEffect.effectType === 'Move') {
				this.add('-status', target, 'slp', `[from] move: ${sourceEffect.name}`);
			} else {
				this.add('-status', target, 'slp');
			}

			// 1/3 chance for a Pokemon to wake up on turn 2
			this.effectState.startTime = this.sample([2, 3, 3]);
			this.effectState.time = this.effectState.startTime;

			if (target.removeVolatile('nightmare')) {
				this.add('-end', target, 'Nightmare', '[silent]');
			}
		},
	},
	// AGE
	par: {
		name: 'par',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'paraorb') {
				this.add('-status', target, 'par', '[from] item: Para Orb');
			}else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpe(spe, pokemon) {
			if (!pokemon.hasAbility('quickfeet')) {
				return this.chainModify(0.5);
			}
		},
	},
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.setStatus('');
			}
		},
		onModifyDefPriority: 4,
		onModifyDef(def, pokemon){
			if (!pokemon.hasAbility('marvelscale')) {
				return this.chainModify(0.67);
			}
		},
		onModifySpDPriority: 4,
		onModifySpD(spd, pokemon){
			if (!pokemon.hasAbility('marvelscale')) {
				return this.chainModify(0.67);
			}
		},
		onHit(target, source, move) {
			if (move.thawsTarget || move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus();
			}
		},
	},
	eternalwinter: {
		name: 'eternalwinter',
		effectType: 'Weather',
		duration: 0,
		onModifyDefPriority: 10,
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice') && this.field.isWeather('eternalwinter')) {
				return this.modify(def, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'eternalwinter', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'eternalwinter', '[upkeep]');
			this.eachEvent('Weather');
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (defender.hasType('Ice') && (move.type === 'Fire' || move.type === 'Rock' || move.type === 'Fighting' || move.type === 'Steel')) {
				this.debug('Eternal Winter weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (defender.hasType('Ice') && (move.type === 'Fire' || move.type === 'Rock' || move.type === 'Fighting' || move.type === 'Steel')) {
				this.debug('Eternal Winter weaken');
				return this.chainModify(0.5);
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	endlessdream: { 
		name: "Endless Dream",
		effectType: 'PseudoWeather',
		duration: 0,
		onFieldStart(field, source, effect) {
			this.add('-pseudoweather', 'EndlessDream', '[of] ' + source);
		},
		onSetStatus(status, target, source, effect) {
			if (target.hasAbility('vitalspirit') || target.hasAbility('insomnia')) return;
			if ((effect as Move)?.status || effect?.id === 'yawn') {
				this.add('-fail', target, '[from] Endless Dream');
			}
			return false;
		},
		onResidualOrder: 23,
		onEnd() {
			this.add('-fieldend', 'none');
		},
	},
};