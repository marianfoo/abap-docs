  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-based View, sql\_functions](javascript:call_link\('abencds_sql_functions_v1.htm'\)) → 

CDS DDL - DDIC-based View, String Functions

The following table shows the possible [SQL functions](javascript:call_link\('abencds_sql_functions_v1.htm'\)) for character strings in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), plus the requirements made on the arguments.

Function

Result

Valid Argument Types

Result Type

[CONCAT(arg1, arg2)](javascript:call_link\('abensql_functions_string.htm'\))

Concatenates strings in arg1 and arg2. Trailing blanks in arg1, arg2, and in the result are ignored. The maximum length of the result is 1333.

See below

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if an argument has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of the result.

[CONCAT\_WITH\_SPACE(arg1, arg2, spaces )](javascript:call_link\('abensql_functions_string.htm'\))

Concatenates strings in arg1 and arg2 as with CONCAT. The number of blanks specified in spaces is inserted between arg1 and arg2. The maximum length of the result is 1333.

arg1, arg2: see below
spaces: positive [numeric literal](javascript:call_link\('abencds_literal_v1.htm'\)) greater than 0 and less than or equal to 1333

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if an argument has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of the result.

[INSTR(arg, sub)](javascript:call_link\('abensql_functions_string.htm'\))

Position of the first occurrence of the string from sub in arg (case-sensitive). arg respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

arg: see below
sub: non-empty [character literal](javascript:call_link\('abencds_literal_v1.htm'\))

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

[LEFT(arg, len)](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the len left characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_literal_v1.htm'\)) greater than 0 and less than or equal to 1333

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[LENGTH(arg)](javascript:call_link\('abensql_functions_string.htm'\))

Number of characters in arg ignoring trailing blanks

See below

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

[LOWER( arg )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of arg, in which all uppercase letters are transformed to lowercase letters

See below, with the exception of [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg in the length of arg

[LPAD(arg, len, src)](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the right-aligned content of arg without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_literal_v1.htm'\)) greater than 0 and less than or equal to 1333
src: [Character literal](javascript:call_link\('abencds_literal_v1.htm'\))

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[LTRIM(arg, char)](javascript:call_link\('abensql_functions_string.htm'\))

String with the content of arg in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

arg: see below
char: [Character literal](javascript:call_link\('abencds_literal_v1.htm'\)) with length 1

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of arg.

[REPLACE(arg1, arg2, arg3)](javascript:call_link\('abensql_functions_string.htm'\))

String arg1, in which all instances of arg2 are replaced by the content from arg3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333

See below

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg1 or arg3 has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the maximum possible length of the result.

[RIGHT(arg,len)](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_literal_v1.htm'\)) greater than 0 and less than or equal to 1333

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[RPAD(arg, len, src)](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the left-aligned content of arg without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_literal_v1.htm'\)) greater than 0 and less than or equal to 1333
src: [Character literal](javascript:call_link\('abencds_literal_v1.htm'\))

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[RTRIM(arg, char)](javascript:call_link\('abensql_functions_string.htm'\))

String with the content of arg in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

arg: see below
char: [Character literal](javascript:call_link\('abencds_literal_v1.htm'\)) with length 1

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of arg.

[SUBSTRING(arg, pos, len)](javascript:call_link\('abensql_functions_string.htm'\))

Substring arg from the position pos with length len. pos and len must be specified so that the substring is within arg.

arg: see below
pos and len: positive [numeric literals](javascript:call_link\('abencds_literal_v1.htm'\)) not equal to zero

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length of at lest len

[UPPER( arg )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of arg, in which all lowercase letters were transformed to uppercase letters

See below, with the exception of [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg in the length of arg

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_literal_v1.htm'\)) of a suitable type. The literal can be prefixed with the name of a domain.

-   Suitable [fields](javascript:call_link\('abencds_field_v1.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view.

-   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)).

-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)).

-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](javascript:call_link\('abencds_sql_functions_v1.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))

-   Type modifications using [CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\))

The valid argument types for arg, arg1, arg2, and arg3 are [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)),[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)).

In functions where an explicit length len is specified, the actual length of the result is defined when the CDS view is activated and is at least as long as len.

In all functions with the exception of LPAD and RPAD, the trailing blanks of all arguments are removed before the actual processing and the trailing blanks of the result are removed before the return operation. In LPAD and RPAD, the trailing blanks of the argument src are preserved. In the case of UPPER and LOWER, the handling of trailing blanks makes no difference, as the length of the argument is retained.

Hints

-   The characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") of the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") are handled as two characters by the CDS string functions. This must be respected when the length is determined and these characters must not be split by mistake. Functions UPPER and LOWER do not change the character of the surrogate area.

-   In the case of the function REPLACE, it should be noted that the maximum possible length of the result can be slightly greater than the allowed length of 1333. This produces a syntax error. In general, the maximum possible length is calculated by dividing the length of arg1 by the length of arg2, multiplied by the length of arg3.

Example

The following CDS view applies built-in SQL functions for strings in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_STRING uses SELECT to access the view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_STRFUNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sql\_functions\_string
  as select from
    demo\_expressions
    {
      length(            char1               ) as r\_length,
      instr(             char1, 'CD'         ) as r\_instr,
      concat(            char1, char2        ) as r\_concat,
      concat\_with\_space( char1, char2, 10    ) as r\_concat\_with\_space,
      left(              char1, 3            ) as r\_left,
      lower(             char1               ) as r\_lower,
      right(             char2, 3            ) as r\_right,
      lpad(              char1, 10, 'x'      ) as r\_lpad,
      rpad(              char2, 10, 'y'      ) as r\_rpad,
      ltrim(             char1, 'A'          ) as r\_ltrim,
      rtrim(             char1, 'E'          ) as r\_rtrim,
      replace(           char2, 'GHI', 'XXX' ) as r\_replace,
      substring(         char2, 2, 3         ) as r\_substring,
      upper(             char2               ) as r\_upper
    }