# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP Database Access / Data Consistency / SAP Locks

Included pages: 2


### abensap_lock.htm

---
title: "SAP Locks"
description: |
  SAP locks must be maintained for the duration of SAP LUWs(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm 'Glossary Entry'). For this reason, different work processes and possibly changing AS instances(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_lock.htm"
abapFile: "abensap_lock.htm"
keywords: ["update", "do", "if", "try", "data", "abensap", "lock"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_consistency.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP Locks, ABENSAP_LOCK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

SAP Locks

SAP locks must be maintained for the duration of [SAP LUWs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm "Glossary Entry"). For this reason, different work processes and possibly changing [AS instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") must be able to handle these locks.

SAP locks are based on lock objects. These are defined in the ABAP Dictionary and enable locks to be set on one or more rows in a single DDIC database table or locks to be set on rows in multiple DDIC database tables linked using [foreign key dependencies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry").

When a lock object is created, two lock function modules are generated whose names consist of the prefixes ENQUEUE\_ and DEQUEUE\_ and the name of the lock object.

-   [Setting SAP Locks](#abensap-lock-1-------releasing-sap-locks---@ITOC@@ABENSAP_LOCK_2)

For more details, see SAP Lock Concept in the SAP Help Portal.

Setting SAP Locks   

When called, lock function modules set or remove SAP locks. These function modules access a central lock table in the memory of a special work process of the current AS instance. Every [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") contains exactly one such table (administered by transaction SM12). An enqueue function module sets an SAP lock by writing a corresponding entry in the lock table. If a lock cannot be set because corresponding lock entries already exist in the lock table, the function module terminates with the exception FOREIGN\_LOCK.

The most important input parameters of an enqueue function module are:

Parameter

Meaning

MODE\_dbtab

Type of the lock for the DDIC database table dbtab of the lock object. Possible input values include "S" for a [shared lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_lock_glosry.htm "Glossary Entry"), "E" for an [exclusive lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexclusive_lock_glosry.htm "Glossary Entry"), X for an expanded exclusive lock that can be requested only once, unlike a regular exclusive lock within a program, and "O" for an optimistic lock, which behaves like a shared lock at first, but can be transformed to an exclusive lock.

KEY\_FIELDS

For all key fields of the lock object, values can be specified that define the rows to be locked. If no value is specified for a key field, all affected rows are locked.

\_SCOPE

Definition of the lock duration with respect to an SAP LUW. Possible values include "1" for handling the lock in the same program, "2" for passing the lock to the [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry"), and "3" for handling the lock in the program and in the update.

Hint

An SAP lock is checked by trying to set a corresponding lock and handling the exception FOREIGN\_LOCK in the process.

Releasing SAP Locks   

SAP locks can be released by deleting the associated entry in the lock table.

When an SAP lock is set using the function module ENQUEUE, the value passed to the input parameter \_SCOPE determines the lock duration. Depending on the formal parameter \_SCOPE, an SAP lock can be released as follows:

-   If \_SCOPE is set to 1, the lock is not linked with the current SAP LUW. The lock can be released either by calling the DEQUEUE function module if the value "1" or "3" is passed to the formal parameter \_SCOPE, or by terminating the program.
-   If \_SCOPE is set to 2, the lock is linked with the current SAP LUW. If [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_update.htm) registered at least one update function module, the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) releases the lock when the SAP LUW is completed. When using COMMIT WORK, the update function releases the lock after processing the update function modules. This type of lock may persist beyond the end of a program until the update procedure has been completed.
-   If \_SCOPE is set to 3, both the update function and the program must release the lock. Releasing the lock by update corresponds to \_SCOPE having the value 2. Releasing the lock in the program corresponds to \_SCOPE having the value 1. The entire lock release is defined by who releases the lock last.

If the function module DEQUEUE is used to release an SAP lock independently of the update, the formal parameter \_SCOPE must be given a value that is greater than or equal to the value passed to the same parameter of the function module ENQUEUE.

Besides the \_SCOPE parameter, the input parameters of a DEQUEUE function module correspond to those of the ENQUEUE function module. The additional parameter \_SYNCHRON can then be used to specify whether the release of the lock should be delayed until program processing is resumed.

Executable Example

[SAP Locks, Set and Release](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenqueue_abexa.htm)

Continue
![Example](exa.gif "Example") [SAP Locks, Set and Release](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenqueue_abexa.htm)


### abenenqueue_abexa.htm

---
title: "SAP Locks, Set and Release"
description: |
  This example demonstrates how SAP locks are set and released (enqueue and dequeued). Source Code REPORT demo_transaction_enqueue MESSAGE-ID sabapdemos. TABLES  demo_conn. DATA sflight_tab TYPE TABLE OF sflight. DATA  text TYPE c LENGTH 8. DATA  ok_code TYPE sy-ucomm. CALL SCREEN 100. MODULE ini
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenqueue_abexa.htm"
abapFile: "abenenqueue_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "data", "abenenqueue", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_consistency.htm) →  [SAP Locks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_lock.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP Locks, Set and Release, ABENENQUEUE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

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

The function codes ENQUEUE and DEQUEUE of the GUI status can be used to lock and unlock the specified fields of the table SFLIGHT. This is done using the lock object EDEMOFLHT is used using the corresponding function modules ENQUEUE\_EDEMOFLHT and DEQUEUE\_EDEMOFLHT.

Furthermore, the function code SELECT enables the specified fields to be accessed and the function code SM12 calls the transaction SM12 to display the lock entries in the central lock table.

Once the data records have been locked by a user, no other user can lock the same records again. All users can, however, access the locked data records using ABAP SQL statements, assuming the program did not already check the locks using ENQUEUE\_EDEMOFLHT.
