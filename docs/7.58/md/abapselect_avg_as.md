  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\)) →  [sql\_agg - agg\_func](javascript:call_link\('abensql_agg_func.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_agg%20-%20AVG%2C%20AS%2C%20ABAPSELECT_AVG_AS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_agg - AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* [col](javascript:call_link\('abenabap_sql_columns.htm'\)) AS dtype ) ...

Effect

Aggregate function [AVG](javascript:call_link\('abensql_agg_func.htm'\)) in ABAP SQL with a data type dtype specified. The data type determines the result type in which the average value is returned. The data type of col must be numeric and have one of the types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)). The addition AS cannot yet be used for all types for [decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

The data type dtype can have the built-in numeric type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)). The data type FLTP, however, can only be specified for operands of type FLTP. The data type dtype can be specified as follows:

-   DEC( len,decimals )
-   CURR( len,decimals )
-   QUAN( len,decimals )
-   D16N for DECFLOAT16
-   D34N for DECFLOAT34
-   FLTP

Length and decimal places must be specified with len and decimals. [Literals](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constants](javascript:call_link\('abenabap_sql_host_variables.htm'\)) of the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 can be specified for len and decimals. The value range of the data type dtype must cover the value range of the operand type:

-   If col is an integer type, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.
-   If col has type DEC, CURR, QUAN, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits and decimal places.
-   If col has type FLTP, this type must also be specified for dtype.

The data types DECFLOAT16 and DECFLOAT34 can be used for all allowed data types of col except FLTP. If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

Hints

-   The addition AS to AVG bridges the gap for average values where the default result type FLTP cannot be cast to other numeric data types with [CAST](javascript:call_link\('abensql_cast.htm'\)).
-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.
-   An aggregate expression AVG cannot be applied to operands with the data type INT8 without using the addition AS. The addition AS can also be used to form average values for columns with data type INT8. However, for the types [DF16\_...](javascript:call_link\('abenddic_builtin_types.htm'\)), [DF34\_...](javascript:call_link\('abenddic_builtin_types.htm'\)), AVG is only possible without the addition AS.
-   The actual calculation of the average value depending on the involved data types is platform dependent. This can lead to platform-dependent underflows, overflows and corresponding exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is calculated should be within the value range of dtype.
-   If FLTP is specified explicitly for operands of type FLTP, this ensures that the result of AVG actually has this type at each operand position, which cannot be guaranteed otherwise.
-   If used, D16N or D34N force the [strict mode of the syntax check from ABAP release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Example

Application of the aggregate function AVG to a column of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_SQL\_AVG implements this access to the table and can be executed to show the result.

SELECT
  FROM demo\_expressions
  FIELDS
    AVG(          num1                ) AS avg\_no\_type,
    AVG( DISTINCT num1                ) AS avg\_no\_type\_distinct,
    AVG(          num1 AS DEC( 10,0 ) ) AS avg\_dec0,
    AVG( DISTINCT num1 AS DEC( 10,0 ) ) AS avg\_dec0\_distinct,
    AVG(          num1 AS DEC( 14,4 ) ) AS avg\_dec4,
    AVG( DISTINCT num1 AS DEC( 14,4 ) ) AS avg\_dec4\_distinct
  INTO @FINAL(result).