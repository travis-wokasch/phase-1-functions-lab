function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(numOfBlocks){
    return distanceFromHqInBlocks(numOfBlocks) * 264
}

function distanceTravelledInFeet(startBlock, endBlock){
    return Math.abs(startBlock - endBlock) * 264
}

function calculatesFarePrice(start, destination){
    let distanceFeet = Math.abs(start - destination) * 264
    
    if (distanceFeet <= 400){
    return 0
    }
    else if (400 < distanceFeet && distanceFeet <= 2000){
        return (distanceFeet-400) * 0.02
    }
    else if (2000 < distanceFeet && distanceFeet < 2500){
        return 25
    }
    else if (distanceFeet > 2500){
        return 'cannot travel that far'
    }
    
} 
