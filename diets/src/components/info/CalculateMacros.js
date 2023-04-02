
function CalculateMacros(dailyCarbs, dailyFats, dailyProteins, proteinScoops, fruitPortions) {
    // Calculate daily protein target
    let dailyProteinTarget = dailyProteins;
    if (proteinScoops === 1) {
      dailyProteinTarget -= 23;
    } else {
      dailyProteinTarget -= 46;
    }
  
    // Calculate daily carb target
    let dailyCarbTarget = dailyCarbs;
    if (fruitPortions === 1) {
      dailyCarbTarget -= 30;
    } else {
      dailyCarbTarget -= 60;
    }
  
    // Calculate remaining daily fat target
    const dailyFatTarget = dailyFats;
  
    // Calculate target macros for breakfast
    const targetBreakfastCarbs = Math.round(0.22 * dailyCarbTarget);
    const targetBreakfastProtein = Math.round(0.22 * dailyProteinTarget);
    const targetBreakfastFats = Math.round(0.22 * dailyFatTarget);
  
    // Calculate remaining daily macros after breakfast
    const remainingCarbs = dailyCarbTarget - targetBreakfastCarbs;
    const remainingProteins = dailyProteinTarget - targetBreakfastProtein;
    const remainingFats = dailyFatTarget - targetBreakfastFats;
  
    // Calculate target macros for lunch and dinner
    const targetLunchDinnerCarbs = Math.round(0.39 * remainingCarbs);
    const targetLunchDinnerProtein = Math.round(0.39 * remainingProteins);
    const targetLunchDinnerFats = Math.round(0.39 * remainingFats);
  
    return {
      targetBreakfastCarbs,
      targetBreakfastProtein,
      targetBreakfastFats,
      targetLunchDinnerCarbs,
      targetLunchDinnerProtein,
      targetLunchDinnerFats,
      dailyFatTarget,
      dailyCarbTarget,
      dailyProteinTarget

    };
  }

  export default CalculateMacros;
  