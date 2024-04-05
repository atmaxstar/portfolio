import './section.css'

interface Props {
    text: string;
    onClick: () => void;
    selected?: boolean;
}

const Section = ({text, onClick, selected=false}: Props) => {
    
  return (
    <a className={selected ? 'selectedButton' : 'styledButton'} onClick={()=>onClick()}>
        {text}
    </a>
  )
}

export default Section
