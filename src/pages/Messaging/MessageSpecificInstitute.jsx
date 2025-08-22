import React, { useState } from 'react';
import { Search, ArrowLeft, Phone, MoreVertical, Paperclip, Link, Send } from 'lucide-react';

const MessageSpecificInstitute = () => {
    const [selectedContact, setSelectedContact] = useState({
        name: 'Yashu Mukhija',
        role: 'Electrician Apprentice',
        avatar: 'Y',
        uid: 1
    });
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Contact list data
    const contactList = [
        {
            uid: 1,
            name: 'Yashu Mukhija',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: 'Fri',
            avatar: 'Y'
        },
        {
            uid: 2,
            name: 'Pakhi Parekh',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: 'Thu',
            avatar: 'P'
        },
        {
            uid: 3,
            name: 'Bhumika Jain',
            role: 'Electrician Apprentice',
            message: 'Hello',
            time: '1 Hour Ago',
            avatar: 'B'
        }
    ];

    // Messages data for each contact
    const messagesData = {
        1: [ // Yashu Mukhija
            {
                id: 1,
                sender: 'contact',
                message: 'Good Evening!',
                time: '10:30 AM'
            },
            {
                id: 2,
                sender: 'contact',
                message: 'Hello, I submitted my application for the Electrician Apprentice position',
                time: '10:30 AM'
            },
            {
                id: 3,
                sender: 'me',
                message: 'Good Afternoon!',
                time: '10:30 AM'
            },
            {
                id: 4,
                sender: 'me',
                message: 'Thank you for your application.\nWe will review it and get back to you soon.',
                time: '10:30 AM'
            },
            {
                id: 5,
                sender: 'contact',
                message: 'Thank you for considering my application. I look forward to hearing from you.',
                time: '10:30 AM'
            }
        ],
        2: [ // Pakhi Parekh
            {
                id: 1,
                sender: 'contact',
                message: 'Hi there!',
                time: '9:15 AM'
            },
            {
                id: 2,
                sender: 'contact',
                message: 'I wanted to follow up on my apprenticeship application.',
                time: '9:16 AM'
            },
            {
                id: 3,
                sender: 'me',
                message: 'Hello Pakhi!',
                time: '9:20 AM'
            },
            {
                id: 4,
                sender: 'me',
                message: 'Your application is currently under review. We appreciate your patience.',
                time: '9:21 AM'
            },
            {
                id: 5,
                sender: 'contact',
                message: 'Great! Thank you for the update. I\'m excited about this opportunity.',
                time: '9:22 AM'
            }
        ],
        3: [ // Bhumika Jain
            {
                id: 1,
                sender: 'contact',
                message: 'Good morning!',
                time: '11:45 AM'
            },
            {
                id: 2,
                sender: 'me',
                message: 'Good morning Bhumika!',
                time: '11:50 AM'
            },
            {
                id: 3,
                sender: 'contact',
                message: 'I have some questions about the apprenticeship program requirements.',
                time: '11:51 AM'
            },
            {
                id: 4,
                sender: 'me',
                message: 'Of course! Feel free to ask any questions you have.',
                time: '11:52 AM'
            },
            {
                id: 5,
                sender: 'contact',
                message: 'What are the minimum qualifications needed for the electrician apprentice role?',
                time: '11:53 AM'
            }
        ]
    };

    // Click handlers
    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        console.log('Selected contact:', contact.name);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleBackClick = () => {
        console.log('Back button clicked');
    };

    const handlePhoneClick = () => {
        console.log('Phone call to:', selectedContact.name);
        alert(`Calling ${selectedContact.name}...`);
    };

    const handleMoreClick = () => {
        console.log('More options clicked');
        alert('More options menu');
    };

    const handleAttachmentClick = () => {
        console.log('Attachment clicked');
        const input = document.createElement('input');
        input.type = 'file';
        input.click();
    };

    const handleLinkClick = () => {
        console.log('Link button clicked');
        alert('Link sharing options');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        console.log('Searching for:', e.target.value);
    };

    // Filter contacts based on search term
    const filteredContacts = contactList.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get messages for selected contact
    const currentMessages = messagesData[selectedContact?.uid] || [];

    return (
        <div className="w-full min-h-screen flex bg-gray-50">
            {/* Left Sidebar - Contact List */}
            <div className="w-1/3 bg-white border-r border-gray-200">
                {/* Search Bar */}
                <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Contact List */}
                <div className="overflow-y-auto h-full">
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.uid}
                            onClick={() => handleContactClick(contact)}
                            className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors ${
                                selectedContact?.uid === contact.uid ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-3 ${
                                contact.avatar === 'Y' ? 'bg-green-500' : 
                                contact.avatar === 'P' ? 'bg-purple-500' : 'bg-blue-500'
                            }`}>
                                {contact.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">{contact.name}</h4>
                                        <p className="text-xs text-gray-500">{contact.role}</p>
                                    </div>
                                    <span className="text-xs text-gray-500">{contact.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{contact.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <ArrowLeft
                            className="w-5 h-5 text-gray-600 mr-3 cursor-pointer hover:text-gray-800 transition-colors"
                            onClick={handleBackClick}
                        />
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3 ${
                            selectedContact?.avatar === 'Y' ? 'bg-green-500' : 
                            selectedContact?.avatar === 'P' ? 'bg-purple-500' : 'bg-blue-500'
                        }`}>
                            {selectedContact?.avatar || 'Y'}
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{selectedContact?.name || 'Select a contact'}</h3>
                            <p className="text-sm text-gray-500">{selectedContact?.role || ''}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone
                            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                            onClick={handlePhoneClick}
                        />
                        <MoreVertical
                            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
                            onClick={handleMoreClick}
                        />
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                    <div className="text-center mb-4">
                        <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-lg">Today</span>
                    </div>

                    {/* Dynamic conversation based on selected contact */}
                    <div className="space-y-4">
                        {currentMessages.map((msg) => (
                            <div key={msg.id} className={msg.sender === 'me' ? 'flex justify-end' : 'flex items-start'}>
                                {msg.sender === 'contact' && (
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2 ${
                                        selectedContact?.avatar === 'Y' ? 'bg-green-500' : 
                                        selectedContact?.avatar === 'P' ? 'bg-purple-500' : 'bg-blue-500'
                                    }`}>
                                        {selectedContact?.avatar}
                                    </div>
                                )}
                                <div className="max-w-xs">
                                    <div className={`rounded-lg p-3 shadow-sm ${
                                        msg.sender === 'me' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-white text-gray-800'
                                    }`}>
                                        <p className="text-sm whitespace-pre-line">{msg.message}</p>
                                    </div>
                                    <p className={`text-xs text-gray-500 mt-1 ${
                                        msg.sender === 'me' ? 'text-right' : 'ml-3'
                                    }`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-4">
                    <div className="flex items-center space-x-3">
                        <Paperclip
                            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                            onClick={handleAttachmentClick}
                        />
                        <Link
                            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                            onClick={handleLinkClick}
                        />
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Type something..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <Send
                            className="w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors"
                            onClick={handleSendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageSpecificInstitute;