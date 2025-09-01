  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Shared Parameters](javascript:call_link\('abenstring_functions_common_paras.htm'\)) → 

string\_func - off, len

Syntax

... ( ... off = off len = len ...  ) ...

Effect

off is used to pass an [offset](javascript:call_link\('abenoffset_glosry.htm'\) "Glossary Entry") and len is used to pass a length. In functions where both off and len can be passed, they determine the subarea in which a string is to be processed.

off and len are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with the type i.

The default value of off is generally 0 and the default value of len is generally the length of the string minus a predefined offset or an offset passed using off. Only if a negative argument is passed for the occurrence [occ](javascript:call_link\('abenstring_functions_occ.htm'\)) simultaneously for functions where this is possible, is the default value of off the length of the string and the default value of len the value of the associated offset.

If the value of off or len is negative, an offset defined using off is outside the string, or a subarea defined using off and len is not completely contained in the string, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

Example

The result of the following function calls is 17 and 12.

DATA(result1) = count( val   = \`Intro: blahblahblah\`
                       pcre  = \`\\w\` ).
DATA(result2) = count( val   = \`Intro: blahblahblah\`
                       regex = \`\\w\` off = 6 ).