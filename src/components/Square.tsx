interface Props {
    index: number;
    turn: string;
    value: string;
    handleClick(index:number): void;
}

const Square = (props: Props) => {
    const { index, turn, value, handleClick } = props;

    const styles = {
        button: {
            width: '100px',
            height: '100px',
            fontSize: '46px',
            backgroundColor: 'rgb(85, 182, 145)',
            border: '4px solid rgb(57, 126, 99)'
        }
    }

    return (
        <button style={styles.button} className={turn === 'O' ? `square-${index} p2Color` : `square-${index}`} onClick={() => {handleClick(index)}}>
            {value}
        </button>
    )
}

export default Square; 