// Function to dynamically load sections in the dashboard
function loadSection(section) {
  const dashboardContent = document.getElementById("dashboardContent");
  dashboardContent.innerHTML = ""; // Clear existing content

  switch (section) {
    case "profile":
      dashboardContent.innerHTML = `
    <div class="container mt-5">
      <h2>Profile Overview</h2>
      <br>
      <div class="row">
        <!-- Profile Picture -->
        <div class="col-md-3 text-center">
          <img src="../images/causes/african-woman-pouring-water-recipient-outdoors.jpg" alt="NGO Logo" class="img-fluid rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;">
          <button class="btn btn-primary">Change Picture</button>
        </div>

        <!-- NGO Information -->
        <div class="col-md-9">
          <div class="mb-3">
            <label class="form-label" for="ngoName"><strong>NGO Name</strong></label>
            <input type="text" class="form-control" id="ngoName" value="Green Future Foundation" disabled>
          </div>

          <div class="mb-3">
            <label class="form-label" for="registeredSince"><strong>Registered Since</strong></label>
            <input type="text" class="form-control" id="registeredSince" value="2015" disabled>
          </div>

          <div class="mb-3">
            <label class="form-label" for="mission"><strong>Mission</strong></label>
            <textarea class="form-control" id="mission" rows="3" disabled>Promoting sustainability through community-driven projects.</textarea>
          </div>

          <!-- Darpan Verification Status -->
          <div class="mb-3">
            <label class="form-label"><strong>FCRA Verification Status</strong></label>
            <p class="badge bg-success text-white">Verified</p>
          </div>

          <!-- FCRA Verification Status -->
          <div class="mb-3">
            <label class="form-label"><strong>Darpan Verification Status</strong></label>
            <p class="badge bg-success text-white">Verified</p>
          </div>

          <!-- NGO Location -->
          <div class="mb-3">
            <label class="form-label" for="ngoLocation"><strong>NGO Location</strong></label>
            <input type="text" class="form-control" id="ngoLocation" value="Mumbai, Maharashtra" disabled>
          </div>

          <!-- Contact Information -->
          <div class="mb-3">
            <label class="form-label" for="contact"><strong>Contact Information</strong></label>
            <input type="tel" class="form-control" id="contact" value="+91 1234567890" disabled>
          </div>

          <!-- Edit Profile Button -->
          <button type="button" class="btn btn-secondary" id="editBtn">Edit</button>
          <button type="submit" class="btn btn-primary" id="saveBtn" style="display: none;">Save Changes</button>
          <button type="button" class="btn btn-light" id="cancelBtn" style="display: none;">Cancel</button>
        </div>
      </div>
    </div>
  `;
      break;

    case "events":
      dashboardContent.innerHTML = `
          <div class="container mt-5">
            <h2>Upcoming Events</h2>
            <!-- Filter by Category -->
            <div class="mb-3">
              <label for="eventCategory" class="form-label"><strong>Filter by Category</strong></label>
              <select class="form-select" id="eventCategory">
                <option value="all">All Events</option>
                <option value="fundraiser">Fundraisers</option>
                <option value="awareness">Awareness Campaigns</option>
                <option value="volunteer">Volunteer Opportunities</option>
              </select>
            </div>
      
            <!-- Event List -->
            <div class="row">
              <!-- Event Card 1 -->
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                  <img src="../images/news/africa-humanitarian-aid-doctor.jpg" class="card-img-top img-fluid" alt="Tree Plantation Drive">
                  <div class="card-body">
                    <h5 class="card-title">Tree Plantation Drive</h5>
                    <p class="card-text">Join us for a tree plantation drive to promote environmental sustainability.</p>
                    <p class="text-muted">Date: <strong>25th Nov, 2024</strong></p>
                    <p class="text-muted">Time: <strong>10:00 AM</strong></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="badge bg-success">Upcoming</span>
                      <button class="btn btn-primary">OPEN</button>
                    </div>
                    <p class="mt-2">
                      <strong>Countdown:</strong> <span id="countdown1">10 Days 5 Hours</span>
                    </p>
                  </div>
                </div>
              </div>
      
              <!-- Event Card 2 -->
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                  <img src="../images/causes/african-woman-pouring-water-recipient-outdoors.jpg" class="card-img-top img-fluid" alt="Save Water Campaign">
                  <div class="card-body">
                    <h5 class="card-title">Awareness Campaign: Save Water</h5>
                    <p class="card-text">Help spread awareness about water conservation in your community.</p>
                    <p class="text-muted">Date: <strong>30th Nov, 2024</strong></p>
                    <p class="text-muted">Time: <strong>11:00 AM</strong></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="badge bg-warning">Ongoing</span>
                      <button class="btn btn-secondary" disabled>CLOSED</button>
                    </div>
                    <p class="mt-2">
                      <strong>Countdown:</strong> <span id="countdown2">Ongoing</span>
                    </p>
                  </div>
                </div>
              </div>
      
              <!-- Event Card 3 -->
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                  <img src="../images/news/close-up-volunteer-oganizing-stuff-donation.jpg" class="card-img-top img-fluid" alt="Beach Clean-Up">
                  <div class="card-body">
                    <h5 class="card-title">Volunteer for Clean-up Drive</h5>
                    <p class="card-text">Join us in cleaning up the local beaches to create a cleaner environment.</p>
                    <p class="text-muted">Date: <strong>5th Dec, 2024</strong></p>
                    <p class="text-muted">Time: <strong>8:00 AM</strong></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="badge bg-success">Upcoming</span>
                      <button class="btn btn-primary">OPEN</button>
                    </div>
                    <p class="mt-2">
                      <strong>Countdown:</strong> <span id="countdown3">15 Days 12 Hours</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Past Events Section -->
            <div class="mt-5">
              <h4>Past Events</h4>
              <ul class="list-group">
                <li class="list-group-item">
                  <strong>Fundraising Gala</strong> - Raised $50,000 for children's education. <small>Completed on 12th Nov 2024</small>
                </li>
                <li class="list-group-item">
                  <strong>Beach Clean-Up</strong> - Over 100 volunteers participated. <small>Completed on 18th Oct 2024</small>
                </li>
              </ul>
            </div>
          </div>
        `;
      break;

    case "donations":
      dashboardContent.innerHTML = `
          <div class="container mt-5">
            <h2>Donation Management</h2>
            
            <!-- Campaign Overview -->
            <div class="row">
              <!-- Campaign 1 -->
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">Tree Plantation Drive</h5>
                    <p class="card-text">Total Donations Raised: <strong>$12,500</strong></p>
                    <p class="text-muted">Goal: <strong>$20,000</strong></p>
                    <p class="text-muted">Remaining: <strong>$7,500</strong></p>
                    <h6>Donors:</h6>
                    <ul class="list-group">
                      <li class="list-group-item">John Doe: <strong>$500</strong></li>
                      <li class="list-group-item">Jane Smith: <strong>$200</strong></li>
                      <li class="list-group-item">Alice Green: <strong>$300</strong></li>
                    </ul>
                    <button class="btn btn-primary mt-3">View Donor Details</button>
                  </div>
                </div>
              </div>
      
              <!-- Campaign 2 -->
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">Save Water Awareness</h5>
                    <p class="card-text">Total Donations Raised: <strong>$8,750</strong></p>
                    <p class="text-muted">Goal: <strong>$10,000</strong></p>
                    <p class="text-muted">Remaining: <strong>$1,250</strong></p>
                    <h6>Donors:</h6>
                    <ul class="list-group">
                      <li class="list-group-item">Mark Brown: <strong>$500</strong></li>
                      <li class="list-group-item">Linda White: <strong>$1,000</strong></li>
                      <li class="list-group-item">Paul Clark: <strong>$200</strong></li>
                    </ul>
                    <button class="btn btn-primary mt-3">View Donor Details</button>
                  </div>
                </div>
              </div>
      
              <!-- Campaign 3 -->
              <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">Volunteer for Clean-Up</h5>
                    <p class="card-text">Total Donations Raised: <strong>$5,200</strong></p>
                    <p class="text-muted">Goal: <strong>$7,000</strong></p>
                    <p class="text-muted">Remaining: <strong>$1,800</strong></p>
                    <h6>Donors:</h6>
                    <ul class="list-group">
                      <li class="list-group-item">Sara Lee: <strong>$300</strong></li>
                      <li class="list-group-item">Tom Harris: <strong>$700</strong></li>
                      <li class="list-group-item">Chris Williams: <strong>$500</strong></li>
                    </ul>
                    <button class="btn btn-primary mt-3">View Donor Details</button>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Donation Summary -->
            <div class="mt-5">
              <h4>Total Donations Raised</h4>
              <p><strong>Total Raised So Far:</strong> <span class="badge bg-success">$26,450</span></p>
              <p><strong>Total Donors:</strong> <span class="badge bg-info">12</span></p>
            </div>
      
          </div>
        `;
      break;

    case "volunteers":
      dashboardContent.innerHTML = `
          <div class="container mt-5">
            <h2>Volunteer Management</h2>
      
            <!-- Volunteer Overview -->
            <div class="row">
              <div class="col-md-4">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <h5 class="card-title">Total Volunteers</h5>
                    <p class="display-4"><strong>50</strong></p>
                    <p class="text-muted">Active Volunteers: 40</p>
                    <p class="text-muted">Inactive Volunteers: 10</p>
                  </div>
                </div>
              </div>
      
              <div class="col-md-4">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <h5 class="card-title">Volunteers for Campaign</h5>
                    <p class="display-4"><strong>20</strong></p>
                    <p class="text-muted">Campaign: Tree Plantation Drive</p>
                  </div>
                </div>
              </div>
      
              <div class="col-md-4">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <h5 class="card-title">Pending Volunteers</h5>
                    <p class="display-4"><strong>5</strong></p>
                    <p class="text-muted">Volunteers yet to be assigned to campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Volunteer List -->
            <div class="mt-5">
              <h4>Volunteer List</h4>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Volunteers" aria-label="Search Volunteers" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
              <div class="row">
                <!-- Volunteer Card 1 -->
                <div class="col-md-4 mb-4">
                  <div class="card shadow-sm">
                    <img src="../images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" class="card-img-top" alt="Volunteer 1">
                    <div class="card-body">
                      <h5 class="card-title">John Doe</h5>
                      <p class="card-text">Role: Team Leader</p>
                      <p class="card-text">Campaign: Tree Plantation Drive</p>
                      <p class="text-muted">Availability: Available</p>
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#volunteerModal">View Profile</button>
                    </div>
                  </div>
                </div>
      
                <!-- Volunteer Card 2 -->
                <div class="col-md-4 mb-4">
                  <div class="card shadow-sm">
                    <img src="../images/avatar/portrait-young-beautiful-woman-gesticulating.jpg" class="card-img-top" alt="Volunteer 2">
                    <div class="card-body">
                      <h5 class="card-title">Jane Smith</h5>
                      <p class="card-text">Role: Volunteer</p>
                      <p class="card-text">Campaign: Water Conservation</p>
                      <p class="text-muted">Availability: Not Available</p>
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#volunteerModal">View Profile</button>
                    </div>
                  </div>
                </div>
      
                <!-- Volunteer Card 3 -->
                <div class="col-md-4 mb-4">
                  <div class="card shadow-sm">
                    <img src="../images/avatar/portrait-young-redhead-bearded-male.jpg" class="card-img-top" alt="Volunteer 3">
                    <div class="card-body">
                      <h5 class="card-title">Alice Green</h5>
                      <p class="card-text">Role: Supporter</p>
                      <p class="card-text">Campaign: Beach Clean-Up</p>
                      <p class="text-muted">Availability: Available</p>
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#volunteerModal">View Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Volunteer Profile Modal -->
            <div class="modal fade" id="volunteerModal" tabindex="-1" aria-labelledby="volunteerModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="volunteerModalLabel">Volunteer Profile - John Doe</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <p><strong>Role:</strong> Team Leader</p>
                    <p><strong>Experience:</strong> 2 years with Tree Plantation Drive campaign.</p>
                    <h6>Feedback:</h6>
                    <p>John has been a fantastic volunteer. Always proactive and motivated to lead the teams.</p>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Add Volunteer Form -->
            <div class="mt-5">
              <h4>Add New Volunteer</h4>
              <form id="volunteerForm">
                <div class="mb-3">
                  <label for="volunteerName" class="form-label">Name</label>
                  <input type="text" class="form-control" id="volunteerName" required>
                </div>
                <div class="mb-3">
                  <label for="volunteerRole" class="form-label">Role</label>
                  <input type="text" class="form-control" id="volunteerRole" required>
                </div>
                <div class="mb-3">
                  <label for="volunteerCampaign" class="form-label">Campaign</label>
                  <input type="text" class="form-control" id="volunteerCampaign" required>
                </div>
                <button type="submit" class="btn btn-primary">Add Volunteer</button>
              </form>
            </div>
      
          </div>
        `;
      break;

    case "addevent":
      dashboardContent.innerHTML = `
          <div class="container mt-5">
            <h2>Add New Event</h2>
      
            <!-- Event Creation Form -->
            <form id="addEventForm">
              <div class="mb-3">
                <label for="eventTitle" class="form-label">Event Title</label>
                <input type="text" class="form-control" id="eventTitle" required>
              </div>
      
              <div class="mb-3">
                <label for="eventDescription" class="form-label">Event Description</label>
                <textarea class="form-control" id="eventDescription" rows="4" required></textarea>
              </div>
      
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="eventDate" class="form-label">Event Date</label>
                    <input type="date" class="form-control" id="eventDate" required>
                  </div>
                </div>
      
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="eventTime" class="form-label">Event Time</label>
                    <input type="time" class="form-control" id="eventTime" required>
                  </div>
                </div>
              </div>
      
              <div class="mb-3">
                <label for="eventVenue" class="form-label">Event Venue</label>
                <input type="text" class="form-control" id="eventVenue" required>
              </div>
      
              <div class="mb-3">
                <label for="eventImage" class="form-label">Event Image</label>
                <input type="file" class="form-control" id="eventImage" accept="image/*" required>
              </div>
      
              <div class="mb-3">
                <label for="registrationLink" class="form-label">Event Registration Link (Optional)</label>
                <input type="url" class="form-control" id="registrationLink">
              </div>
      
              <button type="submit" class="btn btn-primary">Create Event</button>
            </form>
          </div>
      
          <!-- Event Preview Modal -->
          <div class="modal fade" id="eventPreviewModal" tabindex="-1" aria-labelledby="eventPreviewModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="eventPreviewModalLabel">Event Preview</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h5 id="previewEventTitle">Event Title</h5>
                  <p id="previewEventDescription">Event Description goes here...</p>
                  <p><strong>Date:</strong> <span id="previewEventDate">2024-12-15</span></p>
                  <p><strong>Time:</strong> <span id="previewEventTime">10:00 AM</span></p>
                  <p><strong>Venue:</strong> <span id="previewEventVenue">Venue Name</span></p>
                  <img id="previewEventImage" class="img-fluid" src="" alt="Event Image" />
                  <p><strong>Registration Link:</strong> <a id="previewEventLink" href="#">Register Here</a></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save Event</button>
                </div>
              </div>
            </div>
          </div>
        `;

      // Handling form submission
      const addEventForm = document.getElementById("addEventForm");
      addEventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const eventTitle = document.getElementById("eventTitle").value;
        const eventDescription =
          document.getElementById("eventDescription").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventTime = document.getElementById("eventTime").value;
        const eventVenue = document.getElementById("eventVenue").value;
        const eventImage = document.getElementById("eventImage").files[0];
        const registrationLink =
          document.getElementById("registrationLink").value;

        // Image preview handling
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("previewEventImage").src = e.target.result;
        };
        if (eventImage) {
          reader.readAsDataURL(eventImage);
        }

        // Event Preview modal population
        document.getElementById("previewEventTitle").innerText = eventTitle;
        document.getElementById("previewEventDescription").innerText =
          eventDescription;
        document.getElementById("previewEventDate").innerText = eventDate;
        document.getElementById("previewEventTime").innerText = eventTime;
        document.getElementById("previewEventVenue").innerText = eventVenue;
        document.getElementById("previewEventLink").href = registrationLink
          ? registrationLink
          : "#";

        // Show Preview Modal
        const previewModal = new bootstrap.Modal(
          document.getElementById("eventPreviewModal")
        );
        previewModal.show();
      });
      break;

    case "collaborate":
      dashboardContent.innerHTML = `
          <div class="container mt-5">
            <h2>Collaborate with NGOs</h2>
      
            <!-- Category Filter -->
            <div class="mb-4">
              <label for="categoryFilter" class="form-label">Filter by Category</label>
              <select id="categoryFilter" class="form-select">
                <option value="all">All Categories</option>
                <option value="environment">Environment</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="social_welfare">Social Welfare</option>
                <option value="disaster_relief">Disaster Relief</option>
                <option value="women_empowerment">Women Empowerment</option>
              </select>
            </div>
      
            <!-- Search Bar -->
            <div class="mb-4">
              <input type="text" id="searchNGOs" class="form-control" placeholder="Search NGOs by Name" onkeyup="filterNGOs()" />
            </div>
      
            <!-- NGOs List -->
            <div id="ngoList" class="row">
              <!-- NGO Card 1 -->
              <div class="col-md-4 mb-4 ngo-card" data-category="environment">
                <div class="card">
                  <img src="../images/causes/poor-child-landfill-looks-forward-with-hope.jpg" class="card-img-top" alt="NGO Image">
                  <div class="card-body">
                    <h5 class="card-title">Green Earth Foundation</h5>
                    <p class="card-text">Mission: Sustainable environmental initiatives for a greener future.</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ngoDetailsModal" onclick="viewNGODetails('Green Earth Foundation', 'Sustainable environmental initiatives for a greener future.')">View Details</button>
                    <button class="btn btn-success mt-2" onclick="sendCollaborationRequest('Green Earth Foundation')">Request Collaboration</button>
                  </div>
                </div>
              </div>
      
              <!-- NGO Card 2 -->
              <div class="col-md-4 mb-4 ngo-card" data-category="education">
                <div class="card">
                  <img src="../images/different-people-doing-volunteer-work.jpg" class="card-img-top" alt="NGO Image">
                  <div class="card-body">
                    <h5 class="card-title">Education for All</h5>
                    <p class="card-text">Mission: Providing quality education to underserved children.</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ngoDetailsModal" onclick="viewNGODetails('Education for All', 'Providing quality education to underserved children.')">View Details</button>
                    <button class="btn btn-success mt-2" onclick="sendCollaborationRequest('Education for All')">Request Collaboration</button>
                  </div>
                </div>
              </div>
      
              <!-- NGO Card 3 -->
              <div class="col-md-4 mb-4 ngo-card" data-category="social_welfare">
                <div class="card">
                  <img src="../images/news/medium-shot-volunteers-with-clothing-donations.jpg" class="card-img-top" alt="NGO Image">
                  <div class="card-body">
                    <h5 class="card-title">Social Harmony Initiative</h5>
                    <p class="card-text">Mission: Creating social harmony through community development programs.</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ngoDetailsModal" onclick="viewNGODetails('Social Harmony Initiative', 'Creating social harmony through community development programs.')">View Details</button>
                    <button class="btn btn-success mt-2" onclick="sendCollaborationRequest('Social Harmony Initiative')">Request Collaboration</button>
                  </div>
                </div>
              </div>
      
              <!-- More NGO Cards can go here -->
      
            </div>
      
            <!-- Modal for NGO Details -->
            <div class="modal fade" id="ngoDetailsModal" tabindex="-1" aria-labelledby="ngoDetailsModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ngoDetailsModalLabel">NGO Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h5 id="modalNGOName">NGO Name</h5>
                    <p id="modalNGOMission">Mission Statement</p>
                    <p><strong>Current Collaborations:</strong> 3</p>
                    <p><strong>Areas of Operation:</strong> Pan India</p>
                    <p><strong>Contact:</strong> contact@ngo.org</p>
                    <button class="btn btn-success" onclick="sendCollaborationRequest('NGO Name')">Request Collaboration</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

      // Function to send collaboration request
      function sendCollaborationRequest(ngoName) {
        alert("Collaboration request sent to " + ngoName);
      }

      // Function to view NGO details in the modal
      function viewNGODetails(ngoName, mission) {
        document.getElementById("modalNGOName").innerText = ngoName;
        document.getElementById("modalNGOMission").innerText = mission;
        // You can add more details for each NGO based on the selected one
      }

      // Function to filter NGOs based on category or search input
      function filterNGOs() {
        const searchValue = document
          .getElementById("searchNGOs")
          .value.toLowerCase();
        const selectedCategory =
          document.getElementById("categoryFilter").value;
        const ngoCards = document.querySelectorAll(".ngo-card");

        ngoCards.forEach((card) => {
          const name = card
            .querySelector(".card-title")
            .innerText.toLowerCase();
          const category = card.getAttribute("data-category");
          if (
            (name.includes(searchValue) || searchValue === "") &&
            (selectedCategory === "all" || selectedCategory === category)
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }

      // Filter NGOs when category is changed
      document
        .getElementById("categoryFilter")
        .addEventListener("change", filterNGOs);

      break;

    case "report":
      dashboardContent.innerHTML = `
          <div class="container mt-5">
            <h2>Reports and Analytics</h2>
      
            <!-- Tabs for Different Reports -->
            <ul class="nav nav-tabs" id="reportsTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="progress-report-tab" data-bs-toggle="tab" data-bs-target="#progress-report" type="button" role="tab">Progress Report</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="compliance-report-tab" data-bs-toggle="tab" data-bs-target="#compliance-report" type="button" role="tab">Compliance Report</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="event-budget-report-tab" data-bs-toggle="tab" data-bs-target="#event-budget-report" type="button" role="tab">Event Budget Report</button>
              </li>
            </ul>
      
            <!-- Tab Contents -->
            <div class="tab-content mt-4">
              
              <!-- Progress Report -->
              <div class="tab-pane fade show active" id="progress-report" role="tabpanel">
                <h3>Progress Report</h3>
                <p><strong>Total Projects:</strong> 25</p>
                <p><strong>Beneficiaries Impacted:</strong> 5000+</p>
                <canvas id="progressChart" style="max-width: 600px;"></canvas>
                <button class="btn btn-primary mt-3" onclick="downloadReport('Progress')">Download Progress Report</button>
              </div>
      
              <!-- Compliance Report -->
              <div class="tab-pane fade" id="compliance-report" role="tabpanel">
                <h3>Compliance Report</h3>
                <p><strong>DARPAN Verification Status:</strong> Verified</p>
                <p><strong>Tax Filings:</strong> Up-to-date</p>
                <p><strong>Audit Status:</strong> Completed</p>
                <button class="btn btn-primary mt-3" onclick="downloadReport('Compliance')">Download Compliance Report</button>
              </div>
      
              <!-- Event Budget Report -->
              <div class="tab-pane fade" id="event-budget-report" role="tabpanel">
                <h3>Event Budget Report</h3>
                <p><strong>Total Events:</strong> 15</p>
                <p><strong>Average Budget Utilized:</strong> 80%</p>
                <canvas id="budgetChart" style="max-width: 600px;"></canvas>
                <button class="btn btn-primary mt-3" onclick="downloadReport('Event Budget')">Download Event Budget Report</button>
              </div>
            </div>
          </div>
        `;

      // Example charts using Chart.js
      const progressCtx = document
        .getElementById("progressChart")
        .getContext("2d");
      new Chart(progressCtx, {
        type: "bar",
        data: {
          labels: ["Project A", "Project B", "Project C", "Project D"],
          datasets: [
            {
              label: "Progress (%)",
              data: [75, 50, 90, 60],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
      });

      const budgetCtx = document.getElementById("budgetChart").getContext("2d");
      new Chart(budgetCtx, {
        type: "pie",
        data: {
          labels: ["Venue", "Food", "Transportation", "Marketing"],
          datasets: [
            {
              label: "Event Budget Distribution",
              data: [30, 20, 25, 25],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      });

      // Function to download reports
      function downloadReport(type) {
        alert(type + " Report Downloaded Successfully!");
      }
      break;

    default:
      dashboardContent.innerHTML = `
        <h2>Welcome to Your Dashboard!</h2>
        <p>Select an option from the sidebar to explore various sections.</p>
      `;
  }
}
