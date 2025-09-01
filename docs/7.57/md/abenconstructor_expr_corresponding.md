  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CORRESPONDING, Component Operator, ABENCONSTRUCTOR_EXPR_CORRESPONDING, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CORRESPONDING, Component Operator

Syntax Forms

[Basic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_arg_type.htm)

1\. ... *{* CORRESPONDING *{*dtype*|*#*}*( *\[*EXACT*\]* *\[*DEEP*\]*
                                  struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_dupl.htm)*\]**}* ) *}*
    *|* *{* CORRESPONDING *{*dtype*|*#*}*( *\[*DEEP*\]*
                                 *\[**\[*APPENDING*\]* BASE ( base )*\]*
                                 struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_dupl.htm)*\]**}* ) *}*
    *|* *{* CORRESPONDING *{*dtype*|*#*}*( *\[**\[*APPENDING*\]* BASE ( base )*\]*
                                 struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_dupl.htm)*\]**}*
                                 [mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_mapping.htm) ) *}* ...
[Lookup Table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm)
2\. ... CORRESPONDING type( itab FROM lookup\_tab
                               USING *\[*KEY key\_name*\]* s1 = t1 s2 = t2 ...
                               *\[*[mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_mapping.htm)*\]* ) ...
[RAP-Specific Variants for Type Mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_corresponding.htm)
3\. ... *{* CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY ) *}*
    *|* *{* CORRESPONDING *{*dtype*|*#*}*( ntype MAPPING TO ENTITY ) *}*
    *|* *{* CORRESPONDING *{*dtype*|*#*}*( in\_d\_type USING CONTROL ) *}*
    *|* *{* CORRESPONDING *{*dtype*|*#*}*( in\_d\_type MAPPING FROM ENTITY USING CONTROL ) *}*
    *|* *{* CORRESPONDING *{*dtype*|*#*}*( ntype CHANGING CONTROL ) *}* ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expressions.htm) with the component operator CORRESPONDING creates a result of a data type specified using type.

-   In the [basic component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_arg_type.htm), the components of a structured or tabular results are constructed from the components of a structured or tabular parameter struc or itab.
-   In the [variant with lookup table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm), the components of an internal table itab and a lookup table lookup\_tab are combined to form a tabular result.
-   The [RAP-specific variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_corresponding.htm) are used for creating structures or internal tables with type mapping in ABAP in the context of [RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_glosry.htm "Glossary Entry"). RAP requires [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for the communication of [RAP BO providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). When including non-BDEF-derived types (ntype), the variants are responsible for matching them to the input (in\_d\_type) and output BDEF derived types.

The following can be specified for type:

-   A [structured type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm "Glossary Entry") or a [table type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_type_glosry.htm "Glossary Entry").
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_type_glosry.htm "Glossary Entry"). This specification is only possible if the data type required in an operand position is unique and completely identifiable at compile time. The operand type must be a structure type or a table type. When a constructor expression is assigned to a field symbol or a formal parameter with a generic table type, the operand type can only be determined at runtime.

The operator creates structures or internal tables with the specified data type. The components or columns of the result are filled using assignments of components of the parameters specified in the parentheses. The assignments are made using identical names or mapping relationships in a [mapping rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_mapping.htm).

Executable Examples

[Assigning Components: Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_abexas.htm)

Continue
[CORRESPONDING, Basic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_arg_type.htm)
[CORRESPONDING, Lookup Table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm)
[CORRESPONDING, mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_mapping.htm)
[CORRESPONDING, duplicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_dupl.htm)