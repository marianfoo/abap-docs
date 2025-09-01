---
title: "ABAP EML - Variants of SET FLAGS"
description: |
  This example demonstrates the variants of the SET FLAGS statement. Data model The CDS data model consists of the root entity DEMO_MANAGED_ROOT_MAP and its child entity DEMO_MANAGED_CHILD_MAP. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity DEMO_MANAGED_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_set_flags_abexa.htm"
abapFile: "abeneml_set_flags_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abeneml", "set", "flags", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [Type Mapping for RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_type_mapping.htm) →  [SET FLAGS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_flags.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20Variants%20of%20SET%20FLAGS%2C%20ABENEML_SET_FLAGS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - Variants of SET FLAGS

This example demonstrates the variants of the SET FLAGS statement.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_MAP and its child entity DEMO\_MANAGED\_CHILD\_MAP.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_MAP
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of DEMO\_MANAGED\_CHILD\_MAP as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD\_MAP
  as select from demo\_tab\_child\_3
  association to parent DEMO\_MANAGED\_ROOT\_MAP  
  as \_parent on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key key\_field,
    key key\_field\_child,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_MAP is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_map unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_MAP
persistent table demo\_tab\_root\_3
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field(readonly:update) key\_field;
  mapping for demo\_struc corresponding
  {
    key\_field = b\_key\_field;
    field1 = b\_field1;
    field2 = b\_field2;
    field3 = b\_field3;
    field4 = b\_field4;
  }
  mapping for demo\_struc2 control demo\_struc2\_ctrl corresponding
  {
    key\_field = a\_key\_field control a\_ctrl\_key\_field;
    field1 = a\_field1 control a\_ctrl\_field1;
    field2 = a\_field2 control a\_ctrl\_field2;
    field3 = a\_field3 control a\_ctrl\_field3;
    field4 = a\_field4 control a\_ctrl\_field4;
  }
  mapping for demo\_struc3 control demo\_struc3\_ctrl corresponding
  {
     key\_field = z\_key\_field control z\_ctrl\_key\_field;
     field1 = z\_field1 control z\_ctrl\_field1;
     field2 = z\_field2 control z\_ctrl\_field2;
     field3 = z\_field3 control z\_ctrl\_field3;
     field4 = z\_field4 control z\_ctrl\_field4;
  }
}
define behavior for DEMO\_MANAGED\_CHILD\_MAP alias child
persistent table demo\_tab\_child\_3
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field(readonly:update) key\_field\_child;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, one ABP (BP\_DEMO\_MANAGED\_ROOT\_MAP) is created. It is not relevant for the example.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_set\_flags DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_set\_flags IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`SET FLAGS Variants\` ).
    "Variant: SET FLAGS flags FROM NAMES fields.
    "Example with %control
    out->write\_html(
       '<b><i>Variant: SET FLAGS flags FROM NAMES fields.</i></b>'
                   ).
    DATA: fields TYPE abp\_field\_name\_tab,
          src    TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
    fields = VALUE #( ( CONV #( 'KEY\_FIELD' ) )
                     "( CONV #( 'FIELD1' ) )
                      ( CONV #( 'FIELD2' ) )
                      ( CONV #( 'FIELD3' ) )
                      ( CONV #( 'FIELD4' ) )
                    ).
    SET FLAGS src FROM NAMES fields.
    "Example with %element
    DATA: fields2 TYPE abp\_field\_name\_tab,
          src2    TYPE STRUCTURE FOR REPORTED demo\_managed\_root\_map.
    fields2 = VALUE #( ( CONV #( 'KEY\_FIELD' ) )
                       ( CONV #( 'FIELD1' ) )
                      "( CONV #( 'FIELD2' ) )
                       ( CONV #( 'FIELD3' ) )
                       ( CONV #( 'FIELD4' ) )
                       ( CONV #( '\_CHILD' ) )
                     ).
    SET FLAGS src2 FROM NAMES fields2.
    out->write\_text( 'Example with %control'
      )->write( src-%control
      )->write\_text( 'Example with %element'
      )->write( src2-%element ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Variant: SET FLAGS flags FROM NAMES fields MAPPING TYPE p\_type.
    out->write\_html( '<b><i>Variant: SET FLAGS flags </i></b>' &&
              '<b><i>FROM NAMES fields MAPPING TYPE p\_type.</i></b>'
                    ).
    DATA: fields3 TYPE abp\_field\_name\_tab,
          src3    TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
    fields3 = VALUE #( ( CONV #( 'B\_KEY\_FIELD' ) )
                       ( CONV #( 'B\_FIELD1' ) )
                       ( CONV #( 'B\_FIELD2' ) )
                      "( CONV #( 'B\_FIELD3' ) )
                       ( CONV #( 'B\_FIELD4' ) )
                     ).
    SET FLAGS src3 FROM NAMES fields3 MAPPING TYPE demo\_struc.
    out->write( src3-%control ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Variant: SET FLAGS flag FROM NAMES fields MAPPING LIKE var.
    out->write\_html( '<b><i>Variant: SET FLAGS flags </i></b>' &&
                   '<b><i>FROM NAMES fields MAPPING LIKE var.</i></b>'
                    ).
    DATA: fields4 TYPE abp\_field\_name\_tab,
          src4    TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map,
          var     TYPE demo\_struc.
    fields4 = VALUE #( ( CONV #( 'B\_KEY\_FIELD' ) )
                       ( CONV #( 'B\_FIELD1' ) )
                       ( CONV #( 'B\_FIELD2' ) )
                       ( CONV #( 'B\_FIELD3' ) )
                      "( CONV #( 'B\_FIELD4' ) )
                     ).
    SET FLAGS src4 FROM NAMES fields4 MAPPING LIKE var.
    out->write( src4-%control ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

For all variants of the SET FLAGS statement, variables are declared for the field list typed with ABP\_FIELD\_NAME\_TAB and for the flags typed with a [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") that includes the %control structure. The field list gets filled, purposely excluding certain field names. Thus, for all fields contained in the field list, the value for the respective component in the %control structure is 01. The value for the ones that are not contained in the field list is 00.

As a result of all the SET NAMES statement variants, the %control structures are displayed in an output window. The first variant comprises examples for both %control and %element.