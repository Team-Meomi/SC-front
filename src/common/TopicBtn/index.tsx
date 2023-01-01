import { TopicBtnProps } from "../../types"

const TopicBtns = ({category,MyCategory,onClick}:TopicBtnProps) => {
    return (
      <>
        <input 
          defaultChecked={category === MyCategory} 
          type="radio" id={MyCategory} 
          name="category" 
          onClick={onClick}
        />
        <label 
          htmlFor={MyCategory}
        >
          {MyCategory}
        </label>
      </>
    )
}

export default TopicBtns