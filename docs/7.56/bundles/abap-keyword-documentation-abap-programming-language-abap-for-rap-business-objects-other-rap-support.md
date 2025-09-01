# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP for RAP Business Objects / Other RAP-Supporting ABAP Language Elements / Type Mapping for ABAP EML / SET NAMES

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapset_names.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_names.htm)
- [abeneml_set_names_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_set_names_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.462Z

---

### abapset_names.htm

> **📖 Official SAP Documentation**: [abapset_names.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_names.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [Type Mapping for ABAP EML](javascript:call_link\('abapeml_type_mapping.htm'\)) → 

SET NAMES

Syntax

SET NAMES fields FROM FLAGS src *{* MAPPING *{* TYPE p\_type *}*
                                        *|* *{* LIKE var *}*
                                *}*.

Variants:

[1\. ... MAPPING TYPE p\_type.](#!ABAP_VARIANT_1@1@)
[2\. ... MAPPING LIKE var.](#!ABAP_VARIANT_2@2@)

Effect

Used for the conversion of fields that have the [technical type](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") [x](javascript:call_link\('abenbuiltin_types_byte.htm'\)) and field name lists in the context of RAP. The statement deals with [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that include the components [%control](javascript:call_link\('abapderived_types_comp.htm'\)) and [%element](javascript:call_link\('abapderived_types_comp.htm'\)). The components of %control and %element have the technical type x.

The ABAP statement is targeted at applications that include, on the one hand, [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that use BDEF derived types and, on the other hand, implementations of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that use other data types. Mapping of field names is required if types are involved that have different field names than those in the underlying [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of the RAP BO.

fields represents a [general expression](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). A variable in the position of fields must be a table containing one or more field names. It is of type ABP\_FIELD\_NAME\_TAB, the line type is ABP\_FIELD\_NAME. src represents a [general expression](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). A variable in the position of src must be typed with a BDEF derived type that contains %control or %element.

As a result of the ABAP statement, the field name list fields contains those fields that have non-initial values in the %control or %element structure of src. The ABAP statement [SET FLAGS](javascript:call_link\('abapset_flags.htm'\)) does the conversion the other way round.

The following short dumps result from an operation that cannot be executed at runtime using the SET NAMES statements:

-   TCHK\_TYPE\_LOAD: Inappropriate type for field names.
-   BEHAVIOR\_FLAGS\_NAMES\_ERROR: Inappropriate type on the BDEF derived type side or a missing mapping, which is true for the variants of the statement.

Variant 1   

... MAPPING TYPE p\_type.

Effect

Used in case type mapping is required for a structured [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"), for example, a legacy type. As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the CDS BDL topic [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Variant 2   

... MAPPING LIKE var.

Effect

Used in case type mapping is required for a structured [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"), for example, a legacy type. This variant is relevant if the type is not available and is a variable of the required type instead. As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the CDS BDL topic [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Hint

%element contains the names of all associations of the RAP BO. However, type mapping cannot be defined for associations. Hence, if the ABAP statement is used with mapping and a BDEF derived typed with %element, information from %element that relates to associations is lost. In this case, only the mapped component name is available in fields.

Example

The following source code section taken from DEMO\_RAP\_EML\_SET\_NAMES shows the syntax of the SET NAMES variants.

DATA: fields  TYPE abp\_field\_name\_tab,
      fields2 TYPE abp\_field\_name\_tab,
      fields3 TYPE abp\_field\_name\_tab,
      src     TYPE STRUCTURE FOR UPDATE demo\_managed\_root\_map,
      var     TYPE demo\_struc.
src-%control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                        field1    = if\_abap\_behv=>mk-off
                        field2    = if\_abap\_behv=>mk-on
                        field3    = if\_abap\_behv=>mk-on
                        field4    = if\_abap\_behv=>mk-on
                      ).
"First variant.
SET NAMES fields FROM FLAGS src.
"Second variant.
SET NAMES fields2 FROM FLAGS src MAPPING TYPE demo\_struc.
"Third variant.
SET NAMES fields3 FROM FLAGS src MAPPING LIKE var.

Executable Example

The example [ABAP EML - Variants of SET NAMES](javascript:call_link\('abeneml_set_names_abexa.htm'\)) demonstrates the three different variants with a simple managed RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - Variants of SET NAMES](javascript:call_link\('abeneml_set_names_abexa.htm'\))



**📖 Source**: [abapset_names.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_names.htm)

### abeneml_set_names_abexa.htm

> **📖 Official SAP Documentation**: [abeneml_set_names_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_set_names_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abeneml_set_names_abexa.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_set_names_abexa.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [Type Mapping for ABAP EML](javascript:call_link\('abapeml_type_mapping.htm'\)) →  [SET NAMES](javascript:call_link\('abapset_names.htm'\)) → 

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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_MAP is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program.

For all variants of the SET NAMES statement, variables are declared for the field list typed with ABP\_FIELD\_NAME\_TAB and for the source that is typed with a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") which includes the %control structure. The components of the %control structure include a value that is initial and, thus, not contained in the field list.

The field lists for all variants are displayed in an output window. The first variant comprises examples for both %control and %element for the source.
