
import { useEffect } from "react";
import PageNotFoundImg from "../assets/images/PageNotFound.png";

export const PageNotFound = () => {

  useEffect(() => {
    document.title = "Page Not Found";
  });

  return (
    <main>
        <section className="fless flex-col justify-center px-2">
        <div className="flex flex-col items-center my-10">
          <h3 className="text-black dark:text-white">404 error</h3>
          <img src={PageNotFoundImg} alt="404 page not found" className="max-w-80"/>
        </div>
        <div className="flex flex-col items-center my-10">
          <p className="text-black dark:text-white">There was an error. Please try again.</p>
        </div>
        </section>
    </main>
  )
}
