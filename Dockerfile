FROM node:12.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install && \
  npm run build

# build necessary, even if no static files are needed,
# since it builds the server as well
# RUN npm run build

EXPOSE 4000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# start the app
CMD [ "npm", "run", "start" ]
