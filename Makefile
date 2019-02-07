install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
start-even:
	npx babel-node -- src/bin/brain-even.js
start-calc:
	npx babel-node -- src/bin/brain-calc.js
start-gcd:
	npx babel-node -- src/bin/brain-gcd.js
start-prog:
	npx babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npx eslint .
