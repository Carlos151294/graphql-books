###### Multi-step build process ######
# Build Phase
FROM node:16-alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Run Phase
FROM nginx

# This Port instruction is only for information purposes
EXPOSE 3000 

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html