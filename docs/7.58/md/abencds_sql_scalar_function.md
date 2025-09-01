  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20SQL-Based%20Scalar%20Functions%2C%20ABENCDS_SQL_SCALAR_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP CDS - SQL-Based Scalar Functions

[SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") are [scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") that are evaluated by an SQL environment. They can be used in [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in operand positions that expect scalar values, similar to [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm).

While [analytical scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ana_scalar_function.htm) are defined and implemented by SAP, SQL-based scalar functions can also be defined and implemented by customers and partners. SQL-based scalar functions make user-defined [AMDP scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") known to the ABAP Dictionary and available in ABAP CDS.

An SQL-based scalar function consists of three development objects:

-   A [scalar function definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dsfd_glosry.htm "Glossary Entry") defined using [DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_scalar_function.htm) in a [CDS function definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_function_definition_glosry.htm "Glossary Entry"). It is located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.
-   A [scalar function implementation reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_func_impl_ref.htm) that binds the scalar function to the SQL environment and to an [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm "Glossary Entry"). The scalar function implementation reference is defined in a form-based editor in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). It must refer to an existing CDS scalar function. It is a standalone repository object that is transported and has its own editor in ADT.
-   An [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") that implements the CDS scalar function using [SQLScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_glosry.htm "Glossary Entry") in a special [AMDP method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry"). The implementation is managed as an [AMDP scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") by the [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") in the database system. The AMDP method must be declared as a special [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_methods.htm) for exactly one CDS scalar function using the addition [FOR SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_for_scalfunc.htm). The parameter interface of the AMDP scalar function is defined by the input parameters and the scalar result type of the CDS scalar function.

[Client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_handling_glosry.htm "Glossary Entry") has not yet been implemented for CDS scalar functions, so only [client-independent](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_independent_glosry.htm "Glossary Entry") scalar functions are supported. The AMDP method that implements a scalar function can only access client-independent objects. However, when it is used, client dependency is ignored. A CDS scalar function can be used in both client-dependent and client-independent CDS entities.

The following topics describe the syntax for defining SQL-based scalar functions.

Continue
[CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_scalar_function.htm)