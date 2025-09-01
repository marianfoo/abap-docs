  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Projection Extension, Field Extension, ABENBDL_ENTITY_PROJ_EXT_1_ABEXA
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Projection Extension, Field Extension

This example demonstrates how extension fields are added and behavior-enabled in a projection BDEF extension scenario.

Original RAP BO   

DDIC data model

The DDIC data model consists of one database table: DEMO\_ROOT\_EXT:

@EndUserText.label : 'Database Table for Root Entity of RAP BO'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table demo\_root\_ext {
  key client    : mandt not null;
  key key\_field : abap.int4 not null;
  data\_field    : abap.string(0);
  char\_field    : abap.char(25);
  char\_field\_2  : abap.char(25);
  dec\_field     : abap.dec(15,2);
  include demo\_extension;
}

This database table includes structure DEMO\_EXTENSION.

@EndUserText.label : 'Used for demo of RAP BO extension'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY
define structure demo\_extension {
  crea\_date\_time : timestampl;
  lchg\_date\_time : timestampl;
}

CDS data model

The CDS data model consists of one root entity without child entities: DEMO\_RAP\_FIELD\_EXT:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP BO ext'
define root view entity DEMO\_RAP\_FIELD\_EXT
  as select from demo\_root\_ext
{
  key key\_field  as KeyField,
      data\_field as DataField,
      char\_field as CharField,
      dec\_field  as DecField
}

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_FIELD\_EXT is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as shown below. It defines global authorization control and adds field attributes to several fields.

managed implementation in class bp\_demo\_rap\_field\_ext unique;
strict(2);
extensible;
define behavior for DEMO\_RAP\_FIELD\_EXT alias Root
persistent table demo\_root\_ext
lock master
authorization master ( global )
extensible
{
  create;
  update;
  delete;
  field ( mandatory : create, readonly : update ) KeyField;
  field ( features : instance ) DataField;
  field(readonly) DecField;
  mapping for demo\_root\_ext corresponding extensible
  {
    KeyField = key\_field;
    DataField = data\_field;
    CharField = char\_field;
    DecField = dec\_field;
  }
}

Behavior implementation

For the CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_FIELD\_EXT, see CCIMP include. This global class implements two methods:

-   get\_instance\_features: Implements dynamic feature control for field DataField: If field CharField has value A, then field DataField is read-only. If field CharField has any other value, then field DataField can be accessed without any restrictions.
-   get\_global\_auth: Defines global feature control for the complete RAP BO: Update requests are generally authorized and delete requests are generally unauthorized.

Extension RAP BO   

DDIC data model extension

Extension fields are added to the DDIC data model via the structure extension DEMO\_EXTEND\_STR:

@EndUserText.label : 'Used for demo of RAP BO extension'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
extend type demo\_extension with demo\_extend\_str {
  data\_field\_ext : abap.string(0);
  char\_field\_ext : abap.char(25);
  int\_field\_ext  : abap.int4;
  num\_field\_ext  : abap.int2;
  int1\_field\_ext : abap.int1;
}

CDS data model extension

The extension fields are added to the CDS data model via the CDS view entity extension DEMO\_EXTENSION\_RAP\_BO:

extend view entity DEMO\_RAP\_FIELD\_EXT with
{
  demo\_root\_ext.data\_field\_ext,
  demo\_root\_ext.char\_field\_ext,
  demo\_root\_ext.int\_field\_ext,
  demo\_root\_ext.num\_field\_ext,
  demo\_root\_ext.int1\_field\_ext
}

BDEF extension

The BDEF extension DEMO\_EXTENSION\_RAP\_BO adds field attributes to the extension fields.

extension implementation in class bp\_demo\_extension\_rap\_bo unique;
extend behavior for Root
{
  field ( readonly ) data\_field\_ext;
  field ( mandatory ) int\_field\_ext;
  field ( suppress ) char\_field\_ext;
  field ( features : instance ) num\_field\_ext;
  field ( readonly : update ) int1\_field\_ext;
}

ABP extension

The ABP extension is implemented in the global class BP\_DEMO\_EXTENSION\_RAP\_BO, see CCIMP include. This global class implements dynamic feature control for the extension field NumFieldExt: If the value of field IntFieldExt is greater than 1000, then field NumFieldExt is read-only. If the value of field IntFieldExt is less than or equal to 1000, access to field NumFieldExt is unrestricted.

Projection Layer   

Data model projection

The projection view DEMO\_RAP\_PROJ\_EXT\_FIELD projects the root node:

@EndUserText.label: 'CDS pv, demo for RAP proj ext'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_PROJ\_EXT\_FIELD
  provider contract transactional\_query
  as projection on DEMO\_RAP\_FIELD\_EXT
{
  key KeyField,
      DataField,
      CharField,
      DecField
}

View entity extension

The CDS view entity extension DEMO\_RAP\_PV\_EX extends the original CDS projection view. It includes the extension fields in the projection layer.

extend view entity DEMO\_RAP\_PROJ\_EXT\_FIELD with
{
  DEMO\_RAP\_FIELD\_EXT.char\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.data\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.int1\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.int\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.num\_field\_ext
}

Behavior projection

The CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_FIELD projects the original BDEF.

projection;
strict(2);
extensible;
define behavior for DEMO\_RAP\_PROJ\_EXT\_FIELD alias Root
extensible
{
  use create;
  use update;
  use delete;
}

BDEF projection extension

The BDEF projection extension DEMO\_RAP\_PROJ\_BDEF\_EXT extends the projection behavior definition. Its adds field attributes to the extension fields.

extension for projection;
extend behavior for Root {
field(suppress) char\_field\_ext;
field(readonly:update) int\_field\_ext;
}

Source Code   

REPORT demo\_rap\_proj\_ext\_field.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_root\_ext.
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_field
         ENTITY Root
           CREATE
             FIELDS ( KeyField CharField int\_field\_ext ) WITH VALUE #(
              ( %cid = '1'
                KeyField = 1
                CharField = 'A'
                int\_field\_ext = 500 )
              ( %cid = '2'
                KeyField = 2
                CharField = 'B'
                int\_field\_ext = 1000 ) )
               MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.
    SELECT key\_field, char\_field,
           int\_field\_ext, num\_field\_ext
    FROM demo\_root\_ext
    INTO TABLE @FINAL(result).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_field
          ENTITY Root
          UPDATE FIELDS ( CharField num\_field\_ext ) WITH VALUE #(
          ( KeyField = 1 CharField = 'update' num\_field\_ext = 7 )
          ( KeyField = 2 CharField = 'update' num\_field\_ext = 7 ) )
             MAPPED mapped
             FAILED  failed
             REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field,
           int\_field\_ext, num\_field\_ext
    FROM demo\_root\_ext
    INTO TABLE @FINAL(result1).
    FINAL(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'After CREATE'
    )->write( result
    )->next\_section( 'After UPDATE'
    )->write( result1
    )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The source code above uses [ABAP EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") from an ABAP program:

-   It inserts two entity instances using [MODIFY ENTITIES CREATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)).
-   It updates both entity instances using [MODIFY ENTITIES UPDATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)).

Field attributes from the original BO, from the projection BO, and from the extensions are respected. Fields declared as read-only on any layer must not be updated. CharFieldExt is not available in the derived types, since it has been suppressed.