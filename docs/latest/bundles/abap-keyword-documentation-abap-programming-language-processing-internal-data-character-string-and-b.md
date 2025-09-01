# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Character String and Byte String Processing / System Classes for Character String and Byte String Processing

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencl_abap_string_utilities.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_string_utilities.htm)
- [abenstring_util.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_util.htm)
- [abencl_abap_gzip.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_gzip.htm)
- [abencl_abap_char_utilities.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_char_utilities.htm)
- [abencl_abap_conv_codepage.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_conv_codepage.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.936Z

---

### abencl_abap_string_utilities.htm

> **📖 Official SAP Documentation**: [abencl_abap_string_utilities.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_string_utilities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Classes%20for%20Character%20String%20and%20Byte%20String%20Processing%2C%20ABENCL_ABAP_STRING_UTILITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion%20for%20improvement:)

System Classes for Character String and Byte String Processing

-   [Class for Trailing Blanks](javascript:call_link\('abenstring_util.htm'\))
-   [Class for Compressing Character Strings and Byte Strings](javascript:call_link\('abencl_abap_gzip.htm'\))
-   [Class with Utilities for String Processing](javascript:call_link\('abencl_abap_char_utilities.htm'\))
-   [Methods for Handling Code Pages](javascript:call_link\('abencl_abap_conv_codepage.htm'\))

Continue
[Class for Trailing Blanks](javascript:call_link\('abenstring_util.htm'\))
[Class for Compressing Character Strings and Byte Strings](javascript:call_link\('abencl_abap_gzip.htm'\))
[Class with Utilities for String Processing](javascript:call_link\('abencl_abap_char_utilities.htm'\))
[Methods for Handling Code Pages](javascript:call_link\('abencl_abap_conv_codepage.htm'\))



**📖 Source**: [abencl_abap_string_utilities.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_string_utilities.htm)

### abenstring_util.htm

> **📖 Official SAP Documentation**: [abenstring_util.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_util.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Class%20for%20Trailing%20Blanks%2C%20ABENSTRING_UTIL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Class for Trailing Blanks

The class CL\_ABAP\_STRING\_UTILITIES contains methods for processing [text strings](javascript:call_link\('abentext_string_glosry.htm'\) "Glossary Entry").

-   C2STR\_PRESERVING\_BLANKS assigns text fields while preserving the trailing blanks.
-   DEL\_TRAILING\_BLANKS deletes the trailing blanks from strings.

Hint

Tasks like this can now also be performed using statements and built-in functions.

Example

The program compares the method C2STR\_PRESERVING\_BLANKS with the built-in function [shift\_right](javascript:call_link\('abenshift_functions.htm'\)). The implementation of the method now consists of nothing more than this function.

FINAL(str) = \`abc   \`.
DATA(rslt) = str.
cl\_abap\_string\_utilities=>del\_trailing\_blanks( CHANGING str = rslt ).
ASSERT rslt =  shift\_right( str ).



**📖 Source**: [abenstring_util.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_util.htm)

### abencl_abap_gzip.htm

> **📖 Official SAP Documentation**: [abencl_abap_gzip.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_gzip.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Class%20for%20Compressing%20Character%20Strings%20and%20Byte%20Strings%2C%20ABENCL_ABAP_GZIP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

Class for Compressing Character Strings and Byte Strings

These classes offer a range of methods that enable text in text fields or text strings, or binary data in byte fields or byte strings to be compressed or decompressed using GZIP.

-   CL\_ABAP\_GZIP
-   CL\_ABAP\_GZIP\_BINARY\_STREAM
-   CL\_ABAP\_GZIP\_TEXT\_STREAM
-   CL\_ABAP\_UNGZIP\_BINARY\_STREAM
-   CL\_ABAP\_UNGZIP\_TEXT\_STREAM

For more information, see the individual classes and methods.

Example

Compression and decompression of text.

DATA zip TYPE xstring.
cl\_abap\_gzip=>compress\_text(
  EXPORTING text\_in  = \`Hello!\`
  IMPORTING gzip\_out = zip ).
DATA txt TYPE string.
cl\_abap\_gzip=>decompress\_text(
  EXPORTING gzip\_in  = zip
  IMPORTING text\_out = txt ).
ASSERT txt = \`Hello!\`.



**📖 Source**: [abencl_abap_gzip.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_gzip.htm)

### abencl_abap_char_utilities.htm

> **📖 Official SAP Documentation**: [abencl_abap_char_utilities.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_char_utilities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Class%20with%20Utilities%20for%20String%20Processing%2C%20ABENCL_ABAP_CHAR_UTILITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public and the attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in the class documentation.

Example

The following lines demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing [control characters](javascript:call_link\('abencontrol_character_glosry.htm'\) "Glossary Entry") can be replaced by a representation of the [control characters](javascript:call_link\('abenstring_templates_separators.htm'\)) in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.



**📖 Source**: [abencl_abap_char_utilities.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_char_utilities.htm)

### abencl_abap_conv_codepage.htm

> **📖 Official SAP Documentation**: [abencl_abap_conv_codepage.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_conv_codepage.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencl_abap_conv_codepage.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_conv_codepage.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Methods%20for%20Handling%20Code%20Pages%2C%20ABENCL_ABAP_CONV_CODEPAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Methods for Handling Code Pages

The methods CONVERT of the interfaces IF\_ABAP\_CONV\_OUT and IF\_ABAP\_CONV\_IN of objects created with the class CL\_ABAP\_CONV\_CODEPAGE make it possible to convert strings to the binary representation of various code pages and vice versa.

Example

Conversion of the content of a string into its UTF-8 representation. The value UTF-8 is the default value for the parameter CODEPAGE and can also be omitted. The statement [ASSERT](javascript:call_link\('abapassert.htm'\)) shows that the reverse conversion creates the original text again.

FINAL(str) = \`Blah blah ...\`.
FINAL(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\`
    )->convert( source = str ).
ASSERT
  cl\_abap\_conv\_codepage=>create\_in( codepage = \`UTF-8\`
    )->convert( source = xstr ) = str.
