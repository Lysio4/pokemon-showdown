import {FS} from '../../../lib';
import {toID} from '../../../sim/dex-data';
import {Pokemon} from "../../../sim/pokemon";

export const Rulesets: {[k: string]: ModdedFormatData} = {
	evasionabilitiesclause: {
		effectType: 'ValidatorRule',
		name: 'Evasion Abilities Clause',
		desc: "Bans abilities that boost Evasion under certain weather conditions",
		banlist: [],
		onBegin() {
			this.add('rule', 'Evasion Abilities Clause: Evasion abilities are banned');
		},
	},
	nonsignaturezmoveclause: {
		effectType: 'ValidatorRule',
		name: 'Non-Signature Z-Move Clause',
		desc: "Bans Pok&eacute;mon from holding non-signature Z-Crystals",
		onValidateSet(set) {
			const item = this.dex.items.get(set.item);
			if (item.zMove && !item.itemUser) return [`${set.name || set.species}'s item ${item.name} is banned by Non-Signature Z-Move Clause.`];
		},
		onBegin() {
			this.add('rule', 'Non-Signature Z-Move Clause: Non-signature Z-Moves are banned');
		},
	},
	semisleepmovesclause: {
		effectType: 'ValidatorRule',
		name: 'Semi Sleep Moves Clause',
		desc: "Bans all moves that induce sleep, such as Hypnosis, except Spore and Yawn",
		banlist: [],
		onBegin() {
			this.add('rule', 'Semi Sleep Moves Clause: Sleep-inducing moves are banned except Spore and Yawn');
		},
		onValidateSet(set) {
			const problems = [];
			if (set.moves) {
				for (const id of set.moves) {
					const move = this.dex.moves.get(id);
					if (move.status === 'slp' && move.name !== "Spore") problems.push(move.name + ' is banned by Semi Sleep Moves Clause.');
				}
			}
			return problems;
		},
	},
};