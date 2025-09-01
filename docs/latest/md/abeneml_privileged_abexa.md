  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommon_eml_elements.htm) →  [ABAP EML - PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20the%20Addition%20PRIVILEGED%20with%20an%20ABAP%20EML%20Statement%2C%20ABENEML_PRIVILEGED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

Using the Addition PRIVILEGED with an ABAP EML Statement

This example demonstrates ABAP EML MODIFY statements executing an [action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaction_glosry.htm "Glossary Entry") with and without the addition PRIVILEGED using a managed [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry").

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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_PRIVILEGED is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_privileged unique;
strict ( 2 );
extensible;
with privileged mode disabling ac;
define authorization context ac
{
  'AUTHOBJ1';
  'AUTHOBJ2';
  'AUTHOBJ3';
}
define own authorization context by privileged mode;
define behavior for DEMO\_MANAGED\_PRIVILEGED
persistent table demo\_tab\_root\_3
lock master
authorization master ( global )
extensible
{
  create;
  update;
  delete;
  action check\_privileged;
  field ( readonly : update ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, there is an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available. The global class of the behavior pool is BP\_DEMO\_MANAGED\_PRIVILEGED. This global class implements the local handler class LHC\_DEMO\_MANAGED\_PRIVILEGED. The actual implementation takes place in the CCIMP include. The following method is relevant for the example:

-   check\_privileged
    
    First, the privileged mode is checked. The privileged mode can be queried by the [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") using the method GET\_CURRENT\_CONTEXT of the class CL\_ABAP\_BEHV\_AUX. If the privileged mode is active, a flag is set appropriately. For demonstration purposes in this implementation, the flag for the privileged mode is stored in a variable of the global class of the behavior pool so that the [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") (another class or program) can access it. As a next step, an authority check for demonstrating the privileged mode is carried out using the statement [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check.htm). Like the flag for the privileged mode, the value of sy-subrc is stored in a variable in the global class. After the check, a loop is run across the imported key fields. In this implementation, only the RAP response parameters are manually filled (failed and reported). In case the authorization is not granted, both failed and reported are filled. In the other case, only the reported structure is filled with a success message.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_privileged DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS:
      constructor,
      fill\_dbtab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_privileged IMPLEMENTATION.
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
    out->write( reported\_with\_priv ).
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
  METHOD constructor.
    super->constructor( ).
    fill\_dbtab( ).
  ENDMETHOD.
ENDCLASS.

Description   

The source code above uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class. There are two ABAP EML modify requests:

1.  ABAP EML modify request without using the addition PRIVILEGED
    
    The action check\_privileged is executed based on two key fields. The output includes the sy-subrc value that is set when calling the method and carrying out the authority check. Here, it shows the value 12 indicating that the authorization has not been granted. It also shows a phrase indicating whether the privileged mode is active or not based on a flag that has been set during the method call. For the modify request, the response parameters for failed and reported are filled and are output too. In this case, they include all instances for which the authorization has not been granted and a failure message.
    
2.  ABAP EML modify request with using the addition PRIVILEGED
    
    Same as above, the action check\_privileged is executed based on two key fields. The output demonstrates the effect of the addition PRIVILEGED that circumvents authority checks. Here, the sy-subrc value is 0 indicating that the authorization has been granted. For this request, only the response parameter for reported is filled with a success message.