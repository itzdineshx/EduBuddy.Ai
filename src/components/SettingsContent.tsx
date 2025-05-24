
import React, { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Key,
  Globe,
  Moon,
  Volume2,
  Download,
  Trash2
} from 'lucide-react';

const SettingsContent = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: ''
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    studyReminders: true
  });

  const [preferences, setPreferences] = useState({
    darkMode: true,
    language: 'en',
    autoSave: true,
    soundEffects: false
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data Export Started",
      description: "Your data export will be available shortly.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Please contact support to delete your account.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex-1 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-gray-800">
        <div className="flex items-center">
          <SidebarTrigger className="text-white hover:bg-gray-800/50 mr-4" />
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400 text-lg">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-4xl">
        <div className="space-y-8">
          {/* Profile Settings */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <User className="h-5 w-5 mr-2" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              <Button 
                onClick={handleSaveProfile}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Save Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-300">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-300">Push Notifications</Label>
                    <p className="text-sm text-gray-500">Browser push notifications</p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-300">Weekly Digest</Label>
                    <p className="text-sm text-gray-500">Weekly summary of your progress</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyDigest}
                    onCheckedChange={(checked) => setNotifications({...notifications, weeklyDigest: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-300">Study Reminders</Label>
                    <p className="text-sm text-gray-500">Reminders to keep your streak</p>
                  </div>
                  <Switch
                    checked={notifications.studyReminders}
                    onCheckedChange={(checked) => setNotifications({...notifications, studyReminders: checked})}
                  />
                </div>
              </div>
              <Button 
                onClick={handleSaveNotifications}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Save Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Subscription & Billing */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <CreditCard className="h-5 w-5 mr-2" />
                Subscription & Billing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">Current Plan</h3>
                  <p className="text-gray-400">Free Plan</p>
                </div>
                <Badge className="bg-green-600 text-white">Active</Badge>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 mb-4">Upgrade to Premium for unlimited features</p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Upgrade to Premium
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* API Configuration */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Key className="h-5 w-5 mr-2" />
                API Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="apiKey" className="text-gray-300">Gemini API Key</Label>
                <div className="flex space-x-2">
                  <Input
                    id="apiKey"
                    type="password"
                    placeholder="Enter your Gemini API key"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Save
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Your API key is encrypted and stored securely
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Globe className="h-5 w-5 mr-2" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Moon className="h-4 w-4 mr-2 text-gray-400" />
                    <Label className="text-gray-300">Dark Mode</Label>
                  </div>
                  <Switch
                    checked={preferences.darkMode}
                    onCheckedChange={(checked) => setPreferences({...preferences, darkMode: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Volume2 className="h-4 w-4 mr-2 text-gray-400" />
                    <Label className="text-gray-300">Sound Effects</Label>
                  </div>
                  <Switch
                    checked={preferences.soundEffects}
                    onCheckedChange={(checked) => setPreferences({...preferences, soundEffects: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-gray-400" />
                    <Label className="text-gray-300">Auto Save</Label>
                  </div>
                  <Switch
                    checked={preferences.autoSave}
                    onCheckedChange={(checked) => setPreferences({...preferences, autoSave: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Download className="h-5 w-5 mr-2" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleExportData}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button 
                  onClick={handleDeleteAccount}
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Export your data or permanently delete your account and all associated data.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
