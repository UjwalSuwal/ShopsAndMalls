"use client";
import { SearchIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MallSearchProps {
  setSearchData?: React.Dispatch<React.SetStateAction<string>>;
}

const MallSearch = ({ setSearchData }: MallSearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchData) {
      setSearchData(e.target.value);
    }
  };
  return (
    <Popover>
      <PopoverTrigger className="w-full bg-[#efefef] px-60 py-6 flex gap-2 items-center mt-16">
        <SearchIcon />
        <input
          placeholder="Search Malls..."
          className="focus:outline-none bg-[#efefef] w-full"
          onChange={handleSearch}
        />
      </PopoverTrigger>

      <PopoverContent className="w-screen pl-44 text-brand-text-secondary">
        <div className="w-[40%] flex justify-between items-center">
          <p className="font-bold">Quick Links</p>

          <div className="flex flex-col">
            <p>New Mall</p>
            <p>City Center</p>
          </div>

          <div className="flex flex-col">
            <p>Blue Bird Mall</p>
            <p>Civil Mall</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MallSearch;
