// MongoDB initialization script for production
db = db.getSiblingDB('realtime_collab_prod');

// Create collections
db.createCollection('users');
db.createCollection('documents');
db.createCollection('messages');

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ username: 1 }, { unique: true });
db.documents.createIndex({ createdBy: 1 });
db.documents.createIndex({ updatedAt: -1 });
db.messages.createIndex({ documentId: 1 });
db.messages.createIndex({ timestamp: -1 });

// Create admin user (optional)
db.users.insertOne({
  username: 'admin',
  email: 'admin@collabboard.com',
  password: '$2a$10$example.hash.here', // This should be properly hashed
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date()
});

print('Database initialized successfully');