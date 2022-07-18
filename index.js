function distanceFromHqInBlocks(block) {
    if (block < 42) {
        return 42 - block;
    }
    return block - 42;
}

function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block) * 264;

}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    }
    return (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let footage = distanceTravelledInFeet(start, destination);
    
    if (footage <= 400) {
        return 0;
    }
    if (footage > 400 && footage < 2000) {
        return (footage - 400) * .02;
    }
    if (footage > 2000 && footage < 2500) {
        return 25;
    }
    if (footage >= 2500) {
        return 'cannot travel that far';
    }
}