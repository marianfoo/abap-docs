  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20escape%2C%20ABENESCAPE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - escape

Syntax

... escape( [val = text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) format = format ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) returns the content of the character string in [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm), and escapes certain special characters with escape characters according to a rule specified in format.

The possible values of format are defined as constants with the prefix E\_ in the class CL\_ABAP\_FORMAT. Each value defines which special characters are replaced, and how. There are rules for special characters in markup languages (XML and HTML), in URIs and URLs, in JSON, as well as in regular expressions and string templates. It is also important to prevent attacks using Cross Site Scripting (XSS) on Web applications.

format expects data objects of the type i. An invalid value for format raises an exception of the class CX\_SY\_STRG\_PAR\_VAL. For all characters whose codes are between x00 and xFF, the program DEMO\_ESCAPE demonstrates the effect of all associated formats from the class CL\_ABAP\_FORMAT. The top line contains the names of the constants from the class CL\_ABAP\_FORMAT without the prefix E\_. The remaining lines show the effect on the characters specified in the first two columns.

This function can be specified in [general](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The return value has the type string.

-   [Rules for Markup Languages (Including JavaScript)](#@@ITOC@@ABENESCAPE_FUNCTIONS_1)
-   [Rules for URLs and URIs](#@@ITOC@@ABENESCAPE_FUNCTIONS_2)
-   [Rules for JSON](#@@ITOC@@ABENESCAPE_FUNCTIONS_3)
-   [Rules for Regular Expressions](#@@ITOC@@ABENESCAPE_FUNCTIONS_4)
-   [Rules for String Templates](#@@ITOC@@ABENESCAPE_FUNCTIONS_5)
-   [Rules for Cross Site Scripting](#@@ITOC@@ABENESCAPE_FUNCTIONS_6)

Rules for Markup Languages (Including JavaScript)   

The program DEMO\_ESCAPE\_MARKUP demonstrates the replacement rules for markup languages. Formats with \_JS in their name are intended for content with JavaScript components. The following table summarizes the replacement rules:

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

The first column contains the names of the formats from the class CL\_ABAP\_FORMAT. The remaining columns show the escape characters that replace the special characters in the first line. All other characters remain unchanged. TAB, LF, CR, BS, and FF are the [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") for tabulator, Line Feed, Carriage Return, Backspace, and Form Feed, to which the codes x09, x0A, x0D, x08, and x0C are assigned in 7-Bit ASCII. ctrl-char stands for all [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") with codes less than x20 that are not covered by those characters listed explicitly. Some of these can be converted to \\xhh, where hh is the hexadecimal value of the code. If there is no value in a field (-), the special character remains unchanged.

Example

The result of the following escaping is IF a &lt; b.

cl\_demo\_output=>display(
  escape( val    = 'IF a < b.'
          format = cl\_abap\_format=>e\_xml\_text ) ).

Executable Example

[String Functions, escape for HTML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_function_escape_abexa.htm)

Rules for URLs and URIs   

The program DEMO\_ESCAPE\_URL\_URI demonstrates the replacement rules for URLs and URIs. All characters with codes between x00 and 7F are converted to %hh, except for the characters listed in the following table, where hh is the hexadecimal value of the code. In URI\_1 format, quotation marks are not converted to %hh, but are doubled.

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

All characters with codes from x80 are converted to their [UTF-8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf8_glosry.htm "Glossary Entry") representation. Depending on the character, one to four bytes are represented in the form %hh, where hh is the hexadecimal value of a byte.

Example

The result of the following escaping is Numbers%3A%201,%202.

cl\_demo\_output=>display(
  escape( val    = 'Numbers: 1, 2'
          format = cl\_abap\_format=>e\_url\_full ) ).

Rules for JSON   

The program DEMO\_ESCAPE\_JSON demonstrates the replacement rules of the format E\_JSON\_STRING for [JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_glosry.htm "Glossary Entry"). The special characters " and \\ are prefixed with the escape character \\. [Control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") with the codes x08, x09, x0A, x0C, and x0D are escaped using \\b, \\t, \\n, \\f, and \\r respectively. All other characters with codes less than x20 are converted to a four-character hexadecimal representation and prefixed by \\u. None of the other characters are affected.

Example

The result of the following escaping is This is a backslash:. \\"\\\\\\".

cl\_demo\_output=>display(
  escape( val    = 'This is a backslash: "\\"'
          format = cl\_abap\_format=>e\_json\_string ) ).

Rules for Regular Expressions   

There are different formats for the different flavors of [regular expression syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_syntax.htm) supported by ABAP. The program DEMO\_ESCAPE\_REGEX demonstrates the replacement rules for the formats E\_PCRE (PCRE regular expressions), E\_PCRE\_EXTENDED (PCRE regular expressions, compiled in extended mode), and E\_REGEX (POSIX regular expressions, obsolete). The special characters of regular expressions are prefixed by the associated escape character \\. [Control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") with codes such as x08, x09, x0A, x0B, x0C, and x0D are replaced by the special characters as \\b, \\t, \\n, \\v, \\f, and \\r respectively.

Example

The result of the following escaping is "\\." matches one, "\\\*" matches many".

cl\_demo\_output=>display(
  escape( val    = '"." matches one, "\*" matches many"'
          format = cl\_abap\_format=>e\_pcre ) ).

Rules for String Templates   

The program DEMO\_ESCAPE\_STRING\_TEMPLATE demonstrates the replacement rules of the format E\_STRING\_TPL for string templates. The special characters of [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) (|, \\, {, }) are prefixed by the associated escape character \\. [Control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") with the codes x09, x0A, and x0D are replaced by \\t, \\n, and \\r respectively.

Example

The result of the following escaping is Special characters: \\|, \\\\, \\{, \\}.

cl\_demo\_output=>display(
  escape( val    = 'Special characters: |, \\, {, }'
          format = cl\_abap\_format=>e\_string\_tpl ) ).

Rules for Cross Site Scripting   

The program DEMO\_ESCAPE\_XSS demonstrates the replacement rules of the formats E\_XSS\_... The escaping prevents attacks using Cross Site Scripting ([XSS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxss_glosry.htm "Glossary Entry")) on Web applications. There are rules for XML/HTML content, JavaScript content, Cascading Style Sheets (CSS), and URL content.

The rules for XSS include all the rules for individual formats and go beyond these. They are particularly distinct from the rules for markup languages, including JavaScript (see above). These extended rules should be used to protect ABAP programs from Cross Site Scripting, when content is constructed from unsafe sources. The transformations listed above are replaced or enhanced as follows:

-   Markup languages: Format E\_XSS\_ML. All characters except \[0-9\], \[a-z\], \[A-Z\], ,, \-, ., \_, and [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") are transformed to &#xhh; or &#xhhhh;, where hh or hhhh is the hexadecimal value of the code. All [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") are transformed to &#xfffd;.
-   JavaScript: Format E\_XSS\_JS. All characters except \[0-9\], \[a-z\], \[A-Z\], ,, ., and \_ are transformed to \\xhh or \\uhhhh, where hh or hhhh is the hexadecimal value of the code.
-   URLs and URIs: Format E\_XSS\_URL. All characters except \[0-9\], \[a-z\], \[A-Z\], \*, \-, ., and \_ are transformed to %hh, where hh is the hexadecimal value of the code. All characters with codes from x80 are converted to their [UTF-8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf8_glosry.htm "Glossary Entry") representation. Depending on the character, one to four bytes are represented in the form %hh, where hh is the hexadecimal value of a byte.
-   CSS: Format E\_XSS\_CSS. All characters except \[0-9\], \[a-z\], and \[A-Z\] are transformed to \\hh or \\hhhh, where hh or hhhh is the hexadecimal value of the code. A blank is inserted after hh or hhhh if the following character is a valid hexadecimal digit.

If the format from the class CL\_ABAP\_FORMAT has the additional ending \_NU, all characters with codes greater than xFF are converted to a four-character hexadecimal representation, which is identified differently depending on the type of the content. The additional ending "\_7B" means 7 bit and also affects characters with codes greater than xFF.

Hints

-   The class CL\_ABAP\_DYN\_PRG contains methods ESCAPE\_XSS\_... that wrap calls of the built-in function escape with the formats E\_XSS\_.... It is generally advisable to use the built-in function directly.
-   escape used with rules for XSS is recommended as protection against cross site scripting, but might not be sufficient in some cases. For example, it may be best to use an include list to check an unsafe URL, so that phishing attacks can be detected in addition to XSS. To completely prevent code injections, JavaScript should never be created dynamically from unsafe sources.

Example

The result of the following escaping is German#x3a;#x22;#xf6;#x22;.

cl\_demo\_output=>display(
  escape( val    = 'German umlauts: "äöü"'
          format = cl\_abap\_format=>e\_xss\_ml ) ).

Executable Example

[String Functions, escape for XSS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_function_esc_xss_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_CODEPAGE\_EX

-   Cause: A character cannot be converted in a conversion to UTF-8. This can only occur with characters from the [surrogate area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensurrogate_area_glosry.htm "Glossary Entry"). The position and code of the character is specified in the exception object.
    Runtime error: CONVT\_CHARACTER

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Invalid value in format.
    Runtime error: STRG\_ILLEGAL\_PAR