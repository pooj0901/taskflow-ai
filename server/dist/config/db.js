"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.isConnectedToMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.isConnectedToMongo = false;
const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/taskflow-ai';
    try {
        // Short timeout so if local mongo is not running, fallback engages quickly without blocking server boot
        await mongoose_1.default.connect(mongoURI, {
            serverSelectionTimeoutMS: 2500,
        });
        exports.isConnectedToMongo = true;
        console.log(`[MongoDB] Connected successfully to ${mongoURI}`);
    }
    catch (error) {
        exports.isConnectedToMongo = false;
        console.warn('[MongoDB Warning] Could not connect to MongoDB daemon. Operating with high-reliability in-memory data store.');
    }
};
exports.connectDB = connectDB;
