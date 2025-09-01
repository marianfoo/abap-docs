# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Processing of Internal Data / Obsolete Extracts / Examples of Extracts

Included pages: 4


### abenextract_abexas.htm

---
title: "Examples of Extracts"
description: |
  !Example(exa.gif 'Example') Extracts, Processing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm) !Example(exa.gif 'Example') Extracts, Control Level Processing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_group_abexa.htm) !Examp
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm"
abapFile: "abenextract_abexas.htm"
keywords: ["do", "if", "data", "abenextract", "abexas"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) → 

Examples of Extracts

Continue
![Example](exa.gif "Example") [Extracts, Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm)
![Example](exa.gif "Example") [Extracts, Control Level Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_group_abexa.htm)
![Example](exa.gif "Example") [Extracts, Determining Numbers and Totals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_sum_abexa.htm)


### abenextract_at_abexa.htm

---
title: "Extracts, Processing"
description: |
  This example demonstrates how extracts are processed. Source Code REPORT demo_extract_at. DATA: spfli_wa    TYPE spfli, sflight_wa  TYPE sflight. FIELD-GROUPS: header, flight_info, flight_date. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METH
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_at_abexa.htm"
abapFile: "abenextract_at_abexa.htm"
keywords: ["select", "insert", "loop", "do", "method", "class", "data", "abenextract", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm) → 

Extracts, Processing

This example demonstrates how extracts are processed.

Source Code

REPORT demo\_extract\_at.
DATA: spfli\_wa    TYPE spfli,
      sflight\_wa  TYPE sflight.
