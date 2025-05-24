
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  User, 
  CreditCard, 
  Key, 
  Bell,
  Save
} from 'lucide-react';

const SettingsContent = () => {
  const [profile, setProfile] = useState({
    name: 'Free Fire',
    email: 'user@example.com'
  });

  return (
    <div className="flex-1 bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center p-6 border-b border-gray-800">
        <SidebarTrigger className="text-white hover:bg-gray-800" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Manage your account and preferences</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Profile Settings */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <User className="h-5 w-5 mr-2" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Billing */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <CreditCard className="h-5 w-5 mr-2" />
              Billing & Subscription
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Current Plan</h3>
                <p className="text-gray-400">Free tier with limited features</p>
              </div>
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                Free
              </Badge>
            </div>
            <Separator className="bg-gray-700" />
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Upgrade to Premium
            </Button>
          </CardContent>
        </Card>

        {/* API Configuration */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Key className="h-5 w-5 mr-2" />
              API Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="gemini-key" className="text-gray-300">Custom Gemini API Key (Optional)</Label>
              <Input
                id="gemini-key"
                type="password"
                placeholder="Enter your Gemini API key"
                className="bg-gray-700 border-gray-600 text-white"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use your own API key for unlimited usage
              </p>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Save API Key
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Bell className="h-5 w-5 mr-2" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Email notifications</span>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Processing complete alerts</span>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  Enabled
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsContent;
