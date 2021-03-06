module.exports = {
  "metricsCounterPerDomainPerDay" : require('./counter_per_domain_per_day').map_counter_per_domain_per_day,
  "metricsCounterPerDomainPerDayPerCountry" : require('./counter_per_domain_per_day_per_country').map_counter_per_domain_per_day_per_country,
  "metricsCounterPerDomainPerDayPerOwner" : require('./counter_per_domain_per_day_per_owner').map_counter_per_domain_per_day_per_owner,
  "metricsCounterPerDomainPerDayPerOwnerPerCountry" : require('./counter_per_domain_per_day_per_owner_per_country').map_counter_per_domain_per_day_per_owner_per_country,
  "metricsCounterPerDomainPerDestinationPerDay" : require('./counter_per_domain_per_destination_per_day').map_counter_per_domain_per_destination_per_day,
  "metricsCounterPerDomainPerDestinationPerDayPerCountry" : require('./counter_per_domain_per_destination_per_day_per_country').map_counter_per_domain_per_destination_per_day_per_country,
  "metricsCounterPerLoginDomainPerDay" : require('./counter_per_logindomain_per_day').map_counter_per_logindomain_per_day,
  "metricsCounterPerLoginDomainPerDayPerCountry" : require('./counter_per_logindomain_per_day_per_country').map_counter_per_logindomain_per_day_per_country,
  "metricsCounterPerLoginDomainPerEmailPerDay" : require('./counter_per_logindomain_per_email_per_day').map_counter_per_logindomain_per_email_per_day,
  "metricsCounterPerLoginDomainPerEmailPerDayPerCountry" : require('./counter_per_logindomain_per_email_per_day_per_country').map_counter_per_logindomain_per_email_per_day_per_country,
  "metricsReduceTotalCounter" : require('./reduce_total_counter').reduce_total_counter,
  "metricsM" : require('./metrics_m').metrics_m,
  "metricsR" : require('./metrics_r').metrics_r,
  "metricsRtrans" : require('./metrics_r_trans').metrics_r_trans,
  "metricsByGeoTrans" : require('./metrics_geo_trans').metrics_geo_trans,
  "metricsByTrans" : require('./metrics_trans').metrics_trans,
  "metricsByTemptransApp" : require('./metrics_temptrans_app').metrics_temptrans_app,
  "metricsByTemptransDomain" : require('./metrics_temptrans_domain').metrics_temptrans_domain,
  "metricsByGeoDomain" : require('./metrics_geo_domain').metrics_geo_domain,
  "metricsByDomain" : require('./metrics_domain').metrics_domain,
  "metricsByGeo" : require('./metrics_geo').metrics_geo,
  "mbaasAggregateApp": require('./map_aggregated_app').metrics_aggregated_app,
  "mbaasReduce": require('./reduce_aggregated').metrics_aggregated_reduce,
  "mbaasAggregateDomain": require('./map_aggregated_domain').metrics_aggregated_domain,
  "metricsActiveDeviceApp": require('./metrics_active_device_app').metrics_active_device_app,
  "metricsActiveDeviceDomain": require('./metrics_active_device_domain').metrics_active_device_domain,
  "metricsActiveDeviceAppGeo": require('./metrics_active_device_app_geo').metrics_active_device_app_geo,
  "metricsActiveDeviceDomainGeo": require('./metrics_active_device_domain_geo').metrics_active_device_domain_geo,
  "metricsReduceActiveDevice": require('./metrics_r_active_device').metrics_r_active_device,
  "metricsReduceActiveDeviceGeo": require('./metrics_r_active_device_geo').metrics_r_active_device_geo
};
