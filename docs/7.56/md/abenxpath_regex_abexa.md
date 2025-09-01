  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\)) →  [regex - XPath Syntax](javascript:call_link\('abenregex_xpath_syntax.htm'\)) → 

regex - XPath Regular Expression

The example demonstrates an XPath regular expression.

Source Code

REPORT demo\_xpath\_regex.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(xml) =
      \`<xml><Hello type="cheerful" lang="EN"></Hello>\` &&
      \`<World text='world'><Ocean color="blue" /></World></xml>\`.
    DATA(matcher) = cl\_abap\_regex=>create\_xpath2(
      pattern =
        \`<(\\i\\c\*)((?:\\s+\\i\\c\*\\s\*=\\s\*(?:'\[^'\]\*'|"\[^"\]\*"))\*)\\s\*/?>\`
        )->create\_matcher( text = xml ).
    TYPES matches TYPE TABLE OF string WITH EMPTY KEY.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
            INIT o = cl\_demo\_output=>new( )
            FOR <match> IN matcher->find\_all( )
            NEXT o = o->write(
      name = \`Matches\`
      data = VALUE matches(
        ( |Full Match: '{
        substring( val = xml
                   off = <match>-offset
                   len = <match>-length ) }'| )
        ( |Tag Name:   '{
        substring( val = xml
                   off = <match>-submatches\[ 1 \]-offset
                   len = <match>-submatches\[ 1 \]-length ) }'| )
        ( |Attributes: '{ condense(
        substring( val = xml
                   off = <match>-submatches\[ 2 \]-offset
                   len = <match>-submatches\[ 2 \]-length ) ) }'| ) ) )
      ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example uses the special characters \\i and \\c in an XPath regular expression that match any character that can be the first character of an XML name or any character that can occur after the first character of an XML name. The regular expression extracts the name of tags and the attributes from an XML file.