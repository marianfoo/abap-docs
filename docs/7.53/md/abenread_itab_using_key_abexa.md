  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) → 

Internal Tables, Key Accesses

This example measures the runtime of the statement READ TABLE with various table keys.

Source Code

REPORT demo\_read\_table\_using\_key.
CLASS measure DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: m   TYPE i,
                itab TYPE STANDARD TABLE
                     OF i
                     WITH NON-UNIQUE    KEY primary\_key
                       COMPONENTS table\_line
                     WITH UNIQUE SORTED KEY sorted\_key
                       COMPONENTS table\_line
                     WITH UNIQUE HASHED KEY hashed\_key
                       COMPONENTS table\_line
                     ##tabkey\[hashed\_key\]\[sorted\_key\],
                out TYPE REF TO if\_demo\_output.
    CLASS-METHODS: measure\_static  IMPORTING key TYPE string,
                   measure\_dynamic IMPORTING key TYPE string.
ENDCLASS.
CLASS measure IMPLEMENTATION.
  METHOD main.
    DATA: n TYPE i,
          j TYPE i.
    DATA max TYPE i VALUE 1000.
    cl\_demo\_input=>request( EXPORTING text  = 'Maximum line number'
                            CHANGING  field = max ).
    out = cl\_demo\_output=>new(
      )->begin\_section( 'Accessing Internal Tables by Keys' ).
    n = 10.
    WHILE n <= max / 10.
      IF n = 10.
        m = 0.
        j = 10.
      ELSE.
        m = n.
        j = 9.
      ENDIF.
      DO j TIMES.
        m = m + n.
        itab = VALUE #( BASE itab FOR k = 1 UNTIL k > m ( k ) ).
        out->line( ).
        out->begin\_section( 'Static:' ).
        measure\_static( key = \`primary\_key\` ).
        measure\_static( key = \`sorted\_key\`  ).
        measure\_static( key = \`hashed\_key\`  ).
        out->next\_section( 'Dynamic:' ).
        measure\_dynamic( key = \`primary\_key\` ).
        measure\_dynamic( key = \`sorted\_key\`  ).
        measure\_dynamic( key = \`hashed\_key\`  ).
        out->end\_section( ).
        CLEAR itab.
      ENDDO.
      n = n \* 10.
    ENDWHILE.
    out->display( ).
  ENDMETHOD.
  METHOD measure\_static.
    DATA: t1  TYPE i,
          t2  TYPE i,
          t   TYPE p DECIMALS 2,
          idx TYPE i.
    CLEAR t.
    IF key = \`primary\_key\`.
      DO m TIMES.
        idx = sy-index.
        GET RUN TIME FIELD t1.
        READ TABLE itab
                   WITH TABLE KEY primary\_key
                     COMPONENTS table\_line = idx
                   TRANSPORTING NO FIELDS
                   ##primkey\[sorted\_key\] ##primkey\[hashed\_key\].
        GET RUN TIME FIELD t2.
        t = t + t2 - t1.
      ENDDO.
    ELSEIF key = \`sorted\_key\`.
      DO m TIMES.
        idx = sy-index.
        GET RUN TIME FIELD t1.
        READ TABLE itab
                   WITH TABLE KEY sorted\_key
                     COMPONENTS table\_line = idx
                   TRANSPORTING NO FIELDS.
        GET RUN TIME FIELD t2.
        t = t + t2 - t1.
      ENDDO.
    ELSEIF key = \`hashed\_key\`.
      DO m TIMES.
        idx = sy-index.
        GET RUN TIME FIELD t1.
        READ TABLE itab
                   WITH TABLE KEY hashed\_key
                     COMPONENTS table\_line = idx
                   TRANSPORTING NO FIELDS.
        GET RUN TIME FIELD t2.
        t = t + t2 - t1.
      ENDDO.
    ENDIF.
    t = t / m.
    out->write( |{ m }   { t }| ).
  ENDMETHOD.
  METHOD measure\_dynamic.
    DATA: t1  TYPE i,
          t2  TYPE i,
          t   TYPE p DECIMALS 2,
          idx TYPE i.
    CLEAR t.
    DO m TIMES.
      idx = sy-index.
      GET RUN TIME FIELD t1.
      READ TABLE itab
                 WITH TABLE KEY (key)
                   COMPONENTS table\_line = idx
                 TRANSPORTING NO FIELDS.
      GET RUN TIME FIELD t2.
      t = t + t2 - t1.
    ENDDO.
    t = t / m.
    out->write( |{ m }   { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  measure=>main( ).

Description

The table itab is a standard table with a non-unique primary key, a unique secondary sorted key, and a unique secondary hash key. For demonstration purposes, this program hides the syntax warning about different table keys in an internal table having the same components, by using the [pragma](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpragma_glosry.htm "Glossary Entry") ##TABKEY.

The program measures the average access time of the statement READ TABLE to individual table rows, dependent on the number of rows in the table. The rows are accessed using the various keys. The keys are specified statically in the method measure\_static and dynamically in the method measure\_dynamic.

The result demonstrates that the response times for static access are as expected from around 50 to 100 table rows:

-   When a standard table is accessed using the primary key, the average access time rises in a linear fashion with the number of table rows.

-   When a standard table is accessed using a secondary sorted key, the average access time rises in a logarithmic fashion with the number of table rows.

-   When a standard table is accessed using a secondary hash key, the access time is constant.

In dynamic accesses, each access incurs the additional time required to analyze the dynamically specified key.