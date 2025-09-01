---
title: "AMDP - Function Implementations"
description: |
  An AMDP function implementation is an AMDP method for implementing an AMDP function(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_glosry.htm 'Glossary Entry') as a database function(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_function_gl
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm"
abapFile: "abenamdp_function_methods.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abenamdp", "function", "methods"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_methods.htm) → 

AMDP - Function Implementations

An AMDP function implementation is an AMDP method for implementing an [AMDP function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_glosry.htm "Glossary Entry") as a [database function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_function_glosry.htm "Glossary Entry"). An AMDP function implementation is indicated as an AMDP method in the implementation part of the class using the addition [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm) of the statement METHOD. There are [AMDP table functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") and [AMDP scalar funktions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry").

-   [AMDP Table Functions](#abenamdp-function-methods-1--------amdp-table-functions-for-amdp-methods---@ITOC@@ABENAMDP_FUNCTION_METHODS_2)

-   [AMDP Table Functions for CDS Table Functions](#abenamdp-function-methods-3--------amdp-scalar-functions---@ITOC@@ABENAMDP_FUNCTION_METHODS_4)

AMDP Table Functions

There are two types of AMDP table functions:

-   Functions that can only be accessed in other AMDP methods

-   Functions that implement [CDS table functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") that can be accessed in ABAP SQL

AMDP table functions for AMDP methods

An AMDP function implementation for an AMDP table function that can only be accessed in AMDP methods is declared in an [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_classes.htm) class like a regular [static method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_method_glosry.htm "Glossary Entry") or [instance method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry") in any [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry"). An AMDP function implementation like this cannot be detected in the declaration part of the class and the same basically applies as to [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_methods.htm) with the following differences:

-   The AMDP function implementation must have a [return value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreturn_value_glosry.htm "Glossary Entry") defined using [RETURNING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_functional.htm). The data type of the return value must be tabular with a structured row type whose components are elementary. Any [table category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_category_glosry.htm "Glossary Entry") and [table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_key_glosry.htm "Glossary Entry") can be specified for return value.

-   Alongside the return value, the AMDP function implementation can have elementary and tabular [input parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), but cannot have [input/output parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") or [output parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoutput_parameter_glosry.htm "Glossary Entry"). The special input parameter connection is not allowed.

-   No class-based exceptions can be declared using [RAISING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_general.htm) in the interface of the AMDP function implementation.

-   In declarations of the AMDP method using the addition [AMDP OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_amdp_options.htm) or in implementations of the AMDP method using the addition [OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm), the AMDP function implementation must be restricted to reads.

-   The AMDP function implementation can be [called](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm) in ABAP like a regular method and cannot be used as a [functional method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry") in a [functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry").

The AMDP table function of a [AMDP table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") can be called from other AMDP methods. It cannot be called in ABAP programs like a regular functional method.

Notes

-   Calls from ABAP programs are not implemented since the results set cannot be restricted directly here by a WHERE condition.

-   Calls from non-AMDP-managed database procedures or database functions are, like any database [table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_function_glosry.htm "Glossary Entry"), possible but [not recommended](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_access_recomm.htm).

Executable Example

[AMDP functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_functions_abexa.htm)

AMDP Table Functions for CDS Table Functions

The same applies to an AMDP function implementation that implements an [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") as to the AMDP table functions for AMDP methods above, with the following differences:

-   An AMDP function implementation for a CDS table function can only be declared in the public [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of a [static](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_class_glosry.htm "Glossary Entry") AMDP class. It is not possible in interfaces.

-   A special form of the statement [CLASS-METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods.htm) with the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods_for_tabfunc.htm) must be used for the declaration. This form flags the [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") function implementation as an implementation of a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   The parameter interface of the AMDP function implementation is not declared using the statement CLASS-METHODS. Instead it is generated in accordance with the associated [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") using the statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_table_function.htm) in the [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry"):

-   The input parameters in the AMDP function implementation are determined by the [input parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_func_parameter_list.htm) of the CDS table function. Their names are used and the ABAP types are derived from their Dictionary types. The input parameters are always elementary and not optional.

-   A return value with the type of a standard table is created with an empty table key named result with a structured row type. The components of the row type are determined by the [elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list.htm) of the CDS table function. Their names are used and the ABAP types are derived from their Dictionary types. The row type corresponds to the structured data type, which the CDS table function represents with respect to ABAP. In the case of a client-specific CDS table function, the client column is also included.

The [AMDP table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") defined by an AMDP function implementation like this can be used as follows using the [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") represented by the CDS table function:

-   as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of ABAP SQL read statements in ABAP

-   as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) of [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry") in the [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") [CDL DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry").

In addition, calls from other AMDP methods are possible. Calls as regular functional methods are not possible in an ABAP program.

Notes

-   The row type of the return value result of an AMDP function implementation for a client-specific CDS table function does not contain a client field, even though this field must be declared in the element list.

-   An AMDP function implementation can only be associated with a single CDS table function.

-   When an AMDP function implementation is created for a CDS table function, it must already exist as an active function. When a new CDS table function is activated, an empty AMDP table function is created in the database. This function raises an exception if a non-AMDP access is performed. When the CDS table function is accessed by the ABAP runtime environment for the first time (for example, using ABAP SQL), the AMDP function implementation implements the empty AMDP table function. Other frameworks that evaluate CDS entities using their [annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry"), however, can also cause the AMDP table function to be implemented. It is possible to access the table function in a native way only after the implementation.

-   Calls from non-AMDP-managed database procedures or database functions are, like any database [table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_function_glosry.htm "Glossary Entry"), possible but [not recommended](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_access_recomm.htm).

Executable Example

[AMDP functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_functions_abexa.htm)

AMDP Scalar Functions

An AMDP is declared in an [AMDP class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_classes.htm) like a regular [static method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_method_glosry.htm "Glossary Entry") or [instance method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry") in any [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry"). An AMDP function implementation like this is unknown in the declaration part of the class and the same basically applies as to AMDP table functions for AMDP methods with the following differences:

-   The data type of the return value is [elementary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_type_glosry.htm "Glossary Entry").

-   The data types of input parameters must also be elementary.

-   No class-based exceptions can be declared using [RAISING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_general.htm) in the interface of the AMDP function implementation for AMDP scalar functions.

-   An AMDP scalar function can be [called](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm) in ABAP like a regular method and can be used as a [functional method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry") in a [functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry").

The [AMDP scalar function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") defined using an AMDP function implementation like this can be used in other AMDP methods in accordance with the rules for [scalar functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscalar_function_glosry.htm "Glossary Entry").

Notes

-   These functions can be used in non-AMDP-managed database procedures or database functions, like any database [scalar function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscalar_function_glosry.htm "Glossary Entry"), but this is not [recommended](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_access_recomm.htm).

-   It is possible for an [AMD scalar function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") to specify the database-specific option DETERMINISTIC after OPTIONS. This buffers the result of the function for the duration of a query.

Executable Example

[AMDP functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_functions_abexa.htm)