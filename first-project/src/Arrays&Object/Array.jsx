import './Arr.css';
//FIRSTLY THE JAVASCRIPT ARRAYS ARE LIKE THIS
//const arr = ['code', 'program', 'learn', 'problem', 'solve'];

//but now in React we return this array by the map method, like this;

function Array() {
    const arr = ['code', 'program', 'learn', 'problem', 'solve'];
    return (
        <>
            <h3 className='array'>ARRAY WITH LOOP</h3>
            <ul>
                {arr.map((x, index) => (
                    <li>{index} - {x}</li>

                ))}
            </ul>
        </>

    );

}
export default Array;



//but, to fetching it into the React library REturn function always be used like;

