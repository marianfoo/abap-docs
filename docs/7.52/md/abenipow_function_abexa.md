  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Numerical Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmathematical_functions.htm) →  [Examples of numerical functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions_abexas.htm) → 

Integer Power Function ipow

This example demonstrates the integer power function [ipow](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpower_function.htm).

Source Code

REPORT demo\_ipow.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA n TYPE i.
    DATA arg1 TYPE p DECIMALS 1.
    DATA arg2 TYPE int8.
    n = 2.
    arg1 = \`1.2\`.
    DATA(out) = cl\_demo\_output=>new(
      )->write( |\*\*  : { arg1 \*\* n }|
      )->write( |ipow: { ipow( base = arg1 exp = n ) }| ).
    cl\_demo\_output=>line( ).
    n = 62.
    arg2 = 2.
    out->write( |\*\*  : { arg2 \*\* n }|
      )->write( |ipow: { ipow( base = arg2 exp = n ) }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program demonstrates that the integer power function ipow can be used to achieve more precise results than with the [arithmetic operator \*\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm). In the cases shown here, the operator \*\* produces the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") f. If ipow is used, the calculation type is determined by the arguments arg1 and arg2.