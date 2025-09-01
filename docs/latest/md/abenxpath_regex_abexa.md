---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_xpath_regex DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_xpath_regex IMPLEMENTATION. METHOD main. FINAL(xml) = `<xml><Hello type='c
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxpath_regex_abexa.htm"
abapFile: "abenxpath_regex_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenxpath", "regex", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_syntax.htm) →  [regex - XPath Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_xpath_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20XPath%20Regular%20Expression%2C%20ABENXPATH_REGEX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - XPath Regular Expression

The example demonstrates an XPath regular expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_xpath\_regex DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_xpath\_regex IMPLEMENTATION.
  METHOD main.
    FINAL(xml) =
      \`<xml><Hello type="cheerful" lang="EN"></Hello>\` &&
      \`<World text='world'><Ocean color="blue" /></World></xml>\`.
    FINAL(matcher) = cl\_abap\_regex=>create\_xpath2(
      pattern =
        \`<(\\i\\c\*)((?:\\s+\\i\\c\*\\s\*=\\s\*(?:'\[^'\]\*'|"\[^"\]\*"))\*)\\s\*/?>\`
        )->create\_matcher( text = xml ).
    TYPES matches TYPE TABLE OF string WITH EMPTY KEY.
    DATA o TYPE REF TO if\_demo\_output.
    o = REDUCE #(
            INIT o1 = out
            FOR <match> IN matcher->find\_all( )
            NEXT o1 = o1->write(
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
  ENDMETHOD.
ENDCLASS.

Description   

The example uses the special characters \\i and \\c in an XPath regular expression that match any character that can be the first character of an XML name or any character that can occur after the first character of an XML name. The regular expression extracts the name of tags and the attributes from an XML file.