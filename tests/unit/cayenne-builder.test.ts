import { describe, it, expect } from 'vitest';
import { CayenneExpBuilder } from '../../src/stats/cayenne-builder.js';
import { GameType } from '../../src/types/common.js';

describe('CayenneExpBuilder', () => {
  it('builds simple season filter', () => {
    const exp = new CayenneExpBuilder()
      .seasonId('20242025')
      .build();
    expect(exp).toBe('seasonId=20242025');
  });

  it('builds compound expression', () => {
    const exp = new CayenneExpBuilder()
      .seasonId('20242025')
      .gameTypeId(GameType.RegularSeason)
      .build();
    expect(exp).toBe('seasonId=20242025 and gameTypeId=2');
  });

  it('builds expression with position', () => {
    const exp = new CayenneExpBuilder()
      .seasonId('20242025')
      .gameTypeId(GameType.RegularSeason)
      .position('F')
      .build();
    expect(exp).toBe('seasonId=20242025 and gameTypeId=2 and positionCode="F"');
  });

  it('builds expression with gamesPlayed', () => {
    const exp = new CayenneExpBuilder()
      .seasonId('20242025')
      .gamesPlayed('>=', 20)
      .build();
    expect(exp).toBe('seasonId=20242025 and gamesPlayed>=20');
  });

  it('builds expression with date range', () => {
    const exp = new CayenneExpBuilder()
      .gameDate('>=', '2024-10-01')
      .gameDate('<=', '2025-04-15')
      .build();
    expect(exp).toBe('gameDate>="2024-10-01" and gameDate<="2025-04-15"');
  });

  it('builds expression with custom where clause', () => {
    const exp = new CayenneExpBuilder()
      .where('shootsCatches', '=', 'L')
      .build();
    expect(exp).toBe('shootsCatches="L"');
  });

  it('handles raw expressions', () => {
    const exp = new CayenneExpBuilder()
      .raw('seasonId=20242025')
      .raw('gameTypeId=3')
      .build();
    expect(exp).toBe('seasonId=20242025 and gameTypeId=3');
  });

  it('resets builder state', () => {
    const builder = new CayenneExpBuilder();
    builder.seasonId('20242025');
    builder.reset();
    const exp = builder.seasonId('20232024').build();
    expect(exp).toBe('seasonId=20232024');
  });

  it('returns empty string with no expressions', () => {
    const exp = new CayenneExpBuilder().build();
    expect(exp).toBe('');
  });

  it('handles teamId and franchiseId', () => {
    const exp = new CayenneExpBuilder()
      .teamId(10)
      .franchiseId(5)
      .build();
    expect(exp).toBe('teamId=10 and franchiseId=5');
  });
});
