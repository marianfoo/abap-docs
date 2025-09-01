---
title: "CDS DDL - CDS View Entity, String Functions"
description: |
  The following table shows the possible SQL functions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_v2.htm) for character strings in a CDS view entity(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm 'Glossary Entry'), plus t
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm"
abapFile: "abencds_sql_functions_character_v2.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "types", "abencds", "sql", "functions", "character"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, sql\_functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20String%20Functions%2C%20ABENCDS_SQL_FUNCTIONS_CHARACTER_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

CDS DDL - CDS View Entity, String Functions

The following table shows the possible [SQL functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_v2.htm) for character strings in a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), plus the requirements made on the arguments.

Function

Result

Valid Argument Types

Result Type

[CONCAT(arg1, arg2)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

Concatenates strings in arg1 and arg2. Trailing blanks in arg1, arg2, and in the result are ignored. The maximum length of the result is 1333.

arg1, arg2: see below

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if an argument has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the length of the result.

[CONCAT\_WITH\_SPACE(arg1, arg2, spaces)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

Concatenates strings in arg1 and arg2 as with CONCAT. The number of blanks specified in spaces is inserted between arg1 and arg2. The maximum length of the result is 1333.

arg1, arg2: see below
spaces: positive [numeric literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) greater than 0. The upper limit of spaces is 1333 minus arg1 and arg2.

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if an argument has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the length of the result.

[INSTR(arg, sub)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

Position of the first occurrence of the string from sub in arg (case-sensitive). arg respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

arg: see below
sub: non-empty [character literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)

[INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

[LEFT(arg, len)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String of the length len with the len left characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

arg: see below
len:
\- positive literals not equal to zero
\- suitable fields of a data source of the current CDS view entity
\- path expressions that identify a suitable field of a data source
\- input parameters from the parameter list
\- reuse expressions using [$projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm)
\- aggregate expressions
\- arithmetic expressions
\- case distinctions
\- cast expressions
\- built-in functions.
The operands must have one of the following data types: INT1, INT2, INT4.

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length len

[LENGTH(arg)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

Number of characters in arg ignoring trailing blanks

arg: see below

[INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

[LOWER(arg)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String with a length of arg, in which all uppercase letters are transformed to lowercase letters

arg: see below, with the exception of [NUMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [DATS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), and [TIMS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

Data type of arg in the length of arg

[LPAD(arg, len, src)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String of the length len with the right-aligned content of arg without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

arg: see below
len: positive [numeric literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) greater than 0 and less than or equal to 1333
src: [Character literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length len

[LTRIM(arg, char)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String with the content of arg in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

arg: see below
char: [Character literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) with length 1

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the length of arg.

[REPLACE(arg1, arg2, arg3)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String arg1, in which all instances of arg2 are replaced by the content from arg3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333.

arg1, arg2, arg3: see below

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg1 or arg3 has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the maximum possible length of the result.

[REPLACE\_REGEXPR(PCRE => pcre,
               VALUE => arg1,
               WITH => arg2,
               RESULT\_LENGTH => res\[,
               OCCURRENCE => occ\]\[,
               CASE\_SENSITIVE => case\]\[,
               SINGLE\_LINE => bool\]\[,
               MULTI\_LINE => bool\]\[,
               UNGREEDY => bool\])](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

A [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pcre is replaced in arg1 with the character string specified in arg2. occ is optional and determines the number of occurrences of pcre to be replaced. By default, all occurrences are replaced. The search is case-sensitive by default, but this can be overridden using the parameter case. Single-line, multiline and ungreedy regular expression matching can be set with the parameter bool.

pcre: [Perl Compatible Regular Expression (PCRE)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry"). [Elementary CDS operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_v2.htm) and [expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) are possible for pcre as long as they return a suitable data type. Suitable data types are CHAR, NUMC, and SSTRING.
Note: pcre is not interpreted in extended mode.
Caution: If pcre is specified as a literal, a backslash (\\) must be escaped using four backslashes (\\\\\\\\). Rules for escaping in CDS literals are described in topic [CDS DDL - CDS View Entity, literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm).
arg1: see below, with the exception of [CLNT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)
arg2: see below, with the exception of [CLNT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)
res: positive [numeric literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) greater than 0 and less than or equal to 1333
occ: Positive [numeric literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) of type [INT1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), or [INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) greater than or equal to 1. Alternatively, ALL can be specified. In this case, all occurrences of the value arg1 are replaced.
case: 'X' or ' '. Alternatively, the [character literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) 'true' or 'false' (case-sensitive), that are internally handled like the values 'X' or ' ', can be used. The default value is 'true'.
bool: 'X' or ' '. Alternatively, the [character literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) 'true' or 'false' (case-sensitive), that are internally handled like the values 'X' or ' ', can be used. The default value is 'false'.

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the maximum possible length of res.

[RIGHT(arg,len)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

arg: see below
len:
\- positive literals not equal to zero
\- suitable fields of a data source of the current CDS view entity
\- path expressions that identify a suitable field of a data source
\- input parameters from the parameter list
\- reuse expressions using $projection
\- aggregate expressions
\- arithmetic expressions
\- case distinctions
\- cast expressions
\- built-in functions.
The operands must have one of the following data types: INT1, INT2, INT4.

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length len

[RPAD(arg, len, src)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String of the length len with the left-aligned content of arg without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

arg: see below
len: positive [numeric literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) greater than 0 and less than or equal to 1333
src: [Character literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length len

[RTRIM(arg, char)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String with the content of arg in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

arg: see below
char: [Character literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) with length 1

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the length of arg.

[SUBSTRING(arg, pos, len)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

Substring arg from the position pos with length len. pos and len must be specified so that the substring is within arg.

arg: see below
pos and len:
\- positive literals not equal to zero
\- suitable fields of a data source of the current CDS view entity
\- path expressions that identify a suitable field of a data source
\- input parameters from the parameter list
\- reuse expressions using [$projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm)
\- aggregate expressions
\- arithmetic expressions
\- case distinctions
\- cast expressions
\- built-in functions.
The operands must have one of the following data types: INT1, INT2, INT4.

[SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) if arg has the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), else [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) or [NUMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length of at lest len

[UPPER(arg)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)

String with a length of arg, in which all lowercase letters are transformed to uppercase letters.

See below, with the exception of [NUMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [DATS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), and [TIMS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

Data type of arg in the length of arg

The following can be specified as the arguments arg:

-   [Literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm) of a suitable type.
-   [Session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm) of a suitable type.
-   Suitable [fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the current CDS view entity.
-   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) that identify a suitable field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm).
-   [Input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v2.htm).
-   [Reuse expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm) using [$projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm)
-   [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm) (if they return a matching type)
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_v2.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v2.htm)
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm)
    -   Type modifications using [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v2.htm)
    -   [Case distinctions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm) using CASE

The valid argument types for arg, arg1, arg2, and arg3 are [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [CLNT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [NUMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [UNIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [DATS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), and [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).

In functions where an explicit length len is specified, the actual length of the result is defined when the CDS view entity is activated and is at least as long as len.

In all functions with the exception of LPAD and RPAD, the trailing blanks of all arguments are removed before the actual processing and the trailing blanks of the result are removed before the return operation. In LPAD and RPAD, the trailing blanks of the argument src are preserved. In the case of UPPER and LOWER, the handling of trailing blanks makes no difference, as the length of the argument stays the same.

Hints

-   The characters in the [surrogate area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensurrogate_area_glosry.htm "Glossary Entry") of the [system code page](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutf16_glosry.htm "Glossary Entry") are handled as two characters by the CDS string functions. This must be respected when the length is determined and these characters must not be split by mistake. Functions UPPER and LOWER do not change the character of the surrogate area.
-   In the case of the function REPLACE, it should be noted that the maximum possible length of the result can be slightly greater than the allowed length of 1333. This produces a syntax error. In general, the maximum possible length is calculated by dividing the length of arg1 by the length of arg2, multiplied by the length of arg3.
-   The function REPLACE\_REGEXPR accesses the PCRE1 library implemented in the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry").
-   In CDS view entities, the function REPLACE\_REGEXPR allows more parameters than the same function in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm) (UNGREEDY, for example). However, this functionality can also be implemented through the [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") syntax itself.

Example

The following CDS view entity applies built-in SQL functions for strings in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_CDS\_SQL\_FUNC\_STRING\_VE uses SELECT to access the view.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_cds\_sql\_func\_string\_ve
  as select from demo\_expressions
{
  length(            char1               ) as r\_length,
  instr(             char1, 'CD'         ) as r\_instr,
  concat(            char1, char2        ) as r\_concat,
  concat\_with\_space( char1, char2, 10    ) as r\_concat\_with\_space,
  left(              char1, 3            ) as r\_left,
  lower(             char1               ) as r\_lower,
  right(             char2, 3            ) as r\_right,
  lpad(              char1, 10, 'x'      ) as r\_lpad,
  rpad(              char2, 10, 'y'      ) as r\_rpad,
  ltrim(             char1, 'A'          ) as r\_ltrim,
  rtrim(             char1, 'E'          ) as r\_rtrim,
  replace\_regexpr(   pcre => '\\\\Cg',
                     value => char2,
                     with => 'bb',
                     result\_length => 4  ) as r\_replace\_regexpr,
  replace(           char2, 'ghi', 'XXX' ) as r\_replace,
  substring(         char2, 2, 3         ) as r\_substring,
  upper(             char2               ) as r\_upper
}