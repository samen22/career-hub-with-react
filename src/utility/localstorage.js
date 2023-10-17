const getStoredApplication = () =>{
    const storedJobApplications = localStorage.getItem('job-applications');
    if(storedJobApplications){
        return JSON.parse(storedJobApplications)
    } 
    return [];
}


const saveJobApplication = id => {
    const storedJobApplications = getStoredApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
    return 

}
export { getStoredApplication, saveJobApplication}