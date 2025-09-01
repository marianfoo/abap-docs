  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) → 

ABAP CDS - Table Functions

A CDS table function is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") using the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). DCL source code in a CDS table function can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). A CDS table function includes the following:

-   The [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")

A CDS table function is declared as a CDS entity using the name of its CDS entity as it is defined as cds\_entity after [DEFINE TABLE\_FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)). As a data type in ABAP Dictionary, the CDS entity represents a structured type with the [elements of the CDS table function](javascript:call_link\('abencds_f1_return_list.htm'\)) as components and can be used like any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.

-   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements.

-   The CDS entity cannot be used as a data type for definitions of [classic dictionary objects](javascript:call_link\('abenddic_classical_objects.htm'\)) in ABAP Dictionary.

A CDS table function is located in the namespace of the [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and in the namespace of the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

-   An [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry")

CDS table functions are implemented in platform-specific SQL in a special [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") and the implementation is managed as an [AMDP table function](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry") by the [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") in the database system.

The AMDP method is specified after the addition IMPLEMENTED BY in the definition of the CDS table function using [DEFINE TABLE\_FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)). It must be declared as a special [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) for precisely one CDS table function using the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)).

The parameter interface of the AMDP table function is defined using the [input parameters](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) and the [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of the CDS table function.

Like a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), a CDS table function is client-specific by default and [client handling](javascript:call_link\('abencds_func_client_handling.htm'\)) is automatic in ABAP SQL accesses.

Notes

-   CDS table functions can only be used in a database system that supports [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

-   When a CDS table function is created, the CDS entity must be activated first, before the associated [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") is created.

-   When a CDS table function is transported, the CDS entity is first transported as part of the dictionary transport objects and then the AMDP function implementation as part of the ABAP transport objects. Depending on the size of the transport, there can be a considerable delay between these two phases where the CDS table function is not in a usable state.

Continue
[ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\))