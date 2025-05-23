import React from "react";
import SearchingBar from "./searching-bar";
import { Button } from "../ui/button";
import Image from "next/image";
import { signOutUser } from "@/lib/actions/user.actions";

interface Props {
  userId: string;
  accountId: string;
}

const Header = ({ userId, accountId }: Props) => {
  return (
    <header className="header">
      <SearchingBar />
      <div className="header-wrapper">
        {/* //TODO: FileUploader
            <FileUploader ownerId={userId} accountId={accountId} />
        */}
        FILE UPLOADER
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
