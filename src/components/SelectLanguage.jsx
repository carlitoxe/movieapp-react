const SelectLanguage = ({ title = '', options = [], setValue, value }) => {
    return (
        <select 
            title={title} 
            id="lang" 
            className="select-language-container h-[30px] rounded-lg bg-gray-800 mr-3" 
            onChange={(e) => setValue(e.target.value)}
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