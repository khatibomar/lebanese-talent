import React from "react"
import Image from "next/image"

import { Programmer } from "@/types/programmer"
import { LanguageIcon } from "@/lib/helpers"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

export default function ProgrammerCard(programmer: Programmer) {
  return (
    <Card key={programmer.id}>
      <Image
        width="250"
        height="250"
        className="h-96 w-full"
        src={programmer.pictureURL}
        alt=""
      ></Image>

      <CardHeader>{programmer.name}</CardHeader>

      <CardDescription className="flex flex-col items-center">
        {programmer.description}
      </CardDescription>

      <CardContent className="m-4 flex flex-row items-center gap-2">
        {programmer.programmingLanguages.map((l, index) => (
          <React.Fragment key={programmer.id + index}>
            {LanguageIcon(l)}
          </React.Fragment>
        ))}
      </CardContent>

      <CardFooter className="flex flex-col items-center">
        <Button variant="ghost">Show Profile</Button>
      </CardFooter>
    </Card>
  )
}
