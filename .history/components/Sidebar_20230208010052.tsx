"use client";

import React from "react";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

export default function Sidebar() {
  const { data: session } = useSession();
  const [chats] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div></div>
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div>
          <img
            src={session.user?.image!}
            alt="no user profile image"
            className="h-12 w-12 rounded-full  mx-auto "
          />

          <h2 className="text-gray-300 font-bold text-2xl text-center">
            {session.user?.name!}
          </h2>
          <h2
            onClick={() => signOut()}
            className=" text-red-700 hover:opacity-50 font-bold text-xl mt-3 text-center cursor-pointer"
          >
            Log Out
          </h2>
        </div>
      )}
    </div>
  );
}
