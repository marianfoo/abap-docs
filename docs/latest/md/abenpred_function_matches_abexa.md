---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_matches DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_matches IMPLEMENTATION. METHOD main. DATA email TYPE string VALUE `abc.def@ghi.j
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpred_function_matches_abexa.htm"
abapFile: "abenpred_function_matches_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenpred", "function", "matches", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions.htm) →  [rel\_exp - Predicate Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions_strgs.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Predicate%20Function%20matches%2C%20ABENPRED_FUNCTION_MATCHES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

rel\_exp - Predicate Function matches

This example demonstrates the predicate function [matches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmatches_functions.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_matches DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_matches IMPLEMENTATION.
  METHOD main.
    DATA email TYPE string VALUE \`abc.def@ghi.jkl\`.
    cl\_demo\_input=>new( )->request( CHANGING field = email ).
    IF matches( val   = email
                regex = \`\\w+(\\.\\w+)\*@(\\w+\\.)+((\[a-z\]|\[A-Z\]){2,4})\` )
                ##REGEX\_POSIX.
      out->write( 'Format OK' ).
    ELSEIF matches(
             val  = email
             pcre = \`\[\[:alnum:\],!#\\$%&'\\\*\\+/=\\?\\^\_\`\`\\{\\|}~-\]+\`      &
                    \`(\\.\[\[:alnum:\],!#\\$%&'\\\*\\+/=\\?\\^\_\`\`\\{\\|}~-\]+)\*\` &
                    \`@\[\[:alnum:\]-\]+(\\.\[\[:alnum:\]-\]+)\*\`              &
                    \`\\.(\[\[:alpha:\]\]{2,})\` ).
      out->write( 'Syntax OK but unusual' ).
    ELSE.
      out->write( 'Wrong format!' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The class checks the formal correctness of an entered e-mail address by comparing it with regular expressions.

The first regular expression checks for standard e-mail addresses without special characters, whereas the second regular expression performs a more lenient syntax check in accordance with RFC 822.

Even the second check, which uses a relatively simple regular expression for the example, is not always compatible with all e-mail addresses that would be possible in accordance with RFC 822.

The class CL\_DEMO\_VALIDATE\_RFC\_822\_ADDR uses a regular expression taken from the Internet, which is designed to recognize all e-mail addresses allowed by RFC 822. The regular expression here was written originally for Perl and has more than 6000 characters. The class is therefore an example of how not to use regular expressions in ABAP.