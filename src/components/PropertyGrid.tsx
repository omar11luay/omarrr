import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PropertyGridProps {
  properties?: Array<{
    id: string;
    image: string;
    price: number;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
  }>;
}

const PropertyGrid = ({
  properties = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: 750000,
      location: "Beverly Hills, CA 90210",
      beds: 4,
      baths: 3,
      sqft: 2500,
      type: "Single Family Home",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: 1200000,
      location: "Malibu, CA 90265",
      beds: 5,
      baths: 4,
      sqft: 3200,
      type: "Luxury Villa",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: 550000,
      location: "Santa Monica, CA 90401",
      beds: 3,
      baths: 2,
      sqft: 1800,
      type: "Condo",
    },
  ],
}: PropertyGridProps) => {
  const [sortBy, setSortBy] = useState("price-low");

  const sortProperties = (
    properties: typeof PropertyGrid.defaultProps.properties,
  ) => {
    return [...properties].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "sqft":
          return b.sqft - a.sqft;
        default:
          return 0;
      }
    });
  };

  const sortedProperties = sortProperties(properties);

  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="flex justify-end mb-6">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="sqft">Square Footage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            price={property.price}
            location={property.location}
            beds={property.beds}
            baths={property.baths}
            sqft={property.sqft}
            type={property.type}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
