  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_string_utilities.htm) → 

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public, the attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in the class documentation.

Example

The following lines demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing control characters can be replaced by a representation of the [control characters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates_separators.htm) in a [string template](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_glosry.htm "Glossary Entry") .

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.