"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PocketIcon as Pool, Dumbbell, SpadeIcon as Spa, Wifi, Car, Coffee, Utensils, Bell } from "lucide-react"

const amenities = [
  {
    name: "Swimming Pool",
    description: "Outdoor infinity pool with panoramic views",
    icon: Pool,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers",
    icon: Dumbbell,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Spa & Wellness",
    description: "Relaxing treatments and massage services",
    icon: Spa,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Free Wi-Fi",
    description: "High-speed internet throughout the hotel",
    icon: Wifi,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Valet Parking",
    description: "Convenient parking service for guests",
    icon: Car,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Coffee Shop",
    description: "Fresh coffee and light snacks",
    icon: Coffee,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Restaurant",
    description: "Fine dining and casual options",
    icon: Utensils,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Concierge",
    description: "24/7 guest assistance services",
    icon: Bell,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function AmenitiesPage() {
  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Hotel amenities"
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
            Hotel Amenities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Discover our world-class facilities and services
          </motion.p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={amenity.image || "/placeholder.svg"}
                        alt={amenity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <amenity.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">{amenity.name}</h3>
                      </div>
                      <p className="text-muted-foreground">{amenity.description}</p>
                      <Button className="w-full mt-4" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-3xl font-bold">Ready to Experience Luxury?</h2>
            <p className="text-muted-foreground">Book your stay now and enjoy all our premium amenities</p>
            <Button size="lg">Book Your Stay</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

