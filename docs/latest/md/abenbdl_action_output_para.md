  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20OutputParameter%2C%20ABENBDL_ACTION_OUTPUT_PARA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - OutputParameter

Syntax

... *\[*deep*\]* result *\[*selective*\]* \[cardinality\]
           *{* $self
           *|* entity OutputParameterEntity
           *|* ResultParameterStructure *\[*external 'extname'*\]* *}*

Additions:

[1\. ... deep](#!ABAP_ADDITION_1@1@)
[2\. ... selective](#!ABAP_ADDITION_2@2@)
[3\. ... \[cardinality\]](#!ABAP_ADDITION_3@3@)

Effect

The output parameter for an [action](javascript:call_link\('abenbdl_action.htm'\)) or [function](javascript:call_link\('abenbdl_function.htm'\)) is defined with the keyword result. It can be used to store the result of an action or function in an internal table. However, it does not affect the result of an action or function that is committed to the database. For details on the components of the result structure, see topic [ABAP EML - RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)).

If a result parameter is declared in the action or function definition, it must be filled in the implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

The return type of the result parameter can be an entity or a structure:

-   $self specifies that the result type is the same type as the entity for which the action or function is defined.
-   entity OutputParameterEntity specifies that the result is a different [entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") of the same or another [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").
-   ResultParameterStructure: A [RAP abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") or a [DDIC structure](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry") can be specified as a return type. A resulting structure for actions or functions is defined without the keyword entity.
    
    For result structures, it is possible to define an alias to clearly identify the result in the OData metadata. The keyword external after the result type defines this OData representation of the action or function result.
    

Hints

-   If the result is a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), the result must be defined without the keyword entity as abstract entities are generally considered to be structures in ABAP.
-   If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, OutputParameterEntity specified after the keyword entity must be a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").
-   If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, ResultParameterStructure must be a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).

Example

The following example shows a managed BDEF with two actions, Approve\_Order and Reject\_Order. The result is $self with cardinality 1, so the output parameter has the same type as the entity for which the action is executed.

managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;
strict(2);
define behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument
persistent table demo\_purch\_doc
lock master
etag master crea\_date\_time
authorization master (global)
{
  create;
  update;
  delete;
  association \_PurchaseDocumentItem { create; }
  action Approve\_Order result \[1\] $self;
  action Reject\_Order  result \[1\] $self;
  field(readonly:update) PurchaseDocument;
  field ( readonly )  crea\_uname , crea\_date\_time;
  mapping for demo\_purch\_doc corresponding;
}
define behavior for DEMO\_CDS\_PURCH\_DOC\_I\_M alias PurchaseDocumentItem
persistent table DEMO\_PURCH\_DOC\_I
lock dependent by \_PurchaseDocument
authorization dependent by \_PurchaseDocument
{
  update;
  delete;
  field ( readonly )  PurchaseDocumentItem , PurchaseDocument;
  field ( mandatory ) Price , Quantity , QuantityUnit;
  association \_PurchaseDocument;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

In the behavior pool BP\_DEMO\_CDS\_PURCH\_DOC\_M, the result parameter is declared as follows:

result = VALUE #( FOR purchase IN lt\_purchase
                    ( %tky   = purchase-%tky
                      %param = purchase ) ).

The class CL\_DEMO\_CDS\_PURCHASE accesses the business object and executes the action Approve\_Order for one entity instance.
Code snippet:

MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m
    ENTITY PurchaseDocument
    EXECUTE approve\_order
    FROM VALUE #( ( PurchaseDocument = 'a' ) )
    RESULT FINAL(result).

Result: the changed entity instance is stored in the result structure.

![Figure](abdoc_result.jpg)

Executable Example

The example from above is explained in detail in topic [RAP BDL - action](javascript:call_link\('abenbdl_action1_abexa.htm'\)).

Addition 1   

... deep

Effect

When using the optional addition deep, the syntax for the output parameter is as follows:

... deep result *\[*selective*\]* \[cardinality\] AbstractBDEF;

The output parameter AbstractBDEF must be a [RAP abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)). The BDEF derived type for an abstract BDEF is a hierarchy that contains all entity fields plus a component for every [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry").

The optional addition selective can be specified to return only parts of the result structure.

Example

The following example shows a managed BDEF. The action a2\_deep\_result uses the abstract BDEF DEMO\_CDS\_ABSTRACT\_ROOT as deep output parameter.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") are not implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") here.

managed implementation in class bp\_demo\_cds\_deep\_parameter unique;
strict(2);
define behavior for DEMO\_CDS\_DEEP\_PARAMETER
persistent table DEMO\_BO\_DEEP
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
    mapping for demo\_bo\_deep
    {
    RootBO = root;
    }
  field (readonly:update) RootBO;
