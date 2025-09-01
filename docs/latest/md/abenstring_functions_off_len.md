---
title: "Syntax"
description: |
  ... ( ... off = off len = len ...  ) ... Effect off is used to pass an offset(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_glosry.htm 'Glossary Entry') and len is used to pass a length. In functions where both off and len can be passed, they determine the subarea in w
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_off_len.htm"
abapFile: "abenstring_functions_off_len.htm"
keywords: ["do", "if", "try", "class", "data", "abenstring", "functions", "off", "len"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Common Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_common_paras.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20off%2C%20len%2C%20ABENSTRING_FUNCTIONS_OFF_LEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - off, len

Syntax

... ( ... off = off len = len ...  ) ...

Effect

off is used to pass an [offset](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_glosry.htm "Glossary Entry") and len is used to pass a length. In functions where both off and len can be passed, they determine the subarea in which a string is to be processed.

off and len are [numeric expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the type i.

The default value of off is generally 0 and the default value of len is generally the length of the string minus a predefined offset or an offset passed using off. Only if a negative argument is passed for the occurrence [occ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_occ.htm) simultaneously for functions where this is possible, is the default value of off the length of the string and the default value of len the value of the associated offset.

If the value of off or len is negative, an offset defined using off is outside the string, or a subarea defined using off and len is not completely contained in the string, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

Example

The result of the following function calls is 17 and 12.

FINAL(result1) = count( val   = \`Intro: blahblahblah\`
                       pcre  = \`\\w\` ).
FINAL(result2) = count( val   = \`Intro: blahblahblah\`
                       pcre = \`\\w\` off = 6 ).