export const calculateEarlyCheckIns = (employees) => {
    const earlyCheckIns = employees.filter((emp) => {
      const checkInTime = new Date(emp.checkIn);
      const hours = checkInTime.getHours();
      const minutes = checkInTime.getMinutes();
      return hours === 7 && minutes <= 30;
    });
  
    const percentageEarly =
      employees.length > 0 ? (earlyCheckIns.length / employees.length) * 100 : 0;
  
    return {
      totalEmployees: employees.length,
      earlyCheckIns: earlyCheckIns.length,
      percentageEarly: percentageEarly.toFixed(2),
    };
  };
  