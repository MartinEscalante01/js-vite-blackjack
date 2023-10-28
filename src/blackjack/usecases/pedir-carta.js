

// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck 
 * @returns {string<String>} carta 
 */
export const pedirCarta = (deck) => {
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
  }