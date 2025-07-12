"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const auth_1 = require("./middleware/auth");
const jobApplication_controller_1 = __importDefault(require("./controllers/jobApplication.controller"));
const job_routes_1 = __importDefault(require("./routes/job.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const jobApplication_routes_1 = __importDefault(require("./routes/jobApplication.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const candidate_routes_1 = __importDefault(require("./routes/candidate.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:5173',
        'https://hire-hub-823a0.web.app',
        'https://hire-hub-823a0.firebaseapp.com',
    ],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/api/jobs', job_routes_1.default);
app.use('/api/users', user_routes_1.default);
app.use('/api/job-applications', jobApplication_routes_1.default);
app.use('/api/auth', auth_routes_1.default);
app.use('/api/candidates', candidate_routes_1.default);
app.get('/api/protected/job-applications', auth_1.verifyToken, jobApplication_controller_1.default.getApplicationsByEmail);
app.get('/', (req, res) => {
    res.send('Hello');
});
async function startServer() {
    try {
        await db_1.default.connect();
        app.listen(port, () => {
            console.log(`Server running on: ${port}`);
        });
    }
    catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}
startServer();
//# sourceMappingURL=index.js.map