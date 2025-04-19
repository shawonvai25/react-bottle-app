// import add from '../../Utils/calculate';
import { add, divideTheFirstNumberByTheSecondNumber as divide, multiply } from '../../Utils/calculate';
import './sunglass.css';
const Sunglass = () => {
   const first = 55;
   const second = 199;
   const sum = add(first, second);
   const mult = multiply(first, second);
   const vaag = divide (first, second);

    return (
        <div>
            
        </div>
    );
};

export default Sunglass;