// src/app/products/layout.tsx
export const metadata = {
    title: "Inv-Manage",
    icons: {
      icon: "https://prathvilolu.s3.ap-south-1.amazonaws.com/logo.png",
    },
  };
  
  export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  