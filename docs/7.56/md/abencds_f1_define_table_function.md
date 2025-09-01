  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_functions.htm) → 

CDS DDL - DEFINE TABLE FUNCTION

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@function\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm)*\]*
*\[*[@function\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm)*\]*
...
*\[*DEFINE*\]* TABLE FUNCTION table\_function
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_func_parameter_list.htm)*\]*
          [element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm)
          IMPLEMENTED BY METHOD amdp\_function *\[*;*\]*

Effect

Defines a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") table\_function as a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"). In platform-dependent SQL, the CDS table function is implemented in an [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") amdp\_function, which is created using the [AMDP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") in the database system as an [AMDP table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_table_function_glosry.htm "Glossary Entry"). The name table\_function must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm) and [@function\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm) are used to specify optional [annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the CDS table function.
-   [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_func_parameter_list.htm) is used to declare a list of optional input parameters for the CDS table function. These also define the input parameters of the AMDP table function.
-   [element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm) is used to declare the elements of the CDS table function. These also define the columns of the tabular return value of the AMDP table function.
-   When amdp\_function is used, an [AMDP function implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") must be specified for an [AMDP table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") in the form amdp\_class=>amdp\_method. Here amdp\_class is an [AMDP class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_class_glosry.htm "Glossary Entry") and amdp\_method is an [AMDP function implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_function_methods.htm) contained in this class. When this function implementation is declared, the current CDS table function is specified after the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_for_tabfunc.htm). The AMDP function implementation must not exist when the CDS table function is created and activated. The name of an AMDP function implementation amdp\_function can be specified in a single CDS table function only.

A CDS table function returns a tabular result set. Like any [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"), it can be used as a data source in other CDS entities or ABAP SQL read [statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The prerequisite for use is that the specified AMDP function implementation exists and is active.

The name of a CDS table function is located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

Hints

-   Table functions constitute a database extension that is not supported by all database systems. However, the CDS DDL in ABAP CDS allows table functions to be created and accessed independently of the database system. If [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) is used to access a table function or a view that contains table functions as data sources but the current database system does not support them, an uncatchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system supports table functions. This requires the constant AMDP\_TABLE\_FUNCTION of the class to be passed to the method in an internal table.
-   If a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") is defined for a CDS entity using the CDS-DCL statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm), implicit [access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") applies by default when the CDS entity is accessed using ABAP SQL. CDS access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm) and using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.
-   The [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a CDS table function does not need to have the same name as the CDS table function, but it is advisable to use the name of the CDS table function.
-   After a piece of DDL source code is transported, the combination of its name and the name of the CDS table function view is defined and can no longer be modified by being renamed.
-   No ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) visible in the [tools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm) for structures is created for a CDS table function.

Example

The following DDL source code shows a [client-dependent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_handling.htm) CDS table function. It contains an input parameter (with the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm) and the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm)) for the client, which is implicitly supplied with the ID of the current client when used as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) of the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm). For more information about how to use this function, see the executable example for [AMDP Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_functions_abexa.htm).

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
[CDS DDL - DEFINE TABLE FUNCTION, function\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm)
[CDS DDL - DEFINE TABLE FUNCTION, parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_func_parameter_list.htm)
[CDS DDL - DEFINE TABLE FUNCTION, element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm)