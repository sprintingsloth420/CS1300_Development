import './App.css';
import { useState } from "react";
import galleryData from "./assets/gallery-data.json";
import GalleryItem from './components/GalleryItem.js';
import Sort from "./components/Sort.js";
import Filter1 from "./components/Filter1.js";
import Filter2 from "./components/Filter2.js";
import Button from '@mui/material/Button';
import Bookmark from './components/Bookmark';


galleryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

// renders sort
// function matchesSort({sorting}){
//   if(sorting === "year"){
//     galleryData = galleryData.sort((a, b) => a.year - b.year);
//   }
//   else if(sorting == "dimension"){
//     galleryData = galleryData.sort((a, b) => a.dimension - b.dimension);
//   }
//   else{
//     galleryData = galleryData.sort((a, b) => a.default - b.default);
//   }
// }

// renders filters
function matchesType({item,type1,type2}){
  const filter1_noSelect = Object.values(type1).every(val => val === false);
  const filter2_noSelect = Object.values(type2).every(val => val === false);
  if (filter1_noSelect && filter2_noSelect){
    return true;
  }else{
    if ((type1[item.media] && type2[item.location]) || (type1[item.media] && filter2_noSelect) || (filter1_noSelect && type2[item.location])){
      return true;
    }else {
      return false;
    }
  }
}


function App() {
  // sort state var
  const [sorting, setSort] = useState("default");

  const matchesSort=(sorting)=>{
    if(sorting === "year"){
      galleryData = galleryData.sort((a, b) => a.year - b.year);
    }
    else if(sorting == "dimension"){
      galleryData = galleryData.sort((a, b) => a.dimension - b.dimension);
    }
    else{
      galleryData = galleryData.sort((a, b) => a.default - b.default);
    }
  }



  // filter state var
  const [type1,setType1] = useState({
    oil: false,
    pencil: false,
    ink: false,
  });
  const { oil, pencil, ink } = type1;

  const [type2,setType2] = useState({
    US: false,
    France: false,
    Netherlands: false,
    Germany: false,
    Austria: false,
    UK: false,
    Unknown: false
  });
  const { US, France, Netherlands , Germany, Austria, UK, Unknown} = type2;

  const filteredData = galleryData.filter(item=>matchesType({item,type1,type2}));

  const [count,setCount] = useState(0);
  const [bookmark,setBookmark] = useState([]);
  const [tdim,setTdim] = useState(0);

  const handleReset = () => {
    setSort("default");
    matchesSort("default");
    setType1({
      oil: false,
      pencil: false,
      ink: false,
    });
    setType2({
      US: false,
      France: false,
      Netherlands: false,
      Germany: false,
      Austria: false,
      UK: false,
      Unknown: false
    });
    setCount(0);
    setBookmark([]);
    setTdim(0);
 }

  return (
    <div className="App">
      <div>
        <header className="Header">
          My Gallery
        </header>
      </div>


      <div className="Body">
        <div className="Filter">
       
          <Sort sorting={sorting} setSort={setSort} matchesSort={matchesSort}/>
          {/* {matchesSort({sorting})} */}
          {/* {console.log({sorting})} */}
          <Filter1 oil={oil} pencil={pencil} ink ={ink} type1={type1} setType1={setType1}/>
          <Filter2 US={US} France={France} Netherlands={Netherlands} Germany={Germany} Austria={Austria} UK={UK} Unknown={Unknown} type2={type2} setType2={setType2}/>
          <Bookmark count={count} bookmark={bookmark} tdim={tdim}></Bookmark>
          <Button variant="contained" size="large" onClick={handleReset}>Reset</Button>
  
        </div>
  
        <div className = "GalleryItems">
            {filteredData.map((item, index) => (
              <GalleryItem key={item.name} item={item} bookmark={bookmark} setBookmark={setBookmark} count={count} setCount={setCount} tdim={tdim} setTdim={setTdim}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
