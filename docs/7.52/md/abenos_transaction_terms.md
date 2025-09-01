  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Object Services](javascript:call_link\('abenabap_object_services.htm'\)) →  [transaction service](javascript:call_link\('abenabap_object_services_transact.htm'\)) → 

Transaction Service Overview

The classic SAP transaction concept is based on SAP LUWs in which changes to the database are bundled into a single database LUW. The bundling techniques used here include programming database changes in procedures and registering them in a database LUW for later execution instead of performing them immediately. Such procedures include subprograms (registered using PERFORM ON COMMIT) and update function modules (registered using CALL FUNCTION IN UPDATE TASK). In both cases, the registered procedures are executed using the COMMIT WORK statement.

The transaction service in Object Services is also based on SAP LUWs and not on a new transaction concept. However, it does the bundling before the developer, so that the developer does not have to explicitly create and register procedures that change the database. Internally, the Transaction Service still works with the classic update function modules.

This concept permits interaction between classic and object-oriented transactions, controlled using a [transaction mode](javascript:call_link\('abenos_transaction_mode.htm'\)) that can be set for a given program.