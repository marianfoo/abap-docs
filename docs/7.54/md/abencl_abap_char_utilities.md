---
title: "Class with Utilities for String Processing"
description: |
  The class CL_ABAP_CHAR_UTILITIES provides attributes and methods as utilities for string processing. The components of this class are all static and public. The attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are descri
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_char_utilities.htm"
abapFile: "abencl_abap_char_utilities.htm"
keywords: ["do", "try", "method", "class", "data", "abencl", "abap", "char", "utilities"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_string_utilities.htm) → 

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public. The attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in the class documentation.

Example

The following rows demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing control characters can be replaced by a representation of the [control characters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_separators.htm) in a [string template](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_glosry.htm "Glossary Entry") .

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.