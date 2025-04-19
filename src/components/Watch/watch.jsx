import './watch.css';

const Watch = ({watch}) => {
    const {name, price } = watch;
    return (
        <div>
           <h2>watch:{name}</h2>
           <p>price:{price}</p> 
        </div>
    );
};

export default Watch;