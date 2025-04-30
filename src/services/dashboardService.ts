import dashboardRepository from "../repositories/dashboardRepository";

const getMonthly = async (userId: number) => {
  const companyId = await dashboardRepository.getCompanyIdByUser(userId);

  const thisMonthContract = await dashboardRepository.getMonthcompleted(
    companyId
  );
  return thisMonthContract;
};

const getLastMonthly = async (userId: number) => {
  const companyId = await dashboardRepository.getCompanyIdByUser(userId);

  const lastMonthContract = await dashboardRepository.getLastCompleted(
    companyId
  );

  return lastMonthContract;
};

const proceedingContracts = async (userId: number) => {
  const companyId = await dashboardRepository.getCompanyIdByUser(userId);

  const proceedingContractCount = await dashboardRepository.proceedingContract(
    companyId
  );

  return proceedingContractCount;
};

const completedContracts = async (userId: number) => {
  const companyId = await dashboardRepository.getCompanyIdByUser(userId);

  const completedContractCount = await dashboardRepository.completedContract(
    companyId
  );

  return completedContractCount;
};

const contractsByCarType = async (userId: number) => {
  const companyId = await dashboardRepository.getCompanyIdByUser(userId);

  const completedCarType = await dashboardRepository.getCompletedCarType(
    companyId
  );
  return completedCarType;
};

const salesByCarType = async (userId: number) => {
  const companyId = await dashboardRepository.getCompanyIdByUser(userId);

  const salesCarType = await dashboardRepository.getSaleCarType(companyId);
  return salesCarType;
};

export default {
  getMonthly,
  getLastMonthly,
  proceedingContracts,
  completedContracts,
  contractsByCarType,
  salesByCarType,
};
