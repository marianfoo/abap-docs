---
title: "Components of the Transaction Service"
description: |
  An object-oriented transaction is represented by a transaction object that is managed by a transaction manger (which is also an object). The transaction manager represents the transaction service with respect to the ABAP program. To create a transaction manager, the static method GET_TRANSACTION_M
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_transaction_comps.htm"
abapFile: "abenos_transaction_comps.htm"
keywords: ["update", "do", "if", "method", "class", "data", "abenos", "transaction", "comps"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm) →  [transaction service](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services_transact.htm) → 

Components of the Transaction Service

An object-oriented transaction is represented by a transaction object that is managed by a transaction manger (which is also an object). The transaction manager represents the transaction service with respect to the ABAP program.

To create a transaction manager, the static method GET\_TRANSACTION\_MANAGER of the general system service class CL\_OS\_SYSTEM is required. The [transaction mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_transaction_mode.htm) is set with the method INIT\_AND\_SET\_MODES of this class.

An ABAP program does not work with the transaction manager and the transaction by using class reference variables. Instead the program accesses the transaction manager and the transaction using the interfaces IF\_OS\_TRANSACTION\_MANAGER and IF\_OS\_TRANSACTION.

-   [Relevant Methods of the System Service](#abenos-transaction-comps-1--------methods-of-the-transaction-manager---@ITOC@@ABENOS_TRANSACTION_COMPS_2)

-   [Methods of a Transaction](#abenos-transaction-comps-3--------events-of-a-transaction---@ITOC@@ABENOS_TRANSACTION_COMPS_4)

Relevant Methods of the System Service

Most of the components of the system service class CL\_OS\_SYSTEM are used internally by the Object Services. Two methods must be used in an application program to be able to work explicitly with object-oriented transactions.

-   INIT\_AND\_SET\_MODES

This static method initializes the entire Object Services and creates the necessary service objects. INIT\_AND\_SET\_MODES is executed no more than once for each ABAP program. Every additional call causes an exception.

INIT\_AND\_SET\_MODES is used together with the transaction service to set the [transaction mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenos_transaction_mode.htm) of the top level transaction. The constant OSCON\_TRUE or OSCON\_FALSE of type group OSCON must be passed to input parameter I\_EXTERNAL\_COMMIT. OSCON\_TRUE sets the compatibility mode for which COMMIT WORK must be defined explicitly in the program, whereas OSCON\_FALSE sets object-oriented transaction mode, for which an explicit COMMIT WORK is not allowed. Once the compatibility mode has been set, a top level transaction is implicitly created and started. All other transactions of the program are nested in this transaction.

Update mode is controlled with the other input parameter I\_UPDATE\_MODE of type OS\_DMODE. Possible input parameters are: OSCON\_DMODE\_DEFAULT or OSCON\_DMODE\_UPDATE\_TASK for asynchronous updates, OSCON\_DMODE\_UPDATE\_TASK\_SYNC for synchronous updates, OSCON\_DMODE\_LOCAL for local updates, and OSCON\_DMODE\_DIRECT for direct saves when using COMMIT WORK. The constants OSCON\_DMODE\_LOCAL andOSCON\_DMODE\_UPDATE\_TASK\_SYNC cannot be specified in compatibility mode. If local or direct updates are chosen, the statement SET UPDATE TASK LOCAL is executed implicitly when the transaction is started.

INIT\_AND\_SET\_MODES is executed implicitly the first time an Object Services class is accessed with the default compatibility mode and asynchronous updates. If INIT\_AND\_SET\_MODES is to be executed explicitly, this must be done before an implicit call for it to take effect (the implicit call does not take place).

-   GET\_TRANSACTION\_MANAGER

This static method returns the return value RESULT (of type IF\_OS\_QUERY\_MANAGER) that contains a reference to the transaction manager. The transaction manager is created when Object Services are initialized.

Methods of the Transaction Manager

The transaction manager manages the object-oriented transactions of the ABAP program and is executed using the interface IF\_OS\_TRANSACTION\_MANAGER.

-   IF\_OS\_TRANSACTION\_MANAGER~CREATE\_TRANSACTION

Creates a transaction and returns a reference to the transaction in return value RESULT of type IF\_OS\_TRANSACTION.

-   IF\_OS\_TRANSACTION\_MANAGER~GET\_CURRENT\_TRANSACTION

Returns a reference to the current transaction in return value RESULT of type IF\_OS\_TRANSACTION.

-   IF\_OS\_TRANSACTION\_MANAGER~GET\_TOP\_TRANSACTION

Returns a reference to the top level transaction in return value RESULT of type IF\_OS\_TRANSACTION.

Methods of a Transaction

Transactions are controlled using interface IF\_OS\_TRANSACTION.

-   IF\_OS\_TRANSACTION~START

Starts the transaction. If a top level transaction does not yet exist, it becomes the top level transaction. Otherwise it becomes a subtransaction. A transaction must have status OSCON\_TSTATUS\_NEW so that it can be started. Each transaction thus can only be started once per program. A transaction cannot be started again using START if it was ended with END, since this would invalidate the transaction object in the program. A new transaction must be created, but the same reference variable can be used again.

The COMMIT WORK statement is not allowed between the START and END methods.

-   IF\_OS\_TRANSACTION~END

Ends the transaction. Changes to persistent objects are stored until the COMMIT WORK or ROLLBACK WORK of the top level transaction. If the transaction is a top level transaction, COMMIT WORK is implicitly triggered upon encountering an END. This starts the updater and invalidates the persistent objects. If a persistent object is accessed again, it is loaded from the database.

-   IF\_OS\_TRANSACTION~UNDO

Ends the transaction. The changes made to persistent objects in the transaction are canceled and the objects are returned to the state they had prior to the transaction. If the transaction is an object-oriented top level transaction, ROLLBACK WORK is triggered implicitly when an UNDO is performed.

-   IF\_OS\_TRANSACTION~END\_AND\_CHAIN

Ends the transaction and immediately starts a new one. If the transaction is an object-oriented top level transaction, changed persistent objects are written to the database but are not invalidated. Returns a reference to the current transaction in return value RESULT of type IF\_OS\_TRANSACTION.

-   IF\_OS\_TRANSACTION~UNDO\_AND\_CHAIN

Cancels the changes made to persistent objects in the transaction and starts a new transaction. Returns a reference to the current transaction in return value RESULT of type IF\_OS\_TRANSACTION.

-   IF\_OS\_TRANSACTION~REGISTER\_CHECK\_AGENT

Registers an object as a checking agent, which is called by the transaction for checking purposes before the transaction ends. An interface reference to this type of object is passed to the input parameter I\_CHECK\_AGENT of type IF\_OS\_CHECK.

-   IF\_OS\_TRANSACTION~GET\_STATUS

Returns the transaction status in the RESULT return value of type OS\_STATUS. The following values (constants of type group OSCON) are possible:

-   OSCON\_TSTATUS\_NEW
    The transaction has not been started. Transactions in this status can only be started using START.

-   OSCON\_TSTATUS\_RUNNING
    The transaction has been started and is active.

-   OSCON\_TSTATUS\_END\_REQ
    The transaction ended with IF\_OS\_TRANSACTION~END and is just starting a checking agent or is waiting for an event handler.

-   OSCON\_TSTATUS\_FIN\_SUCCESS
    The transaction was success. It ended with IF\_OS\_TRANSACTION~END.

-   OSCON\_TSTATUS\_FIN\_UNDO
    The transaction ended with IF\_OS\_TRANSACTION~UNDO and the persistent objects were returned to their initial state.

-   OSCON\_TSTATUS\_FIN\_ABORT
    The transaction was ended with IF\_OS\_TRANSACTION~UNDO but the persistent objects were not returned to their initial state.

-   IF\_OS\_TRANSACTION~SET\_MODE\_UNDO\_RELEVANT

Can be used to deactivate the UNDO mechanism before a transaction is started, for example, to improve performance. This is done by transferring the value OSCON\_FALSE to the optional input parameter I\_UNDO\_RELEVANT of the type OS\_BOOLEAN. The default value is OSCON\_TRUE. This removes the need to save the initial status of persistent objects before a change. In compatibility mode, the UNDO mechanism is deactivated in the top level transaction. Otherwise the UNDO mechanism is active, unless it was explicitly deactivated using this method. If IF\_OS\_TRANSACTION~UNDO is called in a transaction with a deactivated UNDO mechanism, the status of the transaction is OSCON\_TSTATUS\_FIN\_ABORT.

-   IF\_OS\_TRANSACTION~SET\_MODE\_UPDATE

Can be used exactly once for the top level transaction before persistent objects are accessed in order to set the update mode. This is only necessary in compatibility mode, where the update mode is normally set implicitly the first time a persistent object is accessed using asynchronous updates. This method is not necessary for object-oriented transactions. This is because the update mode of the top level transaction is set explicitly with CL\_OS\_SYSTEM=>INIT\_AND\_SET\_MODES or when an OO transaction is created in the ABAP Workbench.

The following values can be passed to the input parameter I\_UPDATE\_MODE of type OS\_DMODE: OSCON\_DMODE\_DEFAULT or OSCON\_DMODE\_UPDATE\_TASK for asynchronous updates, OSCON\_DMODE\_UPDATE\_TASK\_SYNC for synchronous updates, OSCON\_DMODE\_LOCAL for local updates, and OSCON\_DMODE\_DIRECT for direct saves. OSCON\_DMODE\_LOCAL and OSCON\_DMODE\_UPDATE\_TASK\_SYNC are allowed only in the object-oriented transaction mode.

If local or direct updates are chosen, the statement SET UPDATE TASK LOCAL is executed implicitly when the transaction is started.

-   IF\_OS\_TRANSACTION~GET\_MODES

Provides the attributes of the current transaction in the output parameters: E\_UNDO\_RELEVANT of type OS\_BOOLEAN, E\_CHAINED of type OS\_BOOLEAN, E\_UPDATE\_MODE\_TYPE of type OS\_DMODE and E\_EXTERNAL\_COMMIT of type OS\_BOOLEAN.

Events of a Transaction

-   IF\_OS\_TRANSACTION~SAVE\_REQUESTED

The event is triggered when a top level transaction is ended with END before the class agents of the changed persistent objects record the changes. For class agents that implicitly use update modules, the event is triggered before the update modules are registered using CALL FUNCTION IN UPDATE TASK. The event defines the time when the changes to persistent objects should be recorded for class agents with self-programmed change methods.

-   IF\_OS\_TRANSACTION~SAVE\_PREPARED

The event is triggered when a top level transaction ends with END after the class agents of the changed persistent objects have recorded the changes. For class agents that implicitly use update modules, the event is triggered after the update modules are registered using CALL FUNCTION IN UPDATE TASK. The event defines the time when the changes to database tables in the objects should be recorded for class agents with self-programmed change methods.

-   IF\_OS\_TRANSACTION~FINISHED

The event is triggered at the actual end of a transaction, regardless of whether it was ended with END or UNDO. An output parameter of type OS\_STATUS indicates how the transaction was ended.

This translation does not reflect the current version of the documentation.