import React, { useState } from 'react';
import { Bell, Check, X, AlertCircle, MessageCircle, Heart, Settings, Filter, Search, ChevronRight, Clock, User } from 'lucide-react';

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      title: 'New message from Sarah',
      message: 'Hey! Are we still on for the meeting tomorrow?',
      time: '2 minutes ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c3c999?w=40&h=40&fit=crop&crop=face',
      details: {
        sender: 'Sarah Johnson',
        fullMessage: 'Hey! Are we still on for the meeting tomorrow? I have some updates on the project that I\'d like to discuss. Also, should we invite Mike from the design team? Let me know what you think!',
        timestamp: '2024-07-08T14:30:00Z',
        actions: ['Reply', 'Forward', 'Archive']
      }
    },
    {
      id: 2,
      type: 'like',
      title: 'John liked your post',
      message: 'Your recent post about React hooks received a like',
      time: '15 minutes ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      details: {
        sender: 'John Smith',
        fullMessage: 'John liked your post: "Understanding React Hooks: A Complete Guide". Your post has received 24 likes and 8 comments so far.',
        timestamp: '2024-07-08T14:17:00Z',
        postPreview: 'Understanding React Hooks: A Complete Guide',
        actions: ['View Post', 'Like Back', 'Share']
      }
    },
    {
      id: 3,
      type: 'system',
      title: 'System update available',
      message: 'Version 2.1.0 is now available with new features and bug fixes',
      time: '1 hour ago',
      read: true,
      avatar: null,
      details: {
        sender: 'System',
        fullMessage: 'Version 2.1.0 is now available with new features and bug fixes. This update includes improved performance, new notification system, enhanced security features, and various UI improvements.',
        timestamp: '2024-07-08T13:32:00Z',
        changelog: ['Improved notification system', 'Enhanced security features', 'Bug fixes and performance improvements', 'New dark mode support'],
        actions: ['Update Now', 'View Changelog', 'Remind Later']
      }
    },
    {
      id: 4,
      type: 'warning',
      title: 'Security alert',
      message: 'New login detected from an unrecognized device',
      time: '2 hours ago',
      read: false,
      avatar: null,
      details: {
        sender: 'Security Team',
        fullMessage: 'We detected a new login to your account from an unrecognized device. If this was you, you can safely ignore this message. If not, please secure your account immediately.',
        timestamp: '2024-07-08T12:32:00Z',
        deviceInfo: {
          device: 'MacBook Pro',
          location: 'San Francisco, CA',
          browser: 'Chrome 115.0',
          ip: '192.168.1.***'
        },
        actions: ['Secure Account', 'This Was Me', 'View Details']
      }
    },
    {
      id: 5,
      type: 'message',
      title: 'Team meeting reminder',
      message: 'Don\'t forget about the team standup at 3 PM today',
      time: '3 hours ago',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      details: {
        sender: 'Mike Rodriguez',
        fullMessage: 'Don\'t forget about the team standup at 3 PM today. We\'ll be discussing the Q3 roadmap and reviewing last week\'s sprint results. Please prepare your updates and any blockers you might have.',
        timestamp: '2024-07-08T11:32:00Z',
        meetingDetails: {
          time: '3:00 PM - 3:30 PM',
          location: 'Conference Room A / Zoom',
          agenda: ['Sprint review', 'Q3 roadmap', 'Blockers discussion']
        },
        actions: ['Add to Calendar', 'Join Meeting', 'View Agenda']
      }
    },
    {
      id: 6,
      type: 'like',
      title: 'Emma commented on your photo',
      message: 'Great shot! Where was this taken?',
      time: '5 hours ago',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      details: {
        sender: 'Emma Davis',
        fullMessage: 'Great shot! Where was this taken? The lighting is absolutely perfect and the composition is stunning. I love how you captured the golden hour. Would love to visit this place sometime!',
        timestamp: '2024-07-08T09:32:00Z',
        photoPreview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
        actions: ['Reply', 'Like Comment', 'Share Photo']
      }
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNotification, setSelectedNotification] = useState(null);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'message':
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'like':
        return <Heart className="w-5 h-5 text-red-500" />;
      case 'system':
        return <Settings className="w-5 h-5 text-gray-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    if (selectedNotification?.id === id) {
      setSelectedNotification(null);
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && !notif.read) ||
      (filter === 'read' && notif.read) ||
      notif.type === filter;
    
    const matchesSearch = notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bell className="w-8 h-8 text-gray-700" />
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <p className="text-gray-600">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
                </p>
              </div>
            </div>
            
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Check className="w-4 h-4" />
                <span>Mark all as read</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Notifications List */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="message">Messages</option>
                    <option value="like">Likes</option>
                    <option value="system">System</option>
                    <option value="warning">Warnings</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-2">
              {filteredNotifications.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
                  <p className="text-gray-500">
                    {searchTerm ? 'Try adjusting your search terms' : 'You\'re all caught up!'}
                  </p>
                </div>
              ) : (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className={`bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md cursor-pointer ${
                      !notification.read ? 'border-l-4 border-blue-500' : ''
                    } ${selectedNotification?.id === notification.id ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Avatar or Icon */}
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <img
                            src={notification.avatar}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            {getNotificationIcon(notification.type)}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className={`text-sm font-medium ${
                              !notification.read ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {notification.time}
                            </p>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex items-center space-x-2 ml-4">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            {!notification.read && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markAsRead(notification.id);
                                }}
                                className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                                title="Mark as read"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                              className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                              title="Delete notification"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Panel - Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {selectedNotification ? (
                <div>
                  {/* Header */}
                  <div className="flex items-start space-x-3 mb-4">
                    {selectedNotification.avatar ? (
                      <img
                        src={selectedNotification.avatar}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        {getNotificationIcon(selectedNotification.type)}
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {selectedNotification.title}
                      </h2>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                        <User className="w-4 h-4" />
                        <span>{selectedNotification.details.sender}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{selectedNotification.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Message</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedNotification.details.fullMessage}
                      </p>
                    </div>

                    {/* Additional Details */}
                    {selectedNotification.details.changelog && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-2">What's New</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {selectedNotification.details.changelog.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedNotification.details.deviceInfo && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Device Information</h3>
                        <div className="bg-gray-50 p-3 rounded-lg text-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="text-gray-600">Device:</span>
                              <p className="font-medium">{selectedNotification.details.deviceInfo.device}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">Location:</span>
                              <p className="font-medium">{selectedNotification.details.deviceInfo.location}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">Browser:</span>
                              <p className="font-medium">{selectedNotification.details.deviceInfo.browser}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">IP:</span>
                              <p className="font-medium">{selectedNotification.details.deviceInfo.ip}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedNotification.details.meetingDetails && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Meeting Details</h3>
                        <div className="bg-gray-50 p-3 rounded-lg text-sm">
                          <div className="space-y-2">
                            <div>
                              <span className="text-gray-600">Time:</span>
                              <p className="font-medium">{selectedNotification.details.meetingDetails.time}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">Location:</span>
                              <p className="font-medium">{selectedNotification.details.meetingDetails.location}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">Agenda:</span>
                              <ul className="mt-1 space-y-1">
                                {selectedNotification.details.meetingDetails.agenda.map((item, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedNotification.details.photoPreview && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Photo</h3>
                        <img
                          src={selectedNotification.details.photoPreview}
                          alt="Photo preview"
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Actions</h3>
                      <div className="space-y-2">
                        {selectedNotification.details.actions.map((action, index) => (
                          <button
                            key={index}
                            className="w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a notification</h3>
                  <p className="text-gray-500">
                    Click on any notification to view its details here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}