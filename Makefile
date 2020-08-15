# hotwo:
# $ make up

up:
	open http://localhost:1313; \
	cd exampleSite; \
	hugo server -D \
	--config ../assets/demo/config.toml

dev:
	yarn install;\
	yarn run dev

build:
	cd exampleSite; \
	hugo \
	--config ../assets/demo/config.toml \
	--minify

setup:
	cp ./assets/demo/config.toml ../../config.toml; \
	cp ./assets/demo/content/search.adoc ../../content/search.adoc; \
