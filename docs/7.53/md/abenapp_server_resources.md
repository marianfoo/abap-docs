  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION - STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)) → 

Thresholds for Resource Allocation for Asynchronous RFC

If one of the following criteria is not met, no resources are made available for the parallelization with asynchronous RFC (or triggered by the system in the exceptional case RESOURCE\_FAILURE):

-   Number of available dialog work processes: 1
    This standard value is 1 and can be set using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/rfc\_min\_wait\_dia\_wp. As standard, a certain number of dialog work processes are kept free as reserve instances for other purposes, such as system logon or administration programs.
    For this reason, a greater number of dialog processes must be free, than the number specified for the profile parameter rdisp/rfc\_min\_wait\_dia\_wp.
    
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