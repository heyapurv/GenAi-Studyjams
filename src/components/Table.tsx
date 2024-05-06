import { TracingBeam } from "./ui/tracing-beam";
import tableData from "./tableData.json";

export default function TableComponent() {
    return (
        <div className="mx-3">
            <TracingBeam className="px-6 ">
                <div className="bg-slate-950 sm:mx-10 mx- ">
                    <div className="mt-12 relative h-max overflow-auto">
                        <table className="w-full table-auto text-sm ml-2 text-left">
                            <thead className="text-gray-300 font-medium border-b">
                                <tr>
                                    <th className="py-3 pr-2">Name</th>
                                    <th className="py-3 pr-6">Completion Status</th>
                                    <th className="py-3 pr-6">Vertex Ai </th>
                                    <th className="py-3 pr-6">Gemini & Streamlit</th>
                                    <th className="py-3 pr-6">Level 3</th>
                                    <th className="py-3 pr-"></th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-400 divide-y">
                                {tableData.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.Name}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.Completion == "Yes" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-200"}`}>
                                                {item.Completion == "Yes"? "Completed": "Incomplete"}
                                            </span>
                                        </td>
                                        
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.vertexAi}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.geminiAndStreamlit}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.genAiArcade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TracingBeam>
        </div>
    );
}
