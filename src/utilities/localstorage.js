const getStoredJobApplication = () => {
  const storeJobApplication = localStorage.getItem('job-application');
  if (storeJobApplication) {
    return JSON.parse(storeJobApplication);
  }
  return [];
}

const saveJobApplication = id => {
  const storeJobApplication = getStoredJobApplication();
  const exists = storeJobApplication.find(jobId => jobId === id);
  if (!exists) {
    storeJobApplication.push(id);
    localStorage.setItem('job-application', JSON.stringify(storeJobApplication));
  }

}

export { getStoredJobApplication, saveJobApplication }