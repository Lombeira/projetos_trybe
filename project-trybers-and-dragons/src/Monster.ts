import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const Enemy = enemy;

    Enemy.receiveDamage(this._strength);
  }
}
