---
title: "OS - Transaction Mode"
description: |
  The transaction service in Object Services is integrated into classic transaction processing or is itself part of the SAP LUWs, which means a program must be able to determine whether it is working with classic or object-oriented transactions. This requires the term transaction mode to be introduced
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenos_transaction_mode.htm"
abapFile: "abenos_transaction_mode.htm"
keywords: ["select", "update", "delete", "do", "while", "if", "try", "catch", "method", "class", "data", "abenos", "transaction", "mode"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Transaction Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_transact.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Transaction%20Mode%2C%20ABENOS_TRANSACTION_MODE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OS - Transaction Mode

The transaction service in Object Services is integrated into classic transaction processing or is itself part of the SAP LUWs, which means a program must be able to determine whether it is working with classic or object-oriented transactions. This requires the term transaction mode to be introduced, which can be specified once for each program.

Each program working with persistent objects has a transaction mode that is defined either explicitly or implicitly when the Object Services are initialized. Each program also has a top level transaction (a transaction object whose reference can be obtained using the method IF\_OS\_TRANSACTION\_MANAGER~GET\_TOP\_TRANSACTION) while it is working with persistent objects. The top level transaction is responsible for updating the persistent objects. The transaction mode of the program is also the transaction mode of the top level transaction and can be queried using the method IF\_OS\_TRANSACTION~GET\_MODES in the parameter E\_EXTERNAL\_COMMIT.

There are two transaction modes:

-   Compatibility mode
    
    Compatibility mode (E\_EXTERNAL\_COMMIT is OSCON\_TRUE) makes it possible to use persistent objects within classic SAP LUWs. The statement COMMIT WORK must be defined explicitly in the program to commit changes. When executed, implicit methods of the persistence service are called implicitly to commit the changes made to persistent objects.
    
    When using the persistence service in compatibility mode, the system always implicitly starts one update process, which also deletes any locks in the update task.
    
-   Object-oriented transaction mode
    
    The object-oriented transaction mode (E\_EXTERNAL\_COMMIT is OSCON\_FALSE) is used to write new fully object-oriented applications without having to worry about the statement COMMIT WORK. In object-oriented transaction mode, COMMIT WORK is triggered when the method END is called for a top level transaction. The statement COMMIT WORK is not allowed within object-oriented transactions.
    

The transaction mode can be defined, and the top level transaction created as follows:

-   If the method CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES was not executed in a program before the first access to the persistence service, the service starts it with the default values that set the transaction mode to compatibility mode and the update mode to asynchronous. A top level transaction is implicitly created and started at the same time to handle the persistent objects of the program. All other transactions that are started in the program with IF\_OS\_TRANSACTION~START are subtransactions of the top level transaction that is running in compatibility mode. This makes it possible to work in classic ABAP programs with persistent objects without having to explicitly worry about the transaction mode. An example can be found under Creating a Persistent Object.
-   If the method CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES is executed before the persistence service is accessed in a program for the first time, the transaction mode can be set explicitly to compatibility mode or object-oriented mode by passing the values OSCON\_TRUE or OSCON\_FALSE to the parameter I\_EXTERNAL\_COMMIT. Since the static constructors of the persistence service are usually executed at the beginning of a processing block, the event LOAD-OF-PROGRAM or the constructor of an application class can be used, for example, to call CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES. A program that was not started as an [object transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_transaction_glosry.htm "Glossary Entry") can thus be executed as an object-oriented transaction. In object-oriented transaction mode, the first transaction that is started in the program with IF\_OS\_TRANSACTION~START is a top level transaction, whereas in compatibility mode, the top level transaction is always created implicitly.
-   If the OO transaction model field is selected when an object transaction is created in the ABAP Workbench, the transaction mode of the corresponding program is automatically set to object-oriented (CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES is executed implicitly with the relevant parameters) when the transaction is called. The first transaction that is started in the program with IF\_OS\_TRANSACTION~START is a top level transaction.

Update Modes   

At the end of a top level transaction (using COMMIT WORK in compatibility mode or the method IF\_OS\_TRANSACTION~END in object-oriented mode), the transaction service updates the changes to persistent objects in the database. Internal update function modules are called implicitly at this time.

The way that the update function modules are executed is specified by the initialization of the Object Services using the method CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES or after starting the top level transaction (one-off specification) using the method IF\_OS\_TRANSACTION~SET\_MODE\_UPDATE. Since CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES can only be called once for each program, IF\_OS\_TRANSACTION~SET\_MODE\_UPDATE makes it possible to change an update mode that was set implicitly.

The input parameter I\_UPDATE\_MODE with the type OS\_DMODE can be used for both methods to set the update mode. Possible values are:

-   OSCON\_DMODE\_DEFAULT, OSCON\_DMODE\_UPDATE\_TASK for asynchronous updates
-   OSCON\_DMODE\_UPDATE\_TASK\_SYNC for synchronous updates
-   OSCON\_DMODE\_LOCAL for local updates
-   OSCON\_DMODE\_DIRECT for saving directly

OSCON\_DMODE\_LOCAL and OSCON\_DMODE\_UPDATE\_TASK\_SYNC cannot be specified in compatibility mode, since there they can be set by the ABAP statements COMMIT WORK AND WAIT and SET UPDATE TASK LOCAL.

When an object-oriented transaction is created in the ABAP Workbench, the initial update mode of the top level transaction is defined through selection of the relevant radio button.

Example

The following example assumes that the program is running in object-oriented transaction mode. This requires either the transaction to be flagged as an object transaction in transaction maintenance, for which the OO transaction model is marked, or the method INIT\_AND\_SET\_MODES to be called before a persistent object is accessed. The parameter I\_EXTERNAL\_COMMIT is set to OSCON\_FALSE. Only then does the method END trigger an update. If the above does not apply, the program is in compatibility mode, where the statement COMMIT WORK must be specified explicitly after a transaction ends.

data TM type ref to IF\_OS\_TRANSACTION\_MANAGER.
data T  type ref to IF\_OS\_TRANSACTION.
...
TM = CL\_OS\_SYSTEM=>GET\_TRANSACTION\_MANAGER( ).
T  = TM->CREATE\_TRANSACTION( ).
...
TRY.
    T->START( ).
      ... "Change persistent Objects
    T->END( ).
  CATCH CX\_OS\_ERROR.
    ...
ENDTRY.