import { Link } from "react-router-dom"
import Favourites from "../Pages/Favourites"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

function NavBar() {
  return (
    <div className="w-full relative top-0 left-0 z-50 bg-black shadow-md">
    <NavigationMenu className="w-full px-6 py-4 bg-black shadow-md top-0 z-50 ">
      <NavigationMenuList className="flex items-center justify-between w-full max-w-7xl mx-auto space-x-6">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/" className="text-xl font-bold font-mono text-white hover:text-primary transition-colors font-bold m-2">Movie App</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
         <div className="flex-1" />

        <div className="flex items-center space-x-6">
        <NavigationMenuItem>

          <NavigationMenuLink asChild>
            <Link to="/" className="text-xl font-semibold font-mono text-white hover:text-primary transition-colors ">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/favourites" className="text-xl font-semibold font-mono text-white hover:text-primary transition-colors">Favorites
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
          </div>
      </NavigationMenuList>
    </NavigationMenu>
           
    </div>
    )
  
}   

export default NavBar