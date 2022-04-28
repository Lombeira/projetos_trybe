import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: SimpleFighter): void;
  special(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}
