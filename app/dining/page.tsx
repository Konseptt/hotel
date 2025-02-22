"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const restaurants = [
  {
    name: "The Grand Restaurant",
    description: "Fine dining with international cuisine",
    image: "/placeholder.svg?height=400&width=600",
    hours: "7:00 AM - 11:00 PM",
    cuisine: "International",
  },
  {
    name: "Azure Lounge",
    description: "Casual dining and cocktails",
    image: "/placeholder.svg?height=400&width=600",
    hours: "11:00 AM - 12:00 AM",
    cuisine: "Contemporary",
  },
  {
    name: "Sunset Bar",
    description: "Drinks and light bites with a view",
    image: "/placeholder.svg?height=400&width=600",
    hours: "4:00 PM - 2:00 AM",
    cuisine: "Bar Food",
  },
]

const menus = {
  breakfast: [
    { name: "Continental Breakfast", price: 25 },
    { name: "American Breakfast", price: 30 },
    { name: "Healthy Start", price: 28 },
  ],
  lunch: [
    { name: "Business Lunch", price: 45 },
    { name: "Chef's Special", price: 55 },
    { name: "Light Lunch", price: 35 },
  ],
  dinner: [
    { name: "Gourmet Dinner", price: 85 },
    { name: "Tasting Menu", price: 120 },
    { name: "A La Carte", price: 75 },
  ],
}

export default function DiningPage() {
  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Luxury dining"
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
            Dining Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Discover culinary excellence at our restaurants and bars
          </motion.p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      width={600}
                      height={400}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                      <p className="text-muted-foreground mb-4">{restaurant.description}</p>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Hours:</span> {restaurant.hours}
                        </p>
                        <p>
                          <span className="font-medium">Cuisine:</span> {restaurant.cuisine}
                        </p>
                      </div>
                      <Button className="w-full mt-4">Reserve a Table</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menus Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Menus</h2>
          <Tabs defaultValue="breakfast" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              <TabsTrigger value="lunch">Lunch</TabsTrigger>
              <TabsTrigger value="dinner">Dinner</TabsTrigger>
            </TabsList>
            {Object.entries(menus).map(([meal, items]) => (
              <TabsContent key={meal} value={meal}>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.name} className="flex justify-between items-center">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-muted-foreground">${item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-3xl font-bold">Special Events</h2>
            <p className="text-muted-foreground">
              Host your special occasions at our venues. From intimate dinners to grand celebrations, our team will
              create an unforgettable experience.
            </p>
            <Button size="lg">Plan Your Event</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

