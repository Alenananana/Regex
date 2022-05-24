import Validator from '../Validator';

test('Checking the correct name format', () => {
  const result = new Validator('Te-66_66-st').validateUsername();

  expect(result).toBe('Va-21_07-dim');
});

test('Проверка username', () => {
  const result = new Validator('Te-s_666-t').validateUsername();

  expect(result).toBe('Некорретный формат');
});

test('Проверка username', () => {
  const result = new Validator('Te-st_666-666').validateUsername();

  expect(result).toBe('Некорретный формат');
});

test('Проверка username', () => {
  const result = new Validator('Te_st-666').validateUsername();

  expect(result).toBe('Некорретный формат');
});

test('Проверка username', () => {
  const result = new Validator('-666_te-st').validateUsername();

  expect(result).toBe('Некорретный формат');
});

test('Проверка username', () => {
  const result = new Validator('Test-Tes_t_').validateUsername();

  expect(result).toBe('Некорретный формат');
});

test('Проверка username', () => {
  const result = new Validator('Те-66_66-ст').validateUsername();

  expect(result).toBe('Некорретный формат');
});