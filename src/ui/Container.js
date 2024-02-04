import React from "react"

const Container = ({ children }) => {
  return (
    <div className="w-full h-full max-w-[1280px] mx-auto px-3 md:px-3 lg:px-0">
      {children}
    </div>
  )
}

export default Container
