  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [Type Mapping](javascript:call_link\('abapeml_type_mapping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET FLAGS, ABAPSET_FLAGS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

SET FLAGS

Syntax

SET FLAGS src FROM NAMES fields *{* MAPPING *{* TYPE p\_type *}*
                                        *|* *{* LIKE var *}*
                                *}*.

Variants:

[1\. ... MAPPING TYPE p\_type.](#!ABAP_VARIANT_1@1@)
[2\. ... MAPPING LIKE var.](#!ABAP_VARIANT_2@2@)

Effect

Used for the conversion of fields that have the [technical type](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") [x](javascript:call_link\('abenbuiltin_types_byte.htm'\)) and field name lists in the context of RAP. The statement deals with [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that include the components [%control](javascript:call_link\('abapderived_types_comp.htm'\)) and [%element](javascript:call_link\('abapderived_types_comp.htm'\)). The components of %control and %element have the technical type x.

The ABAP statement is targeted at applications that include, on the one hand, [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that use BDEF derived types and, on the other hand, implementations of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that use other data types. Mapping of field names is required if types are involved that have different field names than those in the underlying [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of the RAP BO.

src represents a variable typed with a BDEF derived type that contains %control or %element. fields represents a [general expression](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). A variable in the position of fields must be a table containing one or more field names. It is of type ABP\_FIELD\_NAME\_TAB, the line type is ABP\_FIELD\_NAME.

As a result of the ABAP statement, the field names contained in the table get identified as component names in the %control or %element structure and their value is set to 01. If field names do not exist in fields, the value in the structures is set to 00. The ABAP statement [SET NAMES](javascript:call_link\('abapset_names.htm'\)) does the conversion the other way round.

The following short dumps result from an operation that cannot be executed at runtime using the SET FLAGS statements:

-   TCHK\_TYPE\_LOAD: Inappropriate type for field names.
-   BEHAVIOR\_FLAGS\_NAMES\_ERROR: Inappropriate type on the BDEF derived type side or a missing mapping, which is true for the variants of the statement.

Variant 1   

... MAPPING TYPE p\_type.

Effect

Used in case type mapping is required for a structured [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"), for example, a legacy type. fields must contain the field names of the legacy type.

As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the CDS BDL topic [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Variant 2   

... MAPPING LIKE var.

Effect

Used in case type mapping is required for a structured [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"), for example, a legacy type. This variant is relevant if the type is not available and is a variable of the required type instead. fields must contain the field names of the legacy type.

As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the CDS BDL topic [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Example

The following source code section taken from DEMO\_RAP\_EML\_SET\_NAMES shows the syntax of the SET NAMES variants.

DATA: fields  TYPE abp\_field\_name\_tab,
      fields2 TYPE abp\_field\_name\_tab,
      src     TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map,
      var     TYPE demo\_struc.
fields = VALUE #( ( CONV #( 'KEY\_FIELD' ) )
                  ( CONV #( 'FIELD1' ) )
                  ( CONV #( 'FIELD2' ) )
                  ( CONV #( 'FIELD3' ) )
                  ( CONV #( 'FIELD4' ) )
                ).
fields2 = VALUE #( ( CONV #( 'B\_KEY\_FIELD' ) )
                   ( CONV #( 'B\_FIELD1' ) )
                   ( CONV #( 'B\_FIELD2' ) )
                   ( CONV #( 'B\_FIELD3' ) )
                   ( CONV #( 'B\_FIELD4' ) )
                 ).
"First variant.
SET FLAGS src FROM NAMES fields.
"Second variant.
SET FLAGS src FROM NAMES fields2 MAPPING TYPE demo\_struc.
"Third variant.
SET FLAGS src FROM NAMES fields2 MAPPING LIKE var.

Executable Example

The example [ABAP EML - Variants of SET FLAGS](javascript:call_link\('abeneml_set_flags_abexa.htm'\)) demonstrates the three different variants with a simple managed RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - Variants of SET FLAGS](javascript:call_link\('abeneml_set_flags_abexa.htm'\))