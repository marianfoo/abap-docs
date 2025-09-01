  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\)) → 

regex - XPath Syntax

Regular expressions with XPath syntax can be specified behind the argument [xpath](javascript:call_link\('abenstring_functions_regex.htm'\)) of built-in functions for strings. Objects for XPath regular expressions can be created with the factory method CREATE\_XPATH2 of the system class [CL\_ABAP\_REGEX](javascript:call_link\('abenregex_system_classes.htm'\)) to be used in statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) or with the system class [CL\_ABAP\_MATCHER](javascript:call_link\('abenregex_system_classes.htm'\)).

Currently, there is no detailed description of the XPath syntax for regular expressions in the ABAP keyword documentation.

-   For a short syntax overview, see
    
    [Special Characters in XPath Regular Expressions](javascript:call_link\('abenregex_xpath_syntax_specials.htm'\))
    
-   For the complete documentation, please refer to
    
    [XQuery 1.0 and XPath 2.0 Functions and Operators](https://www.w3.org/TR/xquery-operators/#regex-syntax).
    

A regular expression in XPath syntax can be compiled in a normal and extended mode. In the extended mode, most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In ABAP built-in functions, the extended mode is switched on by default and can be switched off with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression. When using CL\_ABAP\_REGEX, it can be switched by the parameter EXTENDED of method CREATE\_XPATH2.

Hints

-   A regular expression with XPath syntax cannot be specified directly as a character string in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)), but you can use objects of CL\_ABAP\_REGEX that are created with method CREATE\_XPATH2 with the addition [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) instead.
-   The test and demonstration program DEMO\_REGEX allows to test XPath syntax by selecting XPath.

Example

A special feature of XPath regular expressions is the subtraction of character sets. In the following example, the letters a to c are subtracted from character set BasicLatin and the first match is d at offset 3.

FIND REGEX
  cl\_abap\_regex=>create\_xpath2( pattern = '\[\\p{IsBasicLatin}-\[a-c\]\]' )
  IN 'abcd' MATCH OFFSET DATA(moff).

Example

Compared to PCRE, XPath regular expressions allow the escape character \\ not only in front of special characters. The match function with parameter xpath finds x while the match function with parameter pcre does not. Accordingly the first FIND statement returns in sy-subrc the value 0 while the second FIND statement returns 4.

DATA(x) = match( val = \`abxcd\` xpath = \`\\x\`  occ = 1  ).
DATA(y) = match( val = \`abxcd\` pcre =  \`\\x\`  occ = 1  ).
FIND REGEX cl\_abap\_regex=>create\_xpath2( pattern = '\\x' ) IN 'abxcd'.
FIND REGEX cl\_abap\_regex=>create\_pcre(   pattern = '\\x' ) IN 'abxcd'.

Executable Example

[XPath regular expression](javascript:call_link\('abenxpath_regex_abexa.htm'\))

Continue
[XPath regex - Special Characters](javascript:call_link\('abenregex_xpath_syntax_specials.htm'\))
![Example](exa.gif "Example") [regex - XPath Regular Expression](javascript:call_link\('abenxpath_regex_abexa.htm'\))