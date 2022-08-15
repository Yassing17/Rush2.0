import heatMap from '../../assets/pictures/hexagons/heatMap.png'
import connectivity from '../../assets/pictures/hexagons/connectivity.png'
import bee from '../../assets/pictures/hexagons/bee.png'
import WSANEC from '../../assets/pictures/hexagons/WSANEC.png'
import motherTree from '../../assets/pictures/hexagons/motherTree.png'
import tinyHome from '../../assets/pictures/hexagons/tinyHome.png'
import noWaste from '../../assets/pictures/hexagons/noWaste.png'
import knowledge from '../../assets/pictures/hexagons/knowledge.png'
import planet from '../../assets/pictures/hexagons/planet.png'
import books from '../../assets/pictures/hexagons/books.png'

import { TiledHexagons } from 'tiled-hexagons'

const items = [
    {
      title: 'North Park Heatwave Map',
      image: heatMap,
      link: 'https://www.google.com/maps/d/viewer?mid=12YLjmNqss6nHrcWQYYgK0ffl8JqkYaKd&ll=48.431337468326106%2C-123.35707554999999&z=16'
    },
    {
      title: 'Connectivity on the Saanich Peninsula',
      image: connectivity,
      link: 'https://storymaps.arcgis.com/stories/a68767b15837450aaf8a0d7e2094f345'
    },
    {
      title:'The Pollinator Project',
      image: bee,
      link: 'https://new.opengreenmap.org/browse/maps/621fe03eba477f0100989741/map-view?viewbox=-124.29548896829323,48.267597173229376,-123.04517522090947,48.74505780095586'
    },
    {
      title:'WSANEC Peninsula Environmental Organizations',
      image: WSANEC,
      link: 'https://storymaps.arcgis.com/stories/5239fadd726c462da56ebcbe231c57be'
    },
    {
      title:'The Mother Tree Project',
      image: motherTree,
      link: 'https://mothertreeproject.org/'
    },
    {
      title:'Making room: A Transitional Tiny Home Community',
      image: tinyHome,
      link: 'https://storymaps.arcgis.com/stories/14aeb7c901e04cc59272745e7a538994'
    },
    {
      title:'Zero Waste Victoria',
      image: noWaste,
      link: 'https://storymaps.arcgis.com/stories/dc6ffc4f93b64815989f762178467827'
    },
    {
      title:'Indigenous Knowledge & Climate Change in Canada',
      image: knowledge,
      link: 'https://climateatlas.ca/map/canada/plus30_2030_85#'
    },
    {
      title:'One Planet BC',
      image: planet,
      link:'https://oneplanetbc.com/'
    },
    {
      title: 'Little Free Libraries',
      image: books,
      link: 'https://victoriaplacemaking.ca/little-free-libraries/'
    }
  
  ]
  
  
  function Hexagons() {
    return (
        
        
        <TiledHexagons
          maxHorizontal={4}
          tileSideLengths={160}
          tileElevations={20}
          tileGap={20}
          tileBorderRadii={9}
          tiles={items.map(tile=>{
            return{ 
            fill: '#f8bd68',
            shadow: '#f8a568',
            img: tile.image,
            href: tile.link,
            }
          })}
        />
       

    );
  }
  
  export default Hexagons;

 
  