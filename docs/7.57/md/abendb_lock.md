  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_consistency.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Database Locks, ABENDB_LOCK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

Database Locks

Simultaneous access by multiple transactions to the same dataset requires database locks to manage and synchronize access in each database. The tasks of this mechanism are to:

-   protect data objects currently being changed or read by a transaction from being changed by other transactions at the same time
-   protect a transaction from reading data objects that have not yet been committed by another transaction

The following sections are a short discussion of the properties of database locks:

-   [Setting Locks](#@@ITOC@@ABENDB_LOCK_1)
-   [Locked Objects](#@@ITOC@@ABENDB_LOCK_2)
-   [Lock Mode](#@@ITOC@@ABENDB_LOCK_3)
-   [Lock Duration](#@@ITOC@@ABENDB_LOCK_4)
-   [Monitoring Locks](#@@ITOC@@ABENDB_LOCK_5)

Setting Locks   

Database systems do not usually provide commands for explicitly setting locks. Database locks are set implicitly each time data on the database is accessed. In ABAP, databases are accessed in the following ways:

-   Using one of the [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm), [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_dbtab.htm), or [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab.htm).
-   Using a [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") statement.
-   Calling [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry").
-   Using other statements that access the database, such as [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) and [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) FROM and TO DATABASE.

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
    

Exclusive locks are set by the ABAP SQL statements [SELECT SINGLE FOR UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_single.htm), [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_dbtab.htm), and [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab.htm), the corresponding Native SQL statements or platform-dependent statements in [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry"), plus [EXPORT TO DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm).

The current [isolation level](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_isolation.htm) specifies whether the SQL statement SELECT sets a shared lock.

-   The following settings are possible in all databases except the SAP HANA database and Oracle databases:
    -   [Uncommitted reads](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_isolation.htm) (the default setting) do not attempt to set shared locks. Data is also read that is still protected by an exclusive lock and not yet committed using a [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry").
    -   [Committed reads](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_isolation.htm) (which can be configured using the function module DB\_SET\_ISOLATION\_LEVEL) set a shared lock during the read and then remove it again. This is possible only when exclusive locks do not exist, which can entail wait times.
-   The SAP HANA database and Oracle databases do not set shared locks, but also only read data committed by a [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry").

If a transaction cannot lock an object because it is already locked by another transaction, it waits until the other transaction releases this lock. This can produce a deadlock. A [deadlock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeadlock_glosry.htm "Glossary Entry") occurs, for example, when two transactions are waiting for a lock held by the other.

Example

A booking needs to be made in a flight reservation system for Lufthansa flight 0400 on May 16, 1996. This is possible only if there are enough free seats. To prevent two bookings from being made at the same time and avoid overbooking, the entry in the DDIC database table SFLIGHT for this flight must be locked to prevent it from being changed by other transactions. This ensures that the query to determine the number of free seats in the SEATSOCC field can be carried out, the flight can be booked, and the SEATSOCC field can be updated by other transactions. The following program excerpt shows a solution for this problem:

DATA: sflight\_wa TYPE sflight, sbook\_wa type sbook.
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

The table row selected by SELECT SINGLE FOR UPDATE and inserted by INSERT is locked until the end of the [database LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This prevents the flight from being overbooked and inconsistencies from occurring between tables SFLIGHT and SBOOK in the event of a database rollback after an error.

Lock Duration   

Database systems do not usually provide statements for explicitly releasing locks. All database locks are released no later than the next [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Shared locks usually have an even shorter lifetime. Sometimes, this causes problems for transactions that involve multiple dialog steps:

After the user has selected a flight in the above example, further dialog steps are usually performed to enter additional data for the reservation. Here, the flight reservation is added in a different database LUW than the original selection of the flight. Database locking does not prevent another transaction from booking this flight in the meantime, which can mean that the scheduled booking may have to be canceled after all.

From the point of view of the user, this solution is very inconvenient. To avoid this scenario, a flight reservation system must use the [SAP locking mechanism](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_lock_glosry.htm "Glossary Entry") to lock the flight for the entire duration of the transaction.

Monitoring Locks   

The [DBA Cockpit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendba_cockpit_glosry.htm "Glossary Entry") allows monitoring database locks.