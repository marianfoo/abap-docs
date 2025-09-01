  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions.htm) →  [regex - System Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20PCRE%20Regular%20Expression%20with%20Callouts%2C%20ABENPCRE_CALLOUT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

regex - PCRE Regular Expression with Callouts

The example demonstrates how to call an ABAP method from a PCRE regular expression.

Source Code   

\* CCDEF
CLASS o DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_pcre\_callout DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS handle\_regex DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_abap\_matcher\_callout.
ENDCLASS.
CLASS handle\_regex IMPLEMENTATION.
  METHOD if\_abap\_matcher\_callout~callout.
    o=>out->write(
    |{ callout\_num } { callout\_string }| ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_pcre\_callout IMPLEMENTATION.
  METHOD main.
    o=>out = out.
    FINAL(regex) = cl\_abap\_regex=>create\_pcre(
      pattern = \`a(?C1)b(?C2)c(?C3)d(?C"D")e(?C"E")\` ).
    FINAL(matcher) = regex->create\_matcher( text = \`abcde\` ).
    FINAL(handler) = NEW handle\_regex( ).
    matcher->set\_callout( handler ).
    matcher->match( ).
  ENDMETHOD.
ENDCLASS.

Description   

An object-oriented representation of a PCRE regular expression is created from class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_system_classes.htm). The regular expression contains the [special characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax_specials.htm) (?C...) for callouts. The first three callouts pass numeric data, the other two pass string data.

A local class handle\_regex implements the interface IF\_ABAP\_MATCHER\_CALLOUT and an instance of that class is set as the callout handler. When the regular expression is matched, the interface method CALLOUT is called for each callout position and can access the passed parameter.