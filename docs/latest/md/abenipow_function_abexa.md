  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmathematical_functions.htm) →  [num\_func - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20num_func%20-%20Integer%20Power%20Function%20ipow%2C%20ABENIPOW_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

num\_func - Integer Power Function ipow

This example demonstrates the integer power function [ipow](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpower_function.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_ipow DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ipow IMPLEMENTATION.
  METHOD main.
    DATA n TYPE i.
    DATA arg1 TYPE p DECIMALS 1.
    DATA arg2 TYPE int8.
    n = 2.
    arg1 = \`1.2\`.
    out->write( |\*\*  : { arg1 \*\* n }|
      )->write( |ipow: { ipow( base = arg1 exp = n ) }| ).
    out->line( ).
    n = 62.
    arg2 = 2.
    out->write( |\*\*  : { arg2 \*\* n }|
      )->write( |ipow: { ipow( base = arg2 exp = n ) }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The class demonstrates that the integer power function ipow can be used to achieve more precise results than with the [arithmetic operator \*\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_operators.htm). In the cases shown here, the operator \*\* produces the [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") f. If ipow is used, the calculation type is determined by the arguments arg1 and arg2.