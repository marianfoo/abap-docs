  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) → 

SQL Functions for Strings

The following table shows the SQL functions for strings supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

CONCAT( arg1, arg2 )

Concatenates strings in arg1 and arg2. Trailing blanks in arg1, arg2, and in the result are ignored. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

CONCAT\_WITH\_SPACE( arg1, arg2, spaces )

Concatenates strings in arg1 and arg2 as with CONCAT. The number of blanks specified in spaces is inserted between arg1 and arg2. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

INSTR( arg, sub )

Position of the first occurrence of the string from sub in arg (case-sensitive). arg respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LEFT( arg, len )

String of the length len with the len left characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LENGTH( arg )

Number of characters in arg ignoring trailing blanks.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LOWER( arg )

String with a length of arg, in which all uppercase letters are transformed to lowercase letters.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LPAD( arg, len, src )

String of the length len with the right-justified content of arg without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LTRIM( arg, char )

String with the content of arg in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

REPLACE( arg1, arg2, arg3 )

String arg1, in which all instances of arg2 are replaced by the content from arg3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RIGHT( arg, len )

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RPAD( arg, len, src )

String of the length len with the left-justified content of arg without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RTRIM( arg, char )

String with the content of arg in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

SUBSTRING( arg, pos, len )

Substring arg from the position pos with length len. pos and len must be specified so that the substring is within arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

UPPER( arg )

String with a length of arg, in which all lowercase letters were transformed to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [SQL Function UPPER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_function_upper_abexa.htm)