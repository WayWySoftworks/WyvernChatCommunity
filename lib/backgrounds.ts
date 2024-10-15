import {StaticImageData} from "next/image";
import Dock from "@/assets/backgrounds/dock.png";
import Campsite from "@/assets/backgrounds/campsite.png";
import Abydos from "@/assets/backgrounds/abydos.png";
import GlowingCave from "@/assets/backgrounds/glowing-cave.png";
import Onsen from "@/assets/backgrounds/onsen.png";
import Dungeon from "@/assets/backgrounds/dungeon.png";
import GreekTown from "@/assets/backgrounds/greek-town.png";
import Market from "@/assets/backgrounds/market.png";
import OlympusForest from "@/assets/backgrounds/olympus-forest.png";
import RoyalBedroom from "@/assets/backgrounds/royal-bedroom.png";
import Temple from "@/assets/backgrounds/temple.png";
import ThroneRoom from "@/assets/backgrounds/throne-room.png";
import AmericanDiner from "@/assets/backgrounds/american-diner.png";
import Beach from "@/assets/backgrounds/beach.png";
import Bunker from "@/assets/backgrounds/bunker.png";
import LockerRoom from "@/assets/backgrounds/locker-room.png";
import CyberpunkBedroom from "@/assets/backgrounds/cyberpunk-bedroom.png";
import DiningRoom from "@/assets/backgrounds/dining-room.png";
import MessyBedroom from "@/assets/backgrounds/messy-bedroom.png";
import NightStreet from "@/assets/backgrounds/night-street.png";
import WyvernBurger from "@/assets/backgrounds/wyvern-burger.png";
import laboratory from "@/assets/backgrounds/laboratory.png";
import Ship from "@/assets/backgrounds/ship.png";
import Classroom from "@/assets/backgrounds/classroom.png";

export const defaultBackgrounds: { name: string; source: StaticImageData; category: string; }[] = [
  {
    name: "Dock",
    source: Dock,
    category: "Fantasy"
  },
  {
    name: "Campsite",
    source: Campsite,
    category: "Fantasy"
  },
  {
    name: "Abydos",
    source: Abydos,
    category: "Fantasy"
  },
  {
    name: "Glowing Cave",
    source: GlowingCave,
    category: "Fantasy"
  },
  {
    name: "Onsen",
    source: Onsen,
    category: "Fantasy"
  },
  {
    name: "Dungeon",
    source: Dungeon,
    category: "Fantasy"
  },
  {
    name: "Greek Town",
    source: GreekTown,
    category: "Fantasy"
  },
  {
    name: "Market",
    source: Market,
    category: "Fantasy"
  },
  {
    name: "Olympus Forest",
    source: OlympusForest,
    category: "Fantasy"
  },
  {
    name: "Royal Bedroom",
    source: RoyalBedroom,
    category: "Fantasy"
  },
  {
    name: "Temple",
    source: Temple,
    category: "Fantasy"
  },
  {
    name: "Throne Room",
    source: ThroneRoom,
    category: "Fantasy"
  },
  {
    name: "American Diner",
    source: AmericanDiner,
    category: "Modern"
  },
  {
    name: "Beach",
    source: Beach,
    category: "Modern"
  },
  {
    name: "Bunker",
    source: Bunker,
    category: "Modern"
  },
  {
    name: "Locker Room",
    source: LockerRoom,
    category: "Modern"
  },
  {
    name: "Cyberpunk Bedroom",
    source: CyberpunkBedroom,
    category: "Sci-Fi"
  },
  {
    name: "Dining Room",
    source: DiningRoom,
    category: "Modern"
  },
  {
    name: "Messy Bedroom",
    source: MessyBedroom,
    category: "Modern"
  },
  {
    name: "Night Street",
    source: NightStreet,
    category: "Modern"
  },
  {
    name: "Wyvern Burger",
    source: WyvernBurger,
    category: "Modern"
  },
  {
    name: "Laboratory",
    source: laboratory,
    category: "Sci-Fi"
  },
  {
    name: "Ship",
    source: Ship,
    category: "Sci-Fi"
  },
  {
    name: "Classroom",
    source: Classroom,
    category: "Modern"
  }
]