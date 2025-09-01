  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) → 

SAP Locks

SAP locks must be maintained for the duration of [SAP LUWs](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"). For this reason, different work processes and possibly changing [AS instances](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") must be able to handle these locks.

SAP locks are based on lock objects. These are defined in the ABAP Dictionary and enable locks to be set on one or more rows in a single DDIC database table or locks to be set on rows in multiple DDIC database tables linked using [foreign key dependencies](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry").

When a lock object is created, two lock function modules are generated whose names consist of the prefixes ENQUEUE\_ and DEQUEUE\_ and the name of the lock object.

-   [Setting SAP Locks](#@@ITOC@@ABENSAP_LOCK_1)
-   [Releasing SAP Locks](#@@ITOC@@ABENSAP_LOCK_2)

For more details, see SAP Lock Concept in the SAP Help Portal.

Setting SAP Locks

When called, lock function modules set or remove SAP locks. These function modules access a central lock table in the memory of a special work process of the current AS instance. Every [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") contains exactly one such table (administered by transaction SM12). An enqueue function module sets an SAP lock by writing a corresponding entry in the lock table. If a lock cannot be set because corresponding lock entries already exist in the lock table, the function module terminates with the exception FOREIGN\_LOCK.

The most important input parameters of an enqueue function module are:

Parameter

Meaning

MODE\_dbtab

Type of the lock for the DDIC database table dbtab of the lock object. Possible input values include "S" for a [shared lock](javascript:call_link\('abenshared_lock_glosry.htm'\) "Glossary Entry"), "E" for an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry"), "X" for an expanded exclusive lock that can be requested only once, unlike a regular exclusive lock within a program, and "O" for an optimistic lock, which behaves like a shared lock at first, but can be transformed to an exclusive lock.

KEY\_FIELDS

For all key fields of the lock object, values can be specified that define the rows to be locked. If no value is specified for a key field, all affected rows are locked.

\_SCOPE

Definition of the lock duration with respect to an SAP LUW. Possible values include "1" for handling the lock in the same program, "2" for passing the lock to the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), and "3" for handling the lock in the program and in the update.

Hint

An SAP lock is checked by trying to set a corresponding lock and handling the exception FOREIGN\_LOCK in the process.

Releasing SAP Locks

SAP locks can be released by deleting the associated entry in the lock table.

When an SAP lock is set using the function module ENQUEUE, the value passed to the input parameter \_SCOPE determines the lock duration. Depending on the formal parameter \_SCOPE, an SAP lock can be released as follows:

-   If \_SCOPE is set to 1, the lock is not linked with the current SAP LUW. The lock can be released either by calling the DEQUEUE function module if the value "1" or "3" is passed to the formal parameter \_SCOPE, or by terminating the program.
-   If \_SCOPE is set to 2, the lock is linked with the current SAP LUW. If [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) registered at least one update function module, the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) releases the lock when the SAP LUW is completed. When using COMMIT WORK, the update function releases the lock after processing the update function modules. This type of lock may persist beyond the end of a program until the update procedure has been completed.
-   If \_SCOPE is set to 3, both the update function and the program must release the lock. Releasing the lock by update corresponds to \_SCOPE having the value 2. Releasing the lock in the program corresponds to \_SCOPE having the value 1. The entire lock release is defined by who releases the lock last.

If the function module DEQUEUE is used to release an SAP lock independently of the update, the formal parameter \_SCOPE must be given a value that is greater than or equal to the value passed to the same parameter of the function module ENQUEUE.

Besides the \_SCOPE parameter, the input parameters of a DEQUEUE function module correspond to those of the ENQUEUE function module. The additional parameter \_SYNCHRON can then be used to specify whether the release of the lock should be delayed until program processing is resumed.

Executable Example

[SAP Locks, Set and Release](javascript:call_link\('abenenqueue_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SAP Locks, Set and Release](javascript:call_link\('abenenqueue_abexa.htm'\))