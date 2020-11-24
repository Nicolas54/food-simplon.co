import Jour from './jour'

const MenuSemaine  = () =>{
    const days = [  'Lundi',
                    'Mardi', 
                    'Mercredi',
                    'Jeudi',
                    'Vendredi',
                    'Samedi',
                    'Dimanche'];

    
    return(
        <>
            <h1>Menu de la semaine !!!</h1>
            <p>Miam miam</p>

            <div className="listjour">
            {
                days.map (day=>(
                    <Jour name={day} listBarCode={[' 3454681006511', '737628064502', ' 3250392392277', '3700009252567', ' 3564707109888',  '8411555100404',  '5449000000996']} />
                ))
            }
            </div>
        </>
    )
}

export default MenuSemaine