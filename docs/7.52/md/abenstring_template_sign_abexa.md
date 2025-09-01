  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [string\_exp - String Expressions](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates](javascript:call_link\('abenstring_templates.htm'\)) →  [Examples of string templates](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

String Templates, Algebraic Sign

The example demonstrates the specification of the algebraic sign format for embedded expressions.

Source Code

REPORT demo\_string\_template\_sign.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  num1    TYPE i VALUE -10,
           num2    TYPE i VALUE +10,
           results TYPE TABLE OF string,
           formats TYPE abap\_attrdescr\_tab,
           format  LIKE LINE OF formats.
    FIELD-SYMBOLS <sign> LIKE cl\_abap\_format=>s\_left.
    formats =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
             )->attributes.
    DELETE formats WHERE name NP 'S\_\*' OR is\_constant <> 'X'.
    LOOP AT formats INTO format.
      ASSIGN cl\_abap\_format=>(format-name) TO <sign>.
      APPEND |{ format-name WIDTH = 16 }  | &
             |"{ num1 SIGN = (<sign>) }"  | &
             |"{ num2 SIGN = (<sign>) }"  | TO results.
    ENDLOOP.
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The six possible settings for upper/lower case of a character string template are dynamically specified.