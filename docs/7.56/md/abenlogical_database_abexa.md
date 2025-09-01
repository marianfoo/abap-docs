  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_examples.htm) → 

LDB - Calls Using a Function Module

This example demonstrates calling a logical database using the function module LDB\_PROCESS.

Source Code

REPORT demo\_logical\_database.
DATA wa\_spfli TYPE spfli.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
SELECT-OPTIONS s\_carr FOR wa\_spfli-carrid.
SELECTION-SCREEN END OF SCREEN 1100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA callback    TYPE TABLE OF ldbcb.
    DATA: seltab    TYPE TABLE OF rsparams,
          seltab\_wa LIKE LINE OF seltab,
          scarr\_wa  LIKE LINE OF s\_carr.
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    callback = VALUE #( ( ldbnode     = 'SPFLI'
                          get         = 'X'
                          get\_late    = 'X'
                          cb\_prog     = sy-repid
                          cb\_form     = 'CALLBACK\_SPFLI' )
                        ( ldbnode     = 'SFLIGHT'
                          get         = 'X'
                          cb\_prog     = sy-repid
                          cb\_form     = 'CALLBACK\_SFLIGHT' ) ).
    seltab\_wa-kind = 'S'.
    seltab\_wa-selname = 'CARRID'.
    LOOP AT s\_carr INTO scarr\_wa.
      MOVE-CORRESPONDING scarr\_wa TO seltab\_wa.
      APPEND seltab\_wa TO seltab.
    ENDLOOP.
    CALL FUNCTION 'LDB\_PROCESS'
      EXPORTING
        ldbname                     = 'F1S'
        variant                     = ' '
      TABLES
        callback                    = callback
        selections                  = seltab
      EXCEPTIONS
        OTHERS                      = 4.
    IF sy-subrc <> 0.
      WRITE: 'Exception with SY-SUBRC', sy-subrc.
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
FORM callback\_spfli USING name  TYPE ldbn-ldbnode
                          wa    TYPE spfli
                          evt   TYPE c
                          check TYPE c.
  CASE evt.
    WHEN 'G'.
      WRITE: / wa-carrid, wa-connid, wa-cityfrom, wa-cityto.
      ULINE.
    WHEN 'L'.
      ULINE.
  ENDCASE.
ENDFORM.
FORM callback\_sflight USING name  TYPE ldbn-ldbnode
                            wa    TYPE sflight
                            evt   TYPE c
                            check TYPE c.
  WRITE: / wa-fldate, wa-seatsocc, wa-seatsmax.
ENDFORM.

Description

The program reads data using the logical database F1S. First a program-specific selection screen is defined. The data object wa\_spfli is only required here. Next, suitable variables for the interface are declared.

The internal table callback is filled in such a way that, for the two nodes SPFLI and SFLIGHT, different callback routines in the calling program are called. For the node SPFLI, the corresponding routine for GET and GET LATE is only to be called for GET in the case of SFLIGHT.

The internal table seltab is filled with values from the selection table s\_carr of the standalone selection screen 1100 for the selections of node SPFLI.

The function module LDB\_PROCESS is called with these parameters.

The subroutines callback\_spfli and callback\_sflight are used as callback routines. Since the interface parameter wa is completely typed, the individual components of the work area can be accessed. In callback\_spfli, the events GET and GET LATE are handled differently.