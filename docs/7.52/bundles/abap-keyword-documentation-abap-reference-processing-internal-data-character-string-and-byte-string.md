# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Character String and Byte String Processing / System Classes for Character String and Byte String Processing

Included pages: 5


### abencl_abap_string_utilities.htm

---
title: "System Classes for Character String and Byte String Processing"
description: |
  -   Class for Trailing Blanks(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm) -   Class for Compressing Character Strings and Byte Strings(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm) -   Class with Utilities for String Process
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm"
abapFile: "abencl_abap_string_utilities.htm"
keywords: ["do", "class", "data", "abencl", "abap", "string", "utilities"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) → 

System Classes for Character String and Byte String Processing

-   [Class for Trailing Blanks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm)

-   [Class for Compressing Character Strings and Byte Strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm)

-   [Class with Utilities for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_char_utilities.htm)

-   [Class for Handling Code Pages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm)

Continue
[Class for Trailing Blanks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm)
[Class for Compressing Character Strings and Byte Strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm)
[Class with Utilities for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_char_utilities.htm)
[Class for Handling Code Pages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm)


### abenstring_util.htm

---
title: "Class for Trailing Blanks"
description: |
  The class CL_ABAP_STRING_UTILITIES contains methods for processing text strings(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_string_glosry.htm 'Glossary Entry'). -   C2STR_PRESERVING_BLANKS assigns text fields while preserving the trailing blanks. -   DEL_TRAILING_BLA
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_util.htm"
abapFile: "abenstring_util.htm"
keywords: ["delete", "do", "while", "if", "try", "method", "class", "data", "abenstring", "util"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm) → 

Class for Trailing Blanks

The class CL\_ABAP\_STRING\_UTILITIES contains methods for processing [text strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_string_glosry.htm "Glossary Entry").

-   C2STR\_PRESERVING\_BLANKS assigns text fields while preserving the trailing blanks.

-   DEL\_TRAILING\_BLANKS deletes the trailing blanks from strings.

Note

Tasks like this can now also be performed using statements and predefined functions.

Example

The program compares the method C2STR\_PRESERVING\_BLANKS with the built-in function [shift\_right](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshift_functions.htm). The implementation of the method now consists of nothing more than this function.

DATA(str) = \`abc   \`.
DATA(rslt) = str.
cl\_abap\_string\_utilities=>del\_trailing\_blanks( CHANGING str = rslt ).
ASSERT rslt =  shift\_right( str ).


### abencl_abap_gzip.htm

---
title: "Class for Compressing Character Strings and Byte Strings"
description: |
  These classes offer a range of methods that enable text in text fields or text strings, or binary data in byte fields or byte strings to be compressed or decompressed using GZIP. -   CL_ABAP_GZIP -   CL_ABAP_GZIP_BINARY_STREAM -   CL_ABAP_GZIP_TEXT_STREAM -   CL_ABAP_UNGZIP_BINARY_STRE
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_gzip.htm"
abapFile: "abencl_abap_gzip.htm"
keywords: ["do", "method", "class", "data", "abencl", "abap", "gzip"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm) → 

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


### abencl_abap_char_utilities.htm

---
title: "Class with Utilities for String Processing"
description: |
  The class CL_ABAP_CHAR_UTILITIES provides attributes and methods as utilities for string processing. The components of this class are all static and public. The attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are descri
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_char_utilities.htm"
abapFile: "abencl_abap_char_utilities.htm"
keywords: ["do", "try", "method", "class", "data", "abencl", "abap", "char", "utilities"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm) → 

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public. The attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry").

Example

The following rows demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing control characters can be replaced by a representation of the [control characters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_separators.htm) in a [string template](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_glosry.htm "Glossary Entry") .

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.


### abencl_abap_codepage.htm

---
title: "Class for Handling Code Pages"
description: |
  The class CL_ABAP_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF_ABAP_CODEPAGE enables objects in the class to be accessed. Example Converts the content of a string into its UTF-8 representation. DATA(str) = `...`
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_codepage.htm"
abapFile: "abencl_abap_codepage.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "codepage"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_string_utilities.htm) → 

Class for Handling Code Pages

The class CL\_ABAP\_CODEPAGE contains methods for converting the representation of character strings between different code pages. The interface IF\_ABAP\_CODEPAGE enables objects in the class to be accessed.

Example

Converts the content of a string into its UTF-8 representation.

DATA(str) = \`...\`.
DATA(xstr) = cl\_abap\_codepage=>convert\_to(
               source      = str
               codepage    = \`UTF-8\` ).
