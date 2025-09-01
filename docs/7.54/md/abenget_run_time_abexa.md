---
title: "Runtime Measurement of Database Reads"
description: |
  The example demonstrates how to use the statement GET RUN TIME FIELD statement at runtime. Source Code REPORT demo_get_run_time. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: t1 TYPE i, t2 TYPE i, t  TYPE p DECIMALS 2. DATA n TY
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenget_run_time_abexa.htm"
abapFile: "abenget_run_time_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "abenget", "run", "time", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_measurements.htm) →  [GET RUN TIME](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_run_time.htm) → 

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
      t2 -= t1.
      t  += t2 / n.
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
      t2 -= t1.
      t  += t2 / n.
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
      t2 -= t1.
      t  += t2 / n.
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