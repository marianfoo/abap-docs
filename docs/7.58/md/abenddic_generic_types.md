  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Generic%20Data%20Types%2C%20ABENDDIC_GENERIC_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Generic Data Types

The following table shows the built-in generic DDIC types. A generic data type is like a placeholder that allows different built-in data types.

The following generic data types are available:

Type

Includes the following built-in data types

any

INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34, FLTP, CHAR, NUMC, STRING, SSTRING, RAW, RAWSTRING, DATS, TIMS, CUKY, UNIT, CLNT.

numeric

INT1, INT2, INT4, INT8, DEC, DECFLOAT16, DECFLOAT34.

Hints

-   Generic DDIC data types are currently allowed only for typing parameters in [CDS scalar functions](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry").
-   The generic type any is allowed only in [analytical scalar functions](javascript:call_link\('abencds_ana_scalar_glosry.htm'\) "Glossary Entry"). It is not allowed in [SQL-based scalar functions](javascript:call_link\('abencds_sql_scalar_glosry.htm'\) "Glossary Entry").

Example

The following CDS scalar function uses the built-in generic type numeric to type the input parameter p1. Parameters passed to p1 must have a valid data type. Otherwise, a syntax check error occurs.

DEFINE SCALAR FUNCTION demo\_generic\_ddic\_type
    WITH PARAMETERS
      p1: numeric
    RETURNS TYPE OF p1