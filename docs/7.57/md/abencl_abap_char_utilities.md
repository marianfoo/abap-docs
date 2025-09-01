  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [System Classes for Character String and Byte String Processing](javascript:call_link\('abencl_abap_string_utilities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Class with Utilities for String Processing, ABENCL_ABAP_CHAR_UTILITIES, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Class with Utilities for String Processing

The class CL\_ABAP\_CHAR\_UTILITIES provides attributes and methods as utilities for string processing.

The components of this class are all static and public and the attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in the class documentation.

Example

The following lines demonstrate that attributes of the class CL\_ABAP\_CHAR\_UTILITIES containing control characters can be replaced by a representation of the [control characters](javascript:call_link\('abenstring_templates_separators.htm'\)) in a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.