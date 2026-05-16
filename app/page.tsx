import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl">
        Welcome to the Deployment of an nextjs app in ec2 instance
      </h1>
      <span>Have fun!</span>
    </div>
  );
}
