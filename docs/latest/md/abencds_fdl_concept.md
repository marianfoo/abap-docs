  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20CDS%20Functions%2C%20Overview%2C%20ABENCDS_FDL_CONCEPT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - CDS Functions, Overview

A [CDS function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_glosry.htm "Glossary Entry") is a function that can be used in operand positions of [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). The following figure shows how CDS functions can be classified.

![Figure](cds_functions.jpg)

There are the following categories of CDS functions:

-   [User-defined functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_user_func_glosry.htm "Glossary Entry"):
    -   Custom function that allows developers to define and implement their own custom logic.
    -   There is only one type of user-defined function, namely the [SQL-based scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry").
-   [System functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_system_func_glosry.htm "Glossary Entry"):
    -   CDS function defined in the CDS function definition language ([CDS FDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl_glosry.htm "Glossary Entry")) that is delivered by SAP for use by partners and customers. System functions are classified with the [C1 contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_glosry.htm "Glossary Entry").
    -   Currently, SAP delivers [analytical scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ana_scalar_glosry.htm "Glossary Entry") and [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") as system functions.

Hints

-   ABAP CDS also delivers [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_func_glosry.htm "Glossary Entry"):
    -   Built-in functions are database functions managed by ABAP CDS.
    -   Can be categorized into [numeric functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v2.htm), [string functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm), [date and time functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_functions_v2.htm), and [conversion functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conversion_functions_v2.htm).
    -   Built-in functions are realized as scalar functions on the database. However, built-in functions are not defined as [CDS function definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_definition_glosry.htm "Glossary Entry") in [FDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfdl_source_code_glosry.htm "Glossary Entry") and therefore, they are not included in the figure above.
    -   All available built-in CDS functions can be found in the following topic [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm).
-   Despite their name, [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") are not [CDS functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_glosry.htm "Glossary Entry"). They encapsulate [AMDP table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_table_function_glosry.htm "Glossary Entry"), but they belong to the technical category of [CDS data definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_definition_glosry.htm "Glossary Entry"), because they share the same characteristics as CDS data definitions. In particular, CDS data definitions can be used as data source in other CDS entities and they can be used after the TYPE addition to reference their structured type in ABAP programs.