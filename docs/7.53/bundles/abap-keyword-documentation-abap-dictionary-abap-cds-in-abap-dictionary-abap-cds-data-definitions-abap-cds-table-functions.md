# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Table Functions

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenddic_cds_table_functions.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_table_functions.htm)
- [abencds_func_client_handling.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm)
- [abencds_func_client_handling_obs.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling_obs.htm)
- [abencds_func_client_dep_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_dep_abexa.htm)
- [abencds_func_client_indep_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_indep_abexa.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.140Z

---

### abenddic_cds_table_functions.htm

> **📖 Official SAP Documentation**: [abenddic_cds_table_functions.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_table_functions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenddic_cds_table_functions.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_table_functions.htm)

### abencds_func_client_handling.htm

> **📖 Official SAP Documentation**: [abencds_func_client_handling.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\)) → 

ABAP CDS - Client Handling in CDS Table Functions

The [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) can be used to switch [client dependency](javascript:call_link\('abenclient_dependence_glosry.htm'\) "Glossary Entry") on and off for a CDS table function in ABAP CDS.

-   The value #CLIENT\_DEPENDENT switches client dependency on.

-   The value #CLIENT\_INDEPENDENT switches client dependency off.

Client dependency is switched on by default. The client dependency of a CDS table function has the following consequences for the CDS entity and the associated AMDP function implementation:

-   Client-Specific CDS Table Function

-   The [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a client-specific CDS table function must have an explicit client field with the built-in dictionary type CLNT as its first element. The client field is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the CDS entity.

-   When a client-specific CDS table function is accessed using [SELECT](javascript:call_link\('abapselect.htm'\)) without the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)), only those rows are selected implicitly from the results set of the function that contain the ID of the current client or the client specified in the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) in the client field.

-   A CDS table function is always implemented in the associated [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") in platform-specific SQL. The implementation must ensure that all required data is made available. Particularly in the ON conditions of joins, client columns must be used correctly.

-   For performance reasons, it is best to restrict the results set of the function to the required clients at the implementation stage. This usually involves passing the client ID in question to an input parameter of the function. Here, it is advisable to use an input parameter of the dictionary type CLNT, which needs to be annotated with the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) and the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). In this case, [SELECT](javascript:call_link\('abapselect.htm'\)) passes the correct client ID implicitly.

-   Note that if the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT and CDS\_CLIENT are accessed in the implementation of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) of the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) only acts on the session variableCDS\_CLIENT. If the AMDP function is used in an AMDP method called from ABAP, there is no equivalent for USING CLIENT.

-   If the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) is specified, the column is added to the results set and is filled with the associated client ID for each row. Before this column can be used in the SELECT statement, a name must be assigned to it after the addition CLIENT SPECIFIED. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made after [INTO](javascript:call_link\('abapinto_clause.htm'\)). The defined name is also used in the case of [INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)). If no name is defined, the client column is not transported

-   Cross-Client CDS Table Function

-   The [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a cross-client CDS table function does not need to have an explicit client field with the built-in dictionary type CLNT. If the first element has the type CLNT, it does not function as a client field. Instead, it is a column of the tabular return value of the associated AMDP function implementation and also a regular component of the structured data type represented by the CDS entity.

-   When a cross-client CDS table function is accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), an element of the type CLNT does not have a special meaning and is handled like any other element.

