  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) → 

AMDP - Function Implementations

An AMDP function implementation is an AMDP method for implementing an AMDP function as a [table function](javascript:call_link\('abentable_function_glosry.htm'\) "Glossary Entry"). An AMDP function implementation is indicated as an AMDP method in the implementation part of the class using the addition [BY DATABASE FUNCTION](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD. AMDP functions can be defined that can be accessed only in other AMDP methods and functions defined that implement [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   [AMDP Functions for AMDP Methods](#@@ITOC@@ABENAMDP_FUNCTION_METHODS_1)

-   [AMDP Functions for CDS Table Functions](#@@ITOC@@ABENAMDP_FUNCTION_METHODS_2)

AMDP Functions for AMDP Methods

An AMDP function implementation whose AMDP function can be accessed in AMDP methods is declared in an [AMDP class](javascript:call_link\('abenamdp_classes.htm'\)) like a regular [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") or [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") in any [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"). An AMDP function implementation like this cannot be detected in the declaration part of the class and the same basically applies as to [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_methods.htm'\)) with the following differences:

-   An AMDP function implementation must have a [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") defined using [RETURNING](javascript:call_link\('abapmethods_functional.htm'\)). The data type of the return value must be tabular with a structured row type whose components are elementary. Any [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") can be specified for return value.

-   Alongside the return value, an AMDP function implementation can have only elementary [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") and must not have any [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry") or [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry"). The special input parameter connection is not allowed.

-   No class-based exceptions can be declared using [RAISING](javascript:call_link\('abapmethods_general.htm'\)) in the interface of an AMDP function implementation.

-   In declarations of the AMDP method using the addition [AMDP OPTIONS READ-ONLY](javascript:call_link\('abapmethods_amdp_options.htm'\)) or in implementations of the AMDP method using the addition [OPTIONS READ-ONLY](javascript:call_link\('abapmethod_by_db_proc.htm'\)), any AMDP function implementations must be restricted to reads.

-   An AMDP function implementation can be [called](javascript:call_link\('abenmethod_calls.htm'\)) in ABAP like a regular method and cannot be used as a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") in a [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry").

An [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") defined using a AMDP function implementation like this can only be called in other AMDP methods and not in database procedures managed in AMDP or in database functions like database [table function](javascript:call_link\('abentable_function_glosry.htm'\) "Glossary Entry")s.

Executable Example

[AMDP functions](javascript:call_link\('abenamdp_functions_abexa.htm'\))

AMDP Functions for CDS Table Functions

The same applies to an AMDP function implementation that implements a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as to the function implementation above, with the following differences:

-   An AMDP function implementation for a CDS table function can only be declared in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of a [static](javascript:call_link\('abenstatic_class_glosry.htm'\) "Glossary Entry") AMDP class. It is not possible in interfaces.

-   A special form of the statement [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) with the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)) must be used for the declaration. This form flags the AMDP function implementation as an implementation of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   The parameter interface of an AMDP function implementation is not declared using the statement CLASS-METHODS. Instead it is generated in accordance with the associated [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") using the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"):

-   The input parameters in the AMDP function implementation are determined by the [input parameters](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of the CDS table function. Their names are used and the ABAP types are derived from their Dictionary types. The input parameters are not optional.

-   A return value with the type of a standard table is created with an empty table key named result with a structured row type. The components of the row type are determined by the [elements](javascript:call_link\('abencds_f1_return_list.htm'\)) of the CDS table function. Their names are used and the ABAP types are derived from their Dictionary types. The row type corresponds to the structured data type, which the CDS table function represents with respect to ABAP. In the case of a client-specific CDS table function, the client column is also included.

The [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") defined by an AMDP function implementation like this can be used as follows using the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") represented by the CDS table function:

-   as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of Open SQL read statements in ABAP

-   as a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") [CDL DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

Furthermore, the same uses as in the preceding function implementation are possible in other AMDP methods or other database procedures or database functions

Notes

-   The row type of the return value result of an AMDP function implementation for a client-specific CDS table function does not contain a client field, even though this field must be declared in the element list.

-   An AMDP function implementation can only be associated with a single CDS table function.

-   When an AMDP function implementation is created for a CDS table function, it must already exist as an active function. When a new CDS table function is activated, an empty AMDP function is created in the database. This function raises an exception if a non-AMDP access is performed. When the CDS table function is accessed by the ABAP runtime environment for the first time (for example, using Open SQL), the AMDP function implementation implements the empty AMDP function. Other frameworks that evaluate CDS entities using their [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"), however, can also cause the AMDP function to be implemented. It is possible to access the table function in a native way only after the implementation.

Executable Example

[AMDP functions](javascript:call_link\('abenamdp_functions_abexa.htm'\))