  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions.htm) → 

regex - Syntax

A [regular expression](https://en.wikipedia.org/wiki/Regular_expression) is a pattern of literal and special characters that describes a set of character strings. The syntax of regular expressions is widely standardized but there are differences between common standards as [Perl](https://www.perl.org/) or [POSIX](https://en.wikipedia.org/wiki/POSIX) and different syntax flavors as [XPath](https://www.w3.org/TR/xquery-operators/#regex-syntax) or [XSD](https://www.w3.org/XML/2008/03/xsdl-regex/re.xml) regular expressions.

The following topics describe the syntax of regular expressions that can be used in ABAP behind additions PCRE*|*REGEX in statements, for arguments pcre*|*regex*|*xpath of built-in functions and with the [system classes for regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm).

-   [PCRE syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm)
-   [XPath syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_xpath_syntax.htm)
-   [XSD syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_xsd_syntax.htm)
-   [POSIX syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) (obsolete)

ABAP specific restrictions or modifications to the standard syntax might apply.

Hints

-   Regular expressions in [POSIX syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_syntax.htm) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_migrating_posix.htm) or another regular expression syntax supported by ABAP.
-   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.
-   The test and demonstration program DEMO\_REGEX supports all flavors of regular expression syntax supported by ABAP.

Continue
[regex - PCRE Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm)
[regex - XPath Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_xpath_syntax.htm)
[regex - XSD Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_xsd_syntax.htm)