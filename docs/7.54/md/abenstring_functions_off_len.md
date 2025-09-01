---
title: "Syntax"
description: |
  ... ( ... off = off len = len ...  ) ... Effect off is used to pass an offset(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_glosry.htm 'Glossary Entry') and len is used to pass a length. In functions where both off and len can be passed, they determine the substring in whic
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_off_len.htm"
abapFile: "abenstring_functions_off_len.htm"
keywords: ["do", "if", "try", "class", "data", "abenstring", "functions", "off", "len"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Common Parameters of Character String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_common_paras.htm) → 

off, len - Offset and Length

Syntax

... ( ... off = off len = len ...  ) ...

Effect

off is used to pass an [offset](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_glosry.htm "Glossary Entry") and len is used to pass a length. In functions where both off and len can be passed, they determine the substring in which a string is to be edited.

off and len are [numeric expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the type i.

The default value of off is generally 0 and the default value of len is generally the length of the string minus a specified offset or an offset passed using off. Only in functions where a negative argument is passed for the occurrence [occ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_occ.htm) (where possible) is the default value of off the length of the string and the default value of len the value of the associated offset.

If the value of off or len is negative, an offset defined using off is outside the string, or a substring defined using off and len is not fully contained in the string, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

Example

The result of the following function calls is 17 and 12.

DATA(result1) = count( val = \`Intro: blahblahblah\` regex = \`\\w\` ).
DATA(result2) = count( val = \`Intro: blahblahblah\` regex = \`\\w\` off = 6 ).