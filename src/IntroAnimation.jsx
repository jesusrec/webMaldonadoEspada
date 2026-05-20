import { motion } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
    return (
        <motion.div
            className="fixed inset-0 bg-[#0B1325] z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center"
            >
                <div className="flex items-center justify-center font-serif font-bold text-8xl tracking-normal">
                    <span className="bg-gradient-to-r from-[#EBB813] to-[#C49200] bg-clip-text text-transparent">
                        M
                    </span>
                    <span className="text-[#003B7A]">
                        E
                    </span>
                </div>

                <motion.div
                    className="h-[5px] bg-[#D4AF37] mt-4"
                    initial={{ width: 0 }}
                    animate={{ width: 320 }}
                    transition={{ delay: 0.6, duration: 1 }}
                />
                <h2 className=" text-[#003B7A] font-bold bg-clip-text  tracking-[0.3em] uppercase text-4xl">
                    Maldonado
                </h2>
                <h2 className=" bg-gradient-to-r from-[#EBB813] to-[#C49200] font-bold bg-clip-text text-transparent tracking-[0.3em] uppercase text-1xl">
                    Espada & Abogados <br></br> Firma Legal

                </h2>
            </motion.div>
        </motion.div>
    );
}