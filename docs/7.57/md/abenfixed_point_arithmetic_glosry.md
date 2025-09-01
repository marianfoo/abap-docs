---
title: "fixed_point_arithmetic_glosry"
description: |
  fixed_point_arithmetic_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm"
abapFile: "abenfixed_point_arithmetic_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abenfixed", "point", "arithmetic", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: fixed point arithmetic, ABENFIXED_POINT_ARITHMETIC_GLOSRY, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

fixed point arithmetic

Calculation with [packed numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpacked_number_glosry.htm "Glossary Entry") ([data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_type_glosry.htm "Glossary Entry") [p](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm)). Is calculated with an internal accuracy of 31 or (if not sufficient) 63 [places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenplace_glosry.htm "Glossary Entry"). [Decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") are rounded arithmetically, if necessary. Places before the [decimal point](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_point_separat_glosry.htm "Glossary Entry") are never lost if a calculation is completed successfully. As a [program property](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm "Glossary Entry"), the fixed point arithmetic determines whether for numbers of type [p](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm) the decimal point is respected in operations or not. The disabling of this program property is [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennon_fixed_point_obsolete.htm).

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_type.htm)