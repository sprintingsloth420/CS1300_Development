
    import"./GalleryItem.css";
    import Button from '@mui/material/Button';

    <meta name="viewport" content="initial-scale=1, width=device-width" />

    export default function GalleryItem({item,bookmark,setBookmark,count,setCount,tdim,setTdim}){
  

    function handleClick(){
      if(!bookmark.includes(item.name)){
        setBookmark([...bookmark,item.name]);
        setCount(count+=1);
        setTdim(tdim+=item.dimension);
      }else{
        setBookmark(bookmark.filter(name => name !== item.name))
        setCount(count-=1);
        setTdim(tdim-=item.dimension);
      }
    }
  
    return(

      <div className="item">
        <div className="image">
            <img src={item.image}/>
        </div>

        <div className="content">
            <p style={{fontSize:"2rem",margin:"0 0 0.3rem 0"}}><b>{item.name}</b></p>
            <p style={{fontSize:"1.5rem",color:"grey",margin:"0 0 1rem 0"}}>{item.artist}</p>
            <p>Year: {item.year}</p>
            <p>Media: {item.media}</p>
            <p>Location: {item.location}</p>
            <p>Dimension (Main): {item.dimension} cm <br/><br/></p>
            <p><i>"{item.description}"</i><br/><br/><br/></p>

            <Button variant="outlined" size="large" onClick={handleClick}>{bookmark.includes(item.name) ? "Bookmarked" : "Bookmark"}</Button>
        </div>
        
       
      </div>
  
    )
  }
  