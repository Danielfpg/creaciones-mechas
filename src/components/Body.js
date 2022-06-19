import './Body.css';
import Card from './Card';
import Pijama2 from './pijama2';
import Jean from './Jean';
import Cama from './Cama';
function Body() {
  return (
    <section className='cuerpo'>
        <Card />
        <Pijama2 />
        <Jean />
        <Cama />
    </section>
  );
}

export default Body;
