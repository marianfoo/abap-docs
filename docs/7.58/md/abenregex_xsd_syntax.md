---
title: "Hints"
description: |
  -   A regular expression with XSD syntax cannot be specified directly as a character string in the statements FIND(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) and REPLACE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace.htm), but you can use obj
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_xsd_syntax.htm"
abapFile: "abenregex_xsd_syntax.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenregex", "xsd", "syntax"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20XSD%20Syntax%2C%20ABENREGEX_XSD_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - XSD Syntax

Objects for XSD regular expressions can be created with the factory method CREATE\_XSD of the system class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_system_classes.htm) to be used in statements [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace.htm) or with the system class [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_system_classes.htm).

Currently, there is no detailed description of the XSD syntax for regular expressions in the ABAP keyword documentation.

-   For a short syntax overview, see
    
    [Special Characters in XSD Regular Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_xsd_syntax_specials.htm)
    
-   For the complete documentation, refer to
    
    [Regular expressions in XSD 1.0 and 1.1](https://www.w3.org/XML/2008/03/xsdl-regex/re.xml).
    

Hints

-   A regular expression with XSD syntax cannot be specified directly as a character string in the statements [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace.htm), but you can use objects of CL\_ABAP\_REGEX that are created with method CREATE\_XSD with the addition [REGEX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_pattern.htm) instead.
-   XSD Syntax is a subset of [XPath syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_xpath_syntax.htm). There are mainly the following differences:
    -   In a XSD regular expression, ^ and $ are not special characters for start and end of a line.
    -   There is no XSD syntax for non-greedy behavior.
    -   There is no XSD syntax for subgroups without registration
    -   There is no XSD syntax for back references
-   The test and demonstration program DEMO\_REGEX allows XSD syntax to be tested by selecting XSD.

Example

The following example uses XSD syntax that is invalid for [PCRE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_pcre_syntax.htm) and does not find any matches for [POSIX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_posix_syntax.htm). It would work also for [XPath](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_xpath_syntax.htm). The regular expression contains special characters \\i and \\c that match any character that can be the first character of an XML name or any character that can occur after the first character of an XML name. The result of the replacement is <ns:tag1><ns:tag2>...</ns:tag2></ns:tag1>.

DATA(xml) = \`<tag1><tag2>...</tag2></tag1>\`.
REPLACE ALL OCCURRENCES OF
        REGEX cl\_abap\_regex=>create\_xsd( pattern = \`\\i\\c\*\` )
        IN xml WITH \`ns:$0\`.

Continue
[XSD regex - Special Characters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregex_xsd_syntax_specials.htm)