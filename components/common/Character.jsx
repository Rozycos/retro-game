import PropTypes from 'prop-types';

export default function Character({character}) {
    return (
    <div className={`character__${character}`}></div>
    )
}

// Walidacja typów właściwości
Character.propTypes = {
    character: PropTypes.string.isRequired,
};

// Domyślna wartość dla właściwości
Character.defaultProps = {
    character: 'alien1',
};

//usage <Character character='ufo'/> accessible characters: scientist, astronaut, ufo, ufo2, alien1, alien2, alien3