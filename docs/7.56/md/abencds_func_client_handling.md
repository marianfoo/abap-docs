  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_functions.htm) → 

ABAP CDS - Client Handling in CDS Table Functions

The [CDS annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") [@ClientHandling.type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm) can be used to enable and disable [client dependency](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_dependency_glosry.htm "Glossary Entry") for a CDS table function in ABAP CDS.

-   The value #CLIENT\_DEPENDENT enables client dependency.
-   The value #CLIENT\_INDEPENDENT disables client dependency.

Client dependency is enabled by default. The client dependency of a CDS table function has the following consequences for the CDS entity and the associated AMDP function implementation:

-   Client-Dependent CDS Table Function
    -   The [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm) of a client-dependent CDS table function must have an explicit client field with the built-in dictionary type CLNT as its first element. The client field is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the CDS entity.
    -   When a client-dependent CDS table function is accessed using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) without the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm), only those rows are selected implicitly from the result set of the function that contain the ID of the current client or the client specified in the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) in the client field.
    -   A CDS table function is always implemented in the associated [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") in platform-dependent SQL. The implementation must ensure that all required data is made available. Particularly in the ON conditions of joins, client columns must be used correctly.
    -   For performance reasons, it is best to restrict the result set of the function to the required clients at the implementation stage. This usually involves passing the client ID in question to an input parameter of the function. Here, it is advisable to use an input parameter of the dictionary type CLNT, which needs to be annotated with the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm) and the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm). In this case, [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) passes the correct client ID implicitly.
    -   Note that if the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_session_variables.htm) CLIENT and CDS\_CLIENT are accessed in the implementation of a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"), the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) of the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) only acts on the session variableCDS\_CLIENT. If the AMDP function is used in an AMDP method called from ABAP, there is no equivalent for USING CLIENT.
    -   If the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm) is specified, the column is added to the result set and is filled with the associated client ID for each row. Before this column can be used in the SELECT statement, a name must be assigned to it after the addition CLIENT SPECIFIED. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made using [@DATA(...)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm) after [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm). The defined name is also used in the case of [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm). If no name is defined, the client column is not transported.
-   Client-Independent CDS Table Function
    -   The [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm) of a client-independent CDS table function does not need to have an explicit client field with the built-in dictionary type CLNT. If the first element has the type CLNT, it does not function as a client field. Instead, it is a column of the tabular return value of the associated AMDP function implementation and also a regular component of the structured data type represented by the CDS entity.
    -   When a client-independent CDS table function is accessed using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm), an element of the type CLNT does not have a special meaning and is handled like any other element.
    -   The annotation [@Environment.systemField: #CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm) cannot be used in the parameter list of a client-independent CDS table function.

Hints

-   CDS table functions for application data should usually be client-dependent.
-   The annotation [@ClientHandling.type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_function_annotations.htm) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT replaces the annotation [@ClientDependent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_handling_obs.htm) with the values true and false and should be used instead of this annotation.

Example

The following client-dependent CDS table function reads the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_session_variables.htm) CLIENT and CDS\_CLIENT. The first element mandt of the element list is the client field. The other two elements return the read values. An input parameter clnt with the built-in dictionary type CLNT transfers the client ID and, as prescribed, is given the annotation @Environment.systemField:#CLIENT.

@ClientHandling.type: #CLIENT\_DEPENDENT
@AccessControl.authorizationCheck:#NOT\_ALLOWED  
define table function DEMO\_CDS\_GET\_CLIENT\_VARIABLES
  with parameters
    @Environment.systemField : #CLIENT
    clnt : syst\_mandt
  returns
  {
    mandt      :mandt;
    client     :mandt;
    cds\_client :mandt;
  }
  implemented by method
    CL\_DEMO\_AMDP\_CLIENT\_VARIABLES=>GET;

The AMDP function implementation is as follows:

METHOD get BY DATABASE FUNCTION FOR HDB
              LANGUAGE SQLSCRIPT
              OPTIONS READ-ONLY.
  declare client\_tab table( mandt      "$ABAP.type( mandt )",
                            client     "$ABAP.type( mandt )",
                            cds\_client "$ABAP.type( mandt )" );
  client\_tab.mandt\[1\] := clnt;
  client\_tab.client\[1\] := session\_context('CLIENT');
  client\_tab.cds\_client\[1\] := session\_context('CDS\_CLIENT');
  RETURN :client\_tab;
ENDMETHOD.

The first line of a local table client\_tab with the type of the tabular return value is supplied with the session variables. The client field is set to the value of the input parameter clnt and the table is returned. The program DEMO\_AMDP\_CLIENT\_VARIABLES accesses the CDS table function using SELECT and the addition USING CLIENT, and attempts to use a client ID other than that of the current client in the table T000. The client ID specified with USING CLIENT is passed implicitly to the input parameter clnt and fills the client field of the return value with this ID, so that it is respected by [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm). If a client ID other than that of the current client is used, the values of the session variables CLIENT and CDS\_CLIENT are different.

Executable Examples

-   [Client-Dependent CDS Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_dep_abexa.htm)
-   [Client-Independent CDS Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_indep_abexa.htm)

Continue
[ABAP CDS - Obsolete Client Handling in Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_handling_obs.htm)
![Example](exa.gif "Example") [Client-Dependent CDS Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_dep_abexa.htm)
![Example](exa.gif "Example") [Client-Independent CDS Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_indep_abexa.htm)