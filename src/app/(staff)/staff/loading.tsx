import { Loader2 } from "lucide-react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Loader2 className=" w-14 h-14 animate-spin" />
    </div>
  );
}
