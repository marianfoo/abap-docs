  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) → 

regex - Exceptions

Invalid regular expressions that can be recognized statically lead to syntax errors. Errors that are recognized during processing lead to catchable exceptions of classes CX\_SY\_REGEX\_... or CX\_SY\_...\_REGEX.... Such exceptions can occur due to invalid syntax or invalid operations.

A special exception can occur for a regular expression that has correct syntax but is too complex. Then, it cannot be executed by the libraries that are integrated in the ABAP Kernel and an exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX is raised.

A regular expression is too complex if the number of transitions exceeds a certain limit. This is usually the case for regular expressions that have been programmed disadvantageously or are inadequate because they would lead to extensive backtracking for certain texts.

Hints

-   The occurrence of the CX\_SY\_REGEX\_TOO\_COMPLEX exception depends on both the regular expression and the text to be matched. A regular expression that works for one text may raise an exception for another text.
-   As a rule, [POSIX regular expressions](javascript:call_link\('abenposix_regex_glosry.htm'\) "Glossary Entry") (obsolete) are more vulnerable to this error situation than [PCRE regular expressions](javascript:call_link\('abenpcre_regex_glosry.htm'\) "Glossary Entry"). Therefore, it is recommended to [migrate from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)).

Example

The following code section demonstrates that a rather simple regular expression .\*X.\* leads to an exception in the POSIX library if the text is several hundred characters or longer. This is a result of the [leftmost-longest rule](javascript:call_link\('abenregex_posix_search.htm'\)) and the greedy behavior of the [chaining operator](javascript:call_link\('abenregex_posix_syntax_operators.htm'\)) \* where all occurrences of substrings that match the first part of the regular expression (.\*) are saved internally until the last X has been found. In POSIX regular expressions, a chaining like .\*, which matches any number of substrings, should therefore be avoided at the beginning of a regular expression. In the PCRE library, the same combination of regular expression and text does not lead to an exception. Nevertheless, the last part of the example shows that unfavorable combinations can also lead to an exception in the PCRE library.

DATA(text) = repeat( val = \`a\` occ = \`500\` ).
TRY.
    FIND REGEX \`.\*X.\*\` IN text MATCH OFFSET DATA(moff) ##regex\_posix.
    IF sy-subrc = 0.
      cl\_demo\_output=>write( |POSIX, offset: { moff }| ).
    ELSE.
      cl\_demo\_output=>write( |POSIX, nothing found| ).
    ENDIF.
  CATCH cx\_sy\_regex\_too\_complex INTO DATA(exc).
    cl\_demo\_output=>write( |POSIX: { exc->get\_text( ) }| ).
ENDTRY.
TRY.
    FIND PCRE \`.\*X.\*\` IN text MATCH OFFSET moff.
    IF sy-subrc = 0.
      cl\_demo\_output=>write( |PCRE, offset: { moff }| ).
    ELSE.
      cl\_demo\_output=>write( |PCRE, nothing found| ).
    ENDIF.
  CATCH cx\_sy\_regex\_too\_complex INTO exc.
    cl\_demo\_output=>write( |PCRE: { exc->get\_text( ) }| ).
ENDTRY.
TRY.
    FIND PCRE
      \`(\*LIMIT\_DEPTH=1)(\*LIMIT\_MATCH=1)(\*NO\_START\_OPT)(a+a+a+a+a+)+b\`
      IN text MATCH OFFSET moff.
    IF sy-subrc = 0.
      cl\_demo\_output=>write( |PCRE, offset: { moff }| ).
    ELSE.
      cl\_demo\_output=>write( |PCRE, nothing found| ).
    ENDIF.
  CATCH cx\_sy\_regex\_too\_complex INTO exc.
    cl\_demo\_output=>write( |PCRE: { exc->get\_text( ) }| ).
ENDTRY.
cl\_demo\_output=>display( ).

In the case of .\*X.\*, a search is successful for every character string that contains at least one X and any number of other characters. For such a search, the use of a regular expression is not necessary at all and can be replaced by

FIND SUBSTRING 'X' IN text.
IF sy-subrc = 0.
  ...
ENDIF.

or by

IF text CS 'X'.
  ...
ENDIF.