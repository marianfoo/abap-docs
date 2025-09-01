  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - sql\_functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) → 

ABAP CDS - String Functions

The following table shows the possible [SQL functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) for character strings in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), plus the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\)).

Function

Valid Argument Types

Result Type

[CONCAT(arg1, arg2)](javascript:call_link\('abensql_functions_string.htm'\))

See below

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if an argument has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of the result.

[CONCAT\_WITH\_SPACE(arg1, arg2, spaces )](javascript:call_link\('abensql_functions_string.htm'\))

arg1, arg2: see below
spaces: positive [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than 0 and less than or equal to 1331

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if an argument has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of the result.

[INSTR(arg, sub)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
sub: non-empty [character literal](javascript:call_link\('abencds_f1_literal.htm'\))

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

[LEFT(arg, len)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than 0 and less than or equal to 1333

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[LENGTH(arg)](javascript:call_link\('abensql_functions_string.htm'\))

See below

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

[LOWER( arg )](javascript:call_link\('abensql_functions_string.htm'\))

See below, with the exception of [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg in the length of arg

[LPAD(arg, len, src)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than 0 and less than or equal to 1333
src: [Character literal](javascript:call_link\('abencds_f1_literal.htm'\))

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[LTRIM(arg, char)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
char: [Character literal](javascript:call_link\('abencds_f1_literal.htm'\)) with length 1

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of arg.

[REPLACE(arg1, arg2, arg3)](javascript:call_link\('abensql_functions_string.htm'\))

See below

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg1 or arg3 has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the maximum possible length of the result.

[RIGHT(arg,len)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than 0 and less than or equal to 1333

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[RPAD(arg, len, src)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
len: positive [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than 0 and less than or equal to 1333
src: [Character literal](javascript:call_link\('abencds_f1_literal.htm'\))

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

[RTRIM(arg, char)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
char: [Character literal](javascript:call_link\('abencds_f1_literal.htm'\)) with length 1

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length of arg.

[SUBSTRING(arg, pos, len)](javascript:call_link\('abensql_functions_string.htm'\))

arg: see below
pos and len: positive [numeric literals](javascript:call_link\('abencds_f1_literal.htm'\)) not equal to zero

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) if arg has the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), else [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\))with length of at lest len

[UPPER( arg )](javascript:call_link\('abensql_functions_string.htm'\))

See below, with the exception of [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg in the length of arg

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\)) of a suitable type. The literal can be prefixed with the name of a domain.

-   Suitable [fields](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view.

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   [Input parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)).

-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](javascript:call_link\('abencds_f1_sql_functions.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   Type modifications using [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\))

The valid argument types for arg, arg1, arg2, and arg3 are [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)).

In functions where an explicit length len is specified, the actual length of the result is defined when the CDS view is activated and is at least as long as len.

In all functions with the exception of LPAD and RPAD, the trailing blanks of all arguments are removed before the actual processing and the trailing blanks of the result are removed before the return operation. In LPAD and RPAD, the trailing blanks of the argument src are preserved. In the case of UPPER and LOWER, the handling of trailing blanks makes no difference, as the length of the argument is retained.

Notes

-   The characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") of the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") are handled as two characters by the CDS string functions. This must be respected when the length is determined and these characters must not be split by mistake. Functions UPPER and LOWER do not change the character of the surrogate area.

-   In the case of the function REPLACE, it should be noted that the maximum possible length of the result can be slightly greater than the permitted length of 1333. This produces a syntax error. In general, the maximum possible length is calculated by dividing the length of arg1 by the length of arg2, multiplied by the length of arg3.

Example

The following CDS view applies built-in SQL functions for strings in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_STRING uses SELECT to access the view.

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