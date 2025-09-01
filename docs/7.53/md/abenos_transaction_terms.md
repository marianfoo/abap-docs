  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services.htm) →  [Transaction Service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_transact.htm) → 

Transaction Service Overview

The classic SAP transaction concept is based on SAP LUWs in which changes to the database are bundled into a single database LUW. The bundling techniques used here include programming database changes in procedures and registering them in a database LUW for later execution instead of performing them immediately. Possible procedures include subroutines (registered using PERFORM ON COMMIT) and update function modules (registered using CALL FUNCTION IN UPDATE TASK). In both cases, the registered procedures are executed using the statement COMMIT WORK.

The Transaction Service of the Object Services is also based on SAP LUWs and not on a new transaction concept. However, it does the bundling before the developer, so that the developer does not have to explicitly create and register procedures that change the database. Internally, the transaction service still works with the classic update function modules.

This concept permits interaction between classic and object-oriented transactions, controlled using a [transaction mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_transaction_mode.htm) that can be set for a given program.