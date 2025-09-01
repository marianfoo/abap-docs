  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.57](javascript:call_link\('abennews-757.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.57%2C%20ABENNEWS-757-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL in ABAP Release 7.57

[1\. Support for ORDER BY in the ABAP SQL Engine](#!ABAP_MODIFICATION_1@1@)
[2\. String Functions Processed by the ABAP SQL Engine](#!ABAP_MODIFICATION_2@2@)
[3\. Table Buffering for Decimal Floating Point Calculations](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Support for ORDER BY in the ABAP SQL Engine

The [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry") fully supports the [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause now:

-   ORDER BY does not bypass [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") any more. Before, it bypassed table buffering in cases where single columns were specified as sort keys and these columns were not a left-aligned subset of the primary key in the correct order or if the addition DESCENDING was specified for a column.
-   ORDER BY can now be used with [SELECT FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) without transporting the internal table to the database. This allows looping over an internal table in a sequence defined by ORDER BY and sorting internal tables by expressions.

Modification 2   

String Functions Processed by the ABAP SQL Engine

The [string functions](javascript:call_link\('abensql_string_func.htm'\)) LEFT, LOWER, RIGHT, UPPER and SUBSTRING can be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)) now. They do not bypass [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") any more and do not cause the transport of an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) to the database. While LEFT, LOWER, RIGHT, UPPER where not supported at all, SUBSTRING was supported under certain conditions.

Modification 3   

Table Buffering for Decimal Floating Point Calculations

Calculations for built-in types [DECFLOAT16](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2) and [DF16\_DEC](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2) do not bypass the table buffering any more. The calculation in the table buffer is done with the respective decimal floating point arithmetic. The following differences to ABAP and to the database must be considered:

-   In ABAP, the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") for decfloat16 is decfloat34.
-   On the database, built-in type DF16\_DEC is handled as a packed number.

Both can lead to different results.