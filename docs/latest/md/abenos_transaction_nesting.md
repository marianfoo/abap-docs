  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services.htm) →  [OS - Transaction Service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_object_services_transact.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OS%20-%20Nesting%20and%20Chaining%20Transactions%2C%20ABENOS_TRANSACTION_NESTING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

OS - Nesting and Chaining Transactions

Role of the Top Level Transaction   

The top level transaction is the transaction of the uppermost level. All transactions started during the top level transaction are subtransactions and do not lead to a COMMIT WORK when they end. The transaction mode determines how the top level transaction is created.

-   Compatibility Mode
    
    The top level transaction is usually created implicitly when the Object Services are initialized. All explicit transactions of the program are subtransactions of this implicit top level transaction.
    
-   Object-Oriented Transaction Mode
    
    The top level transaction is created explicitly when the first transaction in the program is started. All the other transactions that are started before the top level transaction ends are subtransactions of the explicit top level transaction.
    

Subtransactions   

A subtransaction can be created by starting a new transaction before another transaction has ended. Subtransactions must be ended within the transaction in which they are embedded. A COMMIT WORK is never triggered when a subtransaction ends. Changes to the persistent objects of a subtransaction are only updated when the top level transaction has ended. This occurs explicitly in a COMMIT WORK or implicitly in an END, depending on the transaction mode. The transaction mode can also be queried using IF\_OS\_TRANSACTION~GET\_MODES for subtransactions, but the transaction mode always indicates the global setting of the Object Services for the current program.

Sequential Processing   

Top Level Transactions   

A program can only have one top level transaction at a time. A new transaction can be started as the top level transaction when the old top level transaction has ended.

-   Compatibility mode
    
    In compatibility mode, a new top level transaction is implicitly created and started when the old top level transaction has ended with COMMIT WORK. The new top level transaction manages the changes made to persistent objects.
    
-   Object-Oriented Mode
    
    When the top level transaction has ended with END, a COMMIT WORK is triggered. The transaction object is invalidated in the program and cannot be started again. The next transaction that is started with IF\_OS\_TRANSACTION~START becomes the new top level transaction. A program is without a transaction between the end of the last and the start of the next top level transaction. Changes made to persistent objects before the new transaction was started are ignored.
    

Within a transaction, further subtransactions can be started after the end of another subtransaction. Changes to persistent objects between subtransactions belong to the transaction at the next higher level.

Chaining of Top Level Transactions   

If transactions are executed consecutively, that is, one top level transaction is ended and then a new one started, the affected persistent objects are invalidated. When an object of this type is accessed in the next transaction, it is loaded again from the database. This time-consuming process can be avoided by chaining top level transactions with IF\_OS\_TRANSACTION~END\_AND\_CHAIN or IF\_OS\_TRANSACTION~UNDO\_AND\_CHAIN. In this case, the persistent objects are not invalidated. However, a new transaction object is created, and its reference is returned as the return value.

These methods can be used for top level transactions in object-oriented mode, but not for the top level transaction in compatibility mode. The methods do not need to be executed for subtransactions since the persistent objects are persisted until the change has been made, but are not invalidated.

Example

After the method END\_AND\_CHAIN of IF\_OS\_TRANSACTION is called, the reference variable t refers to a new transaction object.

DATA tm TYPE REF TO if\_os\_transaction\_manager.
DATA t  TYPE REF TO if\_os\_transaction.
...
tm = cl\_os\_system=>get\_transaction\_manager( ).
t = tm->create\_transaction( ). "Create first Transaction
t->start( ).                   "Start first Transaction
...
t = t->end\_and\_chain( ).       "End first Transaction,
                               "create and start second one
...
t->end( ).                     "End second Transaction