import React, { ReactNode } from 'react'

const Index = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-base-200 text-base-content relative bottom-0 left-0">
      Copyright © {year} Made Sanjaya
</footer>
  )
}

export default Index