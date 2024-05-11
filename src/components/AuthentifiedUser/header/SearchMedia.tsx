import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchMedia = () => {
  const MAX_LENGHT_INPUT_USER = 25
  //TODO:implémenter la recherche de film / série
  return (
    <Button>
      <Search className="h-6 mr-2 aspect-square" />{" "}
      <input className="p-2 text-black rounded-sm" placeholder="Chercher un film / série" maxLength={MAX_LENGHT_INPUT_USER}/>
    </Button>
  );
};

export default SearchMedia;
