import '../styles/globals.css';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router}) {
    return(
        <Layout>
            <AnimatePresence>
                <motion.div style={{backgroundColor: '#070707'}} className="" key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
                    pageInitial:{
                        opacity: 0
                    },
                    pageAnimate:{
                        opacity: 1,
                        transition: {
                            delay: 0.2,
                            duration: 0.3 
                        }
                    },
                    pageExit:{
                        opacity: 0,
                        transition: {
                            duration: 0.2
                        }
                    }
                }}>
                    <Component {...pageProps}/>
                </motion.div>
            </AnimatePresence>
        </Layout>
    )
}

export default MyApp
