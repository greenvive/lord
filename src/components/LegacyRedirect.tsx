"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LegacyRedirect({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center px-5 py-24 text-center">
      <p className="text-sm text-black/50">
        페이지가 이동되었습니다.{" "}
        <Link href={to} className="font-bold text-lord-orange">
          여기를 눌러 이동하세요.
        </Link>
      </p>
    </div>
  );
}
