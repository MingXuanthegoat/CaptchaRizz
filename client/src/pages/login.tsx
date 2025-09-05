import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { ArrowLeft, Mail, Lock, User } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '@/hooks/use-toast'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { Waves } from "@/components/ui/waves-background"

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()
  const { toast } = useToast()

  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Login failed')
      }
      return response.json()
    },
    onSuccess: (data) => {
      toast({ title: 'Success!', description: data.message })
      setLocation('/')
    },
    onError: (error: Error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' })
    },
  })

  const signupMutation = useMutation({
    mutationFn: async (data: { username: string; email: string; password: string }) => {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Signup failed')
      }
      return response.json()
    },
    onSuccess: (data) => {
      toast({ title: 'Success!', description: data.message })
      setLocation('/')
    },
    onError: (error: Error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignup) {
      if (!username.trim()) {
        toast({ title: 'Error', description: 'Username is required', variant: 'destructive' })
        return
      }
      signupMutation.mutate({ username, email, password })
    } else {
      loginMutation.mutate({ email, password })
    }
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
          <Link href="/" className="mb-4 block">
            <img 
              src="/attached_assets/captcha favicon:solo_1757075508946.jpg" 
              alt="CaptchaRizz" 
              className="w-16 h-16 mx-auto mb-2 rounded-xl"
            />
            <GradientText
              colors={["#4B0FFF", "#7A2CFF", "#2AB3FF"]}
              className="text-2xl font-bold"
            >
              CaptchaRizz
            </GradientText>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">{isSignup ? 'Create Account' : 'Welcome back'}</h1>
          <p className="text-muted-foreground">{isSignup ? 'Join the human-first security revolution' : 'Sign in to your account to continue'}</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-foreground">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 glass-card bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                    placeholder="Choose a username"
                    required={isSignup}
                    data-testid="input-username"
                  />
                </div>
              </div>
            )}
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
              disabled={loginMutation.isPending || signupMutation.isPending}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              data-testid={isSignup ? "button-sign-up" : "button-sign-in"}
            >
              {(loginMutation.isPending || signupMutation.isPending) ? 'Please wait...' : (isSignup ? 'Create Account' : 'Sign In')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button 
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-primary hover:text-accent transition-colors font-medium" 
                data-testid={isSignup ? "link-sign-in" : "link-sign-up"}
              >
                {isSignup ? 'Sign in' : 'Sign up'}
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