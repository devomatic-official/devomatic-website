"use client"

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !service || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          service,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Thank you! We\'ll get back to you soon.');
        // Reset form
        setEmail('');
        setService('');
        setMessage('');
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border px-4 py-12 lg:px-0 lg:py-24">
      <Card className="mx-auto max-w-lg p-8 sm:p-16">
        <h3 className="text-xl font-semibold">Let's connect</h3>
        <p className="mt-4 text-sm">Reach out to our sales team. We're eager to learn more about you!</p>

        <div className="**:[&>label]:block space-y-6 *:space-y-3">
          <div>
            <Label
              htmlFor="email"
              className="space-y-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label
              htmlFor="service"
              className="space-y-2">
              Select a Service
            </Label>
            <Select value={service} onValueChange={setService} disabled={isSubmitting}>
              <SelectTrigger>
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AI Automation">AI Automation</SelectItem>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Chat Bot">Chat Bot</SelectItem>
                <SelectItem value="Hospital Management System">Hospital Management System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="msg"
              className="space-y-2">
              Message
            </Label>
            <Textarea
              id="msg"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </div>
      </Card>
    </form>
  )
}