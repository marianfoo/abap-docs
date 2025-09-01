  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20field%20characteristics%2C%20ABENBDL_FIELD_CHAR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - field characteristics

Syntax

... field(readonly) Field1, Field2, ...;
       *|* (mandatory) Field1, Field2, ...;
       *|* (suppress) Field1, Field2, ...;
       *|* (features:instance) Field1, Field2, ...;
       *|* (mandatory:create) Field1, Field2, ...;
       *|* (readonly:update) Field1, Field2, ...;
       *|* (notrigger*\[*:warn*\]*) Field1, Field2, ...;

Variants:

[1\. ... field(readonly) Field1, Field2, ...](#!ABAP_VARIANT_1@1@)
[2\. ... field(mandatory) Field1, Field2, ...](#!ABAP_VARIANT_2@2@)
[3\. ... field(suppress) Field1, Field2, ...](#!ABAP_VARIANT_3@3@)
[4\. ... field(features:instance) Field1, Field2, ...](#!ABAP_VARIANT_4@4@)
[5\. ... field(mandatory:create) Field1, Field2, ...](#!ABAP_VARIANT_5@5@)
[6\. ... field(readonly:update) Field1, Field2, ...](#!ABAP_VARIANT_6@6@)
[7\. ... field(notrigger*\[*:warn*\]*) Field1, Field2, ...](#!ABAP_VARIANT_7@7@)

Effect

This topic lists [RAP field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_field_char_glosry.htm "Glossary Entry") for the [fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_field_glosry.htm "Glossary Entry") of a [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").

Commas can be used to classify multiple fields in the same way. Example: field(readonly) Field1, Field2, Field3;

A field can have multiple characteristics, divided by commas within the brackets. Example: field(mandatory:create, readonly:update) Field1, Field2, Field3;. Certain restrictions apply on the combination of field characteristics. They are indicated by a syntax check warning.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   In case of [projection BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), automatic inheritance takes place. To newly define field characteristics in a projection BO, special rules apply. See topic [RAP - Field Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_projection.htm).
-   For [abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"), special rules apply. See topic [RAP - Field Characteristics, Abstract BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_abstract.htm).
-   For [interface BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), automatic inheritance takes place. The interface can add further field characteristics, as long as they do not contradict the field characteristics from the base layer. This is described in topic [Field Characteristics, Interface BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_interface.htm).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Feature Control Definition: Fields](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/eb060664a98c4275a3a4346d9c5b6707?version=sap_cross_product_abap)

Hints

-   In UI scenarios, field characteristics are displayed as a [RAP consumer hint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_consumer_hint_glosry.htm "Glossary Entry").
-   All primary key fields must be defined as readonly or as readonly:update. Otherwise, a syntax check warning occurs.

Variant 1   

... field(readonly) Field1, Field2, ...

Effect

-   Defines that the values of the specified fields must not be created or updated by the [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").
-   [Static field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_field_char_glosry.htm "Glossary Entry").
-   No implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") required.
-   If a [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") tries to modify a field specified as readonly in the BDEF using [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") [CREATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm) or [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm), a syntax check error occurs.

Variant 2   

... field(mandatory) Field1, Field2, ...

Effect

-   Defines that it is mandatory to enter values into the specified fields before persisting them on the database. These fields are marked as mandatory on the user interface in an OData scenario. However, there is no runtime check for mandatory fields and no runtime error occurs if a mandatory field is not filled. If a runtime check is required, the application developer should implement it using a [validation on save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm).
-   [Static field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_field_char_glosry.htm "Glossary Entry").
-   No implementation in the ABAP behavior pool required.

Example

The following example shows a managed BDEF that defines the field char\_field1 as mandatory.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_RAP\_FIELD\_MANDATORY
persistent table demo\_dbtab\_field
lock master
{
  create;
  update;
  delete;
  field ( readonly:update ) key\_field;
  field ( mandatory ) char\_field1;
}

The ABAP class CL\_DEMO\_RAP\_MANAGED\_MANDATORY uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object. It creates three entity instances by specifying a value for the primary key field key\_field. No value is entered for the mandatory field char\_field1. It commits the three new entity instances to the database. Using the ABAP SQL SELECT statement, it displays the content of the underlying database table.

Code Snippet:

DELETE FROM demo\_dbtab\_field.
    MODIFY ENTITIES OF demo\_rap\_field\_mandatory
         ENTITY DEMO\_RAP\_FIELD\_MANDATORY
         CREATE FIELDS ( key\_field char\_field1 ) WITH VALUE #(
              ( %cid = '1'
                key\_field = '0894EF1643A01EDB989329BF29E8FD27' )
              ( %cid = '2'
                key\_field = '0894EF1643A01EDB989329BF29E81D27' )
              ( %cid = '3'
                key\_field = '0894EF1643A01EDB989329BF29E83D27' ) )
               MAPPED FINAL(mapped)
               FAILED FINAL(failed)
               REPORTED FINAL(reported).
    COMMIT ENTITIES.

Result: The mandatory field char\_field1 contains the [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry"), no syntax check warning or syntax check error occurs.

![Figure](abdoc_mandatory.png)

Variant 3   

... field(suppress) Field1, Field2, ...

Effect

-   Field(suppress) can be used to remove a field from the [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"), OData, and all RAP APIs. This is possible for all fields except for [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkey_field_glosry.htm "Glossary Entry"), [foreign key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_field_glosry.htm "Glossary Entry"), and fields used by the current BDEF, such as ETag fields.
-   Currency key fields of data type CUKY can be suppressed only if all amount fields that make a reference to this particular CUKY field are also suppressed.
-   [Static field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_field_char_glosry.htm "Glossary Entry").
-   No implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") required.
-   If a [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") tries to modify a suppressed field, an error message occurs that tells the consumer that no field of this name exists.

Example

The following example shows an interface BDEF that suppresses the field DataFieldRoot.

interface;
use draft;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root
use etag
{
  use create;
  use update;
  use delete;
  use action Activate;
  use action Discard;
  use action Edit;
  use action Resume;
  use action Prepare;
  field(suppress) DataFieldRoot;
}

The ABAP class CL\_DEMO\_RAP\_INTERFACE\_DRAFT creates a variable typed with the BDEF derived type of the RAP BO DEMO\_RAP\_INTERFACE\_DRAFT and displays the structure of this variable.

Code Snippet:

DATA structure TYPE TABLE FOR CREATE demo\_rap\_interface\_draft.
APPEND INITIAL LINE TO structure.

Result: The suppressed field DataFieldRoot is not part of structure.

![Figure](field_suppress.png)

Variant 4   

... field(features:instance) Field1, Field2,...

Effect

-   [Dynamic field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_dyn_field_char_glosry.htm "Glossary Entry") that defines access restrictions for fields depending on the state of the BO entity instance.
-   Must be implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE FEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_features.htm). In the ABAP behavior pool, it can be specified that a field is dynamically mandatory, read-only, has no restrictions, or that it is mandatory and read-only.
-   If a RAP BO consumer tries to breach the dynamic access restrictions, it is ignored. There is no error or warning message. In a managed RAP BO, there is also no entry in the response structures. In an unmanaged RAP BO, the reported structure can be filled, depending on the BO implementation.

Example

The following example shows a managed BDEF that defines dynamic feature control for field int\_field2.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed implementation in class bp\_demo\_rap\_instance\_features unique;
define behavior for DEMO\_RAP\_INSTANCE\_FEATURES
persistent table demo\_dbtab\_field
lock master
{
  create;
  update;
  delete;
  field ( readonly:update ) key\_field;
  field ( features : instance ) int\_field2;
}

In the ABAP behavior pool, it specifies the following condition: if field int\_field1 contains the value '1', then int\_field2 is read-only.

Code snippet:

... %field-int\_field2 = COND #(
                        WHEN ls\_variable-int\_field1 = '1'
                        THEN if\_abap\_behv=>fc-f-read\_only
                        ELSE if\_abap\_behv=>fc-f-unrestricted
                        ) ) ).

The ABAP class CL\_DEMO\_RAP\_INSTANCE\_FEATURES uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object.

-   First, it inserts an entity instance directly onto the database using ABAP SQL INSERT. This entity instance has the value '1' for field int\_field1. Therefore, it fulfills the condition that triggers feature control: if this instance is updated, field int\_field2 should be read-only.
-   An EML [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm) operation is executed on the same instance. This update operation tries to enter a value into field int\_field2.
-   The updated entity instance is committed to the database. Using the ABAP SQL SELECT statement, the content of the underlying database table is displayed.

Result: The update operation is prevented by the dynamic feature control. Field int\_field2 contains the initial value. No syntax check warning or syntax check error occurs.

![Figure](abdoc_instance_features.png)

Executable Example

[ABAP EML - RAP Calculator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_calculator_abexa.htm)

Variant 5   

... field(mandatory:create) Field1, Field2, ...

Effect

-   [Dynamic field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_dyn_field_char_glosry.htm "Glossary Entry") that defines that it is mandatory to enter a value when an instance is created.
-   No implementation in the ABAP behavior pool required.
-   If a RAP BO consumer tries to create a new entity instance without entering a value into the field defined as mandatory:create, a runtime error occurs.

Hint

A typical use case is to combine mandatory:create with readonly:update for key fields (external numbering by RAP BO consumer).

Variant 6   

... field(readonly:update) Field1, Field2, ...

Effect

-   [Dynamic field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_dyn_field_char_glosry.htm "Glossary Entry") that defines a field as read-only during update operations, that means, the field in question cannot be changed anymore after the create operation.
-   No implementation in the ABAP behavior pool required.
-   If a RAP BO consumer tries to update a field defined as readonly:update, a syntax check error occurs.

Variant 7   

...field(notrigger*\[*:warn*\]*) Field1, Field2,...

Effect

-   Defines that the field in question must not be used as the trigger condition of a [RAP determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_determination_glosry.htm "Glossary Entry") or a [RAP validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_validation_glosry.htm "Glossary Entry").
-   Available in RAP behavior definitions of type managed and unmanaged.
-   If a field defined as field(notrigger) is used in a trigger condition, a syntax check error occurs.
-   If the optional addition warn is used, a syntax check warning occurs. This addition can be used, for example, if the field restriction is added at a later point in time when the field in question has potentially already been used in a trigger condition. In this scenario, the addition warn prevents an incompatible change.
-   This field characteristic can be useful, for example, in [RAP extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extensibility_glosry.htm "Glossary Entry") scenarios. The original RAP BO can exclude certain fields from usage in trigger conditions and this applies to all [RAP BO extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_extension_glosry.htm "Glossary Entry").
-   [Static field attribute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_field_char_glosry.htm "Glossary Entry").
-   No implementation in the ABAP behavior pool required.

Example

The following managed BDEF excludes two fields from being used as a trigger condition in a RAP determination or a RAP validation. The fields are administrative fields that are updated automatically by the RAP transactional engine and therefore, they are not suitable as trigger conditions.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here.

managed implementation in class bp\_demo\_rap\_notrigger unique;
strict ( 2 );
define behavior for DEMO\_RAP\_NOTRIGGER
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
  field(notrigger:warn) lchg\_date\_time, crea\_date\_time;
}