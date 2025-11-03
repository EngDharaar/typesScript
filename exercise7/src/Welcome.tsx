interface WelcomeUser {
  userName:string,
  isPremeum:boolean
}
const Welcome = ({userName,isPremeum}:WelcomeUser) => {
  return (
    <div>
    {
      isPremeum ?(
<span>{userName.toUpperCase()}</span>
      ):(
        <span>{userName.toUpperCase()}</span>

      )
    }
      
      <span>{isPremeum}</span>
    </div>
  )
}

export default Welcome