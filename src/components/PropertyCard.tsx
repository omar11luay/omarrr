import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bed, Bath, Maximize2, Heart, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface PropertyCardProps {
  image?: string;
  price?: number;
  location?: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  type?: string;
  onBookNow?: () => void;
  onContactAgent?: () => void;
  onFavorite?: () => void;
}

const PropertyCard = ({
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  price = 750000,
  location = "Beverly Hills, CA 90210",
  beds = 4,
  baths = 3,
  sqft = 2500,
  type = "Single Family Home",
  onBookNow = () => console.log("Book Now clicked"),
  onContactAgent = () => console.log("Contact Agent clicked"),
  onFavorite = () => console.log("Favorite clicked"),
}: PropertyCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white"
    >
      <Card className="overflow-hidden h-[400px] flex flex-col">
        <div className="relative h-[240px] overflow-hidden">
          <img
            src={image}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={onFavorite}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Badge className="absolute bottom-2 left-2 bg-white/80 text-black">
            {type}
          </Badge>
        </div>

        <CardContent className="p-4 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-semibold">
              ${price.toLocaleString()}
            </h3>
          </div>
          <p className="text-gray-600 mb-2">{location}</p>
          <div className="flex gap-4 text-gray-500">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{beds} beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{baths} baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize2 className="h-4 w-4" />
              <span>{sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 border-t">
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onContactAgent}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Agent
            </Button>
            <Button className="flex-1" onClick={onBookNow}>
              Book Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
