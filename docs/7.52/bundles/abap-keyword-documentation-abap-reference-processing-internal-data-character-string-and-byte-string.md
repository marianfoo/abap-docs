# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Character String and Byte String Processing / System Classes for Character String and Byte String Processing

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencl_abap_string_utilities.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm)
- [abenstring_util.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm)
- [abencl_abap_gzip.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm)
- [abencl_abap_char_utilities.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_char_utilities.htm)
- [abencl_abap_codepage.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.490Z

---

### abencl_abap_string_utilities.htm

> **📖 Official SAP Documentation**: [abencl_abap_string_utilities.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) → 

System Classes for Character String and Byte String Processing

-   [Class for Trailing Blanks](javascript:call_link\('abenstring_util.htm'\))

-   [Class for Compressing Character Strings and Byte Strings](javascript:call_link\('abencl_abap_gzip.htm'\))

-   [Class with Utilities for String Processing](javascript:call_link\('abencl_abap_char_utilities.htm'\))

-   [Class for Handling Code Pages](javascript:call_link\('abencl_abap_codepage.htm'\))

Continue
[Class for Trailing Blanks](javascript:call_link\('abenstring_util.htm'\))
[Class for Compressing Character Strings and Byte Strings](javascript:call_link\('abencl_abap_gzip.htm'\))
[Class with Utilities for String Processing](javascript:call_link\('abencl_abap_char_utilities.htm'\))
[Class for Handling Code Pages](javascript:call_link\('abencl_abap_codepage.htm'\))



**📖 Source**: [abencl_abap_string_utilities.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm)

### abenstring_util.htm

> **📖 Official SAP Documentation**: [abenstring_util.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

Class for Trailing Blanks

The class CL\_ABAP\_STRING\_UTILITIES contains methods for processing [text strings](javascript:call_link\('abentext_string_glosry.htm'\) "Glossary Entry").

-   C2STR\_PRESERVING\_BLANKS assigns text fields while preserving the trailing blanks.

-   DEL\_TRAILING\_BLANKS deletes the trailing blanks from strings.

Note

Tasks like this can now also be performed using statements and predefined functions.

Example

The program compares the method C2STR\_PRESERVING\_BLANKS with the built-in function [shift\_right](javascript:call_link\('abenshift_functions.htm'\)). The implementation of the method now consists of nothing more than this function.

DATA(str) = \`abc   \`.
DATA(rslt) = str.
cl\_abap\_string\_utilities=>del\_trailing\_blanks( CHANGING str = rslt ).
ASSERT rslt =  shift\_right( str ).



**📖 Source**: [abenstring_util.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm)

### abencl_abap_gzip.htm

> **📖 Official SAP Documentation**: [abencl_abap_gzip.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

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



**📖 Source**: [abencl_abap_gzip.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm)

### abencl_abap_char_utilities.htm

> **📖 Official SAP Documentation**: [abencl_abap_char_utilities.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_char_utilities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public. The attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry").

Example

The following rows demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing control characters can be replaced by a representation of the [control characters](javascript:call_link\('abenstring_templates_separators.htm'\)) in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") .

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.



**📖 Source**: [abencl_abap_char_utilities.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_char_utilities.htm)

### abencl_abap_codepage.htm

> **📖 Official SAP Documentation**: [abencl_abap_codepage.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencl_abap_codepage.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

Class for Handling Code Pages

The class CL\_ABAP\_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF\_ABAP\_CODEPAGE enables objects in the class to be accessed.

Example

Converts the content of a string into its UTF-8 representation.

DATA(str) = \`...\`.
DATA(xstr) = cl\_abap\_codepage=>convert\_to(
               source      = str
               codepage    = \`UTF-8\` ).
