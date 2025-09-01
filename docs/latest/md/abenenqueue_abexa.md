  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP Locks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_lock.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20Locks%2C%20Set%20and%20Release%2C%20ABENENQUEUE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SAP Locks, Set and Release

This example demonstrates how SAP locks are set and released (enqueue and dequeued).

Source Code   

REPORT demo\_transaction\_enqueue MESSAGE-ID sabapdemos.
TABLES demo\_conn.
TYPES:
  BEGIN OF enq\_deq\_message,
    subrc TYPE sy-subrc.
    INCLUDE TYPE symsg.
TYPES END OF enq\_deq\_message.
DATA enq\_message TYPE enq\_deq\_message.
DATA deq\_message TYPE enq\_deq\_message.
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
          OTHERS         = 3. "#EC CI\_SUBRC
      enq\_message = CORRESPONDING #( sy ).
      cl\_abap\_browser=>show\_html(
        html\_string = cl\_demo\_output=>get( enq\_message ) ).
      CASE enq\_message-subrc.
        WHEN 0.
          MESSAGE i888 WITH 'Enqueue successful'(001).
        WHEN 1.
          text = enq\_message-msgv1.
          MESSAGE e888 WITH 'Record already'(002) 'locked by'(003)
                                                   text.
          TRY.
              CALL TRANSACTION 'SM12' WITH AUTHORITY-CHECK.
            CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
          ENDTRY.
        WHEN 2 OR 3.
          MESSAGE e888 WITH 'Error in enqueue!'(004)
                            'SY-SUBRC:' enq\_message-subrc.
      ENDCASE.
    WHEN 'DEQUEUE'.
      CALL FUNCTION 'DEQUEUE\_EDEMOFLHT'
        EXPORTING
          mode\_sflight = 'X'
          carrid       = demo\_conn-carrid
          connid       = demo\_conn-connid
          fldate       = demo\_conn-fldate
        EXCEPTIONS
          OTHERS       = 1 ##FM\_SUBRC\_OK.
      deq\_message = CORRESPONDING #( sy ).
      cl\_abap\_browser=>show\_html(
        html\_string = cl\_demo\_output=>get( deq\_message ) ).
      CASE deq\_message-subrc.
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

The return code sy-subrc and the system fields for [messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") are preserved in dedicated structures. These contain important information returned by the function modules and can be used for analyzing lock problems.

Furthermore, the function code SELECT enables the specified fields to be accessed and the function code SM12 calls the transaction SM12 to display the lock entries in the central lock table.

Once the data records have been locked by a user, no other user can lock the same records again. All users can, however, access the locked data records using ABAP SQL statements, assuming the program did not already check the locks using ENQUEUE\_EDEMOFLHT.