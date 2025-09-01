  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Object Services (OS)](javascript:call_link\('abenabap_object_services.htm'\)) →  [OS - Transaction Service](javascript:call_link\('abenabap_object_services_transact.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: OS - Transaction Service, Overview, ABENOS_TRANSACTION_TERMS, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

OS - Transaction Service, Overview

The classic SAP transaction concept is based on SAP LUWs in which changes to the database are bundled into a single database LUW. The bundling techniques used here include programming database changes in procedures and registering them in a database LUW for later execution instead of performing them immediately. Possible procedures include subroutines (registered using PERFORM ON COMMIT) and update function modules (registered using CALL FUNCTION IN UPDATE TASK). In both cases, the registered procedures are executed using the statement COMMIT WORK.

The Transaction Service of the Object Services is also based on SAP LUWs and does not introduce a new transaction concept. However, it encapsulates the bundling before the developer, so that the developer does not have to explicitly create and register procedures that change the database. Internally, the transaction service still works with the classic update function modules.

This concept allows interaction between classic and object-oriented transactions, controlled using a [transaction mode](javascript:call_link\('abenos_transaction_mode.htm'\)) that can be set for a given program.