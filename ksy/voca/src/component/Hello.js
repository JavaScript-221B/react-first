// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;



import World from './World';

export default function Hello() {
    return (
        <div>
            <h2>Hello</h2>
            <World />
            <World />
        </div>
    );
}