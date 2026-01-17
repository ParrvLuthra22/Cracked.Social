
import React from 'react'

const features = [
    {
        title: 'Founder Fireside Chats',
        description: 'Intimate sessions with successful founders sharing their honest journeys, failures, and pivotal moments.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
        )
    },
    {
        title: 'Build-in-Public Workshops',
        description: 'Hands-on sessions where we ship features, specific marketing campaigns, or fix bugs in real-time.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        )
    },
    {
        title: 'Demo Day Sessions',
        description: 'Showcase what you are building to a supportive network of builders, investors, and potential co-founders.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        )
    }
]

export default function Features() {
    const styles = `
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      perspective: 1000px;
    }

    .feature-card {
      background: #0a0a0a;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      padding: 48px 32px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
      background: linear-gradient(145deg, rgba(255,255,255,0.02), transparent), #0a0a0a;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.05) inset, 0 -1px 0 rgba(0, 0, 0, 0.5) inset;
    }

    .feature-card:hover {
      transform: translateY(-12px) rotateX(5deg);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 2px 0 rgba(255, 255, 255, 0.1) inset, 0 -2px 0 rgba(0, 0, 0, 0.5) inset;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 2rem;
      position: relative;
      transform-style: preserve-3d;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: iconRotate 10s linear infinite;
    }
    
    @keyframes iconRotate {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
    }

    .feature-icon::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 5px 5px 15px #000, -5px -5px 15px #1a1a1a;
      z-index: -1;
    }
    
    .feature-card::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #fff, transparent);
        box-shadow: 0 0 10px #fff;
        transition: width 0.4s ease;
    }
    
    .feature-card:hover::after {
        width: 80%;
    }
  `

    return (
        <section className="py-32 bg-black relative">
            <style>{styles}</style>
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What is cracked.social?</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        A focused, high-signal community for founders and builders — events, collabs, and the occasional hackathon reveal.
                    </p>
                </div>

                <div className="feature-grid">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card text-center group">
                            <div className="feature-icon text-white">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                            <p className="feature-description text-gray-400 leading-relaxed text-lg font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
