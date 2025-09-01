  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_other.htm) →  [Type Mapping for RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_type_mapping.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CORRESPONDING%2C%20Type%20Mapping%20for%20ABAP%20EML%2C%20ABAPEML_CORRESPONDING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

CORRESPONDING, Type Mapping for ABAP EML

Syntax

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

The variants of the [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm) operator are used for creating structures or internal tables with type mapping in ABAP in the context of RAP. The type mapping functionality is targeted at applications that have, on the one hand, [RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") based on CDS entities and, on the other hand, further types that are typically older and implement the behavior of the RAP BOs or parts of it. It is especially relevant for the implementation type [unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) that incorporates existing functionality into RAP. Yet, it can also be relevant for [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm), for example, when using code for determinations or validations that already exist but which are based on older, non-RAP types, i. e. types that are not derived from the BDEF.

RAP requires [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for the communication of [RAP BO providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [RAP BO consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). When including non-BDEF-derived types, the variants of the CORRESPONDING operator are responsible for matching them to the [input](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_input_der_type_glosry.htm "Glossary Entry") (for example, TYPE TABLE FOR UPDATE) and [output](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_output_der_type_glosry.htm "Glossary Entry") (for example, TYPE TABLE FOR READ RESULT) of BDEF derived types. A type mapping is needed if the types include field names that differ from the RAP BO or if the control information ([%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm)) is available in non-BDEF-derived types. Instead of having many individual specifications using the CORRESPONDING operator, the variants with the additions for the type mapping help boost the maintenance and reduce errors.

As a prerequisite, the mapping must be specified in the BDEF. For more information, see the RAP BDL documentation on [Mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm).

Notes on the syntax:

-   ntype: Type that is not derived from the BDEF.
-   dtype: It can be a [structured type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm "Glossary Entry") or a [table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_type_glosry.htm "Glossary Entry").
-   #: It is a symbol for the operand type. This specification is only possible if the data type required in an operand position is unique and completely identifiable. The operand type must be a structure type or a table type.
-   out\_d\_type: Output BDEF derived type, for example, a data object typed with TYPE TABLE FOR READ RESULT or TYPE STRUCTURE FOR READ RESULT.
-   in\_d\_type: Input BDEF derived type, for example, a data object typed with TYPE TABLE FOR UPDATE or TYPE STRUCTURE FOR UPDATE.

Variant 1   

ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY ).

Effect

Used for the mapping of a [RAP input derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_input_der_type_glosry.htm "Glossary Entry") (in\_d\_type) to a non-BDEF derived type (ntype). As a prerequisite, the [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) for the non-BDEF derived type must be specified in the BDEF.

Example

The following code demonstrates the assignment of an input derived type to a non-BDEF derived type using the addition MAPPING FROM ENTITY.

DATA: ent\_in\_tab   TYPE TABLE FOR UPDATE demo\_managed\_root\_map,
      ty2\_tab      TYPE STANDARD TABLE OF demo\_struc2.
ent\_in\_tab = VALUE #( ( key\_field = 1 field1 = 'aaa' field2 = 'bbb'
                        field3 = 1 field4 = 2 ) ).
ty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM ENTITY ).
cl\_demo\_output=>write( ent\_in\_tab ).
cl\_demo\_output=>write( ty2\_tab ).
cl\_demo\_output=>display( ).

Variant 2   

out\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype MAPPING TO ENTITY ).

Effect

Used for the mapping of a non-BDEF derived type (ntype) to a [RAP output derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_output_der_type_glosry.htm "Glossary Entry") (out\_d\_type). As a prerequisite, the [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) for the non-BDEF derived type must be specified in the BDEF.

Example

The following code demonstrates the assignment of a non-BDEF derived type to an output derived type using the addition MAPPING TO ENTITY.

DATA: ent\_out\_tab  TYPE TABLE FOR READ RESULT demo\_managed\_root\_map,
      ty3\_tab      TYPE STANDARD TABLE OF demo\_struc3.
ty3\_tab = VALUE #( ( z\_key\_field = 2 z\_field1 = 'ccc'
                     z\_field2 = 'ddd' z\_field3 = 3 z\_field4 = 4 ) ).
ent\_out\_tab = CORRESPONDING #( ty3\_tab MAPPING TO ENTITY ).
cl\_demo\_output=>write( ty3\_tab ).
cl\_demo\_output=>write( ent\_out\_tab ).
cl\_demo\_output=>display( ).

Variant 3   

ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type USING CONTROL ).

Effect

Type mapping variant that respects the %control component of BDEF derived types. in\_d\_type must be a BDEF derived type that includes the %control component. Only those fields for which the corresponding %control field have been marked as enabled are respected by the mapping, i. e. if a specific %control field is marked as disabled (e. g. the field is initial) in in\_d\_type, the mapping is not applied to it on the non-BDEF-derived type ntype. There is no [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) required for the non-BDEF derived type in the BDEF if its components have the same field names as the ones from the BDEF-derived type.

