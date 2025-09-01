  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions.htm) →  [Examples of String Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_abexas.htm) → 

Character String Functions, cmax, cmin and segment

The example demonstrates the extremum functions [cmax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencmax_cmin_functions.htm) and [cmin](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennmax_nmin_functions.htm) as well as the segment function [segment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensegment_functions.htm).

Source Code

REPORT demo\_cmax\_cmin.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  txt TYPE string,
           max TYPE string,
           min TYPE string,
           msg TYPE string.
    txt = \`one two three four five six seven eight nine ten\`.
    max = | |.
    min = |�|.
    DO.
      TRY.
          max = cmax( val1 = max
                      val2 = segment( val   = txt
                                      index = sy-index sep = \` \` ) ).
          min = cmin( val1 = min
                      val2 = segment( val   = txt
                                      index = sy-index sep = \` \` ) ).
        CATCH cx\_sy\_strg\_par\_val.
          EXIT.
      ENDTRY.
    ENDDO.
    cl\_demo\_output=>display(
      |Maximum is { max } and minimum is { min }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program determines the minimum and the maximum segment of a character string with reference to the current [code page](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencodepage_glosry.htm "Glossary Entry").