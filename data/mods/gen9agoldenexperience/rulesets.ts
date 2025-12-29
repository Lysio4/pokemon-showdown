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
			const sigZcrystals = ["Pikanium Z", "Pikashunium Z", "Aloraichium Z", "Eevium Z", "Snorlium Z", "Mewnium Z", "Decidium Z", "Incinium Z", "Primarium Z", "Lycanium Z", "Mimikium Z", "Kommonium Z", "Tapunium Z", "Solganium Z", "Lunalium Z", "Ultranecrozium Z", "Marshadium Z"];
			// if (item.zMove && !sigZcrystals.includes(item.name)) return [`${set.name || set.species}'s item ${item.name} is banned by Non-Signature Z-Move Clause.`];
			if (item.zMove && !item.itemUser) return [`${set.name || set.species}'s item ${item.name} is banned by Non-Signature Z-Move Clause.`];
		},
		onBegin() {
			this.add('rule', 'Non-Signature Z-Move Clause: non-signature Z-Moves are banned');
		},
	},
};