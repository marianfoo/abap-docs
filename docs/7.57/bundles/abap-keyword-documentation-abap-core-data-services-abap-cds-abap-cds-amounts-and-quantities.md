# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Amounts and Quantities

Included pages: 4


### abencds_calc_quan.htm

---
title: "ABAP CDS - Amounts and Quantities"
description: |
  In ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry'), a special handling for amounts and quantities is implemented. ABAP CDS amount fields(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm 'Gloss
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calc_quan.htm"
abapFile: "abencds_calc_quan.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "calc", "quan"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Amounts and Quantities, ABENCDS_CALC_QUAN, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Amounts and Quantities

In [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry"), a special handling for amounts and quantities is implemented. [ABAP CDS amount fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [ABAP CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry") are similar to [DDIC currency fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_currency_field_glosry.htm "Glossary Entry") and [DDIC quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_quantity_glosry.htm "Glossary Entry"), but more data types are possible.

In [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the [currency key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry") and [unit key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry") reference is respected in [expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm), [UNION views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm), and [INTERSECT views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_intersect_v2.htm). Moreover, a special data type is available: the [calculated quantity with calculated unit reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity.htm).

Read the following sections for details:

-   [ABAP CDS Amount Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field.htm)
-   [ABAP CDS Quantity Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_field.htm)
-   [ABAP CDS Calculated Quantity with Calculated Unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity.htm)

Continue
[ABAP CDS - Amount Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field.htm)
[ABAP CDS - Quantity Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_field.htm)
[ABAP CDS - Calculated Quantity with Calculated Unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity.htm)


### abencds_amount_field.htm

---
title: "ABAP CDS - Amount Fields"
description: |
  An ABAP CDS amount field(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm 'Glossary Entry') is a component of a CDS entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm 'Glossary Entry') in ABAP CDS(https://help.s
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field.htm"
abapFile: "abencds_amount_field.htm"
keywords: ["select", "do", "while", "if", "case", "try", "data", "types", "abencds", "amount", "field"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Amounts and Quantities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calc_quan.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Amount Fields, ABENCDS_AMOUNT_FIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

ABAP CDS - Amount Fields

An [ABAP CDS amount field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry") is a component of a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") used to store an amount in a specific currency. An amount is an integer in the smallest unit of the currency. The integer is constructed from all figures in an amount field while ignoring the position of the decimal separator.

Possible [built-in DDIC data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are CURR, DECFLOAT34, DEC, and FLTP. In case of data type CURR, a field is automatically interpreted as amount field and a reference to a [currency key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry") using the annotation [@Semantics.amount.currencyCode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm) is mandatory. In case of the other data types, this reference is not mandatory but if used, it turns the field into an amount field.

A CDS amount field must be linked with a currency key that specifies the currency and the number of decimal places. A currency key is a component of a DDIC structure, DDIC database table, DDIC view, or of a CDS entity which has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the DDIC database table TCURC.

By default, the number of decimal places for an amount is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

For handling of CDS amount fields in ABAP Dictionary, handling in dynpros, and handling in ABAP programs, the same rules apply as for currency fields in DDIC, see topic [ABAP DDIC - Currency Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_currency_field.htm).

Handling of CDS Amount Fields in Expressions in CDS View Entities

In [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), special handling for CDS amount fields is implemented:

When used in [expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [UNION views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm), or [INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_intersect_v2.htm) views, the reference annotation of a CDS amount field to a currency key is considered. Special rules apply concerning how amounts and quantities can be combined in calculations, compatibility of data types, and result types. A new result type is available: the [CDS calculated quantity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"). The rules are documented in the respective sections:

-   [Amounts and quantities in arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arit_exp_calc_v2.htm)
-   [Amounts and quantities in aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm)
-   Amounts and quantities in [simple](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_case_expression_v2.htm) and [complex case expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_searched_case_expr_v2.htm)
-   [Amounts and quantities in UNION views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm)
-   [Amounts and quantities in INTERSECT views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_intersect_v2.htm)
-   Amounts and quantities in [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm).

Note: [Cast expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) do not handle amounts. Only the target type CURR requires a reference to a currency key.

The following two conversion functions are available for amounts in CDS view entities:

-   [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm): removes the reference to a currency key and returns the numeric value of a field.
-   [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm): converts an amount field of data type CURR into an amount field of data type DECFLOAT34.
-   Note: The function [DECIMAL\_SHIFT](abencds_conv_func_unit_curr_v1.htm#!ABAP_VARIANT_3@3@) is not available in CDS view entities.

Hints

-   Reference annotations that assign a currency key to a field are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them. This is true for all CDS entities except for CDS DDIC-based views (obsolete).
-   Currently, the handling of CDS amount fields in expressions is only available in CDS view entities and not in any other [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry").
-   Currencies are handled as specified by the data saved in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be maintained in transaction OB08.


### abencds_quantity_field.htm

---
title: "ABAP CDS - Quantity Fields"
description: |
  An ABAP CDS quantity field(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm 'Glossary Entry') is a component of a CDS entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm 'Glossary Entry') in ABAP CDS(https://help.sap
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_field.htm"
abapFile: "abencds_quantity_field.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "quantity", "field"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Amounts and Quantities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calc_quan.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Quantity Fields, ABENCDS_QUANTITY_FIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Quantity Fields

An [ABAP CDS quantity field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry") is a component of a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") used to store a quantity in a specific unit.

Possible [built-in ABAP Dictionary data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are QUAN, DECFLOAT16, DECFLOAT34, DEC, FLTP, INT1, INT2, or INT4. In the case of data type QUAN, the field is automatically interpreted as quantity field and a reference to a [unit of measurement key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry") using the annotation [@Semantics.quantity.unitOfMeasure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm) is mandatory. In the case of the other data types, this reference is not mandatory but if used, it turns the field into a quantity field.

A quantity field must be linked with a unit key that defines the unit and the number of decimal places. A unit key is a component of a structure, DDIC database table, DDIC view or of another CDS entity of type UNIT and it can contain a [unit ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_id_glosry.htm "Glossary Entry") from the DDIC database table T006.

For handling of CDS quantity fields in ABAP Dictionary, handling in dynpros, and handling in ABAP programs, the same rules apply as for currency fields in DDIC, see topic [ABAP DDIC - Quantity Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_quantity_field.htm).

Handling of CDS Quantity Fields in Expressions in CDS View Entities

In CDS view entities, special handling for CDS quantity fields is implemented:

When used in [expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [UNION views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm), or [INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_intersect_v2.htm) views, the reference annotation of a CDS quantity field to a unit key is considered. Special rules apply concerning how amounts and quantities can be combined in calculations, compatibility of data types, and result types. A new result type is available: the [CDS calculated quantity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"). The rules are documented in the respective sections:

-   [Amounts and quantities in arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arit_exp_calc_v2.htm)
-   [Amounts and quantities in aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm)
-   Amounts and quantities in [simple](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_case_expression_v2.htm) and [complex case expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_searched_case_expr_v2.htm)
-   [Amounts and quantities in UNION views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm)
-   [Amounts and quantities in INTERSECT views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_intersect_v2.htm)
-   Amounts and quantities in [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm).

Note: [Cast expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) do not handle quantities. Only the target type QUAN requires a reference to a unit key.

The following conversion function is available for quantities in CDS view entities:

-   [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm): removes the reference to a unit key and returns the numeric value of a field.

Hints

-   Reference annotations that assign a unit key to a field are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them. This is true for all CDS entities except for CDS DDIC-based views (obsolete).
-   Currently, the handling of CDS quantity fields in expressions is only available in CDS view entities and not in any other [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry").
-   Quantities and units are handled as specified by the data saved in the DDIC database tables T006... in the package SZME. This data can be maintained using the transaction CUNI.


### abencds_calculated_quantity.htm

---
title: "ABAP CDS - Calculated Quantity with Calculated Unit"
description: |
  A CDS calculated quantity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm 'Glossary Entry') is a component of a CDS view entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm 'Glossary Entry') or of a CDS p
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity.htm"
abapFile: "abencds_calculated_quantity.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "data", "types", "abencds", "calculated", "quantity"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Amounts and Quantities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calc_quan.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Calculated Quantity with Calculated Unit, ABENCDS_CALCULATED_QUANTITY, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Calculated Quantity with Calculated Unit

A [CDS calculated quantity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry") is a component of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or of a [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") used to store a quantity in a specific unit. A calculated quantity is always the result type of a calculation using [ABAP CDS amount fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and/or [ABAP CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry"). The DDIC data type of a calculated quantity is [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). A calculated quantity must be linked with a [ABAP CDS calculated unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_unit_glosry.htm "Glossary Entry") using the annotation [@Semantics.quantity.unitOfMeasure: 'calculatedUnit'](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm). A calculated unit is a component of the same CDS view entity of data type CHAR that specifies a self-defined unit which is not contained in any list of pre-defined values. The DDIC data element DD\_CDS\_CALCULATED\_UNIT and DDIC domain DD\_CDS\_CALCULATED\_UNIT can be used to type a calculated unit, but this is not mandatory.

In CDS view entities, the following functions are available for amount and quantity fields:

-   [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) removes reference information from an amount or quantity field.
-   [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) converts an amount field of data type CURR to data type DECFLOAT34, including shifting. The result remains an amount.

Calculated quantities can be the result type of the following expressions in CDS view entities:

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arit_exp_calc_v2.htm)
-   [Aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm)
-   [Simple](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_case_expression_v2.htm) and [complex case expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_searched_case_expr_v2.htm)
-   Note: [Cast expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) do not handle calculated quantities.

Moreover, special rules apply in the following operand positions in CDS view entities:

-   [UNION views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v2.htm)
-   [INTERSECT views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_intersect_v2.htm)
-   [Comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm)

Hints

-   Reference annotations to currency or unit of measurement keys are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them.
-   Currently, CDS calculated quantities are only available in CDS view entities and in CDS projection views. They are not supported in any other [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry").
-   If a field is a calculated quantity, this characteristic is inherited when a view entity selects from another view entity.
-   A calculated unit can be used as reference only once in a view. If a view contains several calculated quantity fields, each field needs a different calculated unit.

Example

In the following CDS view entity, the field rent\_per\_size divides the amount of the rent for an apartment by the apartment size. The result is the cost per square meter. The calculated unit is EUR/MTK, MTK being the unit ID for square meter.

@AccessControl.authorizationCheck: #NOT\_ALLOWED
@EndUserText.label: 'CDS view entity, calculated quantity'
define view entity DEMO\_CDS\_CALCULATED\_QUANTITY
  as select from demo\_rent
{
  key apartment\_id                     as ApartmentId,
      apartment\_size                   as ApartmentSize,
      apartment\_unit                   as ApartmentUnit,
      currency                         as Currency,
      
      // currency field and unit field in arith expression
      @Semantics.quantity.unitOfMeasure: 'calculatedUnit'
      rent\_decfloat34 / apartment\_size as rent\_per\_size,
      concat( concat(currency, '/' ), apartment\_unit )  
                                       as calculatedUnit
}

The program DEMO\_CDS\_CALCULATED\_QUANTITY accesses the view, inserts values into the underlying database table, and displays the result.
