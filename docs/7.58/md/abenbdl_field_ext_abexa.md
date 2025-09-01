  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension_syntax.htm) →  [RAP - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extend_beh.htm) →  [RAP - extension\_body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_entity_beh_extension.htm) →  [RAP - Adding Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_new_elem_ext.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Field%20Extension%2C%20ABENBDL_FIELD_EXT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Field Extension

This example demonstrates how extension fields are added and behavior-enabled in a RAP BO extension scenario.

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

CDS transactional interface

The following CDS transactional interface is created as stable public interface for extensions:

@EndUserText.label: 'CDS transactional interface, RAP BO ext'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_FIELD\_EXT\_INT  
provider contract transactional\_interface
as projection on DEMO\_RAP\_FIELD\_EXT
{
  key KeyField,
  DataField,
  CharField,
  DecField
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_FIELD\_EXT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines global authorization control and adds field attributes to multiple fields.

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

For the RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_FIELD\_EXT, see CCIMP include. This global class implements two methods:

-   get\_instance\_features: Implements dynamic feature control for field DataField: If field CharField has value A, then field DataField is read-only. If field CharField has any other value, then field DataField can be accessed without any restrictions.
-   get\_global\_auth: Defines global feature control for the complete RAP BO: Update requests are generally authorized and delete requests are generally unauthorized.

RAP BO Interface

The following RAP BO interface is used as stable public interface for extensions.

interface;
extensible;
define behavior for DEMO\_RAP\_FIELD\_EXT\_INT alias Root
{
  use create;
  use update;
  use delete;
}

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

CDS transactional interface extension

The extension fields are added to the CDS transactional interface by means of an entity extension DEMO\_RAP\_TI\_FIELD\_EXT:

extend view entity DEMO\_RAP\_FIELD\_EXT\_INT with
{
  DEMO\_RAP\_FIELD\_EXT.data\_field\_ext as DataFieldExt,
  DEMO\_RAP\_FIELD\_EXT.char\_field\_ext as CharFieldExt,
  DEMO\_RAP\_FIELD\_EXT.int\_field\_ext  as IntFieldExt,
  DEMO\_RAP\_FIELD\_EXT.num\_field\_ext  as NumFieldExt,
  DEMO\_RAP\_FIELD\_EXT.int1\_field\_ext as Int1FieldExt
}

BDEF extension

The BDEF extension DEMO\_EXTENSION\_RAP\_BO adds field attributes to the extension fields using the BDEF interface.

extension using interface DEMO\_RAP\_FIELD\_EXT\_INT
implementation in class bp\_demo\_extension\_rap\_bo unique;
extend behavior for Root
{
  field ( readonly ) DataFieldExt;
  field ( mandatory ) IntFieldExt;
  field ( suppress ) CharFieldExt;
  field ( features : instance ) NumFieldExt;
  field ( readonly : update ) Int1FieldExt;
}

ABP extension

The ABP extension is implemented in the global class BP\_DEMO\_EXTENSION\_RAP\_BO, see CCIMP include. This global class implements dynamic feature control for the extension field NumFieldExt: If the value of field IntFieldExt is greater than 1000, then field NumFieldExt is read-only. If the value of field IntFieldExt is less than or equal to 1000, access to field NumFieldExt is unrestricted.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_field\_ext DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_field\_ext IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_root\_ext.
    MODIFY ENTITIES OF demo\_rap\_field\_ext\_int
         ENTITY root
           CREATE
             FIELDS ( keyfield charfield intfieldext ) WITH VALUE #(
              ( %cid = '1'
                keyfield = 1
                charfield = 'A'
                intfieldext = 2000 )
              ( %cid = '2'
                keyfield = 2
                charfield = 'B'
                intfieldext = 500 ) )
               MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred \` &&
      \`in the RAP save sequence.\` ).
    ENDIF.
    MODIFY ENTITIES OF demo\_rap\_field\_ext\_int
          ENTITY root
          UPDATE FIELDS ( datafield numfieldext ) WITH VALUE #(
          ( keyfield = 1 datafield = 10 numfieldext = 7 )
          ( keyfield = 2 datafield = 20 numfieldext = 7 ) )
             MAPPED mapped
             FAILED  failed
             REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred \` &&
      \`in the RAP save sequence.\` ).
    ENDIF.
    DATA itab TYPE TABLE OF string WITH EMPTY KEY.
    LOOP AT reported-root ASSIGNING FIELD-SYMBOL(<fs>).
      APPEND \`Instance key: \` &&
      <fs>-keyfield &&
      \`, \` &&
       reported-root\[ sy-tabix \]-%msg->m\_severity  &&
       \`: \` &&
      reported-root\[ sy-tabix \]-%msg->if\_message~get\_text(  )
        TO itab.
    ENDLOOP.
    out->write( itab ).
    SELECT key\_field, char\_field, data\_field,
           int\_field\_ext, num\_field\_ext
    FROM demo\_root\_ext
    INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The source code above uses [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") from an ABAP class:

-   It inserts two entity instances using [MODIFY ENTITIES CREATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).
-   It updates both entity instances using [MODIFY ENTITIES UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).

For the entity instance with key value 1, both fields DataField and NumFieldExt are dynamically set to read-only by the field feature control. These two fields are not updated, but error messages are returned.

Execution order for CREATE:

-   Global authorization control specified in the original ABP.

Execution order for UPDATE:

-   Global authorization control specified in the original ABP.
-   Field feature control specified in the original ABP.
-   Field feature control specified in the extension ABP.