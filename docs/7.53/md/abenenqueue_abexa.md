  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction.htm) →  [SAP Locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock.htm) → 

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