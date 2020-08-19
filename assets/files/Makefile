# hotwo:
# $ make up

up:
	open http://localhost:1313; \
	cd exampleSite; \
	hugo server -D \
	--themesDir ../../ \
	--config ../assets/files/config.toml

dev:
	yarn install;\
	yarn run dev

build:
	yarn run build; \
	cd exampleSite; \
	hugo \
	--themesDir ../../ \
	--config ../assets/files/config.toml \
	--minify

setup:
	cp ./assets/files/content/search.adoc ./exampleSite/content/search.adoc; \
