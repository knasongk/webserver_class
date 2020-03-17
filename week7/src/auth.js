import bcrypt from 'bcrypt'

const saltRounds = 10;

export const hashPassword = originalPassword =>
	bcrypt.hash(originalPassword, saltRounds);

export const compareHased = (original, hashed) => 
	bcrypt.compre(original, hashed);
