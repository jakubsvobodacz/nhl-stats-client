import { GameType } from '../types/common.js';

export class CayenneExpBuilder {
  private expressions: string[] = [];

  seasonId(season: string): this {
    this.expressions.push(`seasonId=${season}`);
    return this;
  }

  gameTypeId(gameType: GameType | number): this {
    this.expressions.push(`gameTypeId=${gameType}`);
    return this;
  }

  teamId(id: number): this {
    this.expressions.push(`teamId=${id}`);
    return this;
  }

  currentTeamId(id: number): this {
    this.expressions.push(`currentTeamId=${id}`);
    return this;
  }

  franchiseId(id: number): this {
    this.expressions.push(`franchiseId=${id}`);
    return this;
  }

  position(code: string): this {
    this.expressions.push(`positionCode="${code}"`);
    return this;
  }

  gamesPlayed(op: string, value: number): this {
    this.expressions.push(`gamesPlayed${op}${value}`);
    return this;
  }

  gameId(id: number): this {
    this.expressions.push(`gameId=${id}`);
    return this;
  }

  gameDate(op: string, date: string): this {
    this.expressions.push(`gameDate${op}"${date}"`);
    return this;
  }

  playerId(id: number): this {
    this.expressions.push(`playerId=${id}`);
    return this;
  }

  where(field: string, op: string, value: string | number): this {
    if (typeof value === 'string') {
      this.expressions.push(`${field}${op}"${value}"`);
    } else {
      this.expressions.push(`${field}${op}${value}`);
    }
    return this;
  }

  raw(expression: string): this {
    this.expressions.push(expression);
    return this;
  }

  build(): string {
    return this.expressions.join(' and ');
  }

  reset(): this {
    this.expressions = [];
    return this;
  }
}
