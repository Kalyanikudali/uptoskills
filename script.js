// Job Data
const jobs = [
    { title: "Trainee", company: "Tata Steel", requirements: "Sanand,Ahmedabad[ITI Female Only] & Jamshedpur[ITI Male Only] & Pantnagar[12th Pass & ITI Male Only] City:",
      location: "Anywhere in India", totalCandidates: 130, postedDate: "Posted On 26 Nov 2024, 11:23" },
    { title: "Business Development Counsellor", company: "Planetspark", location: "Anywhere in India", 
        requirements: "Gurgaon City", totalCandidates: 66, postedDate: "Posted On  30 Nov 2024, 15:14" },
    { title: "Client Relationship Associate", company: "Smile India Trust", location: "",
        requirements: "A100 Sec 4, Noida Near by Sector 16 metro station", totalCandidates: 0, postedDate: "Posted On 10 Dec 2024, 12:18" },
    { title: "Management Trainee Client Relationship", company: "Techsharks 5 Services Pvt Ltd", location: "New Delhi, Delhi 110027", 
          requirements: "A-1, 3rd Floor Raja Garden,Rajouri Garden", totalCandidates: 136, postedDate:"Posted On 12 Dec 2024, 13:03" },
    { title: "HR Admin Intern", company: "Procx", requirements: " Noida",
         location: "", totalCandidates: 5, postedDate: "Posted On 12 Dec 2024, 17:33"}
];

// Date formatter
const options = { day: 'numeric', month: 'short', year: 'numeric' };
const today = new Date().toLocaleDateString('en-IN', options);

// Job Card Generator
function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
        <div class='job-header'>
            <h2 class='job-title'>${job.title} <span class='badge'>Live</span>
            <span class='company'>${job.company}</span></h2>
        </div>
        <div class="job-details">
        <p>Job type: Work from office Working Area: Office-address: ${job.requirements} ${job.location}</p>
        <p>${job.postedDate}</p></div>
       
        <div class='job-actions'>
            <button class='delete-btn'>Delete Job</button>
            <div class="candidates-wrapper">
             <div class='total-candidates'>(total: ${job.totalCandidates})</div>
            <button class='candidates-btn'>All Candidates</button>
            </div>
        </div>
        <div class='share-section'>Share this job
            <div class='social-icons'>
                  <i class='fab fa-linkedin' aria-label="Share on LinkedIn"></i>
                <i class='fab fa-facebook' aria-label="Share on Facebook"></i>
                 <i class="fa-brands fa-twitter" onclick="shareJob('${job.title}', '${job.company}', 'twitter')"></i>
                <i class='fab fa-whatsapp' aria-label="Share on WhatsApp"></i>
                <i class='fab fa-telegram' aria-label="Share on Telegram"></i>
                <i class='fab fa-instagram' aria-label="Share on Instagram"></i>
                
            </div>
        </div>
    `;
    return card;
}

// Initialize Jobs
function initializeJobs() {
    const container = document.getElementById('jobs-container');
    jobs.forEach(job => {
        const card = createJobCard(job);
        container.appendChild(card);
    });

    // Add delete functionality
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.job-card').remove();
        });
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeJobs);