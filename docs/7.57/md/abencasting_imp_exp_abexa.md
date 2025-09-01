---
title: "Field Symbols, Casting"
description: |
  This example demonstrates how castings are performed when the type is specified implicitly and explicitly. Source Code REPORT demo_field_symbols_casting. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF t_date, year  TYP
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_imp_exp_abexa.htm"
abapFile: "abencasting_imp_exp_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "field-symbol", "abencasting", "imp", "exp", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencasting_obsolete_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Field Symbols, Casting, ABENCASTING_IMP_EXP_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Field Symbols, Casting

This example demonstrates how castings are performed when the type is specified implicitly and explicitly.

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
    FINAL(out) = cl\_demo\_output=>new(
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
      ASSIGN <fs2>-(sy-index) TO <fs3>.
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

An implicit casting is performed in the first part of the method main. The field symbol <fs1> is completely typed with the local program type t\_date. The field sy-datum can be handled as a structure using the addition CASTING of the statement ASSIGN. This assignment would not be possible without the CASTING addition, since sy-datum is not compatible with the type of the field symbol.

An explicit casting is performed in the second part of the method main. The field symbol <fs2> is completely generic. A cast is performed to the local program type t\_date for the field sy-datum using the addition CASTING of the statement ASSIGN. The field symbol <fs2> can now be handled like a structure but does not recognize components. For this reason, it must be assigned to another field symbol <fs3>, component by component.