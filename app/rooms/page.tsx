"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Wifi, Coffee, Tv, Bath } from "lucide-react"

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious room with modern amenities",
    price: 299,
    size: "40m²",
    occupancy: "2 Adults",
    bed: "King Size",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: ["Free Wi-Fi", "Coffee Maker", "Smart TV", "Bathtub"],
  },
  {
    id: "executive",
    name: "Executive Suite",
    description: "Luxury suite with separate living area",
    price: 499,
    size: "65m²",
    occupancy: "2 Adults, 2 Children",
    bed: "King Size + Sofa Bed",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: ["Free Wi-Fi", "Coffee Maker", "Smart TV", "Bathtub"],
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    description: "Ultimate luxury with panoramic views",
    price: 999,
    size: "120m²",
    occupancy: "4 Adults",
    bed: "2 King Size Beds",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: ["Free Wi-Fi", "Coffee Maker", "Smart TV", "Bathtub"],
  },
]

const amenityIcons = {
  "Free Wi-Fi": Wifi,
  "Coffee Maker": Coffee,
  "Smart TV": Tv,
  Bathtub: Bath,
}

export default function RoomsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Luxury hotel rooms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            Rooms & Suites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Choose your perfect stay from our luxury accommodations
          </motion.p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{room.name}</CardTitle>
                    <CardDescription>{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Tabs defaultValue={`${room.id}-image-0`}>
                      <TabsContent value={`${room.id}-image-0`}>
                        <Image
                          src={room.images[0] || "/placeholder.svg"}
                          alt={room.name}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover aspect-video"
                        />
                      </TabsContent>
                      <TabsList className="grid w-full grid-cols-3 h-auto">
                        {room.images.map((_, i) => (
                          <TabsTrigger key={i} value={`${room.id}-image-${i}`} className="p-0">
                            <Image
                              src={room.images[i] || "/placeholder.svg"}
                              alt={`${room.name} view ${i + 1}`}
                              width={100}
                              height={67}
                              className="rounded object-cover aspect-video"
                            />
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Size:</span>
                        <p>{room.size}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Occupancy:</span>
                        <p>{room.occupancy}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Bed:</span>
                        <p>{room.bed}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Price:</span>
                        <p className="font-bold">${room.price}/night</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
                        return (
                          <Badge key={amenity} variant="secondary">
                            {Icon && <Icon className="w-4 h-4 mr-1" />}
                            {amenity}
                          </Badge>
                        )
                      })}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Check Availability</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mx-auto bg-background rounded-lg shadow-lg p-4"
            />
            <Button className="w-full mt-4">Search Availability</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

