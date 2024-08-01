import { auth } from "@/auth";

export default async function ProfileComponent() {
  const session = await auth();

  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <div>
      <p>profile works, welcome {session?.user.name}</p>
    </div>
  );
}
