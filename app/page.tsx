import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "3rem",
      fontWeight: "bold"
    }}>
      Hello World CI/CD avec Jenkins + Docker + Heroku
    </main>

  );
}
