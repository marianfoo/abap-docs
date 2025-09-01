  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Functions](javascript:call_link\('abenpredicate_functions.htm'\)) →  [Predicate functions for character-like arguments](javascript:call_link\('abenpredicate_functions_strgs.htm'\)) → 

Predicate Function, matches

This example demonstrates the predicate function [matches](javascript:call_link\('abenmatches_functions.htm'\)).

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
                regex = \`\\w+(\\.\\w+)\*@(\\w+\\.)+((\\l|\\u){2,4})\` ).
      cl\_demo\_output=>display( 'Format OK' ).
    ELSEIF matches(
             val   = email
             regex = \`\[\[:alnum:\],!#\\$%&'\\\*\\+/=\\?\\^\_\`\`\\{\\|}~-\]+\`     &
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

The first regular expression checks standard e-mail addresses without special characters, whereas the second regular expression performs a more lenient syntax check in accordance with RFC 822.

Even the second check, which uses a relatively simple regular expression for the example, does not always work for all e-mail addresses that could be used in accordance with RFC 822.

The program DEMO\_VALIDATE\_RFC\_822\_ADDRESS uses a regular expression taken from the Internet, which is designed to recognize all e-mail addresses allowed by RFC 822. The regular expression here was written originally for Perl and has more than 6000 characters. The program is therefore an example of how not to use regular expressions in ABAP.