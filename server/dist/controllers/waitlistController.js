"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWaitlistEntries = exports.createWaitlistEntry = void 0;
const Waitlist_1 = require("../models/Waitlist");
const db_1 = require("../config/db");
// Seed in-memory store for instant demonstration & testing
const inMemoryWaitlist = [
    {
        id: 'w-101',
        name: 'Sarah Chen',
        email: 'sarah.chen@novatech.io',
        company: 'NovaTech Solutions',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
    },
    {
        id: 'w-102',
        name: 'Marcus Vance',
        email: 'marcus@cloudworks.design',
        company: 'CloudWorks',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 14)
    },
    {
        id: 'w-103',
        name: 'Elena Rostova',
        email: 'elena@pixelforge.dev',
        company: 'PixelForge Studios',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 28)
    },
    {
        id: 'w-104',
        name: 'David Miller',
        email: 'd.miller@brightscale.co',
        company: 'BrightScale AI',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48)
    },
    {
        id: 'w-105',
        name: 'Sophia Patel',
        email: 'sophia@futurelabs.tech',
        company: 'FutureLabs Inc',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72)
    }
];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const createWaitlistEntry = async (req, res) => {
    try {
        const { name, email, company } = req.body;
        // Strict Input Validation
        if (!name || typeof name !== 'string' || name.trim() === '') {
            res.status(400).json({ success: false, error: 'Full name is required.' });
            return;
        }
        if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
            res.status(400).json({ success: false, error: 'A valid email address is required.' });
            return;
        }
        if (!company || typeof company !== 'string' || company.trim() === '') {
            res.status(400).json({ success: false, error: 'Company name is required.' });
            return;
        }
        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();
        const cleanCompany = company.trim();
        if (db_1.isConnectedToMongo) {
            // Check for duplicate email in MongoDB
            const existing = await Waitlist_1.WaitlistModel.findOne({ email: cleanEmail });
            if (existing) {
                res.status(409).json({ success: false, error: 'This email is already registered on our waitlist.' });
                return;
            }
            const newEntry = await Waitlist_1.WaitlistModel.create({
                name: cleanName,
                email: cleanEmail,
                company: cleanCompany,
                createdAt: new Date()
            });
            res.status(201).json({
                success: true,
                message: 'Successfully registered for early access!',
                data: {
                    id: newEntry._id,
                    name: newEntry.name,
                    email: newEntry.email,
                    company: newEntry.company,
                    createdAt: newEntry.createdAt
                }
            });
        }
        else {
            // Fallback in-memory store logic
            const existing = inMemoryWaitlist.find(item => item.email.toLowerCase() === cleanEmail);
            if (existing) {
                res.status(409).json({ success: false, error: 'This email is already registered on our waitlist.' });
                return;
            }
            const newItem = {
                id: `w-${Date.now()}`,
                name: cleanName,
                email: cleanEmail,
                company: cleanCompany,
                createdAt: new Date()
            };
            inMemoryWaitlist.unshift(newItem);
            res.status(201).json({
                success: true,
                message: 'Successfully registered for early access!',
                data: newItem
            });
        }
    }
    catch (error) {
        console.error('Waitlist Controller Error:', error);
        res.status(500).json({ success: false, error: 'Internal server error while joining waitlist.' });
    }
};
exports.createWaitlistEntry = createWaitlistEntry;
const getWaitlistEntries = async (req, res) => {
    try {
        if (db_1.isConnectedToMongo) {
            const entries = await Waitlist_1.WaitlistModel.find().sort({ createdAt: -1 });
            const formatted = entries.map(entry => ({
                id: entry._id.toString(),
                name: entry.name,
                email: entry.email,
                company: entry.company,
                createdAt: entry.createdAt
            }));
            res.status(200).json({ success: true, count: formatted.length, data: formatted });
        }
        else {
            // Return memory list sorted newest first
            const sorted = [...inMemoryWaitlist].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            res.status(200).json({ success: true, count: sorted.length, data: sorted });
        }
    }
    catch (error) {
        console.error('Fetch Waitlist Error:', error);
        res.status(500).json({ success: false, error: 'Failed to retrieve waitlist entries.' });
    }
};
exports.getWaitlistEntries = getWaitlistEntries;
