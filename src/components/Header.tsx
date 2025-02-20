import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, MapPin } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface HeaderProps {
  onSearch?: (searchTerm: string) => void;
  suggestions?: Array<{
    type: string;
    items: Array<{ id: string; name: string }>;
  }>;
}

const Header = ({
  onSearch = () => console.log("Search triggered"),
  suggestions = [
    {
      type: "Locations",
      items: [
        { id: "1", name: "Beverly Hills, CA" },
        { id: "2", name: "Manhattan, NY" },
        { id: "3", name: "Miami Beach, FL" },
      ],
    },
    {
      type: "Property Types",
      items: [
        { id: "4", name: "Single Family Home" },
        { id: "5", name: "Apartment" },
        { id: "6", name: "Condo" },
      ],
    },
  ],
}: HeaderProps) => {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <header className="w-full h-20 bg-white border-b fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold">Real Estate</h1>
        </div>

        <div className="flex-grow max-w-2xl mx-8">
          <div className="relative">
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
              onClick={() => setOpen(true)}
            >
              <MapPin className="mr-2 h-4 w-4" />
              <span className="text-muted-foreground">
                Search locations or property types...
              </span>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput
                placeholder="Search locations or property types..."
                value={searchTerm}
                onValueChange={setSearchTerm}
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {suggestions.map((group) => (
                  <CommandGroup key={group.type} heading={group.type}>
                    {group.items.map((item) => (
                      <CommandItem
                        key={item.id}
                        onSelect={() => {
                          onSearch(item.name);
                          setOpen(false);
                        }}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        {item.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </CommandDialog>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>List Property</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
