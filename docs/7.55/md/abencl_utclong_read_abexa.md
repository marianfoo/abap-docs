  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps.htm) →  [Time Stamp Field with Time Stamp Type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong.htm) →  [System Class for Time Stamp Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_system_class.htm) → 

Read Time Stamp from String

This example demonstrates the method READ of the system class CL\_ABAP\_UTCLONG.

Source Code

REPORT demo\_cl\_utclong\_read.
SELECTION-SCREEN BEGIN OF SCREEN 100 AS WINDOW.
  PARAMETERS p\_utc  TYPE c LENGTH 30 LOWER CASE.
  SELECTION-SCREEN ULINE.
  PARAMETERS datfm  TYPE t005x-datfm DEFAULT '1'
                    AS LISTBOX VISIBLE LENGTH 40.
  PARAMETERS timefm TYPE t005x-timefm DEFAULT '0'
                    AS LISTBOX VISIBLE LENGTH 40.
SELECTION-SCREEN END OF SCREEN 100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS:
      setup,
      teardown,
      check\_system.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(utc) = utclong\_current( ).
    DO.
      p\_utc  = |{ utc  TIMESTAMP = ENVIRONMENT TIMEZONE = sy-zonlo }|.
      CALL SELECTION-SCREEN 100 STARTING AT 10 10.
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      setup( ).
      TRY.
          DATA(utc\_save) = utc.
          cl\_abap\_utclong=>read( EXPORTING string   = p\_utc
                                           timezone = sy-zonlo
                                 IMPORTING value    = utc ).
        CATCH cx\_abap\_utclong\_invalid INTO DATA(exc).
          MESSAGE exc->get\_text( ) TYPE 'I' DISPLAY LIKE 'E'.
          utc = utc\_save.
      ENDTRY.
    ENDDO.
    teardown( ).  ENDMETHOD.
  METHOD setup.
    DATA: t005x\_wa TYPE t005x.
    check\_system( ).
    teardown( ).
    t005x\_wa-land   = '@$@'.
    t005x\_wa-datfm  = datfm.
    t005x\_wa-timefm = timefm.
    INSERT t005x FROM t005x\_wa.
    COMMIT WORK.
    SET COUNTRY '@$@'.
  ENDMETHOD.
  METHOD teardown.
    DELETE FROM t005x WHERE land = '@$@'.
    COMMIT WORK.
  ENDMETHOD.
  METHOD check\_system.
    IF cl\_abap\_demo\_services=>is\_production\_system( ) = abap\_true.
      MESSAGE 'This demo cannot be executed in a production system'
              TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

On a selection screen, a time stamp is specified in a string whose content can be modified in any way. A [date format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_formats.htm) and a [time format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_formats.htm) can be selected as well.

When Execute is chosen, the method READ of the system class CL\_ABAP\_UTCLONG is used to read the string as a time stamp. If the reading raises an exception, this is shown using a message.