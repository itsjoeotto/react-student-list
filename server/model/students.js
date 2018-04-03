const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    avatar_url: String,
    bio: String,
    blog: String,
    company: String,
    created_at: String,
    email: String,
    events_url: String,
    followers: Number,
    followersArray: [],
    followers_url: String,
    following: Number,
    following_url: String,
    gists_url: String,
    gravatar_id: String,
    hireable: Boolean,
    html_url: String,
    id: String,
    location: String,
    login: String,
    name: String,
    organizations_url: String,
    public_gists: Number,
    public_repos: Number,
    received_events_url: String,
    repos_url: String,
    site_admin: Boolean,
    starred_url: String,
    subscriptions_url: String,
    type: String,
    updated_at: String,
    url: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;