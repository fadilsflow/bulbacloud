import MinecraftGrid from "../_components/MinecraftGrid";

export default function MinecraftPage() {
  return (
    <div className="text-center flex flex-col items-center space-y-2">
      <h1 className="text-3xl text-foreground font-bold mt-5">
        Minecraft Hosting
      </h1>
      <p className="text-muted-foreground ">Server gagah dengan harga murah</p>
      <MinecraftGrid/>
    </div>
  );
}
