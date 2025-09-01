---
title: "Class with Utilities for String Processing"
description: |
  The class CL_ABAP_CHAR_UTILITIES provides attributes and methods as utilities for string processing. The components of this class are all static and public and the attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are des
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_char_utilities.htm"
abapFile: "abencl_abap_char_utilities.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abencl", "abap", "char", "utilities"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [System Classes for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_string_utilities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Class%20with%20Utilities%20for%20String%20Processing%2C%20ABENCL_ABAP_CHAR_UTILITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public and the attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in the class documentation.

Example

The following lines demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") can be replaced by a representation of the [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_separators.htm) in a [string template](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_glosry.htm "Glossary Entry").

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.