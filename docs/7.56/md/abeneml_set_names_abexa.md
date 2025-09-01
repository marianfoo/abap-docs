---
title: "ABAP EML - Variants of SET NAMES"
description: |
  This example demonstrates the variants of the SET NAMES statement. Data model The CDS data model consists of the root entity DEMO_MANAGED_ROOT_MAP and its child entity DEMO_MANAGED_CHILD_MAP. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity DEMO_MANAGED_
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_set_names_abexa.htm"
abapFile: "abeneml_set_names_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abeneml", "set", "names", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [Type Mapping for ABAP EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_type_mapping.htm) →  [SET NAMES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_names.htm) → 

ABAP EML - Variants of SET NAMES

This example demonstrates the variants of the SET NAMES statement.

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_MAP is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_map unique;
strict;
define behavior for DEMO\_MANAGED\_ROOT\_MAP
persistent table demo\_tab\_root\_3
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  association \_child { create; }
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
  association \_parent;
}

Behavior implementation

For the above CDS behavior definition, one ABP (BP\_DEMO\_MANAGED\_ROOT\_MAP) is created. It is not relevant for the example.

Source Code

REPORT demo\_rap\_eml\_set\_names.
CLASS demo DEFINITION.
    PUBLIC SECTION.
      CLASS-METHODS:
        class\_constructor,
        main.
    PRIVATE SECTION.
      CLASS-DATA:
        out TYPE REF TO if\_demo\_output.
      CLASS-METHODS:
        initialize\_dbtabs.
  ENDCLASS.
  CLASS demo IMPLEMENTATION.
    METHOD main.
    out->begin\_section( \`SET NAMES Variants\` ).
    "Variant: SET NAMES fields FROM FLAGS src.
    "Example with %control
    out->write\_html(
       '<b><i>Variant: SET NAMES fields FROM FLAGS src.</i></b>'
                   ).
    DATA: fields TYPE abp\_field\_name\_tab,
          src    TYPE STRUCTURE FOR UPDATE DEMO\_MANAGED\_ROOT\_MAP.
    src-%control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                                  field1    = if\_abap\_behv=>mk-off
                                  field2    = if\_abap\_behv=>mk-on
                                  field3    = if\_abap\_behv=>mk-on
                                  field4    = if\_abap\_behv=>mk-on
                                ).
    SET NAMES fields FROM FLAGS src.
    "Example with %element
     DATA: fields2 TYPE abp\_field\_name\_tab,
           src2    TYPE STRUCTURE FOR REPORTED DEMO\_MANAGED\_ROOT\_MAP.
     src2-%element = VALUE #( key\_field     = if\_abap\_behv=>mk-on
                              field1        = if\_abap\_behv=>mk-on
                              field2        = if\_abap\_behv=>mk-off
                              field3        = if\_abap\_behv=>mk-on
                              field4        = if\_abap\_behv=>mk-on
                              %assoc-\_child = if\_abap\_behv=>mk-on
                            ).
     SET NAMES fields2 FROM FLAGS src2.
      out->write\_text( 'Example with %control'
        )->write( fields
        )->write\_text( 'Example with %element'
        )->write( fields2 ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Variant: SET NAMES fields FROM FLAGS src MAPPING TYPE p\_type.
     out->write\_html( '<b><i>Variant: SET NAMES fields </i></b>' &&
                '<b><i>FROM FLAGS src MAPPING TYPE p\_type.</i></b>'
                    ).
    DATA: fields3 TYPE abp\_field\_name\_tab,
          src3    TYPE STRUCTURE FOR UPDATE DEMO\_MANAGED\_ROOT\_MAP.
    src3-%control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                             field1    = if\_abap\_behv=>mk-on
                             field2    = if\_abap\_behv=>mk-on
                             field3    = if\_abap\_behv=>mk-off
                             field4    = if\_abap\_behv=>mk-on
                           ).
    SET NAMES fields3 FROM FLAGS src3
      MAPPING TYPE demo\_struc.
     out->write( fields3 ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
   "SET NAMES fields FROM FLAGS src MAPPING LIKE var.
     out->write\_html( '<b><i>Variant: SET NAMES fields </i></b>' &&
                      '<b><i>FROM FLAGS src MAPPING LIKE var.</i></b>'
                    ).
    DATA: fields4 TYPE abp\_field\_name\_tab,
          src4    TYPE STRUCTURE FOR UPDATE DEMO\_MANAGED\_ROOT\_MAP,
          var     TYPE demo\_struc.
    src4-%control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                             field1    = if\_abap\_behv=>mk-on
                             field2    = if\_abap\_behv=>mk-on
                             field3    = if\_abap\_behv=>mk-on
                             field4    = if\_abap\_behv=>mk-off
                           ).
    SET NAMES fields4 FROM FLAGS src4 MAPPING LIKE var.
    out->write( fields4
      )->display( ).    ENDMETHOD.
    METHOD class\_constructor.
      out = cl\_demo\_output=>new( ).
      initialize\_dbtabs( ).
    ENDMETHOD.
    METHOD initialize\_dbtabs.
      DELETE FROM DEMO\_TAB\_ROOT\_3.
    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program.

For all variants of the SET NAMES statement, variables are declared for the field list typed with ABP\_FIELD\_NAME\_TAB and for the source that is typed with a [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") which includes the %control structure. The components of the %control structure include a value that is initial and, thus, not contained in the field list.

The field lists for all variants are displayed in an output window. The first variant comprises examples for both %control and %element for the source.