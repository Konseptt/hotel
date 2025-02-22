"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PocketIcon as Pool, Utensils, Wifi, Car, Dumbbell, Coffee } from "lucide-react"

const amenities = [
  { icon: Pool, name: "Swimming Pool" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Car, name: "Valet Parking" },
  { icon: Dumbbell, name: "Fitness Center" },
  { icon: Coffee, name: "Coffee Shop" },
]

const rooms = [
  {
    name: "Deluxe Room",
    image: "/placeholder.svg?height=400&width=600",
    price: "$299",
    description: "Spacious room with city view",
  },
  {
    name: "Executive Suite",
    image: "/placeholder.svg?height=400&width=600",
    price: "$499",
    description: "Luxury suite with ocean view",
  },
  {
    name: "Presidential Suite",
    image: "/placeholder.svg?height=400&width=600",
    price: "$999",
    description: "Ultimate luxury experience",
  },
]

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxury hotel exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
          >
            Welcome to Grand Azure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Experience luxury and comfort in the heart of paradise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/rooms">Book Your Stay</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Luxurious Accommodations</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Choose from our selection of premium rooms and suites
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {rooms.map((room) => (
                <CarouselItem key={room.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={600}
                      height={400}
                      className="object-cover aspect-video hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{room.name}</h3>
                      <p className="text-muted-foreground">{room.description}</p>
                      <p className="text-lg font-bold mt-2">From {room.price}/night</p>
                      <Button className="w-full mt-4" asChild>
                        <Link href="/rooms">View Details</Link>
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hotel Amenities</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">Enjoy our world-class facilities and services</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <amenity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium">{amenity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1920" alt="Luxury hotel interior" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Your Luxury Experience
            </h2>
            <p className="text-lg sm:text-xl">
              Book your stay today and discover the perfect blend of comfort and luxury
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <Link href="/rooms">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

