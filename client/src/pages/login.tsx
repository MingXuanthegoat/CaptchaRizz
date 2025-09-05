import { useState } from 'react'
import { Link } from 'wouter'
import { ArrowLeft, Mail, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { Waves } from "@/components/ui/waves-background"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center p-4">
      {/* Background Waves */}
      <div className="absolute inset-0">
        <Waves 
          lineColor="rgba(122, 44, 255, 0.08)"
          backgroundColor="black"
          waveSpeedX={0.006}
          waveSpeedY={0.008}
          waveAmpX={20}
          waveAmpY={12}
          friction={0.95}
          tension={0.005}
          maxCursorMove={60}
          xGap={18}
          yGap={45}
          className="animate-wave-pulse"
        />
      </div>

      {/* Back Button */}
      <Link href="/" className="absolute top-8 left-8 z-20">
        <Button 
          variant="outline" 
          size="sm"
          className="glass-card hover:bg-white/5 text-foreground border border-white/10 hover:border-primary/30"
          data-testid="button-back-home"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      {/* Login Card */}
      <Card className="relative z-10 glass-card w-full max-w-md" data-testid="login-card">
        <CardHeader className="text-center pb-4">
          <div className="mb-4">
            <GradientText
              colors={["#4B0FFF", "#7A2CFF", "#2AB3FF"]}
              className="text-3xl font-bold"
            >
              CaptchaRizz
            </GradientText>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 glass-card bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                  placeholder="Enter your email"
                  required
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 glass-card bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                  placeholder="Enter your password"
                  required
                  data-testid="input-password"
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <button className="text-primary hover:text-accent transition-colors font-medium" data-testid="link-sign-up">
                Sign up
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground/80">
              By signing in, you agree to our{' '}
              <button className="text-primary hover:text-accent transition-colors" data-testid="link-terms">
                Terms
              </button>
              {' '}and{' '}
              <button className="text-primary hover:text-accent transition-colors" data-testid="link-privacy">
                Privacy Policy
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}