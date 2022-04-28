import { EnergyType } from '../Energy';

export default abstract class Archetype {
  protected _name: string;
  protected _special: number;
  protected _cost: number;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    if (!this._archetypeInstances) throw new Error('Not implemented');
    return this._archetypeInstances;
  }

  abstract get energyType(): EnergyType;
}
