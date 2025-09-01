  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Amounts and Quantities](javascript:call_link\('abencds_calc_quan.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Quantity Fields, ABENCDS_QUANTITY_FIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Quantity Fields

An [ABAP CDS quantity field](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry") is a component of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") used to store a quantity in a specific unit.

Possible [built-in ABAP Dictionary data types](javascript:call_link\('abenddic_builtin_types.htm'\)) are QUAN, DECFLOAT16, DECFLOAT34, DEC, FLTP, INT1, INT2, or INT4. In the case of data type QUAN, the field is automatically interpreted as quantity field and a reference to a [unit of measurement key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") using the annotation [@Semantics.quantity.unitOfMeasure](javascript:call_link\('abencds_f1_element_annotation.htm'\)) is mandatory. In the case of the other data types, this reference is not mandatory but if used, it turns the field into a quantity field.

A quantity field must be linked with a unit key that defines the unit and the number of decimal places. A unit key is a component of a structure, DDIC database table, DDIC view or of another CDS entity of type UNIT and it can contain a [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the DDIC database table T006.

For handling of CDS quantity fields in ABAP Dictionary, handling in dynpros, and handling in ABAP programs, the same rules apply as for currency fields in DDIC, see topic [ABAP DDIC - Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\)).

Handling of CDS Quantity Fields in Expressions in CDS View Entities

In CDS view entities, special handling for CDS quantity fields is implemented:

When used in [expressions](javascript:call_link\('abencds_expressions_v2.htm'\)), [UNION views](javascript:call_link\('abencds_union_v2.htm'\)), or [INTERSECT](javascript:call_link\('abencds_intersect_v2.htm'\)) views, the reference annotation of a CDS quantity field to a unit key is considered. Special rules apply concerning how amounts and quantities can be combined in calculations, compatibility of data types, and result types. A new result type is available: the [CDS calculated quantity](javascript:call_link\('abencds_calculated_quantity_glosry.htm'\) "Glossary Entry"). The rules are documented in the respective sections:

-   [Amounts and quantities in arithmetic expressions](javascript:call_link\('abencds_arit_exp_calc_v2.htm'\))
-   [Amounts and quantities in aggregate functions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))
-   Amounts and quantities in [simple](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) and [complex case expressions](javascript:call_link\('abencds_searched_case_expr_v2.htm'\))
-   [Amounts and quantities in UNION views](javascript:call_link\('abencds_union_v2.htm'\))
-   [Amounts and quantities in INTERSECT views](javascript:call_link\('abencds_intersect_v2.htm'\))
-   Amounts and quantities in [comparisons](javascript:call_link\('abencds_cond_expr_types_v2.htm'\)).

Note: [Cast expressions](javascript:call_link\('abencds_cast_expression_v2.htm'\)) do not handle quantities. Only the target type QUAN requires a reference to a unit key.

The following conversion function is available for quantities in CDS view entities:

-   [GET\_NUMERIC\_VALUE](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\)): removes the reference to a unit key and returns the numeric value of a field.

Hints

-   Reference annotations that assign a unit key to a field are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them. This is true for all CDS entities except for CDS DDIC-based views (obsolete).
-   Currently, the handling of CDS quantity fields in expressions is only available in CDS view entities and not in any other [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
-   Quantities and units are handled as specified by the data saved in the DDIC database tables T006... in the package SZME. This data can be maintained using the transaction CUNI.