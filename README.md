# Next.js Complete Course

This repository contains a complete guide on Next.js.

## Create New Project

You don't need to install a CLI to create a new Next.js project.

```bash
npx create-next-app@latest

```

## Fix Initial Issues

Create a `css-custom.d.ts` file in the root of the project and add the following code to make ESLint understand CSS imports:

```ts
declare module '*.css';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
```

Add the following configurations into the Tailwind CSS IntelliSense settings:

```json
"files.associations": {
  "*.css": "tailwindcss"
}
```

Use Prisma Studio:

```bash
npx prisma studio
```

## Resources

- [Codevolution YouTube course](https://youtu.be/b4ba60j_4o8?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY)
- [gopinav/Next.js-15-Tutorials on GitHub](https://github.com/gopinav/Next.js-15-Tutorials)
- [Next.js documentation](https://nextjs.org/docs/getting-started)
