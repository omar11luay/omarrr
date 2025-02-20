import React from "react";
import { Card } from "./ui/card";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";

interface FilterSidebarProps {
  onPriceRangeChange?: (range: number[]) => void;
  onPropertyTypeChange?: (type: string) => void;
  onLocationChange?: (location: string) => void;
  onAmenitiesChange?: (amenities: string[]) => void;
  onApplyFilters?: () => void;
  onResetFilters?: () => void;
}

const FilterSidebar = ({
  onPriceRangeChange = () => {},
  onPropertyTypeChange = () => {},
  onLocationChange = () => {},
  onAmenitiesChange = () => {},
  onApplyFilters = () => {},
  onResetFilters = () => {},
}: FilterSidebarProps) => {
  return (
    <Card className="h-full w-80 p-6 bg-white">
      <ScrollArea className="h-full pr-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <Slider
              defaultValue={[200000, 800000]}
              max={2000000}
              min={0}
              step={10000}
              onValueChange={(value) => onPriceRangeChange(value)}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$2M+</span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4">Property Type</h3>
            <RadioGroup defaultValue="house" className="space-y-2">
              {[
                { value: "house", label: "House" },
                { value: "apartment", label: "Apartment" },
                { value: "condo", label: "Condo" },
                { value: "townhouse", label: "Townhouse" },
              ].map((type) => (
                <div key={type.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={type.value}
                    id={type.value}
                    onClick={() => onPropertyTypeChange(type.value)}
                  />
                  <Label htmlFor={type.value}>{type.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <RadioGroup defaultValue="beverly-hills" className="space-y-2">
              {[
                { value: "beverly-hills", label: "Beverly Hills" },
                { value: "santa-monica", label: "Santa Monica" },
                { value: "malibu", label: "Malibu" },
                { value: "hollywood", label: "Hollywood" },
              ].map((location) => (
                <div
                  key={location.value}
                  className="flex items-center space-x-2"
                >
                  <RadioGroupItem
                    value={location.value}
                    id={location.value}
                    onClick={() => onLocationChange(location.value)}
                  />
                  <Label htmlFor={location.value}>{location.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4">Amenities</h3>
            <div className="space-y-2">
              {[
                { id: "pool", label: "Pool" },
                { id: "gym", label: "Gym" },
                { id: "parking", label: "Parking" },
                { id: "security", label: "Security" },
                { id: "pet-friendly", label: "Pet Friendly" },
              ].map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity.id}
                    onCheckedChange={(checked) =>
                      onAmenitiesChange([amenity.id])
                    }
                  />
                  <Label htmlFor={amenity.id}>{amenity.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <Button className="w-full" onClick={onApplyFilters}>
              Apply Filters
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={onResetFilters}
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};

export default FilterSidebar;
