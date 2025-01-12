import { auth } from "@/auth";

const AuthCheckPage = async () => {
  const session = await auth();
  return <p className="mt-40">{session?.user.role}</p>;
};

export default AuthCheckPage;
