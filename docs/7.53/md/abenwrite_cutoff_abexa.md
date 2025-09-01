  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) →  [WRITE - TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) →  [WRITE - Cutoff Behavior](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwrite_cutoffs.htm) → 

WRITE, Cutoff Behavior

This example demonstrates the [cutoff behavior](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwrite_cutoffs.htm) of the statement [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) for all elementary data types.

Source Code

REPORT demo\_write\_cuttoffs LINE-SIZE 54 NO STANDARD PAGE HEADING.
PARAMETERS xdezp  TYPE t005x-xdezp DEFAULT ' '
                  AS LISTBOX VISIBLE LENGTH 40.
PARAMETERS datfm  TYPE t005x-datfm DEFAULT '1'
                  AS LISTBOX VISIBLE LENGTH 40.
PARAMETERS timefm TYPE t005x-timefm DEFAULT '0'
                  AS LISTBOX VISIBLE LENGTH 40.
SELECTION-SCREEN SKIP.
PARAMETERS length TYPE n LENGTH 2 DEFAULT '40'.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA:
      b          TYPE int1,
      s          TYPE int2,
      i          TYPE i,
      int8       TYPE int8,
      p          TYPE p DECIMALS 2,
      decfloat16 TYPE decfloat16,
      decfloat34 TYPE decfloat34,
      f          TYPE f.
    CLASS-DATA:
      c          TYPE c LENGTH 20,
      string     TYPE string,
      n          TYPE n LENGTH 20,
      d          TYPE d,
      t          TYPE t.
    CLASS-DATA:
      x          TYPE x LENGTH 10,
      xstring    TYPE xstring.
    CLASS-DATA:
      timestamp  TYPE timestamp,
      timestampl TYPE timestampl.
    CLASS-DATA
      names TYPE STANDARD TABLE OF string.
    CLASS-METHODS:
      setup,
      create\_data,
      teardown,
      check\_system,
      display
        IMPORTING name   TYPE string
                  len    TYPE i
                  output TYPE c.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: dref TYPE REF TO data,
          len TYPE i,
          name TYPE string.
    FIELD-SYMBOLS <output> TYPE data.
    len = length.
    IF len < 1 OR len > 40.
      WRITE 'Length must be between 1 and 40!' COLOR COL\_TOTAL.
      RETURN.
    ENDIF.
    setup( ).
    create\_data( ).
    CREATE DATA dref TYPE c LENGTH len.
    ASSIGN dref->\* TO <output>.
    LOOP AT names INTO name.
      TRY.
          CASE name.
            WHEN 't'.
              WRITE t TO <output> ENVIRONMENT TIME FORMAT.
            WHEN 'TIMESTAMP'.
              WRITE timestamp TO <output> TIME ZONE sy-zonlo.
            WHEN 'TIMESTAMPL'.
              WRITE timestampl TO <output> TIME ZONE sy-zonlo.
            WHEN OTHERS.
              WRITE (name) TO <output>.
          ENDCASE.
          display( name   = name len = len
                   output = <output> ).
        CATCH cx\_root.
          display( name = name
                   len  = len output = '!' ).
      ENDTRY.
    ENDLOOP.
    teardown( ).  ENDMETHOD.
  METHOD setup.
    DATA: t005x\_wa TYPE t005x,
          ans      TYPE c LENGTH 1.
    check\_system( ).
    SELECT SINGLE land
           FROM t005x
           WHERE land = '@$@'
           INTO (@t005x\_wa-land).
    IF sy-subrc = 0.
      CALL FUNCTION 'POPUP\_TO\_CONFIRM'
        EXPORTING
          titlebar              = 'Confirmation'
          text\_question         = 'Delete existing'
          &
          ' entry with key'
          &
          ' @$@ in T005X?'
          text\_button\_1         = 'Yes'
          text\_button\_2         = 'No'
          display\_cancel\_button = ' '
        IMPORTING
          answer                = ans.
      IF ans = 1.
        teardown( ).
      ELSE.
        MESSAGE 'Execution not possible' TYPE 'I' DISPLAY LIKE 'E'.
        LEAVE PROGRAM.
      ENDIF.
    ENDIF.
    t005x\_wa-land = '@$@'.
    t005x\_wa-xdezp = xdezp.
    t005x\_wa-datfm = datfm.
    t005x\_wa-timefm = timefm.
    INSERT t005x FROM @t005x\_wa.
    COMMIT WORK.
    SET COUNTRY '@$@'.
  ENDMETHOD.
  METHOD create\_data.
    b          = 123.
    s          = -12345.
    i          = 1234567890.
    int8       = -1234567890123456789.
    p          = '-1234567.89'.
    decfloat16 = '-12345678.90123456'.
    decfloat34 = '12345678.90123456789012345678901234'.
    f          = '-1234.5678901234567'.
    c          = 'abcdefghijklmnopqrst'.
    string     = 'abcdefghijklmnopqrst'.
    n          = '12345678901234567890'.
    d          = '20101129'.
    t          = '193545'.
    x          = '00112233445566778899'.
    xstring    = '00112233445566778899'.
    timestamp  = '20101129193545'.
    timestampl = '20101129193545.1234567'.
    names = VALUE #(
      ( \`b\` ) ( \`s\` ) ( \`i\` ) ( \`int8\` ) ( \`p\` )
      ( \`decfloat16\` ) ( \`decfloat34\` ) ( \`f\` )
      ( \`c\` ) ( \`string\` ) ( \`n\` ) ( \`d\` ) ( \`t\` )
      ( \`x\` ) ( \`xstring\` )
      ( \`TIMESTAMP\` ) ( \`TIMESTAMPL\` ) ).
  ENDMETHOD.
  METHOD teardown.
    DELETE FROM t005x WHERE land = '@$@'.
    COMMIT WORK.
  ENDMETHOD.
  METHOD check\_system.
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      MESSAGE 'This demo cannot be executed in a production system'
              TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
  METHOD display.
    DATA:  col  TYPE i VALUE 2,
           fill TYPE c LENGTH 40,
           fill\_len TYPE i.
    IF output = '!'.
      col = 6.
    ENDIF.
    fill\_len = 41 - len.
    WRITE: AT /(12) name    COLOR COL\_HEADING NO-GAP,
                    ' ' COLOR COL\_POSITIVE NO-GAP,
           AT (len) output COLOR = col NO-GAP,
           AT (fill\_len) fill COLOR COL\_POSITIVE.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The class demo contains an attribute for every [built-in ABAP type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) and for [time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm). These attributes are filled with example values and assigned to a data object by [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm). The length of this data object can be chosen on the selection screen.

The [country-specific formats](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm) for numbers, dates, and times set by [SET COUNTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_country.htm) can also be specified on the selection screen. This example demonstrates these formats as well.

The output list shows the result of the formatting for each data type. If an exception is raised, the character "!" is highlighted in a different color.