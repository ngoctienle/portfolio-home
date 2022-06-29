import { animate, motion } from 'framer-motion'
import Head from 'next/head'

import { GridItemStyle } from '../Style'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    <motion.content
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Ngọc Tiến Lê</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.content>
  )
}
export default Layout
