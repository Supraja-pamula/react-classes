export const Products=({title,price,isAvailable,itemsIncluded})=>{
    //Destructuring the Object
    return(
        <>
          <p>Name: {title}</p>
          <p>Price:{price}</p>
          <p>Is Available :{isAvailable ? "Yes" : "No"}</p>
          <p>Items Includes : {itemsIncluded.join(",","")}</p>
        </>
    )
}