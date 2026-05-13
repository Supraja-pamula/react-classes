export const Welcome=(props)=>{
    console.log("props",props.userName)
   return (
    <h2>Hii! Welcome to the new world dear {props.userName}</h2>
   )
}