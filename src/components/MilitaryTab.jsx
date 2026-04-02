import React, { useState } from 'react';
import { Skull, ArrowRight, ArrowDown, X } from 'lucide-react';
import { militaryNodes } from '@/data/military';
import { useDictionary } from './DictionaryContext';

export default function MilitaryTab() {
  const { dict } = useDictionary();
  const [selectedMilitaryNode, setSelectedMilitaryNode] = useState(null);

  return (
    <div className="space-y-8">
      <div className="mb-8 border-b border-slate-800 pb-8">
        <h2 className="text-3xl font-bold text-white mb-3">{dict.military.title}</h2>
        <p className="text-slate-400 max-w-4xl leading-relaxed">
          {dict.military.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 relative">
        {/* Linha vertical conectando os cards */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-slate-800 -z-10 rounded-full hidden md:block"></div>

        {militaryNodes.map((node, i) => (
          <React.Fragment key={i}>
            <div
              onClick={() => setSelectedMilitaryNode(node)}
              className={`bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-md cursor-pointer hover:-translate-y-1 transition-all group ${node.themeBorder.replace('border-', 'hover:border-')}`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-full ${node.themeBg} ${node.themeBorder} border flex-shrink-0 mx-auto md:mx-0`}>
                  {node.icon}
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className={`text-xl font-bold text-white mb-2`}>{node.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{node.description}</p>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center min-w-[120px] text-xs font-semibold text-slate-500 uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                  {dict.military.details}
                  <ArrowRight className="w-5 h-5 mt-1" />
                </div>
              </div>
            </div>

            {/* Seta para baixo entre os cartões */}
            {i < militaryNodes.length - 1 && (
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowDown className="w-8 h-8" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 p-5 bg-red-900/20 border border-red-800/30 rounded-xl">
        <h4 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-2">
          <Skull className="w-5 h-5" /> {dict.military.hiddenCost}
        </h4>
        <p className="text-sm text-red-200/80 leading-relaxed">
          {dict.military.costDescription}
        </p>
      </div>

      {/* Modal */}
      {selectedMilitaryNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedMilitaryNode(null)}>
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
            onClick={e => e.stopPropagation()}
          >
            <div className={`sticky top-0 bg-slate-900/95 backdrop-blur z-10 p-6 border-b border-slate-800 flex justify-between items-start relative overflow-hidden`}>
              <div className="flex items-center gap-4 relative z-10">
                <div className={`p-3 rounded-xl shadow-sm border ${selectedMilitaryNode.themeBg} ${selectedMilitaryNode.themeBorder}`}>
                  {selectedMilitaryNode.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{selectedMilitaryNode.title}</h2>
                  <span className={`text-xs uppercase tracking-wider font-semibold ${selectedMilitaryNode.themeColor}`}>
                    {dict.military.nodeModalSubtitle}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedMilitaryNode(null)}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <section>
                <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">{dict.politics.processPhase}</h3>
                <p className="text-lg text-slate-300 leading-relaxed">{selectedMilitaryNode.details}</p>
              </section>

              {/* Tabela de Inputs e Outputs */}
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-8 relative">

                {/* Entradas */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowDown className="w-5 h-5 text-slate-500" />
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{dict.politics.requires}</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    {selectedMilitaryNode.inputs.map((input, idx) => (
                      <div key={idx} className="bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-lg text-slate-300 text-sm font-medium shadow-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-3"></div>
                        {input}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divisor Visual para Desktop */}
                <div className="hidden md:flex absolute inset-y-6 left-1/2 w-px bg-slate-800">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-2 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Saídas */}
                <div>
                  <div className="flex items-center justify-end md:justify-start gap-2 mb-4">
                    <h4 className={`text-sm font-bold uppercase tracking-widest ${selectedMilitaryNode.themeColor}`}>{dict.politics.generates}</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    {selectedMilitaryNode.outputs.map((output, idx) => (
                      <div key={idx} className={`bg-slate-800 border px-4 py-2.5 rounded-lg text-white text-sm font-medium shadow-sm flex items-center ${selectedMilitaryNode.themeBorder}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${selectedMilitaryNode.themeBg.replace('/20', '')}`}></div>
                        {output}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
