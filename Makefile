
test:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui bdd \
		--require should

.PHONY: test
