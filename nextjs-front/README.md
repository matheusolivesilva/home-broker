# Home Broker: NextJS Frontend

This is the front of the Home Broker application. Here you'll be able to interact with home broker, buy and sell assets, manage your wallet and see in real time the daily assets being negotiated.

![Home Broker](/docs/home-broker.gif)

## Table of Contents

- [📝 Requirements](#-requirements)
- [💡 Features](#-features)
  - [My investments (Wallet)](#my-investments-wallet)
  - [Sell/Buy assets](#sellbuy-assets)
  - [Real time chart with negotiations (using SSE)](#real-time-chart-with-negotiations-using-sse)
- [📦 Docs](#-docs)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
- [🚀 How to Run?](#-how-to-run)
- [🔄 How to use this?](#-how-to-use-this)
- [⚙️ Made With](#️-made-with)
- [🧑🏻‍💻 Author](#-author)

## 📝 Requirements

- [Docker](https://www.docker.com/get-started/)

## 💡 Features

### My investments (Wallet)

![My Investments](/docs/investments.gif)

### Sell/Buy assets

![Sell/buy assets](/docs/sell-buy-chart.gif)

### Real time chart with negotiations (using SSE)

![Chart](/docs/sell-buy-chart.gif)

## 📦 Docs

### Architecture

![Frontend Architecture](/docs/architecture.jpg)

### Technologies

As shown above in the architecture, was used in this project the following stack:

- ReactJS as frontend library;
- NextJS as framework in order to work with cache, SSR and Server Components;
- TailwindCSS as CSS library;
- Flowbite React as frontend components library.

## 🚀 How to Run?

You can run by simply using the following comand:

```bash
docker-compose up
```

Or running directly on your machine:

```bash
npm run dev
```

Congrats! You're now able to negotiate your assets in a home broker ;)

## 🔄 How to use this?

1. Run the [backend application ](../nestjs-microservice/README.md/#🚀-how-to-run);
2. Run the application as shown in [How to Run?](#how-to-run);
3. Access [http://localhost:3001/wallet1](http://localhost:3001/wallet1) (to avoid port conflict with NestJS, the port was fixed to 3001 in package.json instead of automatically generated);
4. Enjoy!

## ⚙️ Made With:

- NextJS 13.4.7
- ReactJS 18.2.0
- Tailwind 3.3.2
- Flowbite React 0.4.9
- Typescript 5.1.3
- Docker 20.10.7

## 🧑🏻‍💻 Author

_Matheus Oliveira da Silva_ - [Github](https://github.com/matheusolivesilva) | [Linkedin](https://www.linkedin.com/in/matheusoliveirasilva/)
