import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { SessionProvider } from "../components/SessionProvider";
import Login from "../components/Login";
import { getServerSession } from "next-auth";
import {authOptions} from "../pages/api/auth/[...nextauth]"
import ClientProvider from "../components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] ">
                <Sidebar />
              </div>
              <ClientProvider/>
              <div className="bg-[#343531] flex-1  ">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
