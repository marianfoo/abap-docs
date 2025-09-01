  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) → 

Database Locks

Simultaneous access by multiple transactions to the same dataset requires database locks to manage and synchronize access in each database. The tasks of this mechanism are to:

-   protect data objects currently being changed or read by a transaction from being changed by other transactions at the same time
-   protect a transaction from reading data objects that have not yet been committed by another transaction

The following sections are a short discussion of the properties of database locks:

-   [Setting Locks](#abendb-lock-1-------locked-objects---@ITOC@@ABENDB_LOCK_2)
-   [Lock Mode](#abendb-lock-3-------lock-duration---@ITOC@@ABENDB_LOCK_4)

Setting Locks

Database systems do not usually provide commands for explicitly setting locks. Database locks are set implicitly each time data on the database is accessed. In ABAP, databases are accessed in the following ways:

-   Using one of the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements [SELECT](javascript:call_link\('abapselect.htm'\)), [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), or [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)).
-   Using a [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement.
-   Calling [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry").
-   Using other statements that access the database, such as [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) and [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) FROM and TO DATABASE.

Locked Objects

Database systems set physical locks: All rows affected by a database call are locked. In the case of SELECT, these are the selected rows, in the case of UPDATE, DELETE, INSERT, and MODIFY, these are rows to be changed, deleted, or inserted.

Take the following call, for example:

SELECT SINGLE FOR UPDATE \* FROM sflight
  WHERE
    carrid   = 'LH'       AND
    connid   = '0400'     AND
    fldate   = '19960516'
  INTO ... .

It locks the entry in the table SFLIGHT for Lufthansa flight 0400 on May 16, 1996.

It is not always the table row that is locked. Tables, data pages, and index pages can also be locked, for example. The units locked depend on the database system used and the respective access.

Lock Mode

In principle, one type of lock is sufficient to control competing data access. However, to allow a larger number of transactions to run in parallel, database systems use a range of lock types. These can vary from system to system, but the following two examples outline sufficiently how locks work:

-   Shared lock
    
    Shared locks allow the system to set other shared locks simultaneously, but prevent other transactions from setting exclusive locks for the locked objects.
    
-   Exclusive lock
    
    Exclusive locks do not allow other transactions to set any locks for the locked objects.
    

Exclusive locks are set by the ABAP SQL statements [SELECT SINGLE FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)), [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), the corresponding Native SQL statements or platform-dependent statements in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"), plus [EXPORT TO DATABASE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)).

The current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) specifies whether the SQL statement SELECT sets a shared lock.

-   The following settings are possible in all databases except the SAP HANA database and Oracle databases:
    -   [Uncommitted reads](javascript:call_link\('abendb_isolation.htm'\)) (the default setting) do not attempt to set shared locks. Data is also read that is still protected by an exclusive lock and not yet committed using a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry").
    -   [Committed reads](javascript:call_link\('abendb_isolation.htm'\)) (which can be configured using the function module DB\_SET\_ISOLATION\_LEVEL) set a shared lock during the read and then remove it again. This is possible only when exclusive locks do not exist, which can entail wait times.
-   The SAP HANA database and Oracle databases do not set shared locks, but also only read data committed by a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry").

If a transaction cannot lock an object because it is already locked by another transaction, it waits until the other transaction releases this lock. This can produce a deadlock. A [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry") occurs, for example, when two transactions are waiting for a lock held by the other.

Example

A booking needs to be made in a flight reservation system for Lufthansa flight 0400 on May 16, 1996. This is possible only if there are enough free seats. To prevent two bookings from being made at the same time and avoid overbooking, the entry in the DDIC database table SFLIGHT for this flight must be locked to prevent it from being changed by other transactions. This ensures that the query to determine the number of free seats in the SEATSOCC field can be carried out, the flight can be booked, and the SEATSOCC field can be updated by other transactions. The following program excerpt shows a solution for this problem:

DATA sflight\_wa TYPE sflight, sbook\_wa type sbook.
SELECT SINGLE FOR UPDATE \*
  FROM sflight
  WHERE
    carrid   = 'LH'       AND
    connid   = '0400'     AND
    fldate   = '19960516'
  INTO @sflight\_wa.
IF sy-subrc <> 0.
  MESSAGE e...
ENDIF.
IF sflight\_wa-seatsocc < sflight\_wa-seatsmax.
  sbook\_wa-carrid = 'LH'.
  sbook\_wa-connid = '0400'.
  sbook\_wa-fldate = '19960516'.
  ...
  INSERT sbook FROM sbook\_wa.
  IF sy-subrc <> 0.
    MESSAGE e...
  ENDIF.
  UPDATE sflight
    SET
      seatsocc = seatsocc + 1
    WHERE
      carrid   = 'LH'       AND
      connid   = '0400'     AND
      fldate   = '19960516'.
ELSE.
  MESSAGE e...
ENDIF.
COMMIT WORK.

The table row selected by SELECT SINGLE FOR UPDATE and inserted by INSERT is locked until the end of the [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). This prevents the flight from being overbooked and inconsistencies from occurring between tables SFLIGHT and SBOOK in the event of a database rollback after an error.

Lock Duration

Database systems do not usually provide statements for explicitly releasing locks. All database locks are released no later than the next [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). Shared locks usually have an even shorter lifetime. Sometimes, this causes problems for transactions that involve multiple dialog steps:

After the user has selected a flight in the above example, further dialog steps are usually performed to enter additional data for the reservation. Here, the flight reservation is added in a different database LUW than the original selection of the flight. Database locking does not prevent another transaction from booking this flight in the meantime, which can mean that the scheduled booking may have to be canceled after all.

From the point of view of the user, this solution is very inconvenient. To avoid this scenario, a flight reservation system must use the [SAP locking mechanism](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") to lock the flight for the entire duration of the transaction.