  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [Type Mapping](javascript:call_link\('abapeml_type_mapping.htm'\)) →  [SET FLAGS](javascript:call_link\('abapset_flags.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - Variants of SET FLAGS, ABENEML_SET_FLAGS_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_MAP is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

REPORT demo\_rap\_eml\_set\_flags.
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
    out->begin\_section( \`SET FLAGS Variants\` ).
    "Variant: SET FLAGS flags FROM NAMES fields.
    "Example with %control
    out->write\_html(
       '<b><i>Variant: SET FLAGS flags FROM NAMES fields.</i></b>'
                   ).
    DATA: fields TYPE abp\_field\_name\_tab,
          src    TYPE STRUCTURE FOR CREATE DEMO\_MANAGED\_ROOT\_MAP.
    fields = VALUE #( ( CONV #( 'KEY\_FIELD' ) )
                     "( CONV #( 'FIELD1' ) )
                      ( CONV #( 'FIELD2' ) )
                      ( CONV #( 'FIELD3' ) )
                      ( CONV #( 'FIELD4' ) )
                    ).
    SET FLAGS src FROM NAMES fields.
    "Example with %element
    DATA: fields2 TYPE abp\_field\_name\_tab,
          src2  TYPE STRUCTURE FOR REPORTED DEMO\_MANAGED\_ROOT\_MAP.
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
          src3  TYPE STRUCTURE FOR CREATE DEMO\_MANAGED\_ROOT\_MAP.
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
          src4  TYPE STRUCTURE FOR CREATE DEMO\_MANAGED\_ROOT\_MAP,
          var     TYPE demo\_struc.
    fields4 = VALUE #( ( CONV #( 'B\_KEY\_FIELD' ) )
                       ( CONV #( 'B\_FIELD1' ) )
                       ( CONV #( 'B\_FIELD2' ) )
                       ( CONV #( 'B\_FIELD3' ) )
                      "( CONV #( 'B\_FIELD4' ) )
                     ).
    SET FLAGS src4 FROM NAMES fields4 MAPPING LIKE var.
    out->write( src4-%control
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

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program.

For all variants of the SET FLAGS statement, variables are declared for the field list typed with ABP\_FIELD\_NAME\_TAB and for the flags typed with a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that includes the %control structure. The field list gets filled, purposely excluding certain field names. Thus, for all fields contained in the field list, the value for the respective component in the %control structure is 01. The value for the ones that are not contained in the field list is 00.

As a result of all the SET NAMES statement variants, the %control structures are displayed in an output window. The first variant comprises examples for both %control and %element.