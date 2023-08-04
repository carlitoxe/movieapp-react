const SelectLanguage = ({ title = '', options = [], setValue, value, isNavOpen, setIsNavOpen }) => {
    return (
        <select 
            title={title} 
            id="lang" 
            className="select-language-container h-[30px] text-white rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" 
            onChange={(e) => {
                setValue(e.target.value)
                setIsNavOpen(false)
            }
            }
            value={value}
        >
            {options.map(({name, iso, flag}) => (
                <option key={name} value={iso} title={name}>
                    <>
                    {flag} {name} ({iso})
                    </>
                </option> 
            ))}
            {/* <option className="optLang" value="en-US">🇺🇸 English</option>
            <option className="optLang" value="es-ES">🇪🇸 Spanish</option>
            <option className="optLang" value="fr">🇫🇷 French</option>
            <option className="optLang" value="pt-BR">🇵🇹 Portugues</option>
            <option className="optLang" value="es-VE">🇮🇹 Italian</option>  */}
        </select>
    )
}

export { SelectLanguage }