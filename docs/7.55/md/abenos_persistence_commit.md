---
title: "OS - Saving Persistent Objects"
description: |
  The ABAP statement COMMIT WORK must be executed to apply any changes to the instances of persistent classes to the actual persistent objects in the database. If an object-oriented transaction from the transaction service is not used explicitly, the statement COMMIT WORK must be specified explicitly.
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenos_persistence_commit.htm"
abapFile: "abenos_persistence_commit.htm"
keywords: ["update", "do", "if", "method", "class", "data", "abenos", "persistence", "commit"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_object_services.htm) →  [OS - Persistency Service](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_object_services_persist.htm) → 

OS - Saving Persistent Objects

The ABAP statement COMMIT WORK must be executed to apply any changes to the instances of persistent classes to the actual persistent objects in the database. If an object-oriented transaction from the transaction service is not used explicitly, the statement COMMIT WORK must be specified explicitly. If not, it is encapsulated in the transaction service. Specifying the statement COMMIT WORK explicitly means, in the transaction service, that the top level transaction runs in compatibility mode.

The classic statement COMMIT WORK has additional functions when used in conjunction with object services. Before the statement closes the SAP LUW and triggers an update, it calls methods of the persistence service internally. These methods bundle the changes made to managed objects of the persistence service and pass them to a special update function module using CALL FUNCTION ... IN UPDATE TASK. This means that the persistence service works with traditional update methods. The update module is usually registered after any update modules that have already been registered. The update is then triggered and the update task executes the update module in the order in which they were registered.

After the statement COMMIT WORK, the attributes of a persistent object in the ABAP program are initial (the method IF\_OS\_STATE~INVALIDATE was called).

If the changes are to be made to managed objects directly rather than using the update module, the update mode of the implicitly used transaction service must be changed. This is done by executing the following statements before the statement COMMIT WORK:

DATA TM type ref to IF\_OS\_TRANSACTION\_MANAGER.
DATA T type ref to IF\_OS\_TRANSACTION.
...
TM = CL\_OS\_SYSTEM=>GET\_TRANSACTION\_MANAGER( ).
T  = TM->GET\_CURRENT\_TRANSACTION( ).
T->SET\_MODE\_UPDATE( OSCON\_DMODE\_DIRECT ).
COMMIT WORK.

Persistent objects can be also used within the update modules used as part of updates. The update task changes the persistent objects in update modules as the last step after processing all the registered update modules in the database.