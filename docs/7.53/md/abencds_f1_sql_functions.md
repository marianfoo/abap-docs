  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_builtin_functions.htm) → 

ABAP CDS - sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_function_glosry.htm "Glossary Entry") in a [SELECT statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"). For passed arguments arg1, arg2, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_numeric.htm)

-   [String functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_character.htm)

-   [Coalesce function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)

If an argument contains the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), the result is always the null value (except in the [Coalesce function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)). If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[ABAP CDS - Numeric Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_numeric.htm)
[ABAP CDS - String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_character.htm)
[ABAP CDS - coalesce](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)