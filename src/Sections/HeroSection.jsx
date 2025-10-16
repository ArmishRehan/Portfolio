import { ArrowDown } from "lucide-react"
import TextType from '../components/TextType';

export const HeroSection = () => {

    return (
        <section id="hero" className="relative flex flex-col min-h-screen items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">

                        <TextType
                            text={["I am Armish Rehan", "Web Developer", "Computer Engineer"]}
                            textColors={['#F9FAFB', '#7C65D5', '#F9FAFB']}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        As a computer engineer, I design and develop dynamic, responsive websites that turn ideas into functional digital experiences.
                    </p>
                    <div>
                        <a href="#projects" className="  cosmic-button opacity-0 animate-fade-in-delay-4">
                            View My Work
                        </a>
                    </div>
                </div>
            </div >

            <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section >
    )
}