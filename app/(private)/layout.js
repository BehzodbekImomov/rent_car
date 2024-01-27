

export default function PrivateLayout  ({children}) {
  return (
    <>
    
    <header>PrivateHeader</header>
    <div>{children}</div>
    <footer>PrivateFooter</footer>
    </>
  )
}
