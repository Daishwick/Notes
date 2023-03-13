**Region**
An Azure region is a set of datacenters, deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network. With more global regions than any other cloud service provider, Azure gives customers the flexibility to deploy applications where they need. An Azure region has discrete pricing and service availability

**Availability Zone**
AZs are individual physical locations within a region. Each zone is made up of one or more datacenters equipped with independent power, cooling, and networking.

**ARM**
When you deploy your resources using ARM templates, you can be confident it happens in the same way every single time. Your resources will be deployed in a consistent state.
Azure Resource Manager enables you to create, update, and delete resources in your Azure account.
Azure Resource Manager handles the request for any Azure tools, APIs, or SDKs



**Resources**
- Resources belong to a resource group, which can be a geographical, logical, customer-specific, or any other type of grouping.
- When a resource group is removed or deleted, all of the resources within it are deleted with it. You can remove resource groups at any time. To delete a resource group, you need access to the delete action. You also need delete for all resources in the resource group. If you have the required access, but the delete request fails, it may be because there's a lock on the resources or resource group. Even if you didn't manually lock a resource group, it may have been automatically locked by a related service. Or, the deletion can fail if the resources are connected to resources in other resource groups that aren't being deleted. For example, you can't delete a virtual network with subnets that are still in use by a virtual machine

# Virtual Machine
Part of IaaS - manage everything but the hardware.


# Scale sets 
- a group of identical load balanced vms 
- multiple vms 
- high availability 
- auto scaling
- large scale
- no extra cost


Vms and scale sets or IaaS

## Fully manage platform 
app services are an easy way to host and manage your webapplication
PaaS offering 
- Web apps; used for webapps 
- API app data backend services 
- container app can host container images

**Containers**
- all the dependencies for your app are in the container
- less overhead; containers don't require maintenance
- increased portability; can be deployed easily and over multiple different operating systems 
- efficiency; development, deployment, maintenance are more efficient. scaling and patching is simpler 
- consistency; They are always the same 

**Azure kubernetes services**
- open source
- orchestration system
- automatic application deployment
- automatic scaling


# Networking

1. Virtual Network
   1. Services are connected to a VNET, includes an IP address range and subnets. Belongs to a single region and a single subscription
2. Load Balancer
   1. Distributes and balances the incoming traffic to an application network. Uses IP address and port number to determine the receiving VM in the backend pool
   2. A load balancer sits in front of two or more virtual machines to manage, and balance, the load to the virtual machines. This can be based on amount of incoming traffic or specific properties in the traffic. A load balancer has nothing to do with virtual disks, and the max number of VMs to manage goes up to 1,000. A load balancer ensures only healthy instances receive traffic and will stop sending traffic to any server that does not pass health checks. All Azure load balancers can log traffic that passes through them.
3. VPN Gateway
   1. connects your azure network with your onpremises network securely
   2. VPN Gateway is a specific VNet Gateway. it consists of two or more dedicated VMs.
   3. VNet Gateway + VPN becomes a VPN Gateway
   4. Sends encrypted data between azure and on premises network
   5. azure gateway subnet, secure tunnal and on-premises gateway makes up a VPN Gateway scenario
   6. You can use multi-site hosting to use the same Application Gateway for more than one website. You can, in fact, add up to 100 websites to the same instance of an Application Gateway. This will both save you on cost and complexity.

An Application Gateway is similar to a load balancer, but it can redirect traffic based on attributes in the HTTP request, the request coming in from the internet. You can have a VM handling video, one handling images and so on. Application Gateways do not handle traffic security, nor manage any virtual networks.
4. ApplicationGateway
   1. Distributes incoming traffic based on HTTP request properties, such as URL and host headers. Same session traffic can be handled by multiple servers
   2. It works on the HTTP request of the traffic, instead of the IP addresses and port
   3. Traffic from a specific web address can go to a specific machine
   4. is a fit for most other Azure services
   5. Supports auto-scaling, end-to-end encryption, zone redundancy and multi-site hosting.
5. ExpressRoute
   1. Direct link between on-premises and Azure. Enables a private and secure, high-bandwith, low-latency connection  
   2. ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection with the help of a connectivity provider. With ExpressRoute, you can establish connections to Microsoft cloud services, such as Microsoft Azure and Microsoft 365.
6. Content Delivery Network
   1. stores a cached version of your application on an edge node. Provides better performance and less traffic to your main server. Content cache is updated as necessary. 
   2. A CDN keeps a recent copy of your web application and can deliver this much faster to users close to an endpoint. CDNs can handle a lot more data than a typical web server, which makes it ideal to handle traffic spikes as well. CDNs don't generally handle individual traffic routing rules, nor security.


