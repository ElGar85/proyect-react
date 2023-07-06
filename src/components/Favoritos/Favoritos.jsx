import { connect, useSelector } from "react-redux"
import Card from "../Card"
import style from "../Cards.module.css"
import style2 from '../Card.module.css';



const Favoritos = (props) => {

  // const favorites = useSelector((state) => state.favorites);
    // const favorites = state.favorites;

    return (
     
        <div className={style.contenedor_cards}>

            {props.favorites?.map((char) => (
            <Card
                key={char.id}
                id={char.id}
                name={char.name}
                species={char.species}
                gender={char.gender}
                status={char.status}
                image={char.image}
                origin={char.origin.name}
            />
          ))}
        </div>
      
      );

}

// export default Favoritos;

export function mapStateToProps(globalState){
    return {
       favorites: globalState.favorites,
    }
 }

export default connect(mapStateToProps)(Favoritos);