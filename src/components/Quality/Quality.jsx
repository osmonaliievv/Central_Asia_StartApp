import { motion } from "framer-motion";
import React from "react";
import "./Quality.scss";
import qualityImg1 from "../../assets/HomePageImg/quilityImg1.png";

const Quality = () => {
  return (
    <div className="quality">
      <div className="quality__container">
        <motion.div
          className="quality__cards"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="quality__logo">
            <img src={qualityImg1} alt="" />
          </div>
          <div className="quality__title">1000 посетителей</div>
        </motion.div>
        <motion.div
          className="quality__cards"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="quality__logo">
            <img src={qualityImg1} alt="" />
          </div>
          <div className="quality__title">1000 посетителей</div>
        </motion.div>
        <motion.div
          className="quality__cards"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="quality__logo">
            <img src={qualityImg1} alt="" />
          </div>
          <div className="quality__title">1000 посетителей</div>
        </motion.div>
        <motion.div
          className="quality__cards"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="quality__logo">
            <img src={qualityImg1} alt="" />
          </div>
          <div className="quality__title">1000 посетителей</div>
        </motion.div>
        <motion.div
          className="quality__cards"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="quality__logo">
            <img src={qualityImg1} alt="" />
          </div>
          <div className="quality__title">1000 посетителей</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quality;
