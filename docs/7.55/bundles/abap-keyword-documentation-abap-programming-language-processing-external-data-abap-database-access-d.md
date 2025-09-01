# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP Database Access / Data Consistency / SAP Locks

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abensap_lock.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_lock.htm)
- [abenenqueue_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenqueue_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.747Z

---

### abensap_lock.htm

> **📖 Official SAP Documentation**: [abensap_lock.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_lock.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) → 

SAP Locks

SAP locks must be maintained for the duration of [SAP LUWs](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"). For this reason, different work processes and possibly changing [AS instances](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") must be able to handle these locks.

SAP locks are based on lock objects. These are defined in ABAP Dictionary and enable locks to be set on one or more rows in a single DDIC database table or locks to be set on rows in multiple DDIC database tables associated using [foreign key dependencies](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry").

When a lock object is created, two lock function modules are generated whose names consist of the prefixes ENQUEUE\_ and DEQUEUE\_ and the name of the lock object.

-   [Setting SAP Locks](#abensap-lock-1--------releasing-sap-locks---@ITOC@@ABENSAP_LOCK_2)

More details can be found under SAP Lock Concept in the SAP Help Portal.

Setting SAP Locks

When called, lock function modules set or remove SAP locks. These function modules access a central lock table in the memory of a special work process of the current AS instance. Every [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") contains exactly one such table (administered by transaction SM12). An enqueue function module sets an SAP lock by writing a corresponding entry in the lock table. If a lock cannot be set because corresponding lock entries already exist in the lock table, the function module terminates with the exception FOREIGN\_LOCK.

The most important input parameters of an enqueue function module are:

Parameter

Meaning

MODE\_dbtab

Type of the lock for the DDIC database table dbtab of the lock object. Possible values include "S" for a [shared lock](javascript:call_link\('abenshared_lock_glosry.htm'\) "Glossary Entry"), "E" for an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry"), "X" for an expanded exclusive lock that can be requested only once (unlike a regular exclusive lock within a program), and "O" for an optimistic lock, which behaves like a shared lock at first, but can be transformed to an exclusive lock.

KEY\_FIELDS

For all key fields of the lock object, values can be specified that define the rows to be locked. If no value is specified for a key field, all corresponding rows are locked.

\_SCOPE

Definition of the lock duration with respect to an SAP LUW. Possible values include "1" for handling the lock in the same program, "2" for passing the lock to the [updater](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), and "3" for handling the lock in the program and in the updater.

Hint

An SAP lock is checked by trying to set a corresponding lock and handling the exception FOREIGN\_LOCK in the process.

Releasing SAP Locks

SAP locks can be released by deleting the associated entry in the lock table.

When an SAP lock is set using the function module ENQUEUE, the value passed to the input parameter \_SCOPE determines the lock duration. Depending on the formal parameter \_SCOPE, an SAP lock can be released as follows:

-   If \_SCOPE is set to 1, the lock is not associated with the current SAP LUW. The lock can be released either by calling the DEQUEUE function module if the value "1" or "3" is passed to the formal parameter \_SCOPE, or by terminating the program.

-   If \_SCOPE is set to 2, the lock is associated with the current SAP LUW. If [CALL FUNCTION ... IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) registered at least one update function module, the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) releases the lock when the SAP LUW is completed. When using COMMIT WORK, the update function releases the lock after processing the update function modules. This type of lock may persist beyond the end of a program until the update procedure has been completed.

-   If \_SCOPE is set to 3, both the update function and the program must release the lock. Releasing the lock by update corresponds to \_SCOPE having the value 2. Releasing the lock in the program corresponds to \_SCOPE having the value 1. The full lock release is defined by who released the lock last.

If the function module DEQUEUE is used to release an SAP lock independently of the update, the formal parameter \_SCOPE must be given a value that is greater than or equal to the value passed to the same parameter of the function module ENQUEUE.

Besides the \_SCOPE parameter, the input parameters of a DEQUEUE function module correspond to those of the ENQUEUE function module. The additional parameter \_SYNCHRON can then be used to specify whether the release of the lock should be delayed until program processing is resumed.

Executable Example

[SAP Locks, Set and Release](javascript:call_link\('abenenqueue_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SAP Locks, Set and Release](javascript:call_link\('abenenqueue_abexa.htm'\))



**📖 Source**: [abensap_lock.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_lock.htm)

### abenenqueue_abexa.htm

> **📖 Official SAP Documentation**: [abenenqueue_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenqueue_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenenqueue_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenqueue_abexa.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP Locks](javascript:call_link\('abensap_lock.htm'\)) → 

SAP Locks, Set and Release

This example demonstrates how SAP locks are set and released (enqueue and dequeued).

Source Code

REPORT demo\_transaction\_enqueue MESSAGE-ID sabapdemos.
TABLES  demo\_conn.
DATA sflight\_tab TYPE TABLE OF sflight.
DATA  text TYPE c LENGTH 8.
DATA  ok\_code TYPE sy-ucomm.
CALL SCREEN 100.
MODULE init OUTPUT.
  SET PF-STATUS 'BASIC'.
  demo\_conn-carrid = 'LH'. demo\_conn-connid = '400'.
ENDMODULE.
MODULE exit INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE enqueue INPUT.
  CASE ok\_code.
    WHEN 'ENQUEUE'.
      CALL FUNCTION 'ENQUEUE\_EDEMOFLHT'
        EXPORTING
          mode\_sflight   = 'X'
          carrid         = demo\_conn-carrid
          connid         = demo\_conn-connid
          fldate         = demo\_conn-fldate
        EXCEPTIONS
          foreign\_lock   = 1
          system\_failure = 2
          OTHERS         = 3.
      CASE sy-subrc.
        WHEN 0.
          MESSAGE i888 WITH 'Enqueue successful'(001).
        WHEN 1.
          text = sy-msgv1.
          MESSAGE e888 WITH 'Record already'(002) 'locked by'(003)
                                                   text.
          TRY.
              CALL TRANSACTION 'SM12' WITH AUTHORITY-CHECK.
            CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
          ENDTRY.
        WHEN 2 OR 3.
          MESSAGE e888 WITH 'Error in enqueue!'(004)
                            'SY-SUBRC:' sy-subrc.
      ENDCASE.
    WHEN 'DEQUEUE'.
      CALL FUNCTION 'DEQUEUE\_EDEMOFLHT'
        EXPORTING
          mode\_sflight = 'X'
          carrid       = demo\_conn-carrid
          connid       = demo\_conn-connid
          fldate       = demo\_conn-fldate
        EXCEPTIONS
          OTHERS       = 1.
      CASE sy-subrc.
        WHEN 0.
          MESSAGE i888 WITH 'Dequeue successful'(005).
        WHEN 1.
          MESSAGE e888 WITH 'Error in dequeue!'(006).
      ENDCASE.
    WHEN 'SM12'.
      TRY.
          CALL TRANSACTION 'SM12' WITH AUTHORITY-CHECK.
        CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
      ENDTRY.
  ENDCASE.
ENDMODULE.
MODULE select INPUT.
  CASE ok\_code.
    WHEN 'SELECT'.
      SELECT \*
             FROM sflight
             WHERE carrid = @demo\_conn-carrid
               AND connid = @demo\_conn-connid
               AND fldate = @demo\_conn-fldate
             INTO TABLE @sflight\_tab.
      MESSAGE i888 WITH 'SY-SUBRC:' sy-subrc.
  ENDCASE.
ENDMODULE.

Description

The function codes ENQUEUE and DEQUEUE of the GUI status can be used to lock and unlock the specified fields of the table SFLIGHT. To do this, the lock object EDEMOFLHT is implemented by using the corresponding function modules ENQUEUE\_EDEMOFLHT and DEQUEUE\_EDEMOFLHT.

Furthermore, the function code SELECT enables the specified fields to be accessed and the function code SM12 calls the transaction SM12 to display the lock entries in the central lock table.

Once the data records have been locked by a user, no other user can lock the same records again. All users can, however, access the locked data records using ABAP SQL statements, assuming the program did not already check the locks using ENQUEUE\_EDEMOFLHT.
