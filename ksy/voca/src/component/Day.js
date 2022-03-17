import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

export default function Day() {
    // const wordList = dummy.words.filter(word => (
    //     word.day === Number(day)
    // ));


    const { day } = useParams();
    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`) //Promise 반환
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setWords(data);
    //         });
    // }, [day]);


    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}