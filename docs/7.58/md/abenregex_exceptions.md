---
title: "Hints"
description: |
  -   The occurrence of the CX_SY_REGEX_TOO_COMPLEX exception depends on both the regular expression and the text to be matched. A regular expression that works for one text may raise an exception for another text. -   As a rule, POSIX regular expressions(https://help.sap.com/doc/abapdocu_758_in
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_exceptions.htm"
abapFile: "abenregex_exceptions.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "abenregex", "exceptions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20Exceptions%2C%20ABENREGEX_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - Exceptions

Invalid regular expressions that are known statically lead to syntax errors. Errors that are recognized during processing lead to catchable exceptions of classes CX\_SY\_REGEX\_... or CX\_SY\_...\_REGEX.... Such exceptions can occur due to invalid syntax or invalid operations.

A special exception can occur for a regular expression that has correct syntax but is too complex. Then, it cannot be executed by the libraries that are integrated in the ABAP Kernel and an exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX is raised.

A regular expression is too complex if the number of transitions exceeds a certain limit. This is usually the case for regular expressions that have been programmed disadvantageously or are inadequate because they would lead to extensive backtracking for certain texts.

Hints

-   The occurrence of the CX\_SY\_REGEX\_TOO\_COMPLEX exception depends on both the regular expression and the text to be matched. A regular expression that works for one text may raise an exception for another text.
-   As a rule, [POSIX regular expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenposix_regex_glosry.htm "Glossary Entry") (obsolete) are more vulnerable to this error situation than [PCRE regular expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_regex_glosry.htm "Glossary Entry"). Therefore, it is recommended that [POSIX regular expressions are migrated to PCRE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_migrating_posix.htm).

Example

The following code section demonstrates that a rather simple regular expression .\*X.\* leads to an exception in the POSIX library if the text is several hundred characters or longer. This is a result of the [leftmost-longest rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_search.htm) and the greedy behavior of the [chaining operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax_operators.htm) \* where all occurrences of substrings that match the first part of the regular expression (.\*) are saved internally until the last X has been found. In POSIX regular expressions, a chaining like .\*, which matches any number of substrings, should therefore be avoided at the beginning of a regular expression. In the PCRE library, the same combination of regular expression and text does not lead to an exception. Nevertheless, the last part of the example shows that unfavorable combinations can also lead to an exception in the PCRE library.

FINAL(text) = repeat( val = \`a\` occ = \`500\` ).
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