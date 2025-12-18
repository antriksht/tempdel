import { useEffect, useState } from 'react';

interface NpsSurveyProps {
    onClose: () => void;
}

export default function NpsSurvey({ onClose }: NpsSurveyProps) {
    // Animation state
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            />

            {/* Drawer */}
            <div
                className={`relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-t-[32px] shadow-2xl transform transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ height: '50vh', maxHeight: '500px' }}
            >
                {/* Handle bar area */}
                <div className="w-full flex justify-center pt-4 pb-2 cursor-pointer" onClick={handleClose}>
                    <div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
                </div>

                {/* Header */}
                <div className="px-6 pb-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">We value your opinion</h3>
                        <p className="text-xs text-zinc-500">Help us improve your shopping experience</p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 dark:text-zinc-400">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Iframe Container */}
                <div className="w-full h-full pb-20 bg-zinc-50 dark:bg-zinc-950/50 rounded-t-xl overflow-hidden relative">
                    <iframe
                        src="https://survey.zohopublic.in/zs/GtCs8p?target=top"
                        className="w-full h-full border-0 absolute inset-0"
                        title="NPS Survey"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
