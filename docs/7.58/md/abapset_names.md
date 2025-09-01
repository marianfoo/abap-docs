  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Related ABAP Language Elements and Topics](javascript:call_link\('abenabap_rap_other.htm'\)) →  [Type Mapping for RAP](javascript:call_link\('abapeml_type_mapping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20NAMES%2C%20ABAPSET_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET NAMES

Syntax

SET NAMES fields FROM FLAGS src *{* MAPPING *{* TYPE p\_type *}*
                                        *|* *{* LIKE var *}*
                                *}*.

Variants:

[1\. ... MAPPING TYPE p\_type.](#!ABAP_VARIANT_1@1@)
[2\. ... MAPPING LIKE var.](#!ABAP_VARIANT_2@2@)

Effect

Used for the conversion of fields that have the [technical type](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") [x](javascript:call_link\('abenbuiltin_types_byte.htm'\)) and field name lists in the context of RAP. The statement deals with [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that include the components [%control](javascript:call_link\('abapderived_types_comp.htm'\)) and [%element](javascript:call_link\('abapderived_types_comp.htm'\)). The components of %control and %element have the technical type x.

The ABAP statement is targeted at applications that include, on the one hand, [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that use BDEF derived types and, on the other hand, implementations of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that use other data types. Mapping of field names is required if types are involved that have different field names than those in the underlying [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of the RAP BO.

fields represents a [general expression](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). A variable in the position of fields must be a table containing one or more field names. It is of type ABP\_FIELD\_NAME\_TAB, the line type is ABP\_FIELD\_NAME. src represents a [general expression](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). A variable in the position of src must be typed with a BDEF derived type that contains %control or %element.

As a result of the ABAP statement, the field name list fields contains those fields that have non-initial values in the %control or %element structure of src. The ABAP statement [SET FLAGS](javascript:call_link\('abapset_flags.htm'\)) does the conversion the other way round.

The following short dumps result from an operation that cannot be executed at runtime using the SET NAMES statements:

-   TCHK\_TYPE\_LOAD: Inappropriate type for field names.
-   BEHAVIOR\_FLAGS\_NAMES\_ERROR: Inappropriate type on the BDEF derived type side or a missing mapping, which is true for the variants of the statement.

Variant 1   

... MAPPING TYPE p\_type.

Effect

Used in case type mapping is required for a structured [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"), for example, a legacy type. As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the RAP BDL topic [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Variant 2   

... MAPPING LIKE var.

Effect

Used in case type mapping is required for a structured [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry"), for example, a legacy type. This variant is relevant if the type is not available and is a variable of the required type instead. As a prerequisite, the BDEF contains a mapping specification for the mapped type. See more information in the RAP BDL topic [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Hint

%element contains the names of all associations of the RAP BO. However, type mapping cannot be defined for associations. Hence, if the ABAP statement is used with mapping and a BDEF derived typed with %element, information from %element that relates to associations is lost. In this case, only the mapped component name is available in fields.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_SET\_NAMES shows the syntax of the SET NAMES variants.

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