"use client";

import WalletList from "../components/walletList";
import { useIsMounted } from "../hooks/useIsMounted";
import CreateSCW from "../components/createSCW";
import { Fragment, useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const dynamic = "force-dynamic";

export default function Home() {
  const { isConnected, address } = useAccount();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <main className="flex flex-col py-6">
      <div className="flex flex-col h-full gap-6 justify-center items-center">
        <Fragment>
        {isConnected && <CreateSCW />}

          {address && <WalletList address={address} />}
        </Fragment>
      </div>
    </main>
  );
}