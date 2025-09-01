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