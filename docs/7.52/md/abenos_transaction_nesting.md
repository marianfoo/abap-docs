  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Object Services](javascript:call_link\('abenabap_object_services.htm'\)) →  [transaction service](javascript:call_link\('abenabap_object_services_transact.htm'\)) → 

Nesting and Chaining Transactions

Role of the Top Level Transaction

The top level transaction is the transaction of the uppermost level. All the transactions started during the top level transaction are subtransactions and do not lead to a COMMIT WORK when they end. The transaction mode determines how the top level transaction is created.

-   Compatibility Mode

The top level transaction is usually created implicitly when the Object Services are initialized. All explicit transactions of the program are subtransactions of this implicit top level transaction.

-   Object-Oriented Transaction Mode

The top level transaction is created explicitly when the first transaction in the program is started. All the other transactions that are started before the top level transaction ends are subtransactions of the explicit top level transaction.

Subtransactions

A subtransaction can be created by starting a new transaction before another transaction has come to an end. Subtransactions must be ended within the transaction in which they are embedded. A COMMIT WORK is never triggered when a subtransaction ends. Changes to the persistent objects of a subtransaction are only made when the top level transaction has ended. This occurs explicitly in a COMMIT WORK or implicitly in an END, depending on the transaction mode. The transaction mode can also be queried using IF\_OS\_TRANSACTION~GET\_MODES for subtransactions, but the transaction mode always indicates the global setting of the Object Services for the current program.

Sequential Processing

Top Level Transactions

A program can only have one top level transaction at a time. A new transaction can be started as the top level transaction when the old top level transaction has come to an end.

-   Compatibility mode

In compatibility mode, a new top level transaction is implicitly created and started when the old top level transaction has ended with COMMIT WORK. The new top level transaction manages the changes made to persistent objects.

-   Object-Oriented Mode

When the top level transaction has ended with END, a COMMIT WORK is triggered. The transaction object is invalidated in the program and cannot be started again. The next transaction that is started with IF\_OS\_TRANSACTION~START becomes the new top level transaction. A program is without a transaction between the end of the last and the start of the next top level transaction. Changes made to persistent objects before the new transaction was started are ignored.

Within a transaction, further subtransactions can be started after the end of another subtransaction. Changes made to persistent objects between subtransactions belong to the transaction at the next higher level.

Concatenation of Top Level Transactions

If transactions are executed one after the other, that is one top level transaction is ended and then a new one started, the relevant persistent objects are invalidated. When an object of this type is accessed in the next transaction, it is loaded again from the database. This time-consuming process can be avoided by concatenating top level transactions with IF\_OS\_TRANSACTION~END\_AND\_CHAIN or IF\_OS\_TRANSACTION~UNDO\_AND\_CHAIN. In this case, the persistent objects are not invalidated. However, a new transaction object is created and its reference is returned as the return value.

These methods can be used for top level transactions in object-oriented mode, but not for the top level transaction in compatibility mode. The methods do not need to be executed for subtransactions since the persistent objects are retained until the change has been made, and are not invalidated.

Example

After method END\_AND\_CHAIN is called, reference variable t refers to a new transaction object.

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