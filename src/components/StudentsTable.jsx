import React, { useState } from 'react';

const StudentsTable = () =>
{   
    const [ classesData, setClassesData ] = useState( [] )
    const fetchData = async () =>
    {
        try
        {
            const res = await fetch( 'data.json' );
            const data = await res.json();
            console.log( data );
            setClassesData( data.classes );
        }
        catch ( error )
        {
            console.error( 'Error fetching data:', error );
        }
    };

    fetchData();

    return (
        <div className="max-w-[848px] mx-auto overflow-hidden text-white">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-[#FFFFFF0D]">
                        <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                            ID
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
                        <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                        <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default StudentsTable;