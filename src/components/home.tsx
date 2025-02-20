import React from "react";
import Header from "./Header";
import FilterSidebar from "./FilterSidebar";
import PropertyGrid from "./PropertyGrid";

interface HomeProps {
  initialSearchTerm?: string;
  initialFilters?: {
    priceRange: number[];
    propertyType: string;
    location: string;
    amenities: string[];
  };
}

const Home = ({
  initialSearchTerm = "",
  initialFilters = {
    priceRange: [200000, 800000],
    propertyType: "house",
    location: "beverly-hills",
    amenities: [],
  },
}: HomeProps) => {
  const [searchTerm, setSearchTerm] = React.useState(initialSearchTerm);
  const [filters, setFilters] = React.useState(initialFilters);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // In a real app, this would trigger an API call
    console.log("Searching for:", term);
  };

  const handleFiltersChange = (newFilters: Partial<typeof initialFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    // In a real app, this would trigger an API call
    console.log("Filters updated:", { ...filters, ...newFilters });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />

      <main className="pt-20 flex min-h-screen bg-gray-50">
        <aside className="w-80 fixed left-0 top-20 h-[calc(100vh-5rem)] overflow-auto border-r bg-white">
          <FilterSidebar
            onPriceRangeChange={(range) =>
              handleFiltersChange({ priceRange: range })
            }
            onPropertyTypeChange={(type) =>
              handleFiltersChange({ propertyType: type })
            }
            onLocationChange={(location) => handleFiltersChange({ location })}
            onAmenitiesChange={(amenities) =>
              handleFiltersChange({ amenities })
            }
            onApplyFilters={() => {
              // In a real app, this would trigger an API call with all current filters
              console.log("Applying filters:", filters);
            }}
            onResetFilters={() => {
              setFilters(initialFilters);
              // In a real app, this would reset the API call
              console.log("Filters reset");
            }}
          />
        </aside>

        <div className="ml-80 flex-1">
          <PropertyGrid
            properties={[
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
              {
                id: "4",
                image:
                  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
                price: 980000,
                location: "Hollywood Hills, CA 90068",
                beds: 4,
                baths: 3,
                sqft: 2800,
                type: "Modern Villa",
              },
              {
                id: "5",
                image:
                  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
                price: 650000,
                location: "West Hollywood, CA 90069",
                beds: 2,
                baths: 2,
                sqft: 1500,
                type: "Apartment",
              },
              {
                id: "6",
                image:
                  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
                price: 850000,
                location: "Pacific Palisades, CA 90272",
                beds: 3,
                baths: 2,
                sqft: 2200,
                type: "Townhouse",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
