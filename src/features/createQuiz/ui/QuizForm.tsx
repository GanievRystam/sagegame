import React, {useMemo, useState} from 'react';


const QuizForm = () => {
    const topcs = ['История', 'Наука', 'Наука'];
    const difficult = ['Легкий', 'Среднее','Сложное','Легендарное'];
    const [search, setSearch] = useState('');

    const filteredTopics = useMemo(() => {
        return topcs.filter((topic) =>
        topic.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <form  className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Тема</label>
        <div className="space-y-4 relative">
            <input
                type="text"
                placeholder="Поиск темы..."
                className="mt-1 p-2 border rounded w-full"
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className={`absolute z-10 w-48 bg-white border 
                border-gray-200 rounded-md shadow-lg p-2 w-full
                max-h-60 overflow-y-auto transition-opacity duration-200 
                ease-in-out ${search.length > 0 ? 'opacity-100' : 'opacity-0'}`}>

                {filteredTopics.map((item, id) => {
                    return <li key ={id} value={item}>{item}</li>
                })}
                {filteredTopics.length === 0 && <p>Увы, но такой темы нет, но вы можете её создать сами</p>}
            </ul>
        </div>
        <select

          className="mt-1 p-2 border rounded w-full"
        >
          <option value="">Выберите сложность</option>
            {difficult.map((item) => {
                return <option key = {item} value={item}>item</option>
            })}
        </select>
        <select

          className="mt-1 p-2 border rounded w-full"
        >
          <option value="">Выберите тему</option>
        {topcs.map((item) => {
            return <option key = {item} value={item}>{item}</option>
        })}
        </select>
        <input
          type="text"
          placeholder="Своя тема..."
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Создать квиз
      </button>
    </form>
    )
}
export default QuizForm;