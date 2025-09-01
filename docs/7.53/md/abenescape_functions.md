---
title: "Syntax"
description: |
  ... escape( val = text(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) format = format ) ... Effect This function gets the content of the character string in text(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm), an
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm"
abapFile: "abenescape_functions.htm"
keywords: ["insert", "do", "if", "case", "try", "method", "class", "data", "abenescape", "functions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm) → 

escape - Escape Function

Syntax

... escape( [val = text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) format = format ) ...

Effect

This function gets the content of the character string in [text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm), and hides certain special characters with escape characters according to a rule specified in format.

The possible values of format are defined as constants with the prefix "E\_" in the class CL\_ABAP\_FORMAT. Each value defines which special characters are replaced, and how. There are rules for special characters in markup languages (XML and HTML), in URIs and URLs, in JSON, as well as in regular expressions and character string templates. An important part is also played by attack protection using Cross Site Scripting (XSS) on Web applications.

format expects data objects of the type i. An invalid value for format raises an exception of the class CX\_SY\_STRG\_PAR\_VAL. For all characters whose codes are between x00 and xFF, the program DEMO\_ESCAPE demonstrates the effect of all associated formats from the class CL\_ABAP\_FORMAT. The top row contains the names of the constants from the class CL\_ABAP\_FORMAT without the prefix "E\_". The other rows show the effect on the characters specified in the first two columns.

This function can be specified in [general](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The return code has the type string.

-   [Rules for Markup Languages (Including JavaScript)](#abenescape-functions-1--------rules-for-url-uris---@ITOC@@ABENESCAPE_FUNCTIONS_2)

-   [Rules for JSON](#abenescape-functions-3--------rules-for-regular-expressions---@ITOC@@ABENESCAPE_FUNCTIONS_4)

-   [Rules for String Templates](#abenescape-functions-5--------rules-for-cross-site-scripting---@ITOC@@ABENESCAPE_FUNCTIONS_6)

Rules for Markup Languages (Including JavaScript)

The program DEMO\_ESCAPE\_MARKUP demonstrates the escape rules for markup languages. Formats with "\_JS" in their name are intended for content with JavaScript components. The following table summarizes the escape rules:

Format

&

<

\>

"

'

TAB

LF

CR

BS

FF

\\

ctrl-char

E\_XML\_TEXT

&amp;

&lt;

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

E\_XML\_ATTR

&amp;

&lt;

\-

&quot;

&apos;

&#9;

&#xA;

&#xD;

\-

\-

\-

\-

E\_XML\_ATTR\_DQ

&amp;

&lt;

\-

&quot;

\-

&#9;

&#xA;

&#xD;

\-

\-

\-

\-

E\_XML\_ATTR\_SQ

&amp;

&lt;

\-

\-

&apos;

&#9;

&#xA;

&#xD;

\-

\-

\-

\-

E\_HTML\_TEXT

&amp;

&lt;

&gt;

\-

\-

\-

\-

\-

\-

\-

\-

\-

E\_HTML\_ATTR

&amp;

&lt;

&gt;

&quot;

&#39;

\-

\-

\-

\-

\-

\-

\-

E\_HTML\_ATTR\_DQ

&amp;

&lt;

&gt;

&quot;

\-

\-

\-

\-

\-

\-

\-

\-

E\_HTML\_ATTR\_SQ

&amp;

&lt;

&gt;

\-

&#39;

\-

\-

\-

\-

\-

\-

\-

E\_HTML\_JS

\-

\-

\-

\\"

\\'

\\t

\\n

\\r

\\b

\\f

\\\\

\\xhh

E\_HTML\_JS\_HTML

&amp;

&lt;

&gt;

&quot;

&#39;

\\t

\\n

\\r

\\b

\\f

\\\\

\\xhh

The first column contains the names of the formats from the class CL\_ABAP\_FORMAT. The other columns show the escape characters that replace the special characters in the first row. None of the other characters are affected. TAB, LF, CR, BS, and FF are the control characters for tabulator, Line Feed, Carriage Return, Backspace, and Form Feed, to which the codes x09, x0A, x0D, x08, and x0C are assigned in 7-Bit ASCII. ctrl-char stands for all control characters with codes less than x20 that are not covered by those characters listed explicitly. Some of these can be converted to \\xhh, where "hh" is the hexadecimal value of the code. If there is no value in a field (-), the special character is not affected.

Example

The result of the following masking is IF a &lt; b.

cl\_demo\_output=>display(
  escape( val    = 'IF a < b.'
          format = cl\_abap\_format=>e\_xml\_text ) ).

Executable Example

[String Functions, escape for HTML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_function_escape_abexa.htm)

Rules for URL/URIs

The program DEMO\_ESCAPE\_URL\_URI demonstrates the escape rules for URLs and URIs. All characters with codes between x00 and 7F are converted to %hh (except for the characters listed in the following table), where hh is the hexadecimal value of the code. In URI\_1 format, quotation marks are not converted to %hh, but are doubled.

Format

Unconverted Characters

E\_URL

\[0-9\], \[a-z\], \[A-Z\], !, $, ', (, ), \*, +, ,, \-, ., \_, &, /, :, ;, \=, ?, @

E\_URL\_FULL

\[0-9\], \[a-z\], \[A-Z\], !, $, ', (, ), \*, +, ,, \-, ., \_

E\_URI

\[0-9\], \[a-z\], \[A-Z\], !, $, ', (, ), \*, +, ,, \-, ., \_, &, /, :, ;, \=, ?, @, ~, #, \[, \]

E\_URI\_FULL

\[0-9\], \[a-z\], \[A-Z\], \-, ., \_, ~

E\_URI\_1

\[0-9\], \[a-z\], \[A-Z\], !, $, (, ), \*, +, ,, \-, ., \_, ;, \=, @, ~, \[, \]

All characters with codes from x80 are converted to their [UTF-8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutf8_glosry.htm "Glossary Entry") representation. Depending on the character, one to four bytes are represented in the form %hh, where hh is the hexadecimal value of a byte.

Example

The result of the following masking is Numbers%3A%201,%202.

cl\_demo\_output=>display(
  escape( val    = 'Numbers: 1, 2'
          format = cl\_abap\_format=>e\_url\_full ) ).

Rules for JSON

The program DEMO\_ESCAPE\_JSON demonstrates the escape rules of the format E\_JSON\_STRING for [JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_glosry.htm "Glossary Entry"). The special characters " and \\ are prefixed with the escape character \\. Control characters with the codes x08, x09, x0A, x0C, and x0D are escaped using \\b, \\t, \\n, \\f, and \\r respectively. All other codes less than x20 are converted to a four-character hexadecimal representation and prefixed by \\u. None of the other characters are affected.

Example

The result of the following masking is This is a backslash:. \\"\\\\\\".

cl\_demo\_output=>display(
  escape( val    = 'This is a backslash: "\\"'
          format = cl\_abap\_format=>e\_json\_string ) ).

Rules for Regular Expressions

The program DEMO\_ESCAPE\_REGEX demonstrates the escape rules of the format E\_REGEX for regular expressions. The [special characters of regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax_specials.htm) are prefixed by the associated escape character \\. Control characters with the codes x08, x09, x0A, x0B, x0C, and x0D are escaped using \\b, \\t, \\n, \\v, \\f, and \\r respectively.

Example

The result of the following masking is "\\." matches one, "\\\*" matches many".

cl\_demo\_output=>display(
  escape( val    = '"." matches one, "\*" matches many"'
          format = cl\_abap\_format=>e\_regex ) ).

Rules for String Templates

The program DEMO\_ESCAPE\_STRING\_TEMPLATE demonstrates the escape rules of the format E\_STRING\_TPL for string templates. The special characters of [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) (|, \\, {, }) are prefixed by the associated escape character \\. Control characters with the codes x09, x0A, and x0D are replaced by \\t, \\n, and \\r respectively.

Example

The result of the following masking is Special characters: \\|, \\\\, \\{, \\}.

cl\_demo\_output=>display(
  escape( val    = 'Special characters: |, \\, {, }'
          format = cl\_abap\_format=>e\_string\_tpl ) ).

Rules for Cross Site Scripting

The program DEMO\_ESCAPE\_XSS demonstrates the escape rules of the formats E\_XSS\_... that enable attacks using Cross Site Scripting ([XSS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxss_glosry.htm "Glossary Entry")) on Web applications to be prevented. Rules exist for XML/HTML content, JavaScript content, Cascading Style Sheets (CSS), and URL content.

The rules for XSS include all the rules for individual formats, plus some extra rules. They are particularly distinct from the rules for markup languages, including JavaScript (see above). These extended rules are designed to be used to protect ABAP programs from Cross Site Scripting, when content can be constructed from non-secure sources. The transformations listed above are replaced or modified as follows:

-   Markup languages: Format E\_XSS\_ML. All characters (except \[0-9\], \[a-z\], \[A-Z\], ,, \-, ., \_, and control characters) are transformed to &#xhh; or &#xhhhh;, where hh or hhhh is the hexadecimal value of the code. All control characters are transformed to &#xfffd;.

-   JavaScript: Format E\_XSS\_JS. All characters (except \[0-9\], \[a-z\], \[A-Z\], ,, ., and \_) are transformed to \\xhh or \\uhhhh, where hh or hhhh is the hexadecimal value of the code.

-   URL/URIs: Format E\_XSS\_URL. All characters (except \[0-9\], \[a-z\], \[A-Z\], \*, \-, ., and \_) are transformed to %hh, where hh is the hexadecimal value of the code. All characters with codes from x80 are converted to their [UTF-8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutf8_glosry.htm "Glossary Entry") representation. Depending on the character, one to four bytes are represented in the form %hh, where hh is the hexadecimal value of a byte.

-   CSS: Format E\_XSS\_CSS. All characters (except \[0-9\], \[a-z\], and \[A-Z\]) are transformed to \\hh or \\hhhh, where hh or hhhh is the hexadecimal value of the code. A blank is inserted after hh or hhhh if the following character is a valid hexadecimal digit.

If the format from the class CL\_ABAP\_FORMAT has the additional ending "\_NU", all characters with codes greater than xFF are converted to a four-character hexadecimal representation, with varying marking depending on the type of the content. The additional ending "\_7B" means 7 bit and also affects characters with codes greater than xFF.

Notes

-   The class CL\_ABAP\_DYN\_PRG contains methods ESCAPE\_XSS\_... that wrap calls of the predefined function escape with the formats E\_XSS\_.... It is generally advisable to use the predefined function directly.

-   escape used with rules for XSS is recommended as protection against cross site scripting, but might not be secure enough in all cases. For example, it may be best to use a whitelist to check an unsafe URL, so that phishing attacks can be detected as well as XSS. To guarantee that no code injections are used, JavaScript should never be created dynamically from unsafe sources.

Example

The result of the following masking is German&#x20;umlauts&#x3a;&#x20;&#x22;&#xe4;&#xf6;&#xfc;&#x22;.

cl\_demo\_output=>display(
  escape( val    = 'German umlauts: "äöü"'
          format = cl\_abap\_format=>e\_xss\_ml ) ).

Executable Example

[String Functions, escape for XSS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_function_esc_xss_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CONVERSION\_CODEPAGE\_EX

-   Cause: A character cannot be converted in a conversion to UTF-8. This can only occur with characters from the [surrogate area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensurrogate_area_glosry.htm "Glossary Entry"). The position and code of the character is specified in the exception object.
    Runtime error: CONVT\_CHARACTER
    

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Invalid value in format.
    Runtime error: STRG\_ILLEGAL\_PAR