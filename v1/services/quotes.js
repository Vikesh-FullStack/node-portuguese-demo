const db = require('./db');
const helper = require('../../helper');

async function getMultiple(sitename = "",revenue = "" ,page = 1) {
  let addQuery = "";
  let sort = "";
  if(sitename){
    addQuery = `AND sites.title LIKE '%${sitename}%'`;
  }
  
  if(revenue){
    sort = `, revenue ${revenue}`;
  }

  const rows = await db.query(

  `SELECT deals.site_id as label,CONCAT(CONCAT(EXTRACT(month FROM listing_date),'-'),EXTRACT(year FROM listing_date)) "Date",EXTRACT(month FROM listing_date) "Month" ,AVG(revenue) As Revenue, count(*) as data,sites.title FROM deals INNER JOIN sites ON deals.site_id=sites.id WHERE listing_date BETWEEN '2020-11-01' AND '2021-11-30' 
  ${addQuery} GROUP BY deals.site_id,EXTRACT(month FROM listing_date),EXTRACT(year FROM listing_date),sites.title ORDER BY deals.site_id,EXTRACT(month FROM listing_date),EXTRACT(year FROM listing_date),sites.title${sort} ;`

  );

  const data = helper.emptyOrRows(rows);
  
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple 
}