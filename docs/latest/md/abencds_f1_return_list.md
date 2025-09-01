  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abencds_table_functions.htm'\)) →  [CDS DDL - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20TABLE%20FUNCTION%2C%20element_list%2C%20ABENCDS_F1_RETURN_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

CDS DDL - DEFINE TABLE FUNCTION, element\_list

Syntax

... RETURNS { [element1](javascript:call_link\('abencds_f1_return_list_element.htm'\)); [element2](javascript:call_link\('abencds_f1_return_list_element.htm'\)); ...; } ...

Effect

Defines the elements of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](javascript:call_link\('abencds_f1_return_list_element.htm'\)); [element2](javascript:call_link\('abencds_f1_return_list_element.htm'\)); ...; in curly brackets { }. The final element must also be followed by a semicolon.

These elements have the following meaning:

-   They determine the components of the structured data types represented by a CDS table function with respect to ABAP.
-   This structured data type is the row type of the tabular return value result of the [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) amdp\_function specified after [IMPLEMENTED BY METHOD](javascript:call_link\('abencds_f1_define_table_function.htm'\)).

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](javascript:call_link\('abenddic_builtin_types.htm'\)).

In a [client-dependent](javascript:call_link\('abencds_func_client_handling.htm'\)) CDS table function, the first element must be typed with the built-in dictionary type CLNT. This element is the client field of the CDS table function. It is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the table function.

Hint

In a [client-dependent](javascript:call_link\('abencds_func_client_handling.htm'\)) CDS table function, the structured data type of the table function and the row type of the return value of the AMDP function implementation are not compatible. The AMDP function implementation [cannot](javascript:call_link\('abenamdp_function_methods.htm'\)) be called as a regular function method in ABAP anyway, which means that no correspondingly structured target variable needs to be declared.

Example

The class CL\_DEMO\_AMDP\_FUNCTION\_TYPE uses [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") to show the following for various CDS table functions:

-   The components of the structured data type
-   The parameters of the associated AMDP function implementation
-   The row type of the return value of the associated AMDP function implementation

For client-dependent table functions, a client field is defined after RETURNS. This field is a column of the return value of the AMDP function implementation and is not part of the structured data type.

Continue
[CDS DDL - DEFINE TABLE FUNCTION, element](javascript:call_link\('abencds_f1_return_list_element.htm'\))