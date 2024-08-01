import { auth } from "@/auth";
import Link from "next/link";

export default async function ProfileComponent() {
  const session = await auth();

  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <main>
      <nav>
        <Link href="/" className="btn">
          Home
        </Link>
      </nav>
      <section>
        <p>Welcome {session?.user.name}</p>
      </section>
    </main>
  );
}
