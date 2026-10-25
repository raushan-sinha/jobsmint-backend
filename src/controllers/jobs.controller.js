import { fetchJobs } from "../services/jobs.service.js";

export async function getJobs(req, res) {
    try {
        const jobs = await fetchJobs();

        return res.status(200).json({
            success: true,
            total: jobs.length,
            jobs: jobs
        })
    } catch (error) {
        console.error(error)
    }
}