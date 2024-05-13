import { TracingBeam } from "./ui/tracing-beam";
import tableData from './tableData.json'
import NumberTicker from "@/components/magicui/number-ticker";
import { cn } from "@/lib/utils";
import {ProgressBar} from "react-progressbar-fancy";
import AnimatedGradientText from "./magicui/animated-gradient-text";




export default function TableComponent() {
   

    let totalCompletions = tableData.filter(item => item.Completion === 'Yes').length;
    let final = totalCompletions/80*100
    
   
    return (
        <div className="">
           
            <div className="md:w-96 mx-auto  justify-center items-center mb-6 w-72 flex">
                <ProgressBar  score={final} progressColor='green'  /> <h4 className="relative md:text-3xl text-2xl mt-3 md:mt-2  -ml-3">🏆 </h4>
            </div>
            
            <TracingBeam className="px-6 ">
                <div className="bg-slate-950 sm:mx-10 mx- ">
                    <div className="flex justify-center items-center">
                   
                        <AnimatedGradientText className="sm:text-2xl text-xl"> 🎉 {}<hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                                    <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                    )}
                                    >
                                    GEN AI Graduates  <NumberTicker value={totalCompletions  } className="ml-2 font-bold italic mx-1"/> 
                                    </span>
                                    <span className="relative">😉</span>

                        </AnimatedGradientText>
                        
                    </div>
                    <div className="mt-12 relative h-max overflow-auto">
                        <table className="w-full table-auto text-sm ml-2 text-left">
                            <thead className="text-gray-300 font-medium border-b">
                                <tr>
                                    <th className="py-3 sm:pr-2">Name</th>
                                    <th className="py-3 pr-6">Completion Status</th>
                                    <th className="py-3 pr-6">Vertex Ai </th>
                                    <th className="py-3 pr-6">Gemini & Streamlit</th>
                                    <th className="py-3 pr-6">Level 3</th>
                                    {/* <th className="py-3 pr-"></th> */}
                                </tr>
                            </thead>
                            <tbody className="text-gray-400 divide-y">
                            
                                {tableData.map((item, idx) => (
                                    <tr key={idx}>
                                        
                                       
                                        <td className="sm:pr-6 py-4 whitespace-nowrap">{item.Name}{item.Completion == "Yes"? "🏅":""}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">
                                          
                                            <span className={`sm:px-3 px-2 py-2 rounded-full font-semibold text-xs ${item.Completion == "Yes" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-200"}`}>
                                                {item.Completion == "Yes"? "Completed 🎉": "Incomplete ☹️"}
                                                
                                            </span>
                                           
                                           
                                        </td>
                                        
                                        <td className="pr-6 py-4 whitespace-nowrap text-green-400 ">{item.vertexAi == 1? "✔️":"❔"}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.geminiAndStreamlit == 1? "✔️":"❔"}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.genAiArcade == 1? "✔️":"❔"}</td>
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
