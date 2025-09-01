  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\)) →  [ABAP EML - PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Using the Addition PRIVILEGED with an ABAP EML Statement, ABENEML_PRIVILEGED_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Using the Addition PRIVILEGED with an ABAP EML Statement

This example demonstrates ABAP EML MODIFY statements executing an [action](javascript:call_link\('abenaction_glosry.htm'\) "Glossary Entry") with and without the addition PRIVILEGED using a managed [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_PRIVILEGED.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_PRIVILEGED
  as select from demo\_tab\_root\_3
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_PRIVILEGED is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_privileged unique;
strict(2);
extensible;
with privileged mode disabling ac;
define authorization context ac
{
    'AUTHOBJ1' ;
    'AUTHOBJ2' ;
    'AUTHOBJ3' ;
}
define own authorization context by privileged mode;
define behavior for DEMO\_MANAGED\_PRIVILEGED
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( global )
extensible
{
  create ;
  update;
  delete;
  action check\_privileged;
}

Behavior implementation

For the above CDS behavior definition, there is an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") available. The global class of the behavior pool is BP\_DEMO\_MANAGED\_PRIVILEGED. This global class implements the local handler class LHC\_DEMO\_MANAGED\_PRIVILEGED. The actual implementation takes place in the CCIMP include. The following method is relevant for the example:

-   check\_privileged
    
    First, the privileged mode is checked. The privileged mode can be queried by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") using the method GET\_CURRENT\_CONTEXT of the class CL\_ABAP\_BEHV\_AUX. If the privileged mode is active, a flag is set appropriately. For demonstration purposes in this implementation, the flag for the privileged mode is stored in a variable of the global class of the behavior pool so that the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") (i. e. the program) can access it. As a next step, an authority check for demonstrating the privileged mode is carried out using the statement [AUTHORITY-CHECK OBJECT](javascript:call_link\('abapauthority-check.htm'\)). Like the flag for the privileged mode, the value of sy-subrc is stored in a variable in the global class. After the check, a loop is run across the imported key fields. In this implementation, only the RAP response parameters are manually filled (failed and reported). In case the authorization is not granted, both failed and reported are filled. In the other case, only the reported structure is filled with a success message.
    

Source Code   

REPORT demo\_rap\_eml\_privileged.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main,
      fill\_dbtab.
  PRIVATE SECTION.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: ABAP EML Statements with \` &&
                        \`and without the Addition PRIVILEGED\`
    )->write\_doc( \`<b>ABAP EML MODIFY Statement without PRIVILEGED</b>\`
    )->begin\_code( \`priv1\` ).
    MODIFY ENTITY demo\_managed\_privileged
        EXECUTE check\_privileged
            FROM VALUE #( ( key\_field = 1 )
                          ( key\_field = 2 ) )
        FAILED FINAL(fail\_no\_priv)
        REPORTED FINAL(reported\_no\_priv).
    out->end\_code( \`priv1\`
      )->write\_doc( |sy-subrc after carrying out the authority| &&
                    | check: { bp\_demo\_managed\_privileged=>subrc }.| ).
    IF bp\_demo\_managed\_privileged=>priv\_flag IS INITIAL.
      out->write\_html( \`<span style="color:red;">\` &&
                       \`We are not in privileged mode.</span>\` ).
    ELSE.
      out->write\_html( \`<span style="color:green;">\` &&
                       \`We are in privileged mode.</span>\` ).
    ENDIF.
    out->write( fail\_no\_priv
      )->write( reported\_no\_priv
      )->line(
      )->write\_doc( \`<b>ABAP EML MODIFY Statement with PRIVILEGED</b>\`
      )->begin\_code( \`priv2\` ).
    MODIFY ENTITY PRIVILEGED demo\_managed\_privileged
        EXECUTE check\_privileged
            FROM VALUE #( ( key\_field = 1 )
                          ( key\_field = 2 ) )
            REPORTED FINAL(reported\_with\_priv).
    out->end\_code( \`priv2\`
      )->write\_doc( |sy-subrc after carrying out the authority| &&
                    | check: { bp\_demo\_managed\_privileged=>subrc }.| ).
    IF bp\_demo\_managed\_privileged=>priv\_flag IS INITIAL.
      out->write\_html( \`<span style="color:red;">\` &&
                       \`We are not in privileged mode.</span>\` ).
    ELSE.
      out->write\_html( \`<span style="color:green;">\` &&
                       \`We are in privileged mode.</span>\` ).
    ENDIF.
    out->write( reported\_with\_priv
      )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    fill\_dbtab( ).
  ENDMETHOD.
  METHOD fill\_dbtab.
    MODIFY demo\_tab\_root\_3 FROM TABLE @( VALUE #(
      ( key\_field = 1
        field1 = 'a'
        field2 = 'b'
        field3 = 1
        field4 = 2 )
      ( key\_field = 2
        field1 = 'c'
        field2 = 'd'
        field3 = 3
        field4 = 4 ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The source code above uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program. There are two ABAP EML modify requests:

1.  ABAP EML modify request without using the addition PRIVILEGED
    
    The action check\_privileged is executed based on two key fields. The output includes the sy-subrc value that is set when calling the method and carrying out the authority check. Here, it shows the value 12 indicating that the authorization has not been granted. It also shows a phrase indicating whether the privileged mode is active or not based on a flag that has been set during the method call. For the modify request, the response parameters for failed and reported are filled and are output too. In this case, they include all instances for which the authorization has not been granted and a failure message.
    
2.  ABAP EML modify request with using the addition PRIVILEGED
    
    Same as above, the action check\_privileged is executed based on two key fields. The output demonstrates the effect of the addition PRIVILEGED that circumvents authority checks. Here, the sy-subrc value is 0 indicating that the authorization has been granted. For this request, only the response parameter for reported is filled with a success message.