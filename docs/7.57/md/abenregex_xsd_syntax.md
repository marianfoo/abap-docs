  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - Syntax](javascript:call_link\('abenregex_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - XSD Syntax, ABENREGEX_XSD_SYNTAX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

regex - XSD Syntax

Objects for XSD regular expressions can be created with the factory method CREATE\_XSD of the system class [CL\_ABAP\_REGEX](javascript:call_link\('abenregex_system_classes.htm'\)) to be used in statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)) or with the system class [CL\_ABAP\_MATCHER](javascript:call_link\('abenregex_system_classes.htm'\)).

Currently, there is no detailed description of the XSD syntax for regular expressions in the ABAP keyword documentation.

-   For a short syntax overview, see
    
    [Special Characters in XSD Regular Expressions](javascript:call_link\('abenregex_xsd_syntax_specials.htm'\))
    
-   For the complete documentation, refer to
    
    [Regular expressions in XSD 1.0 and 1.1](https://www.w3.org/XML/2008/03/xsdl-regex/re.xml).
    

Hints

-   A regular expression with XSD syntax cannot be specified directly as a character string in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)), but you can use objects of CL\_ABAP\_REGEX that are created with method CREATE\_XSD with the addition [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) instead.
-   XSD Syntax is a subset of [XPath syntax](javascript:call_link\('abenregex_xpath_syntax.htm'\)). There are mainly the following differences:
    -   In a XSD regular expression, ^ and $ are not special characters for start and end of a line.
    -   There is no XSD syntax for non-greedy behavior.
    -   There is no XSD syntax for subgroups without registration
    -   There is no XSD syntax for back references
-   The test and demonstration program DEMO\_REGEX allows XSD syntax to be tested by selecting XSD.

Example

The following example uses XSD syntax that is invalid for [PCRE](javascript:call_link\('abenregex_pcre_syntax.htm'\)) and does not find any matches for [POSIX](javascript:call_link\('abenregex_posix_syntax.htm'\)). It would work also for [XPath](javascript:call_link\('abenregex_xpath_syntax.htm'\)). The regular expression contains special characters \\i and \\c that match any character that can be the first character of an XML name or any character that can occur after the first character of an XML name. The result of the replacement is <ns:tag1><ns:tag2>...</ns:tag2></ns:tag1>.

DATA(xml) = \`<tag1><tag2>...</tag2></tag1>\`.
REPLACE ALL OCCURRENCES OF
        REGEX cl\_abap\_regex=>create\_xsd( pattern = \`\\i\\c\*\` )
        IN xml WITH \`ns:$0\`.

Continue
[XSD regex - Special Characters](javascript:call_link\('abenregex_xsd_syntax_specials.htm'\))