import OptionCard from './OptionCard.js';
import optionMap from './optionMap.js';

function BasicNode(props) {
    return (
        <div>
            <h1>{optionMap[props.id]["text"]}</h1>
            <div>
                {optionMap[props.id]["options"].map(opt => 
                    <OptionCard
                        text={opt["text"]}
                        onClick={() => props.setCurrNode(opt["dest"])}
                    />
                )}
            </div>
        </div>
    );
}

export default BasicNode;