  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Runtime Measurements](javascript:call_link\('abenabap_runtime_measurements.htm'\)) →  [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)) → 

Runtime Measurement of Database Reads

The example demonstrates how to use the statement GET RUN TIME FIELD statement at runtime.

Source Code

REPORT demo\_get\_run\_time.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: t1 TYPE i,
          t2 TYPE i,
          t  TYPE p DECIMALS 2.
    DATA n TYPE i value 10.
    cl\_demo\_input=>request(
      EXPORTING text  = 'Number of measurements'
      CHANGING  field = n ).
    DATA: toff  TYPE p DECIMALS 2,
          tsel1 TYPE p DECIMALS 2,
          tsel2 TYPE p DECIMALS 2.
    DATA sbook\_wa TYPE sbook.
    t = 0.
    DO n TIMES.
      GET RUN TIME FIELD t1.
      GET RUN TIME FIELD t2.
      t2 = t2 - t1.
      t = t + t2 / n.
    ENDDO.
    toff = t.
    cl\_demo\_output=>write( |Mean Offset Runtime: {
                            toff } microseconds| ).
    t = 0.
    DO n TIMES.
      GET RUN TIME FIELD t1.
      SELECT \*
             FROM sbook
             INTO @sbook\_wa.
      ENDSELECT.
      GET RUN TIME FIELD t2.
      t2 = t2 - t1.
      t = t + t2 / n.
    ENDDO.
    tsel1 = t - toff.
    cl\_demo\_output=>write( |Mean Runtime SELECT \* : {
                            tsel1 } microseconds| ).
    t = 0.
    DO n TIMES.
      GET RUN TIME FIELD t1.
      SELECT carrid, connid
             FROM sbook
             INTO (@sbook\_wa-carrid, @sbook\_wa-connid).
      ENDSELECT.
      GET RUN TIME FIELD t2.
      t2 = t2 - t1.
      t = t + t2 / n.
    ENDDO.
    tsel2 = t - toff.
    cl\_demo\_output=>display( |Mean Runtime SELECT list : {
                             tsel2 } microseconds| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the runtime of three program segments is examined:

-   An empty program segment for determining the offset of the runtime measurement

-   A program segment that reads all data of the database table SBOOK

-   A program segment that reads two columns of the database table SBOOK

The result shows that the offset of the runtime measurement can be neglected in this case and that reading specific columns of a table is faster than reading entire rows.