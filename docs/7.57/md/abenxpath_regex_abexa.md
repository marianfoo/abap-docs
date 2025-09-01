---
title: "Source Code"
description: |
  REPORT demo_xpath_regex. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. FINAL(xml) = `<xml><Hello type='cheerful' lang='EN'></Hello>` && `<World text='world'><Ocean color='blue' /></World></xml>`. FINAL(matcher) = cl_abap_regex=>c
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxpath_regex_abexa.htm"
abapFile: "abenxpath_regex_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abenxpath", "regex", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_syntax.htm) →  [regex - XPath Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_xpath_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - XPath Regular Expression, ABENXPATH_REGEX_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    FINAL(xml) =
      \`<xml><Hello type="cheerful" lang="EN"></Hello>\` &&
      \`<World text='world'><Ocean color="blue" /></World></xml>\`.
    FINAL(matcher) = cl\_abap\_regex=>create\_xpath2(
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