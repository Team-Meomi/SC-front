import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import styled from "@emotion/styled";
import { themedPalette } from "../../styles/global";


const component = ({children}:any) => {
    const router = useRouter();
    return(
    <>
        <WrapStyled>
            <AnimatePresence exitBeforeEnter>
                <motion.div 
                    key={router.route} 
                    initial={animate.initial}                           
                    animate={animate.animate} 
                    exit={animate.exit}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </WrapStyled>
    </>
    )
}

const WrapStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0 0 30px 0;
    background: ${themedPalette.background};
`   

const animate = {
    initial :{ 
        transform : `translateY(30px)`,
        opacity : 0,
        transition: `transform 0.13s ease`
    },
    animate : {
        transform : `translateY(0px)`,
        opacity: 1,
        transition: `transform 0.13s ease`
    },
    exit : {
        transform : `translateY(30px)`,
        opacity: 0,
        transition: `transform 0.13s ease`
    }
}

export default component;