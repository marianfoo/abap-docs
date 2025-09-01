  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Object Services (OS)](javascript:call_link\('abenabap_object_services.htm'\)) →  [OS - Transaction Service](javascript:call_link\('abenabap_object_services_transact.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Check%20Agents%2C%20ABENOS_TRANSACTION_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Check Agents

A checking agent makes it possible to check the consistency of a persistent object that is to be stored prior to the update. It is a class that implements the interface IF\_OS\_CHECK. The interface has a method IS\_CONSISTENT with a return value RESULT of type OS\_BOOLEAN.

In the simplest case, the interface is implemented in the persistent class itself since all the attributes are known there and can be checked. If an inconsistency is detected, the system tries to repair it or sets the output value to OSCON\_FALSE.

The method IF\_OS\_TRANSACTION~REGISTER\_CHECK\_AGENT can be used to register the required checking agent for a transaction. This causes the transaction service to call the method IS\_CONSISTENT automatically before the update. An exception is raised if a checking agent has the return value OSCON\_FALSE.