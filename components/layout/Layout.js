import Footer from "./Footer"
import MainNavigation from "./MainNavigation"

const Layout = (props) => {
  return (
    <>
        <MainNavigation />
        <main>
            {props.children}
        </main>
        <Footer />
    </>
  )
}

export default Layout