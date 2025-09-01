  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) →  [Examples of string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_abexas.htm) → 

String Templates, Control Characters

The example demonstrates the formatting of a text using control characters.

Source Code

REPORT demo\_string\_template\_ctrl\_char.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display(
      |First line.\\r\\ttab\\ttab\\ttab\\n\\ttab\\ttab\\ttab\\rLast line.| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A string template with literal text and control character is output using the class CL\_DEMO\_OUTPUT. The text output is formatted with line breaks and tabulators.