import { isHomeBrokerClosed } from "@/app/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { wallet_id: string } }
) {
  const response = await fetch(
    `http://host.docker.internal:3000/wallets/${params.wallet_id}/assets`,
    {
      next: {
        tags: ["orders-wallet-${wallet_id}"],
        revalidate: isHomeBrokerClosed() ? 60 * 60 : 5,
      },
    }
  );
  return NextResponse.json(await response.json());
}
