import { Home, Sparkles, Play, Download } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#features', icon: Sparkles },
    { name: 'Demo', url: '#demo', icon: Play },
    { name: 'Install', url: '#install', icon: Download }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-ink via-[#1a1a3a] to-ink overflow-x-hidden">
      {/* Neural Network Background */}
      <div className="fixed inset-0 -z-10 opacity-30">
        {/* Simplified neural network background */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/10 via-vivid-violet/5 to-plasma-blue/10 animate-pulse" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(75, 15, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(42, 179, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(122, 44, 255, 0.05) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-16">
        
        {/* Micro Badge */}
        <div className="mb-8 animate-float" data-testid="hero-badge">
          <div className="glass-card px-4 py-2 rounded-full border border-primary/20">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-accent font-semibold">NEW</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-foreground">Generative Gates</span>
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-6xl mx-auto mb-8" data-testid="hero-title">
          <h1 className="display-font text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <GradientText
              colors={["#4B0FFF", "#7A2CFF", "#2AB3FF", "#4B0FFF"]}
              animationSpeed={6}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2"
            >
              Humans only.
            </GradientText>
            <div className="text-foreground/90 mt-2">
              Bots can bounce.
            </div>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            CaptchaRizz is an AI-powered vibe check that replaces clunky CAPTCHAs with culture-savvy prompts—fast, fun, and hard to spoof.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16" data-testid="hero-cta">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-testid="button-try-demo"
          >
            <span className="relative z-10 tracking-wide">Try the demo</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card hover:bg-white/5 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-primary/30"
            data-testid="button-install"
          >
            <span className="tracking-wide">Install on your site</span>
          </Button>
        </div>

        {/* How It Works Section */}
        <div className="w-full max-w-6xl mx-auto" data-testid="how-it-works">
          <div className="text-center mb-12">
            <h2 className="display-font text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">How it works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="step-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="display-font text-xl font-semibold text-foreground mb-3">Enter the gate</h3>
                <p className="text-muted-foreground">You hit a page and need to prove you're real.</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="step-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="display-font text-xl font-semibold text-foreground mb-3">Pass the vibe check</h3>
                <p className="text-muted-foreground">Answer a quick human-only prompt (slang, meme logic, or tiny expression task).</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="step-3">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="display-font text-xl font-semibold text-foreground mb-3">You're in</h3>
                <p className="text-muted-foreground">Welcome, human. Bots get blocked.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl mx-auto mb-16" data-testid="features">
          <div className="text-center mb-12">
            <h2 className="display-font text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card group hover:bg-white/5 transition-all duration-300" data-testid="feature-ai">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">🧠</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">AI-Powered Filters</h3>
                <p className="text-sm text-muted-foreground">Knows what bots can't fake.</p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:bg-white/5 transition-all duration-300" data-testid="feature-custom">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">✨</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Custom Vibe Checks</h3>
                <p className="text-sm text-muted-foreground">Choose memes, slang, emoji math, or micro-gestures.</p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:bg-white/5 transition-all duration-300" data-testid="feature-ux">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Zero-Friction UX</h3>
                <p className="text-sm text-muted-foreground">One tap, sub-2s median time, accessibility-safe mode.</p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:bg-white/5 transition-all duration-300" data-testid="feature-plugin">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">🔌</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Plugs in Anywhere</h3>
                <p className="text-sm text-muted-foreground">Drop-in widget for websites, apps, and games (REST + JS SDK).</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why CaptchaRizz Section */}
        <div className="w-full max-w-4xl mx-auto text-center mb-16" data-testid="why-captcharizz">
          <h2 className="display-font text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">Why CaptchaRizz?</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
            <p>Because traffic-light CAPTCHAs are so 2005.</p>
            <p>Bots don't know Gen Z slang. <GradientText className="inline font-semibold" colors={["#4B0FFF", "#7A2CFF", "#2AB3FF"]}>That's the firewall.</GradientText></p>
            <p>Smarter than CAPTCHA, funnier than 2FA.</p>
            <p>Privacy-first. No biometric storage; on-device checks where possible.</p>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="w-full max-w-4xl mx-auto mb-16" data-testid="social-proof">
          <div className="text-center mb-8">
            <h2 className="display-font text-2xl md:text-3xl font-bold text-foreground mb-4">What people are saying</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card" data-testid="testimonial-1">
              <CardContent className="p-6">
                <p className="text-foreground/90 mb-4">"First time I wanted to take a CAPTCHA."</p>
                <p className="text-sm text-muted-foreground">— @realuserlol</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card" data-testid="testimonial-2">
              <CardContent className="p-6">
                <p className="text-foreground/90 mb-4">"Failed the first rizz check… humbling."</p>
                <p className="text-sm text-muted-foreground">— @techbro</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="w-full max-w-4xl mx-auto text-center" data-testid="final-cta">
          <h2 className="display-font text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <GradientText className="inline" colors={["#4B0FFF", "#7A2CFF", "#2AB3FF"]}>rizz up</GradientText> your login page?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Join the next-gen, human-first security layer.</p>
          
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-12 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            data-testid="button-get-started"
          >
            <span className="relative z-10 tracking-wide">Get Started</span>
          </Button>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-white/10" data-testid="footer">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CaptchaRizz · 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-twitter">Twitter</a> · 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-github">GitHub</a> · 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-contact">Contact</a> · 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-privacy">Privacy</a> · 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-terms">Terms</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
