---
title: "RFC - Thresholds for Resource Allocation"
description: |
  If one of the following criteria is not fulfilled, no resources are made available for the parallelization with asynchronous RFC (or triggered by the system in the exceptional case RESOURCE_FAILURE): -   Number of available dialog work processes: 1 The standard value is 1. By default, a certain num
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapp_server_resources.htm"
abapFile: "abenapp_server_resources.htm"
keywords: ["do", "if", "case", "try", "data", "abenapp", "server", "resources"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION STARTING NEW TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_starting.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Thresholds%20for%20Resource%20Allocation%2C%20ABENAPP_SERVER_RESOURCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

RFC - Thresholds for Resource Allocation

If one of the following criteria is not fulfilled, no resources are made available for the parallelization with asynchronous RFC (or triggered by the system in the exceptional case RESOURCE\_FAILURE):

-   Number of available dialog work processes: 1
    
    The standard value is 1. By default, a certain number of dialog work processes are kept free as reserve instances for other purposes, such as system logon or administration programs. For this reason, a greater number of dialog processes must be free, than the number specified in the profile parameter for the standard value.
    

-   Percentage of user-specific dialog work processes: 75%
    
    This default value can be changed using the profile parameter rdisp/rfc\_max\_own\_used\_wp. The number of dialog work processes is defined using the profile parameter rdisp/wp\_no\_dia.
    

-   Percentage of waiting requests in dialog queue: 5%
    
    This default value (5% of the entire length of the dialog wait queue) can by changed by the rdisp/rfc\_max\_queue profile parameter.
    
    The length of the dialog queues is defined using the profile parameter rdisp/elem\_per\_queue.
    

-   Percentage of logons to the system: 90%
    
    If the percentage of users already logged on exceeds this, then no resources are released.
    
    This default value can be changed using the profile parameter rdisp/rfc\_max\_login.
    
    The maximum number of logons to a server is configured using the profile parameter rdisp/tm\_max\_no.
    

-   Percentage of own logons to system: 25%
    
    This default value (25% of all logons) can be changed using the profile parameter rdisp/rfc\_max\_own\_login. For each RFC, a logon to the target system takes place.
    

-   Percentage of used communication entries: 90%
    
    Every server has a limited number of communication channels. The default limit value is 90 per cent.
    This value can be changed using the profile parameter rdisp/rfc\_max\_comm\_entries. The maximum number of communication channels is configured using the profile parameter rdisp/max\_comm\_entries. Here, one entry for each connection is made for the client and server.