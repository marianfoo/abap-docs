  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) →  [DELETE itab - itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\)) → 

Internal Tables, Deleting Rows Using WHERE

This example measures the runtime of the statement DELETE ... WHERE with various table keys.

Source Code

REPORT demo\_delete\_table\_using\_key.
CLASS measure DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF tline,
                  col1 TYPE i,
                  col2 TYPE i,
                END OF tline,
                itab LIKE HASHED TABLE
           OF tline
           WITH UNIQUE KEY primary\_key
             COMPONENTS col1
           WITH NON-UNIQUE SORTED KEY secondary\_key
             COMPONENTS col2,
                jtab LIKE SORTED TABLE
           OF tline
           WITH NON-UNIQUE KEY primary\_key
             COMPONENTS col2.
    CLASS-METHODS refresh\_itab.
ENDCLASS.
CLASS measure IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA: t1 TYPE i,
          t2 TYPE i,
          t  TYPE i.
    refresh\_itab( ).
    CLEAR t.
    GET RUN TIME FIELD t1.
    DELETE itab WHERE col2 = 10 ##primkey\[secondary\_key\].
    GET RUN TIME FIELD t2.
    t = t + t2 - t1.
    out->write\_text(
      |Delete without using secondary sorted key: { t }| ).
    refresh\_itab( ).
    CLEAR t.
    GET RUN TIME FIELD t1.
    DELETE itab USING KEY secondary\_key
                      WHERE col2 = 10.
    GET RUN TIME FIELD t2.
    t = t + t2 - t1.
    out->write\_text(
      |Delete without using secondary sorted key: { t }| ).
    refresh\_itab( ).
    jtab = itab.
    CLEAR t.
    GET RUN TIME FIELD t1.
    cl\_abap\_itab\_utilities=>flush\_itab\_key(
      EXPORTING keyname = 'SECONDARY\_KEY'
      CHANGING  itab    = itab ).
    GET RUN TIME FIELD t2.
    t = t + t2 - t1.
    out->write\_text( |Create secondary index: { t }| ).
    CLEAR t.
    GET RUN TIME FIELD t1.
    DELETE itab USING KEY secondary\_key
                      WHERE col2 = 10.
    GET RUN TIME FIELD t2.
    t = t + t2 - t1.
    out->write\_text(
      |Delete via secondary sorted key with existing index: { t }| ).
    CLEAR t.
    GET RUN TIME FIELD t1.
    DELETE jtab WHERE col2 = 10.
    GET RUN TIME FIELD t2.
    t = t + t2 - t1.
    out->write\_text(
      |Delete via primary sorted key: { t }|
      )->display( ).
  ENDMETHOD.
  METHOD refresh\_itab.
    DATA prng TYPE REF TO cl\_abap\_random\_int.
    prng = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                       min  = 1
                                       max  = 10 ).
    itab = VALUE #(
      FOR j = 1 UNTIL j > 100000 ( col1 = j
                                   col2 = prng->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  measure=>main( ).

Description

The table itab is a hashed table with a unique primary key and a non-unique secondary sorted key. The method refresh\_itab fills the table with 100000 rows, with the second column being given random numbers between 1 and 10.

The program measures the runtime of the statement DELETE itab, with a condition being set after WHERE on the column that determines the secondary key.

-   For demonstration purposes, the [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry") ##PRIMKEY is used to suppress the syntax check warning in the first DELETE statement stating that the primary key is being used to access the internal table without its component being specified. This access must perform a linear scan of the entire internal table.

-   The secondary key is specified in the second DELETE statement. Since this key is not used to access the internal table after the table is filled, the secondary table key must first be constructed ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). This time is included in the DELETE statement measurement and seems to make it considerably slower than the previous non-optimized statement.

-   Once the internal table is filled again, the secondary key is constructed explicitly using the method FLUSH\_ITAB\_KEY of the class CL\_ABAP\_ITAB\_UTILITIES. The time measured here is largely the runtime needed to create the index.

-   The third DELETE statement specifies the secondary key again, but it already exists due to the preceding method call. As expected, the runtime of this DELETE statement is faster than the previous two statements. The total of this runtime and the runtime required to construct the index gives the runtime of the second DELETE statement.

-   The fourth DELETE statement performs the same delete operation on a sorted internal table jtab, which has the same row type and content as the previous table itab but no secondary key as its only key. The runtime is approximately the same as an access to itab using the secondary sorted key, but is a little shorter since only one key needs to be administered for the internal table. If a secondary key were declared for jtab, such as a hash key for the first column, the runtime of the last two DELETE statements would be about the same.

The example demonstrates that performance is improved significantly by using secondary table keys, which make it unnecessary to copy data to tables with appropriate keys. It also demonstrates, however, that the construction of a secondary index is costly. The use of lazy update also means that these costs are often incurred in unexpected places. Secondary keys are more suitable for frequent reads on large tables, rather than infrequent writes.