-   The annotation [@Environment.systemField: #CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) cannot be used in the parameter list of a cross-client CDS table function.

Notes

-   CDS table functions for application data should usually be client-specific.

-   The annotation [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT replaces the annotation [@ClientDependent](javascript:call_link\('abencds_func_client_handling_obs.htm'\)) with the values true and false and should be used instead of this annotation.

Example

The following client-specific CDS table function reads the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT and CDS\_CLIENT. The first element mandt of the element list is the client field. The other two elements return the read values. An input parameter clnt with the built-in dictionary type CLNT transfers the client ID and, as prescribed, is given the annotation @Environment.systemField:#CLIENT.

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

The first row of a local table client\_tab with the type of the tabular return value is supplied with the session variables. The client field is set to the value of the input parameter clnt and the table is returned. The program DEMO\_AMDP\_CLIENT\_VARIABLES accesses the CDS table function using SELECT and the addition USING CLIENT, and attempts to use a client ID other than that of the current client in the table T000. The client ID specified with USING CLIENT is passed implicitly to the input parameter clnt and fills the client field of the return value with this ID, so that it is respected by automatic client handling. If a client ID other than that of the current client is used, the values of the session variables CLIENT and CDS\_CLIENT are different.

Executable Examples

-   [Client-Specific CDS Table Functions](javascript:call_link\('abencds_func_client_dep_abexa.htm'\))

-   [Cross-Client CDS Table Functions](javascript:call_link\('abencds_func_client_indep_abexa.htm'\))

Continue
[ABAP CDS - Obsolete Client Handling in Table Functions](javascript:call_link\('abencds_func_client_handling_obs.htm'\))
![Example](exa.gif "Example") [Client-Specific CDS Table Functions](javascript:call_link\('abencds_func_client_dep_abexa.htm'\))
![Example](exa.gif "Example") [Cross-Client CDS Table Functions](javascript:call_link\('abencds_func_client_indep_abexa.htm'\))



**📖 Source**: [abencds_func_client_handling.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm)

### abencds_func_client_handling_obs.htm

> **📖 Official SAP Documentation**: [abencds_func_client_handling_obs.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling_obs.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\)) →  [ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\)) → 

ABAP CDS - Obsolete Client Handling in Table Functions

Before the annotation [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT was introduced, the [client dependency](javascript:call_link\('abencds_func_client_handling.htm'\)) of a CDS table function was switched on and off using the annotation ClientDependent with the values true and false.

-   The annotation ClientDependent:true works like @ClientHandling.type:#CLIENT\_DEPENDENT.

-   The annotation ClientDependent:false works like @ClientHandling.type:#CLIENT\_INDEPENDENT.

Only the annotation @ClientHandling.type should now be used in new CDS table functions. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.



**📖 Source**: [abencds_func_client_handling_obs.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling_obs.htm)

### abencds_func_client_dep_abexa.htm

> **📖 Official SAP Documentation**: [abencds_func_client_dep_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_dep_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\)) →  [ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\)) → 

Client-Specific CDS Table Functions

This example demonstrates client-specific CDS table functions.

Source Code

