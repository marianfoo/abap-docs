---
title: "Transaction Service and Updates"
description: |
  ABAP objects and the Object Services are part of a hybrid world in which object-oriented and classic applications as well as mixed forms containing both programming styles can exist side by side. The interaction between classic and object-oriented update techniques is discussed below. Object-Oriente
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_transaction_luw.htm"
abapFile: "abenos_transaction_luw.htm"
keywords: ["update", "do", "if", "method", "class", "data", "abenos", "transaction", "luw"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services.htm) →  [Transaction Service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_transact.htm) → 

Transaction Service and Updates

ABAP objects and the Object Services are part of a hybrid world in which object-oriented and classic applications as well as mixed forms containing both programming styles can exist side by side. The interaction between classic and object-oriented update techniques is discussed below.

Object-Oriented Transactions in Classic Applications

In a classic application, statements that change the database normally are programmed in update modules. These updates are registered when programs are executed and the updates is triggered using the statement COMMIT WORK.

If the services of the Object Services are accessed in a classic application, that is, if a persistent object is used or an object-oriented transaction started, an implicit top level transaction is automatically created and started in compatibility mode the first time the services are accessed. All explicit accesses to the Persistence and Transaction Service are embedded in this implicit top level transaction.

If COMMIT WORK is executed in a classic application, the top level transaction is also ended and the Transaction Service starts updating all the persistent objects that were changed up to this time. The persistent objects are updated as in classic applications. Similarly, all changes to persistent objects within the top level transaction are canceled by a classic ROLLBACK WORK.

In particular, the changes that were confirmed in object-oriented subtransactions with method END are made, whereas changes that were canceled with UNDO are not affected. It can therefore be advisable to work with object-oriented (sub) transactions also in classic applications to have access to an easy-to-use COMMIT/ROLLBACK mechanism.

Classic Updates in Object-Oriented Transactions

Object-oriented transaction mode is set for object-oriented transactions. The top level transaction is the first transaction to be started explicitly.

Within a program in object-oriented mode, classic components that use and register classic update modules might be called. This is possible as long as none of the classic components execute the statement COMMIT WORK, since this would produce a runtime error in an object-oriented transaction.

An update is triggered by the implicit COMMIT WORK at the end of the object-oriented top level transaction. If another object-oriented transaction is started in a called classic component, it is automatically the subtransaction of the top level transaction and is also updated when it ends, before the persistent objects.