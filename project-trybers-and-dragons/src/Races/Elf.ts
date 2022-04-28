import Race from './Race';

export default class Elf extends Race {
  private _lifePoints = 99;
  static count = 0;
  constructor(public _name: string, public _dexterity: number) {
    super(_name, _dexterity);
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}