# hotwo:
# $ make up

up:
	open http://localhost:1313;\
	cd exampleSite;\
	hugo server -D \
	--config ../config.demo.toml \

dev:
	yarn install;\
	yarn run dev

# build:
# 	cd ./themes/hugo-bootstrap;\
# 	yarn install;\
# 	yarn build;\
# 	cd ../../;\
# 	hugo;\
