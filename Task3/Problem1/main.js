function TellFortune(NumChilds, PartnerName, GeoLocation, JobTitle) {
  return `You will be a ${JobTitle} in ${GeoLocation}, and married to ${PartnerName} with ${NumChilds} kids.`;
}

document.write(TellFortune(7, "Rania", "Jordan", "software engineer"));
