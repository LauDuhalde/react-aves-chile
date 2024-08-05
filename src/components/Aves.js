export default function Aves(props) {

    const {aves, setAves} = props;

    const resetAves = () =>{
        setAves(null)
    }

  return (
    
    <div className="characters">
        <span className="back-home" onClick={resetAves}>Volver</span>
        <div className="container-characters">
            {aves.map((ave, index) => (
                <div key={index} className="character-container">
                    <div>
                        <img src={ave.images.main} alt={ave.name.spanish} />
                    </div>
                    <div>
                        <h3>{ave.name.spanish}</h3>
                        <h6 className="text-grey">{ave.name.latin}</h6>
                        <h6 className="text-grey">{ave.name.english}</h6>
                    </div>
                    
                    
                </div>
                    ))}
        </div>
        <span className="back-home" onClick={resetAves}>Volver</span>
    </div>
  )
}
