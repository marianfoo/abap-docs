---
title: "Field Symbols - Casting"
description: |
  This example demonstrates how casting with implicit and explicit type specification is carried out. Source Code REPORT demo_field_symbols_casting. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF t_date, year  TYPE n LEN
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_imp_exp_abexa.htm"
abapFile: "abencasting_imp_exp_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "field-symbol", "abencasting", "imp", "exp", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_abexas.htm) → 

Field Symbols - Casting

This example demonstrates how casting with implicit and explicit type specification is carried out.

Source Code

REPORT demo\_field\_symbols\_casting.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF t\_date,
              year  TYPE n LENGTH 4,
              month TYPE n LENGTH 2,
              day   TYPE n LENGTH 2,
           END OF t\_date.
    FIELD-SYMBOLS: <fs1> TYPE t\_date,
                   <fs2> TYPE any,
                   <fs3> TYPE n.
    DATA(out) = cl\_demo\_output=>new(
      )->write\_text( |sy-datum: { sy-datum }|
      )->line( ).
\*------- Casting with implicit typing ------------
    ASSIGN sy-datum TO <fs1> CASTING.
    out->write\_text( |Year: { <fs1>-year }| ).
    out->write\_text( |Month: { <fs1>-month }| ).
    out->write\_text( |Day: { <fs1>-day }| ).
    out->line( ).
\*------- Casting with explicit typing ------------
    ASSIGN sy-datum TO <fs2> CASTING TYPE t\_date.
    DO.
      ASSIGN COMPONENT sy-index OF STRUCTURE <fs2> TO <fs3>.
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      out->write\_text( |Component { sy-index }: { <fs3> }| ).
    ENDDO.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part of the main method, an implicit casting is carried out. The field symbol <fs1> is completely typed with the local program type t\_date. Using the CASTING addition of the ASSIGN statement, the field sy-datum can be treated as a structure. Without the CASTING addition assigning would not be possible, because sy-datum is not compatible with the type of the field symbol.

In the second part of the main method, an implicit casting is carried out. The field symbol <fs2> is completely generic. Using the CASTING addition of the ASSIGN statement, a cast is carried out for the field sy-datum of the local program type t\_date. The field symbol <fs2> can now be treated like a structure but does not recognize components. For this reason, it must be assigned component by component to a further field symbol <fs3>.