---
title: "Database Locks"
description: |
  Simultaneous access by multiple transactions to the same dataset requires database locks to manage and synchronize access in each database. The tasks of this mechanism are to: -   protect data objects currently being changed or read by a transaction from being changed by other transactions at the sa
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_lock.htm"
abapFile: "abendb_lock.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "data", "types", "abendb", "lock"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Locks%2C%20ABENDB_LOCK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Locks

Simultaneous access by multiple transactions to the same dataset requires database locks to manage and synchronize access in each database. The tasks of this mechanism are to:

-   protect data objects currently being changed or read by a transaction from being changed by other transactions at the same time
-   protect a transaction from reading data objects that have not yet been committed by another transaction

The following sections are a short discussion of the properties of database locks:

-   [Setting Locks](#abendb-lock-1-------locked-objects---@ITOC@@ABENDB_LOCK_2)
-   [Lock Mode](#abendb-lock-3-------lock-duration---@ITOC@@ABENDB_LOCK_4)
-   [Monitoring Locks](#abendb-lock-5---setting-locks-----database-systems-do-not-usually-provide-commands-for-explicitly-setting-locks--database-locks-are-set-implicitly-each-time-data-on-the-database-is-accessed--in-abap--databases-are-accessed-in-the-following-ways-------using-one-of-the--abap-sql--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenabap-sql-glosry-htm--glossary-entry---statements--select--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapselect-htm----insert--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapinsert-dbtab-htm----update--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapupdate-htm----modify--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapmodify-dbtab-htm---or--delete--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapdelete-dbtab-htm-------using-a--native-sql--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abennative-sql-glosry-htm--glossary-entry---statement------calling--amdp-methods--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenamdp-method-glosry-htm--glossary-entry--------using-other-statements-that-access-the-database--such-as--import--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapimport-data-cluster-htm--and--export--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapexport-data-cluster-htm--from-and-to-database---locked-objects-----database-systems-set-physical-locks--all-rows-affected-by-a-database-call-are-locked--in-the-case-of-select--these-are-the-selected-rows--in-the-case-of-update--delete--insert--and-modify--these-are-rows-to-be-changed--deleted--or-inserted---take-the-following-call--for-example---select-single-for-update----from-sflight---where-----carrid------lh--------and-----connid------0400------and-----fldate------19960516----into--------it-locks-the-entry-in-the-table-sflight-for-lufthansa-flight-0400-on-may-16--1996---it-is-not-always-the-table-row-that-is-locked--tables--data-pages--and-index-pages-can-also-be-locked--for-example--the-units-locked-depend-on-the-database-system-used-and-the-respective-access---lock-mode-----in-principle--one-type-of-lock-is-sufficient-to-control-competing-data-access--however--to-allow-a-larger-number-of-transactions-to-run-in-parallel--database-systems-use-a-range-of-lock-types--these-can-vary-from-system-to-system--but-the-following-two-examples-outline-sufficiently-how-locks-work-------shared-lock----------shared-locks-allow-the-system-to-set-other-shared-locks-simultaneously--but-prevent-other-transactions-from-setting-exclusive-locks-for-the-locked-objects-----------exclusive-lock----------exclusive-locks-do-not-allow-other-transactions-to-set-any-locks-for-the-locked-objects--------exclusive-locks-are-set-by-the-abap-sql-statements--select-single-for-update--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapselect-single-htm----insert--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapinsert-dbtab-htm----update--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapupdate-htm----modify--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapmodify-dbtab-htm---and--delete--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapdelete-dbtab-htm---the-corresponding-native-sql-statements-or-platform-dependent-statements-in--amdp-methods--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenamdp-method-glosry-htm--glossary-entry----plus--export-to-database--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapexport-data-cluster-medium-htm----the-current--isolation-level--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abendb-isolation-htm--specifies-whether-the-sql-statement-select-sets-a-shared-lock-------the-following-settings-are-possible-in-all-databases-except-the-sap-hana-database-and-oracle-databases-----------uncommitted-reads--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abendb-isolation-htm---the-default-setting--do-not-attempt-to-set-shared-locks--data-is-also-read-that-is-still-protected-by-an-exclusive-lock-and-not-yet-committed-using-a--database-commit--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abendatabase-commit-glosry-htm--glossary-entry-------------committed-reads--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abendb-isolation-htm---which-can-be-configured-using-the-function-module-db--set--isolation--level--set-a-shared-lock-during-the-read-and-then-remove-it-again--this-is-possible-only-when-exclusive-locks-do-not-exist--which-can-entail-wait-times------the-sap-hana-database-and-oracle-databases-do-not-set-shared-locks--but-also-only-read-data-committed-by-a--database-commit--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abendatabase-commit-glosry-htm--glossary-entry-----if-a-transaction-cannot-lock-an-object-because-it-is-already-locked-by-another-transaction--it-waits-until-the-other-transaction-releases-this-lock--this-can-produce-a-deadlock--a--deadlock--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abendeadlock-glosry-htm--glossary-entry---occurs--for-example--when-two-transactions-are-waiting-for-a-lock-held-by-the-other---example--a-booking-needs-to-be-made-in-a-flight-reservation-system-for-lufthansa-flight-0400-on-may-16--1996--this-is-possible-only-if-there-are-enough-free-seats--to-prevent-two-bookings-from-being-made-at-the-same-time-and-avoid-overbooking--the-entry-in-the-ddic-database-table-sflight-for-this-flight-must-be-locked-to-prevent-it-from-being-changed-by-other-transactions--this-ensures-that-the-query-to-determine-the-number-of-free-seats-in-the-seatsocc-field-can-be-carried-out--the-flight-can-be-booked--and-the-seatsocc-field-can-be-updated-by-other-transactions--the-following-program-excerpt-shows-a-solution-for-this-problem---data--sflight--wa-type-sflight--sbook--wa-type-sbook--select-single-for-update------from-sflight---where-----carrid------lh--------and-----connid------0400------and-----fldate------19960516----into-sflight\_wa.
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

The table row selected by SELECT SINGLE FOR UPDATE and inserted by INSERT is locked until the end of the [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This prevents the flight from being overbooked and inconsistencies from occurring between tables SFLIGHT and SBOOK in the event of a database rollback after an error.

Lock Duration   

Database systems do not usually provide statements for explicitly releasing locks. All database locks are released no later than the next [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Shared locks usually have an even shorter lifetime. Sometimes, this causes problems for transactions that involve multiple dialog steps:

After the user has selected a flight in the above example, further dialog steps are usually performed to enter additional data for the reservation. Here, the flight reservation is added in a different database LUW than the original selection of the flight. Database locking does not prevent another transaction from booking this flight in the meantime, which can mean that the scheduled booking may have to be canceled after all.

From the point of view of the user, this solution is very inconvenient. To avoid this scenario, a flight reservation system must use the [SAP locking mechanism](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_lock_glosry.htm "Glossary Entry") to lock the flight for the entire duration of the transaction.

Monitoring Locks   

The [DBA Cockpit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendba_cockpit_glosry.htm "Glossary Entry") allows monitoring database locks.