REPORT demo\_cds\_functions\_client.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>amdp\_table\_function ) ) ).
      cl\_demo\_output=>display(
        \`System does not support CDS table functions\` ).
      RETURN.
    ENDIF.
    DATA carrid TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli( carrid = @carrid )
           INTO TABLE @DATA(result1)
           ##db\_feature\_mode\[amdp\_table\_function\].
    cl\_demo\_output=>write( result1 ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_inpcl( carrid = @carrid )
           INTO TABLE @DATA(result2)
           ##db\_feature\_mode\[amdp\_table\_function\].
    ASSERT result2 = result1.
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli( carrid = @carrid )
                CLIENT SPECIFIED demo\_cds\_get\_scarr\_spfli~client
           WHERE client = @sy-mandt
           INTO TABLE @DATA(result3)
           ##db\_feature\_mode\[amdp\_table\_function\].
    cl\_demo\_output=>display( result3 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example program accesses two [client-specific](javascript:call_link\('abencds_func_client_handling.htm'\)) [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLIdoes not have any input parameters of the type CLNT. The implementation in the AMDP method GET\_SCARR\_SPFLI\_FOR\_CDS of the associated AMDP class CL\_DEMO\_AMDP\_FUNCTIONS reads the data of all clients. Only the current client is selected here in [SELECT](javascript:call_link\('abapselect.htm'\))s performed without the addition CLIENT SPECIFIED.

@ClientHandling.type: #CLIENT\_DEPENDENT
@AccessControl.authorizationCheck:#NOT\_ALLOWED
define table function DEMO\_CDS\_GET\_SCARR\_SPFLI
  with parameters
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
    CL\_DEMO\_AMDP\_FUNCTIONS=>GET\_SCARR\_SPFLI\_FOR\_CDS;

-   The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL has one input parameter CLNT of the type CLNT. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) is assigned to this parameter with the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The client ID of the current client is passed to this parameter implicitly in [SELECT](javascript:call_link\('abapselect.htm'\)). The implementation in the AMDP method GET\_SCARR\_SPFLI\_FOR\_CDS of the associated AMDP class CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL uses the input parameter to restrict the results set to the current client.

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

The result of the accesses performed without the addition CLIENT SPECIFIED is the same for both CDS table functions. If the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) is used to access the CDS table function without an input parameter for the client, the results set has an extra client column and the current client must be selected explicitly in the WHERE condition. The addition CLIENT SPECIFIED cannot be specified for the CDS table function with an input parameter for the client.



**📖 Source**: [abencds_func_client_dep_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_dep_abexa.htm)

### abencds_func_client_indep_abexa.htm

> **📖 Official SAP Documentation**: [abencds_func_client_indep_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_indep_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\)) →  [ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\)) → 

Cross-Client CDS Table Functions

This example demonstrates cross-client CDS table functions.

Source Code

REPORT demo\_cds\_functions\_no\_client.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>amdp\_table\_function ) ) ).
      cl\_demo\_output=>display(
        \`System does not support CDS table functions\` ).
      RETURN.
    ENDIF.
    DATA carrid TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_nocl( clnt   = @sy-mandt,
                                               carrid = @carrid )
           INTO TABLE @DATA(result1)
           ##db\_feature\_mode\[amdp\_table\_function\].
    cl\_demo\_output=>write( result1 ).
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_clnt( clnt   = @sy-mandt,
                                               carrid = @carrid )
           INTO TABLE @DATA(result2)
           ##db\_feature\_mode\[amdp\_table\_function\].
    cl\_demo\_output=>display( result2 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example program accesses two [cross-client](javascript:call_link\('abencds_func_client_handling.htm'\)) [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_NOCL does not have any elements of the type CLNT.

@ClientHandling.type: #CLIENT\_INDEPENDENT  
define table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_NOCL
  with parameters
    clnt   :abap.clnt,
    carrid :s\_carr\_id
  returns
  {
    carrname :s\_carrname;
    connid   :s\_conn\_id;
    cityfrom :s\_from\_cit;
    cityto   :s\_to\_city;
  }
  implemented by method
    CL\_DEMO\_AMDP\_FUNCTIONS\_NOCL=>GET\_SCARR\_SPFLI\_FOR\_CDS;

-   The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT has one element client of the type CLNT.

@ClientHandling.type: #CLIENT\_INDEPENDENT
define table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT
  with parameters
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
    CL\_DEMO\_AMDP\_FUNCTIONS\_CLNT=>GET\_SCARR\_SPFLI\_FOR\_CDS;

Both CDS table functions have an input parameter clnt of the type CLNT without the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The client ID of the current client is passed explicitly to this parameter by the statement [SELECT](javascript:call_link\('abapselect.htm'\)). The implementations in the AMDP method GET\_SCARR\_SPFLI\_FOR\_CDS of the associated AMDP classes CL\_DEMO\_AMDP\_FUNCTIONS\_NOCL or CL\_DEMO\_AMDP\_FUNCTIONS\_CLNT use this input parameter in their WHERE conditions to read the data of the current client only. Both results sets have the same number of rows and are distinguished only by the extra client column of the function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CLNT.

Note

In both table functions, the input field for the client ID could also be annotated with the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) using the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) to stop the client ID from being passed explicitly by SELECTs.



**📖 Source**: [abencds_func_client_indep_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_indep_abexa.htm)

### abencds_func_client_handling.htm

> **📖 Official SAP Documentation**: [abencds_func_client_handling.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_func_client_handling.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\)) → 

ABAP CDS - Client Handling in CDS Table Functions

The [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) can be used to switch [client dependency](javascript:call_link\('abenclient_dependence_glosry.htm'\) "Glossary Entry") on and off for a CDS table function in ABAP CDS.

-   The value #CLIENT\_DEPENDENT switches client dependency on.

-   The value #CLIENT\_INDEPENDENT switches client dependency off.

Client dependency is switched on by default. The client dependency of a CDS table function has the following consequences for the CDS entity and the associated AMDP function implementation:

-   Client-Specific CDS Table Function

-   The [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a client-specific CDS table function must have an explicit client field with the built-in dictionary type CLNT as its first element. The client field is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the CDS entity.

-   When a client-specific CDS table function is accessed using [SELECT](javascript:call_link\('abapselect.htm'\)) without the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)), only those rows are selected implicitly from the results set of the function that contain the ID of the current client or the client specified in the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) in the client field.

-   A CDS table function is always implemented in the associated [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") in platform-specific SQL. The implementation must ensure that all required data is made available. Particularly in the ON conditions of joins, client columns must be used correctly.

-   For performance reasons, it is best to restrict the results set of the function to the required clients at the implementation stage. This usually involves passing the client ID in question to an input parameter of the function. Here, it is advisable to use an input parameter of the dictionary type CLNT, which needs to be annotated with the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) and the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). In this case, [SELECT](javascript:call_link\('abapselect.htm'\)) passes the correct client ID implicitly.

-   Note that if the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT and CDS\_CLIENT are accessed in the implementation of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) of the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) only acts on the session variableCDS\_CLIENT. If the AMDP function is used in an AMDP method called from ABAP, there is no equivalent for USING CLIENT.

-   If the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) is specified, the column is added to the results set and is filled with the associated client ID for each row. Before this column can be used in the SELECT statement, a name must be assigned to it after the addition CLIENT SPECIFIED. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made after [INTO](javascript:call_link\('abapinto_clause.htm'\)). The defined name is also used in the case of [INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)). If no name is defined, the client column is not transported

-   Cross-Client CDS Table Function

-   The [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a cross-client CDS table function does not need to have an explicit client field with the built-in dictionary type CLNT. If the first element has the type CLNT, it does not function as a client field. Instead, it is a column of the tabular return value of the associated AMDP function implementation and also a regular component of the structured data type represented by the CDS entity.

-   When a cross-client CDS table function is accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), an element of the type CLNT does not have a special meaning and is handled like any other element.

-   The annotation [@Environment.systemField: #CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) cannot be used in the parameter list of a cross-client CDS table function.

Notes

-   CDS table functions for application data should usually be client-specific.

-   The annotation [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT replaces the annotation [@ClientDependent](javascript:call_link\('abencds_func_client_handling_obs.htm'\)) with the values true and false and should be used instead of this annotation.

Example

The following client-specific CDS table function reads the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT and CDS\_CLIENT. The first element mandt of the element list is the client field. The other two elements return the read values. An input parameter clnt with the built-in dictionary type CLNT transfers the client ID and, as prescribed, is given the annotation @Environment.systemField:#CLIENT.

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

The first row of a local table client\_tab with the type of the tabular return value is supplied with the session variables. The client field is set to the value of the input parameter clnt and the table is returned. The program DEMO\_AMDP\_CLIENT\_VARIABLES accesses the CDS table function using SELECT and the addition USING CLIENT, and attempts to use a client ID other than that of the current client in the table T000. The client ID specified with USING CLIENT is passed implicitly to the input parameter clnt and fills the client field of the return value with this ID, so that it is respected by automatic client handling. If a client ID other than that of the current client is used, the values of the session variables CLIENT and CDS\_CLIENT are different.

Executable Examples

-   [Client-Specific CDS Table Functions](javascript:call_link\('abencds_func_client_dep_abexa.htm'\))

-   [Cross-Client CDS Table Functions](javascript:call_link\('abencds_func_client_indep_abexa.htm'\))

Continue
[ABAP CDS - Obsolete Client Handling in Table Functions](javascript:call_link\('abencds_func_client_handling_obs.htm'\))
![Example](exa.gif "Example") [Client-Specific CDS Table Functions](javascript:call_link\('abencds_func_client_dep_abexa.htm'\))
![Example](exa.gif "Example") [Cross-Client CDS Table Functions](javascript:call_link\('abencds_func_client_indep_abexa.htm'\))
