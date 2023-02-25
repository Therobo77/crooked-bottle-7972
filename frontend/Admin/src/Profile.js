const Profile = () => {
  return (
    <div class="col-12 col-xl-12 mt-3">
      <div class="row">
        <div class="col-12 mb-4">
          <div class="card shadow border-0 text-center p-0">
            <div
              class="profile-cover rounded-top"
              data-background="assets/img/profile-cover.jpg"
            ></div>
            <div class="card-body pb-5">
              <img
                src="assets/img/profile-picture-1.jpg"
                class="avatar-xl rounded-circle mx-auto mt-n7 mb-4"
                alt="Neil Portrait"
              />
              <h4 class="h3">Jassa</h4>
              <h5 class="fw-normal">Senior Software Engineer</h5>
              <p class="text-gray mb-4">Ludhiana, Punjab</p>
              <a
                class="btn btn-sm btn-gray-800 d-inline-flex align-items-center me-2"
                href="#"
              >
                <svg
                  class="icon icon-xs me-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                Connect
              </a>
              <a class="btn btn-sm btn-secondary" href="#">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;