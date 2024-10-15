# Axiom

![GitHub last commit](https://img.shields.io/github/last-commit/pyyupsk/axiom?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/pyyupsk/axiom?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/pyyupsk/axiom?style=for-the-badge)

**Axiom** is a cutting-edge web development boilerplate, built to accelerate the creation of scalable, high-performance applications. Leveraging Next.js, TypeScript, Prisma, NextAuth.js, and Tailwind CSS, Axiom provides everything you need to build modern web applications with speed, type safety, and style.

## 🌟 Features

- **Modern Framework + Type Safety**  
   Next.js and TypeScript for robust, scalable applications with enhanced developer experience.

- **Effortless Data + Secure Auth**  
   Prisma ORM for seamless database management and NextAuth.js for secure authentication.

- **Stylish UI + Ready Components**  
   Tailwind CSS and Shadcn/UI for beautiful, responsive designs and pre-built components.

## 📖 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pyyupsk/axiom.git
cd axiom
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project and configure it with the necessary environment variables. Refer to `.env.example` for guidance.

```bash
cp .env.example .env
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to `http://localhost:3000` to view your application.

### 5. Set Up the Database

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
```

> [!NOTE]
> Make sure to run `npx prisma generate` after setting up the database.

### 6. Deploy Your Application

When you’re ready to deploy, follow the deployment guide in the documentation to push your application to your preferred hosting platform.

## 🛠️ Tech Stack

Axiom is powered by:

- **Next.js**: The React framework for production.
- **TypeScript**: Typed JavaScript at Any Scale.
- **Prisma ORM**: Next-generation ORM for Node.js & TypeScript.
- **NextAuth.js**: Authentication for Next.js apps.
- **Tailwind CSS**: Utility-first CSS framework.
- **Shadcn/UI**: Beautifully designed, customizable components.

## 🎨 Screenshots

[![Home Page](https://axiom-boilerplate.vercel.app/opengraph.png)](https://axiom-boilerplate.vercel.app/)

_Modern, responsive design with Tailwind CSS and Shadcn/UI._

## 🤝 Contributing

We welcome contributions to Axiom! If you’d like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

---
