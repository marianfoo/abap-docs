  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20Syntax%2C%20ABENREGEX_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - Syntax

A [regular expression](https://en.wikipedia.org/wiki/Regular_expression) is a pattern of literal and special characters that describes a set of character strings. The syntax of regular expressions is widely standardized but there are differences between common standards as [Perl](https://www.perl.org/) or [POSIX](https://en.wikipedia.org/wiki/POSIX) and different syntax flavors as [XPath](https://www.w3.org/TR/xquery-operators/#regex-syntax) or [XSD](https://www.w3.org/XML/2008/03/xsdl-regex/re.xml) regular expressions.

The following topics describe the syntax of regular expressions that can be used in ABAP behind additions PCRE*|*REGEX in statements, for arguments pcre*|*regex*|*xpath of built-in functions and with the [system classes for regular expressions](javascript:call_link\('abenregex_system_classes.htm'\)).

-   [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\))
-   [XPath syntax](javascript:call_link\('abenregex_xpath_syntax.htm'\))
-   [XSD syntax](javascript:call_link\('abenregex_xsd_syntax.htm'\))
-   [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) (obsolete)

ABAP specific restrictions or modifications to the standard syntax might apply.

Hints

-   Regular expressions in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)) or another regular expression syntax supported by ABAP.
-   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.
-   The test and demonstration program DEMO\_REGEX supports all flavors of regular expression syntax supported by ABAP.

Continue
[regex - PCRE Syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\))
[regex - XPath Syntax](javascript:call_link\('abenregex_xpath_syntax.htm'\))
[regex - XSD Syntax](javascript:call_link\('abenregex_xsd_syntax.htm'\))