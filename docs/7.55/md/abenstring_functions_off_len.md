  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) →  [string\_func - Shared Parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_common_paras.htm) → 

string\_func - off, len

Syntax

... ( ... off = off len = len ...  ) ...

Effect

off is used to pass an [offset](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_glosry.htm "Glossary Entry") and len is used to pass a length. In functions where both off and len can be passed, they determine the subarea in which a string is to be processed.

off and len are [numeric expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the type i.

The default value of off is generally 0 and the default value of len is generally the length of the string minus a predefined offset or an offset passed using off. Only if a negative argument is passed for the occurrence [occ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_occ.htm) simultaneously for functions where this is possible, is the default value of off the length of the string and the default value of len the value of the associated offset.

If the value of off or len is negative, an offset defined using off is outside the string, or a subarea defined using off and len is not completely contained in the string, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

Example

The result of the following function calls is 17 and 12.

DATA(result1) = count( val   = \`Intro: blahblahblah\`
                       pcre  = \`\\w\` ).
DATA(result2) = count( val   = \`Intro: blahblahblah\`
                       regex = \`\\w\` off = 6 ).