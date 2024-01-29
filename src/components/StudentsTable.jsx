/* eslint-disable react/prop-types */
import React from "react";

const StudentsTable = ( { data } ) =>
{
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
                <tbody>
                    { data.classes.map( ( classes, index ) => (
                        <React.Fragment key={ index }>
                            <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl" colSpan={ 4 }>
                                    { classes.className }
                                </td>
                            </tr>
                            { classes.students.sort( ( a, b ) =>
                            {
                                const gradeOrder = {
                                    "A+": 1,
                                    "A": 2,
                                    "A-": 3,
                                    "B": 4,
                                    "C": 5,
                                    "D": 6,
                                    "E": 7,
                                    "F": 99
                                };

                                return gradeOrder[ a.grade ] - gradeOrder[ b.grade ];
                            } ).map( ( student ) => (
                                <tr key={ student.id } className="border-b border-[#7ECEB529]">
                                    <td className="p-5 text-sm md:text-xl">{ student.id }</td>
                                    <td className="p-5 text-sm md:text-xl">
                                        <div className="flex space-x-3 items-center">
                                            <img
                                                className="w-8 h-8"
                                                src={ student.image }
                                                width="32"
                                                height="32"
                                                alt={ student.name }
                                            />
                                            <span className="whitespace-nowrap">{ student.name }</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-sm md:text-xl text-center">{ student.grade }</td>
                                    <td className="p-5 text-sm md:text-xl text-center">{ student.percentage }</td>
                                </tr>
                            ) ) }
                        </React.Fragment>
                    ) ) }
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;