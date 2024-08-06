import NavMenu from "@/components/NavMenu";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getServerSession();

    if (!session) {
        return <NavMenu />;
    }
    redirect("/");
}