Example

The following code demonstrates the assignment of an input derived type to a non-BDEF derived type using the addition USING CONTROL. The %control component of a particular field is not selected, hence, this field is not assigned.

DATA: ent\_in\_tab   TYPE TABLE FOR UPDATE demo\_managed\_root\_map,
      ty1\_tab      TYPE STANDARD TABLE OF demo\_struc1.
ent\_in\_tab = VALUE #(
  ( key\_field = 4 field1 = 'ggg' field2 = 'hhh' field3 = 7 field4 = 8
    %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                        field1    = if\_abap\_behv=>mk-off
                        field2    = if\_abap\_behv=>mk-on
                        field3    = if\_abap\_behv=>mk-on
                        field4    = if\_abap\_behv=>mk-on ) ) ).
ty1\_tab = CORRESPONDING #( ent\_in\_tab USING CONTROL ).
cl\_demo\_output=>write( ent\_in\_tab ).
cl\_demo\_output=>write( ty1\_tab ).
cl\_demo\_output=>display( ).

Variant 4   

ntype = CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY USING CONTROL ).

Effect

Type mapping variant that takes the %control component of BDEF derived types into consideration. in\_d\_type must be a BDEF derived type that includes the %control component. Only those fields for which the corresponding %control field have been marked as enabled are considered for the mapping, i. e. if a specific %control field is marked as disabled (e. g. the field is initial) in in\_d\_type, the mapping is not applied to it on the non-BDEF-derived type ntype. The variant is used if the components of the non-BDEF derived type have different field names than the ones from the BDEF-derived type. Thus, a [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) is required for the non-BDEF derived type in the BDEF with the notation control.

Example

The following code demonstrates the assignment of an input derived type to a non-BDEF derived type using the addition MAPPING FROM ENTITY USING CONTROL.

DATA: ent\_in\_tab   TYPE TABLE FOR UPDATE demo\_managed\_root\_map,
      ty2\_tab      TYPE STANDARD TABLE OF demo\_struc2.
ent\_in\_tab = VALUE #(
( key\_field = 5 field1 = 'iii' field2 = 'jjj' field3 = 9 field4 = 10
  %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                      field1    = if\_abap\_behv=>mk-on
                      field2    = if\_abap\_behv=>mk-off
                      field3    = if\_abap\_behv=>mk-on
                      field4    = if\_abap\_behv=>mk-on ) ) ).
ty2\_tab = CORRESPONDING #( ent\_in\_tab MAPPING FROM
                                      ENTITY USING CONTROL ).
cl\_demo\_output=>write( ent\_in\_tab ).
cl\_demo\_output=>write( ty2\_tab ).
cl\_demo\_output=>display( ).

Variant 5   

in\_d\_type = CORRESPONDING *{*dtype*|*#*}*( ntype CHANGING CONTROL ).

Effect

Type mapping variant that fills the %control structure of a BDEF-derived type based on a non-BDEF-derived type that does not include control information, i. e. if a field of ntype is left initial, the statement leaves the corresponding %control component of the field initial (00). Vice versa, if a field of ntype is provided with a value, the statement sets the corresponding %control component of in\_d\_type as enabled (01).

There is no [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) required for non-BDEF derived types in the BDEF if their components have the same field names as the ones from the BDEF-derived types. If non-BDEF derived types have different field names and a mapping from non-BDEF-derived types to input BDEF-derived types is required, a [mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) in the BDEF must be defined (with the notation control) and a second CORRESPONDING statement with the addition MAPPING TO ENTITY must precede the statement with CHANGING CONTROL. In doing so, the first CORRESPONDING statement with the addition MAPPING TO ENTITY is responsible for mapping the field names and the second statement with CHANGING CONTROL is responsible filling the %control structure. This mapping variant is only possible for BDEF-derived types in the input since all of them include %control structures.

Example

The following code demonstrates the assignment of a non-BDEF derived type to an input derived type using the addition CHANGING CONTROL.

DATA: ent\_in\_tab   TYPE TABLE FOR UPDATE demo\_managed\_root\_map,
      ty1\_tab      TYPE STANDARD TABLE OF demo\_struc1.
ty1\_tab = VALUE #( ( key\_field = 6
                     "field1 not specified
                     field2 = 'kkk'
                     field3 = 11
                     field4 = 12 ) ).
ent\_in\_tab = CORRESPONDING #( ty1\_tab CHANGING CONTROL ).
cl\_demo\_output=>write( ty1\_tab ).
cl\_demo\_output=>write( ent\_in\_tab ).
cl\_demo\_output=>display( ).

Executable Example

The example [ABAP EML - CORRESPONDING, Type Mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_type_mapping_abexa.htm) demonstrates the different variants with a simple managed RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - CORRESPONDING, Type Mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_type_mapping_abexa.htm)