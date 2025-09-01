  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [Type Mapping for ABAP EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_type_mapping.htm) → 

CORRESPONDING, Type Mapping for ABAP EML

Syntax Forms

    *{* ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY ) *}*
  *|* *{* out\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype MAPPING TO ENTITY ) *}*
  *|* *{* ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type USING CONTROL ) *}*
  *|* *{* ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY USING CONTROL ) *}*
  *|* *{* in\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype CHANGING CONTROL ) *}*.

Variants:

[1\. ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY ).](#!ABAP_VARIANT_1@1@)
[2\. out\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype MAPPING TO ENTITY ).](#!ABAP_VARIANT_2@2@)
[3\. ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type USING CONTROL ).](#!ABAP_VARIANT_3@3@)
[4\. ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY USING CONTROL ).](#!ABAP_VARIANT_4@4@)
[5\. in\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype CHANGING CONTROL ).](#!ABAP_VARIANT_5@5@)

Effect

The variants of the CORRESPONDING operator are used for creating structures or internal tables with type mapping in ABAP in the context of RAP. The type mapping functionality is targeted at applications that have, on the one hand, [RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") based on CDS entities and, on the other hand, further types that are typically older and implement the behavior of the RAP BOs or parts of it. It is especially relevant for the implementation type [unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm) that incorporates existing functionality into RAP. Yet, it can also be relevant for [managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm), for example, when using code for determinations or validations that already exists but which is based on older, non-RAP types, i. e. types that are not derived from the BDEF.

RAP requires [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for the communication of [RAP BO providers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [RAP BO consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). When including non-BDEF-derived types, the variants of the CORRESPONDING operator are responsible for matching them to the input (for example, TYPE TABLE FOR UPDATE) and output (for example, TYPE TABLE FOR READ RESULT) of BDEF derived types. A type mapping is needed if the types include field names that differ from the RAP BO or if the control information ([%control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm)) is available in non-BDEF-derived types. Instead of having many individual specifications using the CORRESPONDING operator, the variants with the additions for the type mapping help boost the maintenance and reduce errors.

As a prerequisite, the mapping must be specified in the BDEF. For more information, see the CDS BDL documentation on [Mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm).

Notes on the syntax:

-   ntype: Types that are not derived from the BDEF.
-   dtype: It can be a [structured type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructured_type_glosry.htm "Glossary Entry") or a [table type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_type_glosry.htm "Glossary Entry").
-   #: It is a symbol for the operand type. This specification is only possible if the data type required in an operand position is unique and completely identifiable. The operand type must be a structure type or a table type.
-   out\_d\_type: Output BDEF derived type, for example, TYPE TABLE FOR READ RESULT or TYPE STRUCTURE FOR READ RESULT.
-   in\_d\_type: Input BDEF derived type, for example, TYPE TABLE FOR UPDATE or TYPE STRUCTURE FOR UPDATE.

Variant 1   

ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY ).

Effect

The output window shows the one line of the internal table as well as the %control structure for the derived type that is created. Likewise, the internal tables for the partner type and the type with the control information is displayed demonstrating the effect of applying the CORRESPONDING operator variant. The field that is disabled in the %control structure is consequently left blank in the table typed with the partner control type.

Variant 2   

out\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype MAPPING TO ENTITY ).

Effect

Used for the mapping of a non-BDEF derived type (ntype) to an output BDEF derived type (out\_d\_type). As a prerequisite, the [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm) for the non-BDEF derived type must be specified in the BDEF.

Variant 3   

ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type USING CONTROL ).

Effect

Type mapping variant that respects the %control component of BDEF derived types. in\_d\_type must be a BDEF derived type that includes the %control component. Only those fields for which the corresponding %control field have been marked as enabled are respected by the mapping, i. e. if a specific %control field is marked as disabled (e. g. the field is initial) in in\_d\_type, the mapping is not applied to it on the non-BDEF-derived type ntype. There is no [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm) required for the non-BDEF derived type in the BDEF if its components have the same field names as the ones from the BDEF-derived type.

Variant 4   

ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY USING CONTROL ).

Effect

Type mapping variant that takes the %control component of BDEF derived types into consideration. in\_d\_type must be a BDEF derived type that includes the %control component. Only those fields for which the corresponding %control field have been marked as enabled are considered for the mapping, i. e. if a specific %control field is marked as disabled (e. g. the field is initial) in in\_d\_type, the mapping is not applied for it on the non-BDEF-derived type ntype. The variant is used if the components of the non-BDEF derived type have different field names than the ones from the BDEF-derived type. Thus, a [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm) is required for the non-BDEF derived type in the BDEF with the notation control.

Variant 5   

in\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype CHANGING CONTROL ).

Effect

Type mapping variant that fills the %control structure of a BDEF-derived type based on a non-BDEF-derived type that does not include control information, i. e. if a field of ntype is left initial, the statement leaves the corresponding %control component of the field initial (00). Vice versa, if a field of ntype is provided with a value, the statement sets the corresponding %control component of in\_d\_type as enabled (01).

There is no [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm) required for non-BDEF derived types in the BDEF if their components have the same field names as the ones from the BDEF-derived types. If non-BDEF derived types have different field names and a mapping from non-BDEF-derived types to input BDEF-derived types is required, a [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_type_mapping.htm) in the BDEF must be defined (with the notation control) and a second CORRESPONDING statement with the addition MAPPING TO ENTITY must precede the statement with CHANGING CONTROL. In doing so, the first CORRESPONDING statement with the addition MAPPING TO ENTITY is responsible for mapping the field names and the second statement with CHANGING CONTROL is responsible filling the %control structure. This mapping variant is only possible for BDEF-derived types in the input since all of them include %control structures.

Executable Example

The example [ABAP EML - CORRESPONDING, Type Mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_type_mapping_abexa.htm) demonstrates the different variants with a simple managed RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - CORRESPONDING, Type Mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_type_mapping_abexa.htm)