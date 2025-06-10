function loadSection(section) {
  const content = document.getElementById("dashboardContent");

  switch (section) {
    case "profile":
      content.innerHTML = `
        <h3 class="mb-4">Profile Overview</h3>
        <div class="row">
          <!-- Profile Picture and Edit Button -->
          <div class="col-md-4 text-center">
            <div class="profile-img-container">
              <img src="../images/avatar/studio-portrait-emotional-happy-funny.jpg" alt="Profile Picture" class="img-fluid rounded-circle" id="profileImage" /><br><br><br><br>
              <button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#changeProfilePicModal">
                Change Profile Picture
              </button>
            </div>
          </div>
          
          <!-- Profile Info Card -->
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Personal Information</h4>
                <p><strong>Name:</strong> Ojas Kulkarni</p>
                <p><strong>Email:</strong> ojas@example.com</p>
                <p><strong>Phone:</strong> +1234567890</p>
                <p><strong>Location:</strong> Pune, India</p>
                <button class="btn btn-secondary">Edit Profile</button>
              </div>
            </div>
    
            <!-- Account Info Card -->
            <div class="card mt-4">
              <div class="card-body">
                <h4 class="card-title">Account Information</h4>
                <p><strong>Status:</strong> Active</p>
                <p><strong>Membership Type:</strong> Volunteer</p>
                <p><strong>Join Date:</strong> January 15, 2021</p>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Volunteer History Section -->
        <div class="mt-4">
          <h4>Volunteer History</h4>
          <ul class="list-group">
            <li class="list-group-item">Tree Plantation Drive - 10th December 2024</li>
            <li class="list-group-item">Community Clean-Up - 20th December 2024</li>
            <li class="list-group-item">Beach Clean-Up - 5th September 2024</li>
            <li class="list-group-item">Food Donation - 22nd October 2024</li>
          </ul>
        </div>
    
        <!-- Feedback Section -->
        <div class="mt-4">
          <h4>Feedback & Reviews</h4>
          <p><strong>Submitted Feedback:</strong> "The event was very well organized and impactful!"</p>
          <button class="btn btn-info">Submit Feedback For Past Events</button>
        </div>
    
        <!-- Donation History Section -->
        <div class="mt-4">
          <h4>Donation & Contributions</h4>
          <ul class="list-group">
            <li class="list-group-item">Donation to Education Fund - $100 on 1st October 2024</li>
            <li class="list-group-item">Donation to Health Fund - $50 on 15th November 2024</li>
          </ul>
        </div>
    
        <!-- Profile Settings -->
        <div class="mt-4">
          <h4>Profile Settings</h4>
          <button class="btn btn-warning">Change Password</button>
          <button class="btn btn-warning">Update Email Preferences</button>
          <button class="btn btn-warning">Notification Settings</button>
        </div>
    
        <!-- Modal for Changing Profile Picture -->
        <div class="modal fade" id="changeProfilePicModal" tabindex="-1" aria-labelledby="changeProfilePicModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="changeProfilePicModalLabel">Change Profile Picture</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input type="file" class="form-control" id="uploadProfilePic" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      `;
      break;

    case "events":
      content.innerHTML = `
          <h3 class="mb-4">Events</h3>
      
          <!-- Applied Events Section -->
          <div>
            <h4>Applied Events</h4>
            <div class="row">
              <!-- Applied Event Card (Example) -->
              <div class="col-md-4 mb-4">
                <div class="card event-card">
                  <img src="../images/causes/poor-child-landfill-looks-forward-with-hope.jpg" class="card-img-top" alt="Event Image">
                  <div class="card-body">
                    <h5 class="card-title">Tree Plantation Drive</h5>
                    <p class="card-text">Join us in planting trees for a greener tomorrow. NGO: Green Earth Foundation.</p>
                    <p><strong>Status:</strong> Confirmed</p>
                    <p><strong>Date:</strong> 25th December 2024</p>
                    <button class="btn btn-info">View Details</button>
                  </div>
                </div>
              </div>
      
              <!-- Repeat above block for multiple events user applied to -->
            </div>
          </div>
      
          <!-- View All Events Section -->
          <div class="mt-5">
            <h4>View All Events</h4>
            <!-- Advanced Search Filters (non-functional frontend only) -->
            <div class="mb-4">
              <label for="eventCategory" class="form-label">Event Category</label>
              <select id="eventCategory" class="form-select">
                <option value="all">All Categories</option>
                <option value="tree-plantation">Tree Plantation</option>
                <option value="community-cleanup">Community Cleanup</option>
                <option value="fundraising">Fundraising</option>
                <option value="education">Education</option>
              </select>
            </div>
      
            <div class="mb-4">
              <label for="eventDate" class="form-label">Event Date</label>
              <input type="date" id="eventDate" class="form-control" />
            </div>
      
            <div class="mb-4">
              <button class="btn btn-primary">Apply Filters</button>
            </div>
      
            <!-- Event Cards (Example) -->
            <div class="row">
              <!-- Event Card 1 -->
              <div class="col-md-4 mb-4">
                <div class="card event-card">
                  <img src="../images/different-people-doing-volunteer-work.jpg" class="card-img-top" alt="Event Image">
                  <div class="card-body">
                    <h5 class="card-title">Community Cleanup</h5>
                    <p class="card-text">Help us clean up the local parks and beaches. NGO: Clean Earth Initiative.</p>
                    <p><strong>Location:</strong> New York, USA</p>
                    <p><strong>Date:</strong> 10th January 2025</p>
                    <button class="btn btn-success">Apply</button>
                  </div>
                </div>
              </div>
      
              <!-- Event Card 2 -->
              <div class="col-md-4 mb-4">
                <div class="card event-card">
                  <img src="../images/news/medium-shot-volunteers-with-clothing-donations.jpg" class="card-img-top" alt="Event Image">
                  <div class="card-body">
                    <h5 class="card-title">Fundraising for Education</h5>
                    <p class="card-text">Raise funds to provide education to underprivileged children. NGO: Education for All.</p>
                    <p><strong>Location:</strong> California, USA</p>
                    <p><strong>Date:</strong> 20th February 2025</p>
                    <button class="btn btn-success">Apply</button>
                  </div>
                </div>
              </div>

              <!-- Event Card 3 -->
              <div class="col-md-4 mb-4">
                <div class="card event-card">
                  <img src="../images/news/africa-humanitarian-aid-doctor.jpg" class="card-img-top" alt="Event Image">
                  <div class="card-body">
                    <h5 class="card-title">Medical Help</h5>
                    <p class="card-text">Help to provide Medical support to underprivileged children. NGO: Medicine for All.</p>
                    <p><strong>Location:</strong> Pune, Kothrud</p>
                    <p><strong>Date:</strong> 20th February 2025</p>
                    <button class="btn btn-success">Apply</button>
                  </div>
                </div>
              </div>
      
              <!-- Repeat above blocks for more events -->
            </div>
      
            <!-- Pagination (Optional) -->
            <div class="mt-4">
              <ul class="pagination">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        `;
      break;

    case "recommendation":
      content.innerHTML = `
          <h3 class="mb-4">Recommendation Engine</h3>
          
          <!-- Skills and Availability Input Section -->
          <div class="mb-4">
            <label for="skills" class="form-label">Select Your Skills</label>
            <select id="skills" class="form-select" multiple>
              <option value="tree-plantation">Tree Plantation</option>
              <option value="fundraising">Fundraising</option>
              <option value="community-cleanup">Community Cleanup</option>
              <option value="education">Education</option>
              <option value="awareness-campaign">Awareness Campaign</option>
            </select>
          </div>
          
          <div class="mb-4">
            <label for="availability" class="form-label">Select Your Availability</label>
            <input type="text" id="availability" class="form-control" placeholder="e.g., Available weekends, December 2024">
          </div>
      
          <!-- Recommendation Button -->
          <button class="btn btn-primary" id="recommendButton">Get Recommendations</button>
          
          <!-- Recommended Events Section (Initially hidden) -->
          <div id="recommendedEvents" class="mt-5" style="display: none;">
            <h4>Recommended Events for You</h4>
            <div class="row" id="recommendedEventsList">
              <!-- Dynamic event cards will be inserted here -->
            </div>
          </div>
        `;

      // Handle the click event for the "Get Recommendations" button
      document
        .getElementById("recommendButton")
        .addEventListener("click", function () {
          const skills = document.getElementById("skills").selectedOptions;
          const availability = document.getElementById("availability").value;

          let skillList = [];
          for (let option of skills) {
            skillList.push(option.value);
          }

          if (skillList.length > 0 && availability) {
            // Show the recommended events section
            document.getElementById("recommendedEvents").style.display =
              "block";

            // Generate static recommended events based on the user input (Skills and Availability)
            const recommendedEventsList = document.getElementById(
              "recommendedEventsList"
            );
            recommendedEventsList.innerHTML = "";

            // Static events for now (these can be dynamic later based on backend)
            const events = [
              {
                title: "Tree Plantation Drive",
                description:
                  "Join us in planting trees for a greener tomorrow. NGO: Green Earth Foundation.",
                date: "25th December 2024",
                image:
                  "../images/causes/poor-child-landfill-looks-forward-with-hope.jpg",
              },
              {
                title: "Fundraising for Education",
                description:
                  "Raise funds to provide education to underprivileged children. NGO: Education for All.",
                date: "20th January 2025",
                image: "../images/different-people-doing-volunteer-work.jpg",
              },
              {
                title: "Community Cleanup",
                description:
                  "Help us clean up the local parks and beaches. NGO: Clean Earth Initiative.",
                date: "10th February 2025",
                image: "../images/news/africa-humanitarian-aid-doctor.jpg",
              },
            ];

            // Loop through the static events and create cards
            events.forEach((event) => {
              const eventCard = document.createElement("div");
              eventCard.classList.add("col-md-4", "mb-4");
              eventCard.innerHTML = `
                <div class="card event-card">
                  <img src="${event.image}" class="card-img-top" alt="Event Image">
                  <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">${event.description}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <button class="btn btn-success">Apply</button>
                  </div>
                </div>
              `;
              recommendedEventsList.appendChild(eventCard);
            });
          } else {
            alert("Please select your skills and availability.");
          }
        });
      break;

    case "certificate":
      content.innerHTML = `
          <h3>Certificates</h3>
      
          <!-- Volunteering Certificates -->
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">Participation Volunteering Certificates</h5>
            </div>
            <div class="card-body">
              <p>Select an event you've participated in to download the volunteering certificate.</p>
              <div class="list-group">
                <button class="list-group-item list-group-item-action" onclick="downloadCertificate('tree-plantation')">
                  Tree Plantation Drive - Download Certificate
                </button>
                <button class="list-group-item list-group-item-action" onclick="downloadCertificate('fundraising')">
                  Fundraising for Education - Download Certificate
                </button>
                <!-- Additional events can be added dynamically -->
              </div>
            </div>
          </div>
      
          <!-- 8-G Tax Certificate -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">80-G Tax Certificate</h5>
            </div>
            <div class="card-body">
              <p>If you have made a donation, you can download your 80-G Tax certificate here.</p>
              <button class="btn btn-success" onclick="downloadTaxCertificate()">Download 8-G Tax Certificate</button>
            </div>
          </div>
        `;

      // Function to simulate certificate download
      function downloadCertificate(event) {
        const doc = new jsPDF();

        // Add content to the PDF
        doc.setFontSize(20);
        doc.text("Certificate of Participation", 20, 30);
        doc.setFontSize(16);
        doc.text(
          `This certifies that Ojas Kulkarni participated in the ${event}.`,
          20,
          50
        );
        doc.text("Thank you for your valuable contribution!", 20, 60);

        // Save the PDF
        doc.save(`${event}-Certificate.pdf`);

        alert(`Generating certificate for ${event}...`);
      }

      function downloadTaxCertificate() {
        // Replace this with actual certificate generation logic
        alert("Generating 8-G Tax certificate...");
      }
      break;

    case "impact":
      content.innerHTML = `
          <h3>Real-Time Impact</h3>
          
          <div class="container mt-5">
            <!-- User-Specific Impact -->
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Your Total Volunteering Hours</h5>
                    <p class="card-text" id="volunteerHours">150 Hours</p>
                    <div class="progress">
                      <div class="progress-bar" style="width: 75%"></div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Total Donations Made</h5>
                    <p class="card-text" id="donationsMade">₹12,000</p>
                    <div class="progress">
                      <div class="progress-bar" style="width: 60%"></div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Impact from Your Contribution</h5>
                    <p class="card-text" id="treesPlanted">300 Trees Planted</p>
                    <div class="progress">
                      <div class="progress-bar" style="width: 90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Global Impact Overview -->
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Global Impact Overview</h5>
                    <p class="card-text">Total Trees Planted: 2,000,000</p>
                    <p class="card-text">Total Funds Raised: ₹10,000,000</p>
                    <p class="card-text">Total Volunteers: 500,000+</p>
                  </div>
                </div>
              </div>
      
              <div class="col-md-6">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Live Activity Feed</h5>
                    <ul class="list-group">
                      <li class="list-group-item">Ruturaj just volunteered for the Tree Plantation Event!</li>
                      <li class="list-group-item">Ashutosh donated ₹1000 to the Education Fund.</li>
                      <li class="list-group-item">Shravan just signed up for the upcoming Fundraiser.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Graphical Impact Representation -->
            <div class="row">
              <div class="col-md-12">
                <canvas id="impactChart"></canvas>
              </div>
            </div>
      
            <!-- Impact Achievements Section -->
            <div class="row mt-5">
              <div class="col-md-6">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Your Milestones</h5>
                    <ul class="list-group">
                      <li class="list-group-item">Achieved: 100 Volunteering Hours</li>
                      <li class="list-group-item">Achieved: ₹5000 Donations</li>
                      <li class="list-group-item">Achieved: 200 Trees Planted</li>
                    </ul>
                  </div>
                </div>
              </div>
      
              <div class="col-md-6">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Your Social Impact Badge</h5>
                    <p>Share your contribution and encourage others to join you!</p>
                    <button class="btn btn-primary">Get Your Badge</button>
                    <button class="btn btn-primary">Share On Social Media</button>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Impact Map Section -->
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Where Your Impact Is Happening</h5>
              <p>See where your donations and volunteering are making a difference.</p>
              <!-- Map Image -->
              <img src="../images/ngo/map.gif" alt="Real-Time Impact Map" style="width: 100%; height: auto; border-radius: 10px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
      break;

    default:
      content.innerHTML = `<h3>Welcome to Your Dashboard</h3><p>Please select a section from the sidebar.</p>`;
      break;
  }
}
