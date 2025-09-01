---
title: "Hints"
description: |
  -   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP. -   Creating objects of class CL_ABAP_REGEX with the operator NEW(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm"
abapFile: "abenregex_posix_syntax.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "abenregex", "posix", "syntax"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_string_obsolete.htm) →  [Obsolete Regular Expression Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions_obsolete.htm) → 

regex - POSIX Syntax (obsolete)

Regular expressions with POSIX syntax can be specified after the addition REGEX in obsolete variants of the statements [FIND and REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_replace_regex_obs.htm) and the obsolete argument [regex](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex_obs.htm) of built-in functions for strings. Objects for POSIX regular expressions can be created with the obsolete factory method CREATE\_POSIX of the system class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) to be used in statements [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm) or with the system class [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm).

The POSIX syntax of regular expressions distinguishes the following cases:

-   [Single character patterns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_signs.htm)
-   [Character string patterns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_operators.htm)
-   [Search patterns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_search.htm)
-   [Replace patterns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_replace.htm)
-   [Simplified regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_simple.htm)

Using the POSIX syntax for single characters and character strings, regular expressions can be created that match entire character strings or substrings of character strings. The POSIX syntax for find and replace offers some additional elements that support the finding and replacement of substrings in character strings.

The special characters that are valid in regular expressions according to POSIX are summarized in:

-   [Special Characters in Regular Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm)

Regular expressions in POSIX syntax are obsolete. Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma ##regex\_posix. It is recommended to [migrate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) regular expressions from POSIX to [PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm) or another regular expression syntax supported by ABAP.

Hints

-   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.
-   Creating objects of class CL\_ABAP\_REGEX with the operator [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm) or the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object.htm) also creates instances for POSIX regular expressions.
-   The test and demonstration program DEMO\_REGEX allows POSIX syntax to be tested by selecting POSIX.

Copyright Note

This software uses [Version 1.31](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) of the Boost.Regex Library. Copyright (c) 1998-2003 Dr. John Maddock. Attributes of the standard not yet support in this version are [listed here](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/standards.html).

The syntax and semantics described here may differ from other regular expression implementations based on the POSIX standard, or even the Boost 1.31 regular expression library in a different configuration.

Continue
[POSIX regex - Single Character Patterns (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_signs.htm)
[POSIX regex - Character String Patterns (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_operators.htm)
[POSIX regex - Search Patterns (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_search.htm)
[POSIX regex - Replacement Patterns (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_replace.htm)
[POSIX regex - Simplified Regular Expressions (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_simple.htm)
[POSIX regex - Special Characters (obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax_specials.htm)