  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - DEFINE TABLE FUNCTION

Syntax

*\[*[@function\_annot1](javascript:call_link\('abencds_f1_function_annotations.htm'\))*\]*
*\[*[@function\_annot2](javascript:call_link\('abencds_f1_function_annotations.htm'\))*\]*
...
*\[*DEFINE*\]* TABLE FUNCTION cds\_entity
         *\[*[parameter\_list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\))*\]*
         [element\_list](javascript:call_link\('abencds_f1_return_list.htm'\))
         IMPLEMENTED BY METHOD amdp\_function *\[*;*\]*

Effect

Defines a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). In platform-specific SQL, the CDS table function is implemented in an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") amdp\_function, which is created using the [AMDP framework](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") in the database system as an [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry").

-   [@function\_annot](javascript:call_link\('abencds_f1_function_annotations.htm'\)) is used to specify optional [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") for the CDS table function.

-   [parameter\_list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) is used to declare a list of optional input parameters for the CDS table function. These also define the input parameters of the AMDP function.

-   [element\_list](javascript:call_link\('abencds_f1_return_list.htm'\)) is used to declare the elements of the CDS table function. These also define the columns of the tabular return value of the AMDP function.

-   When amdp\_function is used, an [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") must be specified in the form amdp\_class=>amdp\_method. Here amdp\_class is an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") and amdp\_method is an [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) contained in this class. When this function implementation is declared, the current CDS table function is specified after the addition [FOR TABLE FUNCTION](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)). The AMDP function implementation must not exist when the CDS table function is created and activated. . The name of an AMDP function implementation amdp\_function can only be specified in a single CDS table function.

A CDS table function returns a tabular result set. This can be used (like every [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")) as a data source in other CDS entities or in [Open SQL read statements](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). The prerequisite for use is that the specified AMDP function implementation exists and is active.

A CDS table function is in the namespace of the [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and of the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

Notes

-   Table functions constitute a database extension that is not supported by all database systems. However, the CDS DDL in ABAP CDS allows table functions to be created and accessed independently of the database system. If [SELECT](javascript:call_link\('abapselect.htm'\)) is used to access a table function or a view that contains table functions as data sources but the current database system does not support them, a non-handleable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system supports table functions. This requires the constant AMDP\_TABLE\_FUNCTION of the class to be passed to the method in an internal table.

-   If a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is defined for a CDS entity using the CDS DCL statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)), implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is applied by default when the CDS entity is accessed using Open SQL. CDS access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_function_annotations.htm'\)) and using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an Open SQL query

-   The [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a CDS table function does not need to have the same name as the CDS table function, but it is advisable to use the name of the CDS table function.

-   After a piece of DDL source code is transported, the combination of its name and the name of the CDS table function view is defined and can no longer be modified by being renamed.

Example

The following DDL source code shows a [client-specific](javascript:call_link\('abencds_func_client_handling.htm'\)) CDS table function. It contains an input parameter (with the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) and the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))) for the client, which is implicitly supplied with the ID of the current client when used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the Open SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)). For more information about how to use this function, see the executable example for [AMDP Functions](javascript:call_link\('abenamdp_functions_abexa.htm'\)).

@ClientHandling.type: #CLIENT\_DEPENDENT
define table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL
  with parameters
    @Environment.systemField: #CLIENT
    clnt   :abap.clnt,
    carrid :s\_carr\_id
  returns
  {
    client   :s\_mandt;
    carrname :s\_carrname;
    connid   :s\_conn\_id;
    cityfrom :s\_from\_cit;
    cityto   :s\_to\_city;
  }
  implemented by method
    CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL=>GET\_SCARR\_SPFLI\_FOR\_CDS;

Continue
[ABAP CDS - DEFINE TABLE FUNCTION, function\_annot](javascript:call_link\('abencds_f1_function_annotations.htm'\))
[ABAP CDS - DEFINE TABLE FUNCTION, parameter\_list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\))
[ABAP CDS - DEFINE TABLE FUNCTION, element\_list](javascript:call_link\('abencds_f1_return_list.htm'\))