FIELD-GROUPS: header, flight\_info, flight\_date.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: spfli\_tab   LIKE TABLE OF spfli\_wa,
          sflight\_tab LIKE TABLE OF sflight\_wa.
    INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
              INTO header,
            spfli\_wa-cityfrom spfli\_wa-cityto
              INTO flight\_info.
    SELECT \*
           FROM spfli
           INTO TABLE @spfli\_tab.
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab.
    LOOP AT spfli\_tab INTO spfli\_wa.
      sflight\_wa-fldate = '--------'.
      EXTRACT flight\_info.
      LOOP AT sflight\_tab INTO sflight\_wa
              WHERE carrid = spfli\_wa-carrid AND
                    connid = spfli\_wa-connid.
        EXTRACT flight\_date.
      ENDLOOP.
    ENDLOOP.
    SORT STABLE.
    LOOP.
      AT FIRST.
        DATA(out) = cl\_demo\_output=>new(
          )->begin\_section( \`Flight list\`
          )->begin\_section( \`--------------------\` ).
      ENDAT.
      AT flight\_info WITH flight\_date.
        out->next\_section( |{ spfli\_wa-carrid   } {
                              spfli\_wa-connid   } {
                              spfli\_wa-cityfrom } {
                              spfli\_wa-cityto   }| ).
      ENDAT.
      AT flight\_date.
        out->write( |{ spfli\_wa-carrid   } {
                       spfli\_wa-connid   } {
                       sflight\_wa-fldate }| ).
      ENDAT.
      AT LAST.
        out->line( )->write( |{ cnt(spfli\_wa-carrid) } Airlines| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example continues the example given under [EXTRACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapextract.htm). After the extract dataset is filled, it is sorted by field group header and, afterwards, control level processing is executed in a LOOP. Here, structured output is created.


### abenextract_group_abexa.htm

---
title: "Extracts, Control Level Processing"
description: |
  This example demonstrates control level processing of extracts. Source Code REPORT demo_extract_at_new. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. DATA: t1 TYPE c LENGTH 4, t2 TYPE i. FIELD-GROUPS header. CLASS demo IMPLEMENTATION. METHOD main. INSERT t2 t1 INTO header.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_group_abexa.htm"
abapFile: "abenextract_group_abexa.htm"
keywords: ["select", "insert", "loop", "do", "method", "class", "data", "abenextract", "group", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm) → 

Extracts, Control Level Processing

This example demonstrates control level processing of extracts.

Source Code

REPORT demo\_extract\_at\_new.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
DATA: t1 TYPE c LENGTH 4,
      t2 TYPE i.
FIELD-GROUPS header.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT t2 t1 INTO header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    t1 ='BBCC'. t2 = 2. EXTRACT header.
    t1 ='AAAA'. t2 = 2. EXTRACT header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    t1 ='BBBB'. t2 = 2. EXTRACT header.
    t1 ='BBCC'. t2 = 2. EXTRACT header.
    t1 ='AAAA'. t2 = 1. EXTRACT header.
    t1 ='BBBB'. t2 = 1. EXTRACT header.
    t1 ='AAAA'. t2 = 3. EXTRACT header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    SORT BY t1 t2.
    DATA(out) = cl\_demo\_output=>new( ).
    LOOP.
      AT FIRST.
        out->write( 'Start of LOOP' ).
        out->line( ).
      ENDAT.
      AT NEW t1.
        out->write( 'New T1' ).
      ENDAT.
      AT NEW t2.
        out->write( 'New T2' ).
      ENDAT.
      out->write( |{ t1 } { t2 }| ).
      AT END OF t2.
        out->write( 'End of T2' ).
      ENDAT.
      AT END OF t1.
        out->write( 'End of T1' ).
      ENDAT.
      AT LAST.
        out->line( ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An example extract is created that contains only the fields from the field group header and is sorted by these fields. The content of the data set and the resulting group level change are produced in the LOOP.


### abenextract_sum_abexa.htm

---
title: "Extracts, Determining Numbers and Totals"
description: |
  This example demonstrates how numbers and totals are determined in extracts. Source Code REPORT demo_extract_cnt_sum. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. DATA: t1 TYPE c LENGTH 4, t2 TYPE i. FIELD-GROUPS: header, test. CLASS demo IMPLEMENTATION. METHOD main. INSER
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_sum_abexa.htm"
abapFile: "abenextract_sum_abexa.htm"
keywords: ["select", "insert", "loop", "do", "if", "method", "class", "data", "abenextract", "sum", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_abexas.htm) → 

Extracts, Determining Numbers and Totals

This example demonstrates how numbers and totals are determined in extracts.

Source Code

REPORT demo\_extract\_cnt\_sum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
DATA: t1 TYPE c LENGTH 4,
      t2 TYPE i.
FIELD-GROUPS: header, test.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT t2 t1 INTO header.
    t1 ='AABB'. t2 = 1. EXTRACT test.
    t1 ='BBCC'. t2 = 2. EXTRACT test.
    t1 ='AAAA'. t2 = 2. EXTRACT test.
    t1 ='AABB'. t2 = 1. EXTRACT test.
    t1 ='BBBB'. t2 = 2. EXTRACT test.
    t1 ='BBCC'. t2 = 2. EXTRACT test.
    t1 ='AAAA'. t2 = 1. EXTRACT test.
    t1 ='BBBB'. t2 = 1. EXTRACT test.
    t1 ='AAAA'. t2 = 3. EXTRACT test.
    t1 ='AABB'. t2 = 1. EXTRACT test.
    SORT BY t1 t2.
    DATA(out) = cl\_demo\_output=>new( ).
    LOOP.
      out->write( |{ t1 } { t2 }| ).
      AT END OF t2.
        out->line( ).
        out->write( |Sum: { sum(t2) }| ).
        out->line( ).
      ENDAT.
      AT END OF t1.
        out->write( |Different values: { cnt(t1) }| ).
        out->line( ).
      ENDAT.
      AT LAST.
        out->line( ).
        out->write( |Sum: { sum(t2) }| ).
        out->write( |Different values: { cnt(t1) }| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An example extract is created that contains only fields from the field group header. After being sorted, the contents of the data set, plus the numbers from the different fields t1 and the sums of the fields t2, are produced at the end of every control level and at the end of the loop.
