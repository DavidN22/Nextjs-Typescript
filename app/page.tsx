export default async function Home() {


  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js 15!</h1>
      <p className="text-lg">{data.message}</p>
    </main>
  );
}
