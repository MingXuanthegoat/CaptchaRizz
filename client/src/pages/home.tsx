import { Home, Users, Play, Download, Copy, Check } from 'lucide-react'
import { Link } from 'wouter'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Waves } from "@/components/ui/waves-background"
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block"
import { useState } from 'react'

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Team', url: '#team', icon: Users },
    { name: 'Demo', url: '#demo', icon: Play },
    { name: 'Install', url: '#install', icon: Download }
  ]

  const installCode = `npm install captcha-rizz

// Initialize CaptchaRizz
import { CaptchaRizz } from 'captcha-rizz';

const captcha = new CaptchaRizz({
  apiKey: 'your-api-key',
  theme: 'dark',
  difficulty: 'medium'
});

// Verify user
captcha.verify().then(result => {
  if (result.success) {
    console.log('Human verified! 🎉');
  } else {
    console.log('Bot detected! 🤖');
  }
});`

  const handleCopy = () => {
    navigator.clipboard.writeText(installCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Gradient Background */}
      <div id="hero" className="min-h-screen bg-gradient-to-br from-ink via-[#1a1a3a] to-ink relative">
        {/* Neural Network Background for Hero only */}
        <div className="absolute inset-0 -z-10 opacity-30">
          {/* Simplified neural network background */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/10 via-vivid-violet/5 to-plasma-blue/10 animate-pulse" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(75, 15, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(42, 179, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(122, 44, 255, 0.05) 0%, transparent 50%)`
          }} />
        </div>
        
        {/* Navigation */}
        <div className="fixed top-6 left-6 z-50">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/attached_assets/captcha favicon:solo_1757076458364.jpg" 
              alt="CaptchaRizz" 
              className="w-12 h-12 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
        <NavBar items={navItems} />

        {/* Hero Content */}
        <main className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-16">
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
              CaptchaRizz is an AI-powered vibe check that replaces clunky CAPTCHAs with culture-savvy prompts. Fast, fun, and hard to spoof.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16" data-testid="hero-cta">
            <a href="/login">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-testid="button-try-demo"
              >
                <span className="relative z-10 tracking-wide">Try the demo</span>
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:bg-white/5 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-primary/30"
              data-testid="button-install"
            >
              <span className="tracking-wide">Install on your site</span>
            </Button>
          </div>
        </main>
      </div>

      {/* Content Sections with Black Background */}
      <div className="bg-black">
        {/* How It Works Section */}
        <div id="demo" className="relative w-full max-w-6xl mx-auto py-16 px-4 md:px-8" data-testid="how-it-works">
          <Waves 
            lineColor="rgba(75, 15, 255, 0.15)"
            backgroundColor="black"
            waveSpeedX={0.01}
            waveSpeedY={0.008}
            waveAmpX={25}
            waveAmpY={15}
            friction={0.92}
            tension={0.008}
            maxCursorMove={80}
            xGap={15}
            yGap={35}
            className="animate-wave-pulse"
          />
          <div className="relative z-10 text-center mb-12">
            <h2 className="display-font text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">How it works</h2>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Team Section */}
        <div className="relative w-full max-w-6xl mx-auto mb-16 px-4 md:px-8" data-testid="team">
          <Waves 
            lineColor="rgba(42, 179, 255, 0.12)"
            backgroundColor="black"
            waveSpeedX={0.008}
            waveSpeedY={0.012}
            waveAmpX={30}
            waveAmpY={20}
            friction={0.88}
            tension={0.012}
            maxCursorMove={120}
            xGap={12}
            yGap={40}
            className="animate-wave-pulse"
          />
          <div className="relative z-10 text-center mb-12">
            <h2 className="display-font text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The humans behind the human verification</p>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="team-euan">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-4 mx-auto flex items-center justify-center overflow-hidden">
                  <span className="text-white text-2xl font-bold">EF</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Euan Fraser</h3>
                <p className="text-sm text-muted-foreground mb-2">Frontend & Integration</p>
                <p className="text-xs text-muted-foreground/80">Building seamless user experiences and connecting all the pieces</p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="team-ming">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mb-4 mx-auto flex items-center justify-center overflow-hidden">
                  <span className="text-white text-2xl font-bold">MC</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ming Xuan Chong</h3>
                <p className="text-sm text-muted-foreground mb-2">Backend & Database</p>
                <p className="text-xs text-muted-foreground/80">Architecting robust systems and data infrastructure</p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="team-mo">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full mb-4 mx-auto flex items-center justify-center overflow-hidden">
                  <span className="text-white text-2xl font-bold">MA</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Mo Alizadeh</h3>
                <p className="text-sm text-muted-foreground mb-2">Marketing & UI</p>
                <p className="text-xs text-muted-foreground/80">Crafting compelling experiences and spreading the word</p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:bg-white/5 transition-all duration-300 transform hover:scale-105" data-testid="team-keith">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mb-4 mx-auto flex items-center justify-center overflow-hidden">
                  <span className="text-white text-2xl font-bold">KA</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Keith Arputham</h3>
                <p className="text-sm text-muted-foreground mb-2">Backend Developer</p>
                <p className="text-xs text-muted-foreground/80">Building powerful server-side logic and APIs</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why CaptchaRizz Section */}
        <div className="w-full max-w-4xl mx-auto text-center mb-16 px-4 md:px-8" data-testid="why-captcharizz">
          <h2 className="display-font text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">Why CaptchaRizz?</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
            <p>Because traffic-light CAPTCHAs are so 2005.</p>
            <p>Bots don't know Gen Z slang. <GradientText className="inline font-semibold" colors={["#4B0FFF", "#7A2CFF", "#2AB3FF"]}>That's the firewall.</GradientText></p>
            <p>Smarter than CAPTCHA, funnier than 2FA.</p>
            <p>Privacy-first. No biometric storage; on-device checks where possible.</p>
          </div>
        </div>

        {/* Installation Code Section */}
        <div className="w-full max-w-4xl mx-auto mb-16 px-4 md:px-8" data-testid="installation-code">
          <div className="text-center mb-8">
            <h2 className="display-font text-2xl md:text-3xl font-bold text-foreground mb-4">Get started in seconds</h2>
            <p className="text-muted-foreground">Copy the code below to integrate CaptchaRizz into your project</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <CodeBlock>
                <CodeBlockGroup className="border-border border-b px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                      JavaScript
                    </div>
                    <span className="text-muted-foreground text-sm">
                      Installation & Setup
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={handleCopy}
                    data-testid="button-copy-code"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CodeBlockGroup>
                <CodeBlockCode code={installCode} language="javascript" theme="github-dark" />
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="w-full max-w-4xl mx-auto mb-16 px-4 md:px-8" data-testid="social-proof">
          <div className="text-center mb-8">
            <h2 className="display-font text-2xl md:text-3xl font-bold text-foreground mb-4">What people are saying</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card" data-testid="testimonial-1">
              <CardContent className="p-6">
                <p className="text-foreground/90 mb-4">"First time I wanted to take a CAPTCHA."</p>
                <p className="text-sm text-muted-foreground">@realuserlol</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card" data-testid="testimonial-2">
              <CardContent className="p-6">
                <p className="text-foreground/90 mb-4">"Failed the first rizz check... humbling."</p>
                <p className="text-sm text-muted-foreground">@techbro</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div id="install" className="w-full max-w-4xl mx-auto text-center px-4 md:px-8 pb-16" data-testid="final-cta">
          <h2 className="display-font text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <GradientText className="inline" colors={["#4B0FFF", "#7A2CFF", "#2AB3FF"]}>rizz up</GradientText> your login page?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Join the next-gen, human-first security layer.</p>
          
          <a href="/login">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-12 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              data-testid="button-get-started"
            >
              <span className="relative z-10 tracking-wide">Get Started</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-white/10 bg-black" data-testid="footer">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CaptchaRizz | 
            <a href="https://www.instagram.com/captcharizz/" className="hover:text-primary transition-colors ml-1" data-testid="link-instagram">Instagram</a> | 
            <a href="https://www.tiktok.com/@captcharizz?lang=en" className="hover:text-primary transition-colors ml-1" data-testid="link-tiktok">TikTok</a> | 
            <a href="https://www.linkedin.com/company/captcharizz/?viewAsMember=true" className="hover:text-primary transition-colors ml-1" data-testid="link-linkedin">LinkedIn</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-contact">Contact</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-privacy">Privacy</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-1" data-testid="link-terms">Terms</a>
          </p>
        </div>
      </footer>
    </div>
  )
}