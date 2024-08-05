import { addRippleEffect } from './ripple.js';

export function createExperience() {
  const experienceDiv = document.createElement('div');
  experienceDiv.className = 'experience';
  experienceDiv.contentEditable = 'true';

  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'Experience';

  const jobContainer = document.createElement('div');
  jobContainer.className = 'job-container';

  const jobs = [
    {
      date: 'Jun. 2024 - Present',
      roleName: 'Frontend Developer',
      aboutJob: 'YNA',
      additional: 'Full-time',
      featuredPoints: [
        'Development and implementation of responsive web interfaces that enhance user experience and accessibility, using modern HTML, CSS, and JavaScript frameworks',
      ],
      isRecent: true,
    },
    {
      date: 'Sep. 2023 - Jun. 2024',
      roleName: 'Crafttech',
      aboutJob: 'Full-time',
      additional: false,
      featuredPoints: [
        'Optimization and performance tuning of frontend applications to ensure fast loading times and efficient resource usage, utilizing best practices in code splitting, lazy loading, and caching strategies',
      ],
      isRecent: false,
    },
    {
      date: 'Sep. 2016 - Sep. 2023',
      roleName: 'Engineer',
      aboutJob: 'PSK',
      additional: 'Full-time',
      featuredPoints: [
        'Provide administrative support to lawyer and enhance office effectiveness',
        'Handle communication with clients, witnesses etc.',
        'Prepare case briefs and summarize depositions, interrogatories and testimony',
      ],
      isRecent: false,
    },
  ];

  jobs.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.className = 'job';
    if (job.isRecent) {
      jobDiv.classList.add('recent-job');
    }

    const jobHeader = document.createElement('div');
    jobHeader.className = 'job-header';

    const dateP = document.createElement('p');
    dateP.className = 'date-exp';
    dateP.textContent = job.date;

    const jobInfo = document.createElement('div');
    jobInfo.className = 'jobInfo';

    if (job.isRecent) {
      const tag = document.createElement('div');
      tag.className = 'tag-exp';

      const mostRecent = document.createElement('div');
      mostRecent.className = 'most-recent';
      mostRecent.textContent = 'Most Recent';

      tag.appendChild(mostRecent);
      jobHeader.appendChild(dateP);
      jobHeader.appendChild(tag);
    } else {
      jobHeader.appendChild(dateP);
    }

    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-container';

    const roleNameP = document.createElement('p');
    roleNameP.className = 'roleName';
    roleNameP.textContent = job.roleName;

    const aboutJobP = document.createElement('span');
    aboutJobP.className = 'aboutJob';
    aboutJobP.textContent = job.aboutJob;

    const additionalInfoP = document.createElement('span');
    additionalInfoP.className = 'additional-info';
    if (job.additional) {
      additionalInfoP.textContent = `| ${job.additional}`;
    }

    detailsContainer.appendChild(roleNameP);
    detailsContainer.appendChild(aboutJobP);
    detailsContainer.appendChild(additionalInfoP);

    const featuredPointsDiv = document.createElement('div');
    featuredPointsDiv.className = 'featuredPointsContainer';

    const featuredPointsUL = document.createElement('ul');
    featuredPointsUL.className = 'featuredPoints';
    job.featuredPoints.forEach(point => {
      const pointLI = document.createElement('li');
      pointLI.textContent = point;
      featuredPointsUL.appendChild(pointLI);
    });

    featuredPointsDiv.appendChild(featuredPointsUL);

    jobInfo.appendChild(detailsContainer);
    jobInfo.appendChild(featuredPointsDiv);

    jobDiv.appendChild(jobHeader);
    jobDiv.appendChild(jobInfo);

    jobContainer.appendChild(jobDiv);
  });

  experienceDiv.appendChild(title);
  experienceDiv.appendChild(jobContainer);

  addRippleEffect(experienceDiv);

  return experienceDiv;
}
