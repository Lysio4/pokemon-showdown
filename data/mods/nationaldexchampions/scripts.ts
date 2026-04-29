import { baseLearnsets } from "../../learnsets";

export const Scripts: ModdedBattleScriptsData = {
  gen: 9,
  inherit: 'champions',
  calculatePP(move: Move, ppUps = 3) {
    if (move.noPPBoosts) return move.pp;
    let pp = move.pp * (5 + ppUps) / 5;
    if (this.gen <= 2 && move.pp === 40) pp -= ppUps;
    return pp;
  },

  statModify(baseStats: StatsTable, set: PokemonSet, statName: StatID): number {
    const tr = this.trunc;
    let stat = baseStats[statName];
    if (statName === 'hp') {
      return tr(tr(2 * stat + set.ivs[statName] + tr(set.evs[statName] / 4) + 100) * set.level / 100 + 10);
    }
    stat = tr(tr(2 * stat + set.ivs[statName] + tr(set.evs[statName] / 4)) * set.level / 100 + 5);
    const nature = this.dex.natures.get(set.nature);
    // Natures are calculated with 16-bit truncation.
    // This only affects Eternatus-Eternamax in Pure Hackmons.
    if (nature.plus === statName) {
      stat = this.ruleTable.has('overflowstatmod') ? Math.min(stat, 595) : stat;
      stat = tr(tr(stat * 110, 16) / 100);
    } else if (nature.minus === statName) {
      stat = this.ruleTable.has('overflowstatmod') ? Math.min(stat, 728) : stat;
      stat = tr(tr(stat * 90, 16) / 100);
    }
    return stat;
  },

  init() {
    for (const i in this.data.Moves) {
      if (this.data.Moves[i].pp > 20) {
        continue;
      }
    }
  }
};
