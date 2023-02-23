const Card = ({clients,children}) => {
    const class_premium = clients.isPremium ? 'premium' : ''
    let langu
    if(clients.country == 'fr'){
      langu = 'Bonjour'
    }
    else{
      langu = 'Hello'
    }
    return (
      <div className={`card ${class_premium}`}>
      <h3>{langu} {children}</h3>
      <p>Age: {clients.age}</p>
      <p>Is it a premium client? {clients.isPremium}</p>
      </div>
    );
  }
  
  export default Card;