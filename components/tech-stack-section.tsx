import {
    Code2,
    Database,
    Globe,
    Layout,
    Server,
    Terminal,
    Cpu,
    GitBranch,
    Box,
    Monitor,
    Cpu as Microchip,
    Brain,
    BarChart,
    PieChart,
    LineChart,
    Wrench,
    Github,
    BookOpen
} from "lucide-react"

export function TechStackSection() {
    const skills = [
        { name: "Python", icon: Terminal, color: "bg-[#3776AB] text-white" },
        { name: "SQL", icon: Database, color: "bg-[#4479A1] text-white" },
        { name: "JavaScript", icon: Globe, color: "bg-[#F7DF1E] text-black" },
        { name: "Pandas", icon: Box, color: "bg-[#150458] text-white" },
        { name: "NumPy", icon: Box, color: "bg-[#013243] text-white" },
        { name: "Scikit-learn", icon: Cpu, color: "bg-[#F7931E] text-white" },
        { name: "PyTorch", icon: Microchip, color: "bg-[#EE4C2C] text-white" },
        { name: "Machine Learning", icon: Brain, color: "bg-[#FF4A60] text-white" },
        { name: "Data Cleaning", icon: Wrench, color: "bg-[#6366F1] text-white" },
        { name: "Exploratory Data Analysis", icon: BarChart, color: "bg-[#2F81F7] text-white" },
        { name: "Model Evaluation", icon: LineChart, color: "bg-[#10A37F] text-white" },
        { name: "Power BI", icon: PieChart, color: "bg-[#F2C811] text-black" },
        { name: "Matplotlib", icon: BarChart, color: "bg-[#11557C] text-white" },
        { name: "Plotly", icon: LineChart, color: "bg-[#3F4F75] text-white" },
        { name: "Tableau", icon: PieChart, color: "bg-[#E97627] text-white" },
        { name: "React", icon: Layout, color: "bg-[#61DAFB] text-black" },
        { name: "Next.js", icon: Globe, color: "bg-[#000000] text-white" },
        { name: "MongoDB", icon: Database, color: "bg-[#47A248] text-white" },
        { name: "Flask", icon: Server, color: "bg-[#000000] text-white" },
    ]

    const tools = [
        { name: "Git", icon: GitBranch, color: "bg-[#F05032] text-white" },
        { name: "GitHub", icon: Github, color: "bg-[#181717] text-white" },
        { name: "Jupyter Notebook", icon: BookOpen, color: "bg-[#F37626] text-white" },
        { name: "Google Colab", icon: Code2, color: "bg-[#F9AB00] text-black" },
    ]

    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-7xl mx-auto">

                {/* Professional Skillset */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        Professional <span className="bg-[#BFAFF2] text-black px-2.5 py-0.5 md:px-3 md:py-1 inline-block border-[3px] border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Skillset</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-6 mt-8 md:mt-12">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-2 sm:gap-3 bg-white border-[2.5px] sm:border-[3px] border-black rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 cursor-default"
                            >
                                <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg border-2 border-black ${skill.color} group-hover:scale-110 transition-transform`}>
                                    <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-sm sm:text-base md:text-xl font-bold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools I Use */}
                <div className="text-center mt-12 md:mt-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        Tools <span className="bg-[#FFC224] text-black px-2.5 py-0.5 md:px-3 md:py-1 inline-block border-[3px] border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">I use</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-6 mt-8 md:mt-12">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-2 sm:gap-3 bg-white border-[2.5px] sm:border-[3px] border-black rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 cursor-default"
                            >
                                <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg border-2 border-black ${tool.color} group-hover:scale-110 transition-transform`}>
                                    <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-sm sm:text-base md:text-xl font-bold">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
