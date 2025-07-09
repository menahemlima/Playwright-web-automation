FROM mcr.microsoft.com/playwright:v1.44.1

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]
