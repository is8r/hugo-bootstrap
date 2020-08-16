# hotwo:
# $ make up

up:
	open http://localhost:1313; \
	cd exampleSite; \
	hugo server -D \
	--themesDir ../../ \
	--config ../assets/demo/config.toml

dev:
	yarn install;\
	yarn run dev

build:
	yarn run build; \
	cd exampleSite; \
	hugo \
	--themesDir ../../ \
	--config ../assets/demo/config.toml \
	--minify

setup:
	cp ./assets/demo/content/search.adoc ./exampleSite/content/search.adoc; \
