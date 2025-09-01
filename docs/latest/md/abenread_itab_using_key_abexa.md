---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_read_table_using_key DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. DATA: m    TYPE i, itab TYPE STANDARD TABLE OF i WITH NON-UNIQUE    KEY primary_key COMPONENTS table_li
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenread_itab_using_key_abexa.htm"
abapFile: "abenread_itab_using_key_abexa.htm"
keywords: ["do", "while", "if", "try", "method", "class", "data", "internal-table", "abenread", "itab", "using", "key", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Key%20Accesses%2C%20ABENREAD_ITAB_USING_KEY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Key Accesses

This example measures the runtime of the statement READ TABLE with various table keys.

Source Code   

\* Public class definition
CLASS cl\_demo\_read\_table\_using\_key DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: m    TYPE i,
          itab TYPE STANDARD TABLE
               OF i
               WITH NON-UNIQUE    KEY primary\_key
                 COMPONENTS table\_line
               WITH UNIQUE SORTED KEY sorted\_key
                 COMPONENTS table\_line
               WITH UNIQUE HASHED KEY hashed\_key
                 COMPONENTS table\_line
          ##tabkey\[hashed\_key\]\[sorted\_key\].
    METHODS: measure\_static  IMPORTING key TYPE string,
      measure\_dynamic IMPORTING key TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_read\_table\_using\_key IMPLEMENTATION.
  METHOD main.
    DATA: n TYPE i,
          j TYPE i.
    DATA max TYPE i VALUE 1000.
    cl\_demo\_input=>new(
      )->request( EXPORTING text  = 'Maximum line number'
                  CHANGING  field = max ).
    IF max < 1 OR max > 1000.
      out->write( 'Enter a number between 1 and 1000' ).
      RETURN.
    ENDIF.
    out->begin\_section( 'Accessing Internal Tables by Keys' ).
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
        m += n.
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
      n \*= 10.
    ENDWHILE.
  ENDMETHOD.
  METHOD measure\_dynamic.
    DATA: t1  TYPE i,
          t2  TYPE i,
          t   TYPE p DECIMALS 2,
          idx TYPE i.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    CLEAR t.
    DO m TIMES.
      idx = sy-index.
      t1 = timer->get\_runtime( ).
      READ TABLE itab
                 WITH TABLE KEY (key)
                   COMPONENTS table\_line = idx
                 TRANSPORTING NO FIELDS.
      t2 = timer->get\_runtime( ).
      t += t2 - t1.
    ENDDO.
    t /= m.
    out->write( |{ m }   { t }| ).
  ENDMETHOD.
  METHOD measure\_static.
    DATA: t1  TYPE i,
          t2  TYPE i,
          t   TYPE p DECIMALS 2,
          idx TYPE i.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    CLEAR t.
    IF key = \`primary\_key\`.
      DO m TIMES.
        idx = sy-index.
        t1 = timer->get\_runtime( ).
        READ TABLE itab
                   WITH TABLE KEY primary\_key
                     COMPONENTS table\_line = idx
                   TRANSPORTING NO FIELDS
                   ##primkey\[sorted\_key\] ##primkey\[hashed\_key\].
        t2 = timer->get\_runtime( ).
        t += t2 - t1.
      ENDDO.
    ELSEIF key = \`sorted\_key\`.
      DO m TIMES.
        idx = sy-index.
        t1 = timer->get\_runtime( ).
        READ TABLE itab
                   WITH TABLE KEY sorted\_key
                     COMPONENTS table\_line = idx
                   TRANSPORTING NO FIELDS.
        t2 = timer->get\_runtime( ).
        t += t2 - t1.
      ENDDO.
    ELSEIF key = \`hashed\_key\`.
      DO m TIMES.
        idx = sy-index.
        t1 = timer->get\_runtime( ).
        READ TABLE itab
                   WITH TABLE KEY hashed\_key
                     COMPONENTS table\_line = idx
                   TRANSPORTING NO FIELDS.
        t2 = timer->get\_runtime( ).
        t += t2 - t1.
      ENDDO.
    ENDIF.
    t /= m.
    out->write( |{ m }   { t }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The table itab is a standard table with a non-unique primary key, a unique secondary sorted key, and a unique secondary hash key. For demonstration purposes, this class hides the syntax warning that different table keys in an internal table cannot contain the same components using the [pragma](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpragma_glosry.htm "Glossary Entry") ##TABKEY.

The class measures the average access time of the statement READ TABLE to individual table lines, depending on the number of lines in the table. The lines are accessed using the different keys. The keys are specified statically in the method measure\_static and dynamically in the method measure\_dynamic.

The result demonstrates that the response times for static access are as expected from around 50 to 100 table lines:

-   When a standard table is accessed using the primary key, the average access time increases linearly with the number of table lines.
-   When a standard table is accessed using a secondary sorted key, the average access time increases logarithmically with the number of table lines.
-   When a standard table is accessed using a secondary hash key, the access time is constant.

In dynamic accesses, each access incurs the additional time required to evaluate the dynamically specified key.