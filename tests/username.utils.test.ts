import { isValidUsername } from '../src/utils/username.utils';

test('accepte un nom simple', () => {
expect(isValidUsername('faris')).toBe(true);
});