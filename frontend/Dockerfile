FROM node:26-alpine

RUN apk update

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

ENV NEXT_PUBLIC_API_URL=https://clic.epfl.ch/crabfit/api
ENV NEXT_PUBLIC_FRONTEND_URL=https://clic.epfl.ch/crabfit

COPY . .
RUN npm run build

# switch to unprivileged user from node base image
RUN chown -R node .
USER node

CMD [ "npm", "start" ]
