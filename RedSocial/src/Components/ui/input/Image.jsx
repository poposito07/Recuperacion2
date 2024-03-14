import faces from '../../../../public/img/faces.jpeg';
import '../input/Image.css';


const App = () => {
    return (
        <div className="image-container">
            <img  src={faces} alt="overlay" className="overlay-image" />
        </div>
    );
};

export default App;