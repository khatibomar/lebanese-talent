import { Programmer } from "@/types/programmer"
import ProgrammerCard from "@/components/programmer-card"

const profiles: Programmer[] = [
  {
    id: "f96123c6-1237-440a-bdc2-5ce0d7180d07",
    name: "Aw Aw",
    pictureURL:
      "https://i.pinimg.com/originals/b4/1b/29/b41b29347b5c33d54ad336bd8527dcb5.jpg",
    programmingLanguages: ["go", "react", "dotnet"],
    description: "highly skilled Dog",
  },
  {
    id: "efc1485a-1394-4ef0-a6d2-f603140ab441",
    name: "Bes Bes",
    pictureURL:
      "https://i.pinimg.com/564x/40/5e/12/405e12a5d4453246657c5ff39ee290ef.jpg",
    programmingLanguages: ["react", "node"],
    description: "highly skilled Cat",
  },
]

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Lebanese Talent Pool <br className="hidden sm:inline" />
          Find your best candidate.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Looking for your next hire? Lebanese talent is a place where recuiters
          can find there best Lebanese candidates.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {profiles.map((programmer, index) => (
          <ProgrammerCard
            key={index}
            id={programmer.id}
            name={programmer.name}
            description={programmer.description}
            pictureURL={programmer.pictureURL}
            programmingLanguages={programmer.programmingLanguages}
          />
        ))}
      </div>
    </section>
  )
}
