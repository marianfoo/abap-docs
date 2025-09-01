# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Built-In Functions / ABAP CDS - sql_functions

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_sql_functions.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions.htm)
- [abencds_f1_sql_functions_numeric.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_numeric.htm)
- [abencds_f1_sql_functions_character.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_character.htm)
- [abencds_f1_coalesce_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.134Z

---

### abencds_f1_sql_functions.htm

> **📖 Official SAP Documentation**: [abencds_f1_sql_functions.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) → 

ABAP CDS - sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](javascript:call_link\('abensql_function_glosry.htm'\) "Glossary Entry") in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). For passed arguments arg1, arg2, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\))

-   [String functions](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))

-   [Coalesce function](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))

If an argument contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result is always the null value (except in the [Coalesce function](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))). If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[ABAP CDS - Numeric Functions](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\))
[ABAP CDS - String Functions](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))
[ABAP CDS - coalesce](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))



**📖 Source**: [abencds_f1_sql_functions.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions.htm)

### abencds_f1_sql_functions_numeric.htm

> **📖 Official SAP Documentation**: [abencds_f1_sql_functions_numeric.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_numeric.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - sql\_functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) → 

ABAP CDS - Numeric Functions

The following table shows the possible numeric [SQL functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), plus the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Numeric Values](javascript:call_link\('abensql_functions_numeric.htm'\)).

Function

Valid Argument Types

Result Type

[ABS(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg

[CEIL(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) (if arg is of type INT8)

[DIV(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) without decimal places.

Data type arg1, where [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) are implemented after [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

[DIVISION(arg1, arg2, dec)](javascript:call_link\('abensql_functions_numeric.htm'\))

arg1, arg2: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))
dec: integer [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than or equal to 0 and not greater than the maximum value of 6 and the length of arg2 plus the number of decimal places of arg1 plus 1

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with dec decimal places. The length of the result is the length of arg1 minus the decimal places in arg1 plus the decimal places in arg2 plus dec. This value must not be greater than 31.

[FLOOR(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg for the integer types, else [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) without decimal places

[MOD(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg1

[ROUND(arg, pos)](javascript:call_link\('abensql_functions_numeric.htm'\))

arg: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))
pos: [Literal](javascript:call_link\('abencds_f1_literal.htm'\)), field of a data source or [input parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) of type [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), or [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type arg: here [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) and [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) are implemented after [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\)) of a suitable type. The literal can be prefixed with the name of a domain.

-   Suitable [fields](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view.

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   [Input parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)).

-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](javascript:call_link\('abencds_f1_sql_functions.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   Type modifications using [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\))

Note

The SQL functions [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)) behave differently with respect to the signs than the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](javascript:call_link\('abenarith_operators.htm'\)), on the other hand, only produces positive results. See [Example](javascript:call_link\('abensql_functions_numeric.htm'\)).

Example

The following CDS view applies built-in numeric SQL functions in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_NUM uses SELECT to access the view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_NUMFUNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sql\_functions\_num
  as select from
    demo\_expressions
    {
      abs(       num1          ) as r\_abs,
      ceil(      fltp1         ) as r\_ceil,
      floor(     dec1          ) as r\_floor,
      div(       num1, num2    ) as r\_div,
      mod(       num1, num2    ) as r\_mod,
      division(  dec2, dec3, 3 ) as r\_division,
      round(     dec3, 2       ) as r\_round
    }



**📖 Source**: [abencds_f1_sql_functions_numeric.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_numeric.htm)

### abencds_f1_sql_functions_character.htm

> **📖 Official SAP Documentation**: [abencds_f1_sql_functions_character.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_character.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

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

Note

The characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") of the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") are handled as two characters by the CDS string functions. This must be respected when the length is determined and these characters must not be split by mistake. The functions UPPER and LOWER do not change the character of the surrogate area.

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



**📖 Source**: [abencds_f1_sql_functions_character.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_character.htm)

### abencds_f1_coalesce_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_coalesce_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_coalesce_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - sql\_functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) → 

ABAP CDS - coalesce

Syntax

... COALESCE( arg1, arg2 ) ...

Effect

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The coalesce function returns the value of the argument arg1 (if this is not the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry")), else it returns the value of the argument arg2. The arguments can be literals, fields of a data source, input parameters, built-in functions, or expressions of data types [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), [SSTR](javascript:call_link\('abenddic_builtin_types.htm'\)), [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), or [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) or [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data types of both arguments must either match of the data type of one argument must represent the full value of the other data type. The result has the dictionary type of the argument with the greater value range.
