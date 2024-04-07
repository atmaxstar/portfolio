import './section.css'

interface Props {
    section : 'HOME' | 'PROJECTS' | 'SKILLS' | 'CONTACT';
    onClick: () => void;
    selected?: boolean;
}

const SectionIcon = ({section, onClick, selected=false}: Props) => {
    const iconName = section == 'HOME' ? 'fa fa-home' : section == 'PROJECTS' ? 'fa fa-file-text' : section == 'SKILLS' ? 'fa fa-wrench' : 'fa fa-envelope'
    
    return (
        <a className={selected ? 'selectedIcon' : 'styledIcon'} onClick={()=>onClick()}>
            <i className={iconName + ' fa-2x'} aria-hidden="true"/>
        </a>
    )
}

export default SectionIcon
