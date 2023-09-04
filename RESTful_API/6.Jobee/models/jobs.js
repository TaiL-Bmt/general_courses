const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [false, 'Please enter Job title.'],
        trim: true,
        maxlength: [100, 'Job title cannot excess 100 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [false, 'Please enter job description'],
        maxlength: [1000, 'Job desc cannot exceed 100 characters']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please add a valid email address']
    },
    address: {
        type: String,
        required: [false, 'Please add an address.']
    },
    location: {
        type: {
            type: String,
            enum: [
                'Point'
            ]
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    company: {
        type: String,
        required: [false, 'Please add company name']
    },
    industry: {
        type: [String],
        required: false,
        enum: {
            values: [
                'Business',
                'Information Technology',
                'Banking',
                'Education',
                'Telecommunication',
                'Others'
            ],
            message: 'please select correct options for industry'
        }
    },
    jobType: {
        type: String,
        required: false,
        enum: {
            values: [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message: 'please select correct options for job type'
        }
    },
    minEducation: {
        type: String,
        required: false,
        enum : {
            values: [
                'Bachelors',
                'Master',
                'PhD'
            ],
            message: 'please select correct options for education'
        }
    },
    positions: {
        type: Number,
        default: 1
    },
    experience: {
        type: String,
        required: false,
        enum: {
            values: [
                'No Experience',
                '1 year - 2 years',
                '2 years - 5 years',
                '5 years+'
            ],
            message: 'please select correct options for experience'
        }
    },
    salary: {
        type: Number,
        required: [false, 'please enter expected salary for this job']
    },
    postingDate : {
        type: Date,
        default: Date.now
    },
    lastDate: {
        type: Date,
        default: new Date().setDate(new Date().getDate() + 7)
    },
    applicantApplied: {
        type: [Object],
        select: false
    }
});

//creating job slug
jobSchema.pre('save', function(next) {
    //creating slug before saving db
    this.slug = slugify(this.title, {lower: true});
    next();
});

module.exports = mongoose.model('Job', jobSchema);

