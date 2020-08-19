# hotwo:
# $ make up

up:
	open http://localhost:1313; \
	hugo server -D --watch

dev:
	cd ./themes/hugo-bootstrap;\
	yarn install;\
	yarn dev

build:
	cd ./themes/hugo-bootstrap;\
	yarn install;\
	yarn build;\
	cd ../../;\
	hugo \
	--minify \

setup:
	cp ./themes/hugo-bootstrap/assets/files/content/search.adoc ./content/search.adoc; \
