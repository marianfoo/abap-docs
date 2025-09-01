  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Table%20Functions%2C%20ABENCDS_TABLE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Table Functions

A CDS table function is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") using the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). DCL source code in a CDS table function can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). A CDS table function includes the following:

-   The [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")
    
    A CDS table function is declared as a CDS entity table\_function using the statement [DEFINE TABLE\_FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)). As a global data type, the CDS entity represents a structured type with the [elements of the CDS table function](javascript:call_link\('abencds_f1_return_list.htm'\)) as components and can be used like any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
    
    -   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
    -   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements.
    -   The CDS entity cannot be used as a data type for definitions of [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry").
    
    A CDS table function is located in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.
    
-   An [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry")
    
    CDS table functions are implemented in platform-dependent SQL in a special [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") and the implementation is managed as an [AMDP table function](javascript:call_link\('abenamdp_table_function_glosry.htm'\) "Glossary Entry") by the [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") in the database system.
    
    The AMDP method is specified after the addition IMPLEMENTED BY in the definition of the CDS table function using [DEFINE TABLE\_FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)). It must be declared as a special [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) for exactly one CDS table function using the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)).
    
    The parameter interface of the AMDP table function is defined using the [input parameters](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) and the [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of the CDS table function.
    

A CDS table function is client-dependent by default and [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is applied in ABAP SQL reads.

CDS table functions are [CDS SQL entities](javascript:call_link\('abencds_sql_entity_glosry.htm'\) "Glossary Entry").

Hints

-   CDS table functions can only be used in a database system that supports [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").
-   When a CDS table function is created, the CDS entity must be activated first, before the associated [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") is created.
-   When a CDS table function is transported, the CDS entity is first transported at the same time as the dictionary transport objects and then the AMDP function implementation as part of the ABAP transport objects. Depending on the size of the transport, there can be a considerable delay between these two phases where the CDS table function is not in a usable state.
-   CDS table functions and [CDS scalar functions](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry") are both implemented in an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") as an [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry"). The differences between CDS table functions and CDS scalar functions are as follows:
    -   CDS scalar functions return an elementary value, while CDS table functions return a tabular result type.
    -   Different use cases:
        
        \- CDS table functions are used as a data source in other CDS entities or in ABAP SQL read statements.
        
        \- CDS scalar functions can be used in the same way as built-in functions, i.e. in operand positions that expect scalar values. Before the introduction of CDS scalar functions, users could define [AMDP scalar functions](javascript:call_link\('abenamdp_scalar_function_glosry.htm'\) "Glossary Entry"), but they were not available in CDS entities. CDS scalar functions make scalar functions defined in AMDP known to [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") and available in ABAP CDS.
        
-   CDS table functions cannot be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)). An ABAP SQL statement that accesses a CDS table function bypasses the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\))
[CDS DDL - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\))