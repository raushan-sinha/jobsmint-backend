export async function fetchJobs() {
    const apiUrl = process.env.JOBS_API_URL;
    
    if (!apiUrl) {
        throw new Error('Jobs API isn`t finding in .enf file');
    }

    const response = await fetch(apiUrl, {
        signal: AbortSignal.timeout(10000)
    })

    if (!response.ok) {
        const error = new Error('API response is not working');
        error.statusCode = 502;
        throw error;
    }

    const data = await response.json();

    return data.jobs;
}