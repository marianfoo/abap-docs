  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions.htm) →  [Predicate functions for character-like arguments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions_strgs.htm) → 

rel\_exp - matches, Predicate Function

Syntax

... matches( [val = text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm) [regex = regex](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_regex.htm) *\[*[case = case](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_case.htm)*\]*
             [*\[*off = off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* [*\[*len = len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm)*\]* ) ...

Effect

The [predicate function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_function_glosry.htm "Glossary Entry") matches compares a search range of the argument [text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm), defined using [off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_off_len.htm) and [len](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_val.htm), with the [regular expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_syntax.htm) specified in [regex](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_regex.htm). A corresponding [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry") is returned. The return value is true when the whole search range matches the regular expression. The comparison is case-sensitive by default, but this can be overridden using the parameter [case](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions_case.htm).

Note

The match function [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmatch_functions.htm) can be used to return a substring that matches a regular expression.

Example

The first predicate function returns the value "true" because the argument val only contains letters. The first predicate function returns the value "false" because the argument val also contains numbers.

ASSERT     matches( val = 'abcde' regex = '\[\[:alpha:\]\]\*' ).
ASSERT NOT matches( val = 'a123e' regex = '\[\[:alpha:\]\]\*' ).

Executable Example

[Predicate Function, matches](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpred_function_matches_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE
    

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX
    

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Regular expression in regex is empty.
    Runtime error: STRG\_ILLEGAL\_PAR