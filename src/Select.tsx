import styles from "./select.module.css"

type SelectOption = {
    label: string
    value: string
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {
    return (
        <div className={styles.container}>
            <span className={styles.value}>Value</span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>

        </div>
        
    )
}