7. Address space
   1. An address space on a virtual network is a number of IP addresses that are unique only on the specific virtual network. These IP addresses are assigned to resources connected to the VNet, which allows the resources to interact and communicate. There is no limit to the number of VNets you can have, nor on the number of address spaces.
8. Recourses and VN
   1. Azure Virtual Network enables Azure resources to securely communicate with each other, the internet, and on-premises networks. Key scenarios that you can accomplish a virtual network include: communication of Azure resources with the internet, communication between Azure resources, communication with on-premises resources, filtering network traffic, routing network traffic, and integration with Azure services. Reference: Why use an Azure Virtual network?

# Storage 

## Blob container
- everything always fits in a container
- every item has a unique ID 
- Block blobs -> store text and binary data up to 4.7 TB Made up for individually managed blocks of data
- APPEND --> block blobs that are optimized for append operations. Works well for logging where data is constantly appended
- Page -> Stores files up to 8 TB. Any part of the file could be accessed

3 tiers
HOT: frequently accessed files. Lower access times & higher access costs
COOL: Lower storage costs and higher access times. Data remains here for at least 30 days. 
ARCHIVE: lowest cost and access time

## DISK
disk types:
HDD: spinning hard drive, low cost and suitable for backups
Standard SSD: Standard for production. Higher reliability, scalability and lower latency over HDD
Premium SSD: database installations, low latency. 
Ultra disk: For the most data demanding work loads up to 64 tb, transaction heavy workload 

## File benefits 
- sharing
- managed
- resilient

Hybrid || Lift & Shift

## Archive
- Requirement; policies and legislation
- Lowest price
- Features; durable, encrypted and stable. 

## Redundancy

**Single**
Locally Redundant Storage (LRS)
- lowest cost
- three copiesin single location
- Protect against single disk failure
- Does not protect against zone or regional outage

Zone-redundant storage (ZRS)
- Three copies across three availabilty zones
- Protects against zone 


**Multi-region**
Geo-Redundant Storage (GRS)
Three copies in two different regions
- Three copies in primary regional physical location
- three copies in secondary paired region
- protect against primary region failyr but no primary region zone redundance
- Can configure read access from secondary region for high availabilty


Geo-Zone-Redundant storage (GZRS)
- Copy across three availability zones in primary region (ZRS)
- Three copies in secondary region physical location/zone (LRS)
- Protect against primary region failure AND primary region zone failure
- Can also configure read access from secondary region for high availability 

***They all have***:
- Three copies in primary region
- three copies in secondary region (multi-region)

# Moving Data

AZCopy
1. Command Line Utility
2. Transfer Blobs and azure files
3. Useful for scripting data transfers


Storage Explorer
1. Graphical User Interface
2. Downloaded application
3. User-friendly graphical interface
4. Move all storage account formats


Azure File Sync
1. Synchronize Azure Files
2. Local file server performance + cloud availabilty
3. Use cases: back up local file server
4. Sync files between multiple on-premises locations
5. remote users access azure files
6. transition to only azure files for file server


# Additional migration options

1. Azure Data box
   1. Scenario: Transfer lots of data and/or limited bandwith
   2. Lots = Too much to transfer over the internet
   3. relative to available netword bandwith
   4. Offline data transfer to/from azure
   5. copy data to physical data storage device
      1. encrypted
      2. rugged
   6. Ship data box to/from azure
      1. to azure: Data box data transferred to storage account
      2. From azure: data box delivered to on-premises location for on-site transfer

**use case**:
- initial bulk data migration
- disaster recovery 
- security requirements; sensitive data

2. Azure migrate server
   1. Migrate non-azure resources into azure
      1. servers
      2. databases
      3. applications


**Blob**
Append blobs are used for operations where you are appending new data to existing content, rather than replacing it. Picture this like a log that you're constantly adding to.

Block blobs are used for handling large amounts of data very effectively.

Page blobs are used for random read/write operations. Picture this like the computing equivalent of having a scrap piece of paper (or "page") on your desk to scribble notes on that you only need for temporary periods of time.

Azure Blob storage is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data, such as text or binary data. Blob storage is ideal for storing data for backup and restore, disaster recovery, and archiving. Azure Documentation

**Azure files**
Azure Files can be used to completely replace or supplement traditional on-premises file servers or NAS devices. Popular operating systems such as Windows, macOS, and Linux can directly mount Azure file shares wherever they are in the world. SMB Azure file shares can also be replicated with Azure File Sync to Windows Servers, either on-premises or in the cloud, for performance and distributed caching of the data where it's being used.

**Hard drives**
Disk storage is a full Virtual hard disk that you can access. It is ideal as the disk for a Virtual machine. In fact, when you create a Virtual machine, disk storage is created too.

None of the premium performance options offer multi-region redundancy. Premium page blobs have only LRS redundancy options.

The premium performance options cost more than their standard counterparts.

