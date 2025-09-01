  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencasting_obsolete_abexas.htm) → 

Field Symbols, Casting

This example demonstrates how castings are performed when the type is specified both implicitly and explicitly.

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

An implicit casting is performed in the first part of the method main. The field symbol <fs1> is fully typed with the local program type t\_date. The field sy-datum can be handled as a structure using the addition CASTING of the statement ASSIGN. This assignment would not be possible without the CASTING addition, since sy-datum is not compatible with the type of the field symbol.

An implicit casting is performed in the second part of the method main. The field symbol <fs2> is fully generic. A cast is performed to the local program type t\_date for the field sy-datum using the addition CASTING of the statement ASSIGN. The field symbol <fs2> can now be handled like a structure but does not recognize components. For this reason, it must be assigned to a further field symbol <fs3>, component by component.