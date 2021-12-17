import { useEffect, useState } from 'react'

export default function SantaList(props) {
    const [ kids, setKids ] = useState([])
    const [ toys, setToys ] = useState([])
    const [intervalId, setIntervalId] = useState(false)

    const getData = () => {
        fetch('data.json', { 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then(res => res.json())
            .then(data => setToys(data))      
    }

    useEffect(() => {
        const abortCont = new AbortController()

        const fetchData = async () => {
            try {
                const res = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=80`, { signal: abortCont.signal })
                const json = await res.json()
                setKids(json.data)
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                console.log(error)
                }
            }
        }
        
        const id = setInterval(() => {
            fetchData()
            getData()
        }, 1000)

        return () => abortCont.abort()
        return clearInterval(id) 
        
        
    }, [])

    const rando = Math.round((Math.random() * 40))


    return (

         // INNER Screen 
        <>
        <div className="text-white text-center">
            <h1 className='text-1xl'>Naughty or Nice List 👇</h1>
       
        </div>

        <div className="m-4 p-3 bg-slate-800 border border-blue-400 rounded-2xl grid grid-cols-2 text-xs text-gray-300">

        <div className="flex flex-col items-center border-dashed border-b border-r border-blue-400">
       
            <div className="text-gray-300 mt-1 mb-2">Nice</div>
            {props.totalHomes && <div className="overflow-y-auto h-32 flex flex-col">
                {kids.filter((user, i) => i <= 40).map((users, i) =>
                    <ul key={toys.id}>
                        <li>{`${users.firstname} ${users.lastname}`}</li>
                        <li className="text-sm">{toys[i].toy} 🎁</li>
                    </ul>)}
            </div>}
        </div>

        <div className="flex flex-col items-center border-dashed border-b border-blue-400">
            <div className="text-gray-300 mt-1 mb-2">Naughty</div>
            {props.totalHomes && <div className="overflow-y-auto h-32 flex flex-col">
                {kids.filter((user, i) => i > 40).map((users) =>
                    <p>{`${users.firstname} ${users.lastname}`} 😭</p>)}
            </div>}
        </div>
        </div>
           </>
    )
}