---
title: "Source Code"
description: |
  REPORT demo_matches. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA email TYPE string VALUE `abc.def@ghi.jkl`. cl_demo_input=>request( CHANGING field = email ). IF matches( val   = email regex = `w+(.w+)@(w+.)+((a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpred_function_matches_abexa.htm"
abapFile: "abenpred_function_matches_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenpred", "function", "matches", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_functions.htm) →  [rel\_exp - Predicate Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_functions_strgs.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Predicate Function matches, ABENPRED_FUNCTION_MATCHES_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Predicate Function matches

This example demonstrates the predicate function [matches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmatches_functions.htm).

Source Code   

REPORT demo\_matches.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA email TYPE string VALUE \`abc.def@ghi.jkl\`.
    cl\_demo\_input=>request( CHANGING field = email ).
    IF matches( val   = email
                regex = \`\\w+(\\.\\w+)\*@(\\w+\\.)+((\[a-z\]|\[A-Z\]){2,4})\` )
                ##REGEX\_POSIX.
      cl\_demo\_output=>display( 'Format OK' ).
    ELSEIF matches(
             val  = email
             pcre = \`\[\[:alnum:\],!#\\$%&'\\\*\\+/=\\?\\^\_\`\`\\{\\|}~-\]+\`      &
                    \`(\\.\[\[:alnum:\],!#\\$%&'\\\*\\+/=\\?\\^\_\`\`\\{\\|}~-\]+)\*\` &
                    \`@\[\[:alnum:\]-\]+(\\.\[\[:alnum:\]-\]+)\*\`              &
                    \`\\.(\[\[:alpha:\]\]{2,})\` ).
      cl\_demo\_output=>display( 'Syntax OK but unusual' ).
    ELSE.
      cl\_demo\_output=>display( 'Wrong format!' ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program checks the formal correctness of an entered e-mail address by comparing it with regular expressions.

The first regular expression checks for standard e-mail addresses without special characters, whereas the second regular expression performs a more lenient syntax check in accordance with RFC 822.

Even the second check, which uses a relatively simple regular expression for the example, is not always compatible with all e-mail addresses that would be possible in accordance with RFC 822.

The program DEMO\_VALIDATE\_RFC\_822\_ADDRESS uses a regular expression taken from the Internet, which is designed to recognize all e-mail addresses allowed by RFC 822. The regular expression here was written originally for Perl and has more than 6000 characters. The program is therefore an example of how not to use regular expressions in ABAP.