  

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