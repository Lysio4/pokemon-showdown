import {FS} from '../../../lib';
import {toID} from '../../../sim/dex-data';
import {Pokemon} from "../../../sim/pokemon";

export const Rulesets: {[k: string]: ModdedFormatData} = {
	standardag: {
		effectType: 'ValidatorRule',
		name: 'Standard AG',
		desc: "The minimal ruleset for Anything Goes",
		ruleset: [
			'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
	},
};