FROM node

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["node", "index.js"]
