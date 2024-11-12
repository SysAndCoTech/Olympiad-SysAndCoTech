import React from "react";
import "./reward.css";

const Reward = () => {
  return (
    <div id="reward">
      <div className="reward">
        <div className="reward-frame">
          <h1 className="reward_h">"Шан Харамжийн Сан"</h1>
          <div className="reward-text">
            <div className="reward-text-st">Тэргүүн байр</div>
            <h3 className="reward-text-bg">400'000₮</h3>
            <h5>Медаль, Өргөмжлөл, Мөнгөн шагнал</h5>
          </div>
          <div className="reward-text2">
            <div className="reward-text">
              <div className="reward-text-st">Дэд байр</div>
              <h3 className="reward-text-bg">300'000₮</h3>
              <h5>Медаль, Өргөмжлөл, Мөнгөн шагнал</h5>
            </div>
            <div className="reward-text">
              <div className="reward-text-st">Гутгаар байр</div>
              <h3 className="reward-text-bg">200'000₮</h3>
              <h5>Медаль, Өргөмжлөл, Мөнгөн шагнал</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
