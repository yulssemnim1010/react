import { useState } from 'react'
import { SplashPage } from './pages/SplashPage'
import { Onboarding01Page } from './pages/Onboarding01Page'
import { Onboarding02Page } from './pages/Onboarding02Page'
import { Onboarding03Page } from './pages/Onboarding03Page'
import { Onboarding04Page } from './pages/Onboarding04Page'

type CurrentPage = "splash" | "onboarding_01" | "onboarding_02" | "onboarding_03" | "onboarding_04" | "login"

function App() {
  // state는 앱이 기억하는 값입니다. 처음에는 영상이 나오는 splash 화면을 기억합니다.
  const [currentPage, setCurrentPage] = useState<CurrentPage>("splash");
  return (
    <>

    </>
  )
}

export default App
