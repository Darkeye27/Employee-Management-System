

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Report",
        taskDescription: "Prepare the monthly financial report.",
        taskDate: "2025-01-24",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2025-01-25",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Feedback",
        taskDescription: "Review and respond to client feedback.",
        taskDate: "2025-01-26",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code Review",
        taskDescription: "Review the new feature branch.",
        taskDate: "2025-01-24",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Bug Fix",
        taskDescription: "Resolve login page errors.",
        taskDate: "2025-01-25",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Deploy Update",
        taskDescription: "Deploy the latest version to production.",
        taskDate: "2025-01-26",
        category: "Operations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Market Analysis",
        taskDescription: "Analyze competitor pricing strategies.",
        taskDate: "2025-01-24",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Social Media Post",
        taskDescription: "Create content for Instagram.",
        taskDate: "2025-01-25",
        category: "Social Media",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Ad Campaign",
        taskDescription: "Launch Google Ads campaign.",
        taskDate: "2025-01-26",
        category: "Advertising",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Myra",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory Check",
        taskDescription: "Verify stock levels in warehouse.",
        taskDate: "2025-01-24",
        category: "Logistics",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Supplier Meeting",
        taskDescription: "Discuss terms with new supplier.",
        taskDate: "2025-01-25",
        category: "Procurement",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Quality Check",
        taskDescription: "Inspect incoming products for quality.",
        taskDate: "2025-01-26",
        category: "Quality Assurance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Aadhya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Website Update",
        taskDescription: "Update homepage banner images.",
        taskDate: "2025-01-24",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "UI Testing",
        taskDescription: "Test the new user interface for bugs.",
        taskDate: "2025-01-25",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Feature Proposal",
        taskDescription: "Prepare a proposal for a new app feature.",
        taskDate: "2025-01-26",
        category: "Planning",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

 return {employees,admin}
}