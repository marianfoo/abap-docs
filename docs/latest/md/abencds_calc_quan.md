---
title: "ABAP CDS - Amounts and Quantities"
description: |
  In ABAP CDS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm 'Glossary Entry'), a special handling for amounts and quantities is implemented. ABAP CDS amount fields(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calc_quan.htm"
abapFile: "abencds_calc_quan.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "calc", "quan"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_types.htm) →  [ABAP CDS - Special Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/aben_cds_special_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Amounts%20and%20Quantities%2C%20ABENCDS_CALC_QUAN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Amounts and Quantities

In [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry"), a special handling for amounts and quantities is implemented. [ABAP CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [ABAP CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry") are similar to [DDIC currency fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field_glosry.htm "Glossary Entry") and [DDIC quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_glosry.htm "Glossary Entry"), but more data types are possible.

In [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the [currency key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencurrency_key_glosry.htm "Glossary Entry") and [unit key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_glosry.htm "Glossary Entry") reference is respected in [expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v2.htm), [comparisons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_types_v2.htm), [UNION views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v2.htm), and [INTERSECT views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_intersect_v2.htm). Moreover, a special data type is available: the [calculated quantity with calculated unit reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_quantity.htm).

Read the following sections for details:

-   [ABAP CDS Amount Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field.htm)
-   [ABAP CDS Quantity Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_field.htm)
-   [ABAP CDS Calculated Quantity with Calculated Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_quantity.htm)

Continue
[ABAP CDS - Amount Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field.htm)
[ABAP CDS - Quantity Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_field.htm)
[ABAP CDS - Calculated Quantity with Calculated Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_quantity.htm)