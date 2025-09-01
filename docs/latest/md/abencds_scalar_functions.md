---
title: "ABAP CDS - Scalar Functions"
description: |
  A CDS scalar function(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm 'Glossary Entry') is defined in the FDL source code(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfdl_source_code_glosry.htm 'Glossary Entry') of a CDS
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm"
abapFile: "abencds_scalar_functions.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "data", "internal-table", "abencds", "scalar", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Scalar%20Functions%2C%20ABENCDS_SCALAR_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Scalar Functions

A [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") is defined in the [FDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfdl_source_code_glosry.htm "Glossary Entry") of a [CDS function definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_definition_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") using the statement [DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm). A CDS scalar function is a user-defined [CDS function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_glosry.htm "Glossary Entry") that returns a scalar (that means [elementary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry")) return value.

A distinction is drawn between [analytical scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ana_scalar_glosry.htm "Glossary Entry") and [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry").

-   [Analytical scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ana_scalar_glosry.htm "Glossary Entry")
    -   Evaluated by an analytical runtime environment, such as the [ABAP Analytical Engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ae_glosry.htm "Glossary Entry").
    -   The [scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfi_glosry.htm "Glossary Entry") has the suffix \_ANA.
    -   Can be used in [CDS analytical projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") like built-in functions in operand positions that expect scalar values.
    -   Analytical scalar functions can only be defined internally at SAP. They are available for internal and external use in [CDS analytical queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytic_query_glosry.htm "Glossary Entry").
    -   For a list of analytical scalar functions delivered by SAP, see [ABAP CDS - Analytical Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ana_scalar_function.htm).
-   [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry")
    -   Evaluated by an SQL environment.
    -   The scalar function implementation reference has the suffix \_SQL.
    -   Can be used in [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in operand positions that expect scalar values, similar to [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry").
    -   An SQL-based scalar function consists of three development objects:
        
        \- A [scalar function definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfd_glosry.htm "Glossary Entry") defined using [DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm) in a [CDS function definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_definition_glosry.htm "Glossary Entry").
        
        \- A [scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_func_impl_ref.htm) that binds the scalar function to the SQL environment and to an [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry"). The scalar function implementation reference is defined in a form-based editor in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").
        
        \- An [AMDP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry") implementation where it is implemented using [SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_glosry.htm "Glossary Entry") in a special [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry").
        

CDS scalar functions can be released as stable APIs under the [C1 release contract for system internal use](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_glosry.htm "Glossary Entry").

Further Information

Development Guide Developing and Consuming ABAP Data Models, section [Scalar Functions](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/b425c693ecaa40fbb3ea79e686eef3c7?version=sap_cross_product_abap).

Hints

-   When creating a CDS scalar function, first the CDS scalar function definition must be activated, then the scalar function implementation reference must be activated, and finally the associated [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") is created.
-   When a CDS scalar function is transported, first the CDS scalar function definition is transported at the same time as the dictionary transport objects, and then the AMDP function implementation is transported as part of the ABAP transport objects. Depending on the size of the transport, there may be a significant delay between these two phases during which the CDS scalar function is not in a usable state.
-   [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") and CDS scalar functions are both implemented in an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") as an [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry"). The differences between CDS table functions and CDS scalar functions are as follows:
    -   CDS scalar functions return an elementary value, while CDS table functions return a tabular result type.
    -   Different use cases:
        
        \- CDS table functions are used as a data sources in other CDS entities or in ABAP SQL read statements.
        
        \- CDS scalar functions can be used in the same way as built-in functions, i.e. in operand positions that expect scalar values. Before the introduction of CDS scalar functions, users could define [AMDP scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry"), but they were not available in CDS entities. CDS scalar functions make scalar functions defined in AMDP known to [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and available in ABAP CDS.
        
-   CDS scalar functions cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine.htm). An ABAP SQL statement that accesses a CDS scalar function bypasses the [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffer_glosry.htm "Glossary Entry") and an internal table accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[ABAP CDS - Analytical Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ana_scalar_function.htm)
[ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm)
[CDS FDL - Parameter Passing in Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_passing.htm)
[ABAP CDS - CDS Scalar Function Implementation Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_func_impl_ref.htm)