import { sets } from "@/sets/sets";
import { MenuCard } from "./menu-card";
import { Separator } from "@/components/ui/separator";

export default function Page(): React.ReactElement {
  // const sets = await api.set.getAll.query().catch(() => {
  //   console.error(`Something went wrong when fetching all sets!`);
  // });
  return (
    <div className="flex flex-col gap-8 p-2 md:p-4 lg:p-6 xl:p-16">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Card Sets
        <Separator className="mt-4" />
      </h1>
      <div className="grid max-w-full grid-cols-1 gap-2 md:grid-cols-1 lg:gap-6 xl:grid-cols-2 xl:gap-8">
        {sets
          ? sets.map((set) => {
              return <MenuCard key={set.slug} cardSet={set} />;
            })
          : null}
      </div>
    </div>
  );
}