// mapping: none
  action a2\_from\_flat              parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: structure
  action a2\_from\_deep       deep  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: table
  action a2\_from\_deep\_table deep table
                                  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
//deep selective output parameter
  action a2\_deep\_result deep result selective \[1\]
    DEMO\_CDS\_ABSTRACT\_ROOT;
}

Addition 2   

... selective

Effect

With the optional addition selective, it is possible to return only parts of the result structure, for example the keys only. This can help to improve performance.

An implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required. If selective is specified in the BDEF, the action or function signature has the additional input parameter REQUEST requested fields, which marks all requested fields with 01.

Example

The following example shows a managed BDEF based on the CDS view entity DEMO\_RAP\_MANAGED\_SELECTIVE\_1. It defines the function myfunction with a selective result.

managed implementation in class bp\_demo\_rap\_managed\_selectiv\_1 unique;
strict(2);
define behavior for DEMO\_RAP\_MANAGED\_SELECTIVE\_1
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  field(readonly:update) KeyFieldRoot;
  function myfunction result selective \[1\] $self;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    LastChangedAt = lchg\_date\_time;
    Timestamp = crea\_date\_time;
  }
}

In the ABAP behavior pool, the instance function myfunction is implemented so that it reads the values of all fields and returns them in the result structure. The result structure interprets the importing parameter requested\_fields and fills only those fields that are requested by the EML consumer.

Code snippet:

METHOD myfunction.
  DATA(lt\_keys) = keys.
  CHECK lt\_keys IS NOT INITIAL.
  READ ENTITIES OF demo\_rap\_managed\_selective\_1 IN LOCAL MODE
    ENTITY demo\_rap\_managed\_selective\_1
      FIELDS ( KeyFieldRoot
               CharFieldRoot
               DataFieldRoot
               Timestamp
               LastChangedAt )
      WITH CORRESPONDING #( lt\_keys )
    RESULT DATA(lt\_item)
    FAILED DATA(read\_failed).
  LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>).
    APPEND VALUE #( %tky   = <fs\_item>-%tky
                    %param-keyfieldroot = COND #(
                    WHEN requested\_fields-KeyFieldRoot
                    EQ if\_abap\_behv=>mk-on
                    THEN  <fs\_item>-KeyFieldRoot )
                     %param-charfieldroot = COND #(
                     WHEN requested\_fields-charfieldRoot
                     EQ if\_abap\_behv=>mk-on
                    THEN  <fs\_item>-charFieldRoot )
                    %param-datafieldroot = COND #(
                    WHEN requested\_fields-datafieldRoot
                    EQ if\_abap\_behv=>mk-on
                    THEN  <fs\_item>-dataFieldRoot )
                     %param-timestamp = COND #(
                     WHEN requested\_fields-timestamp
                     EQ if\_abap\_behv=>mk-on
                    THEN  <fs\_item>-timestamp )
                     %param-lastchangedat = COND #(
                     WHEN requested\_fields-lastchangedat
                     EQ if\_abap\_behv=>mk-on
                    THEN  <fs\_item>-lastchangedat )
                      ) TO result.
  ENDLOOP.
ENDMETHOD.

For the complete implementation in the ABAP behavior pool, see CCIMP include.

The class CL\_DEMO\_RAP\_MANAGED\_SELECTIVE accesses the business object and executes the action myfunction. It requests only the fields KeyFieldRoot and Timestamp and therefore, the result structure displays only the values of these two fields.

Code Snippet:

READ ENTITIES OF demo\_rap\_managed\_selective\_1
ENTITY demo\_rap\_managed\_selective\_1
  EXECUTE myfunction
  FROM VALUE #( (  %tky-KeyFieldRoot =  1 ) )
  REQUEST VALUE #(
    KeyFieldRoot = if\_abap\_behv=>mk-on
    Timestamp = if\_abap\_behv=>mk-on )
RESULT FINAL(result)
FAILED FINAL(entity\_failed)
REPORTED FINAL(entity\_reported).

The following image shows that the importing parameter requested\_fields marks the field requested by the EML consumer with 01.

![Figure](abdoc_requested_fields.jpg)

Result: the result structure contains only the values of the requested fields.

![Figure](abdoc_result_1.jpg)

Addition 3   

... \[cardinality\]

Effect

Defines the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the output parameter. This is a mandatory addition. The square brackets are part of the syntax. The following values can be specified for cardinality:

-   \[0..1\]
-   \[1\]
-   \[0..\*\]
-   \[1..\*\]