  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Database Locks, ABENDB_LOCK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

Database Locks

Simultaneous access by multiple transactions to the same dataset requires database locks to manage and synchronize access in each database. The tasks of this mechanism are to:

-   protect data objects currently being changed or read by a transaction from being changed by other transactions at the same time
-   protect a transaction from reading data objects that have not yet been committed by another transaction

The following sections are a short discussion of the properties of database locks:

-   [Setting Locks](#abendb-lock-1-------locked-objects---@ITOC@@ABENDB_LOCK_2)
-   [Lock Mode](#abendb-lock-3-------lock-duration---@ITOC@@ABENDB_LOCK_4)
-   [Monitoring Locks](#abendb-lock-5---setting-locks-----database-systems-do-not-usually-provide-commands-for-explicitly-setting-locks--database-locks-are-set-implicitly-each-time-data-on-the-database-is-accessed--in-abap--databases-are-accessed-in-the-following-ways-------using-one-of-the--abap-sql--javascript-call-link---abenabap-sql-glosry-htm-----glossary-entry---statements--select--javascript-call-link---abapselect-htm-------insert--javascript-call-link---abapinsert-dbtab-htm-------update--javascript-call-link---abapupdate-htm-------modify--javascript-call-link---abapmodify-dbtab-htm------or--delete--javascript-call-link---abapdelete-dbtab-htm----------using-a--native-sql--javascript-call-link---abennative-sql-glosry-htm-----glossary-entry---statement------calling--amdp-methods--javascript-call-link---abenamdp-method-glosry-htm-----glossary-entry--------using-other-statements-that-access-the-database--such-as--import--javascript-call-link---abapimport-data-cluster-htm-----and--export--javascript-call-link---abapexport-data-cluster-htm-----from-and-to-database---locked-objects-----database-systems-set-physical-locks--all-rows-affected-by-a-database-call-are-locked--in-the-case-of-select--these-are-the-selected-rows--in-the-case-of-update--delete--insert--and-modify--these-are-rows-to-be-changed--deleted--or-inserted---take-the-following-call--for-example---select-single-for-update----from-sflight---where-----carrid------lh--------and-----connid------0400------and-----fldate------19960516----into--------it-locks-the-entry-in-the-table-sflight-for-lufthansa-flight-0400-on-may-16--1996---it-is-not-always-the-table-row-that-is-locked--tables--data-pages--and-index-pages-can-also-be-locked--for-example--the-units-locked-depend-on-the-database-system-used-and-the-respective-access---lock-mode-----in-principle--one-type-of-lock-is-sufficient-to-control-competing-data-access--however--to-allow-a-larger-number-of-transactions-to-run-in-parallel--database-systems-use-a-range-of-lock-types--these-can-vary-from-system-to-system--but-the-following-two-examples-outline-sufficiently-how-locks-work-------shared-lock----------shared-locks-allow-the-system-to-set-other-shared-locks-simultaneously--but-prevent-other-transactions-from-setting-exclusive-locks-for-the-locked-objects-----------exclusive-lock----------exclusive-locks-do-not-allow-other-transactions-to-set-any-locks-for-the-locked-objects--------exclusive-locks-are-set-by-the-abap-sql-statements--select-single-for-update--javascript-call-link---abapselect-single-htm-------insert--javascript-call-link---abapinsert-dbtab-htm-------update--javascript-call-link---abapupdate-htm-------modify--javascript-call-link---abapmodify-dbtab-htm------and--delete--javascript-call-link---abapdelete-dbtab-htm------the-corresponding-native-sql-statements-or-platform-dependent-statements-in--amdp-methods--javascript-call-link---abenamdp-method-glosry-htm-----glossary-entry----plus--export-to-database--javascript-call-link---abapexport-data-cluster-medium-htm-------the-current--isolation-level--javascript-call-link---abendb-isolation-htm-----specifies-whether-the-sql-statement-select-sets-a-shared-lock-------the-following-settings-are-possible-in-all-databases-except-the-sap-hana-database-and-oracle-databases-----------uncommitted-reads--javascript-call-link---abendb-isolation-htm------the-default-setting--do-not-attempt-to-set-shared-locks--data-is-also-read-that-is-still-protected-by-an-exclusive-lock-and-not-yet-committed-using-a--database-commit--javascript-call-link---abendatabase-commit-glosry-htm-----glossary-entry-------------committed-reads--javascript-call-link---abendb-isolation-htm------which-can-be-configured-using-the-function-module-db--set--isolation--level--set-a-shared-lock-during-the-read-and-then-remove-it-again--this-is-possible-only-when-exclusive-locks-do-not-exist--which-can-entail-wait-times------the-sap-hana-database-and-oracle-databases-do-not-set-shared-locks--but-also-only-read-data-committed-by-a--database-commit--javascript-call-link---abendatabase-commit-glosry-htm-----glossary-entry-----if-a-transaction-cannot-lock-an-object-because-it-is-already-locked-by-another-transaction--it-waits-until-the-other-transaction-releases-this-lock--this-can-produce-a-deadlock--a--deadlock--javascript-call-link---abendeadlock-glosry-htm-----glossary-entry---occurs--for-example--when-two-transactions-are-waiting-for-a-lock-held-by-the-other---example--a-booking-needs-to-be-made-in-a-flight-reservation-system-for-lufthansa-flight-0400-on-may-16--1996--this-is-possible-only-if-there-are-enough-free-seats--to-prevent-two-bookings-from-being-made-at-the-same-time-and-avoid-overbooking--the-entry-in-the-ddic-database-table-sflight-for-this-flight-must-be-locked-to-prevent-it-from-being-changed-by-other-transactions--this-ensures-that-the-query-to-determine-the-number-of-free-seats-in-the-seatsocc-field-can-be-carried-out--the-flight-can-be-booked--and-the-seatsocc-field-can-be-updated-by-other-transactions--the-following-program-excerpt-shows-a-solution-for-this-problem---data--sflight--wa-type-sflight--sbook--wa-type-sbook--select-single-for-update------from-sflight---where-----carrid------lh--------and-----connid------0400------and-----fldate------19960516----into-sflight\_wa.
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

Monitoring Locks   

The [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry") allows monitoring database locks.