### DNS Server

- The node:dns module enables name resolution. For example, use it to look up IP addresses of host names.

- Although named for the Domain Name System (DNS), it does not always use the DNS protocol for lookups. dns.lookup() uses the operating system facilities to perform name resolution. It may not need to perform any network communication. To perform name resolution the way other applications on the same system do, use dns.lookup().

-const dns = require('node:dns');
<code>
dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
</code>

