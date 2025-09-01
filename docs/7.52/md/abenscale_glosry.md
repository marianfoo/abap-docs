---
title: "scale_glosry"
description: |
  scale_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscale_glosry.htm"
abapFile: "abenscale_glosry.htm"
keywords: ["do", "if", "try", "abenscale", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

scaling

Property of a [decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry"). A decimal floating point number can be seen as an integer number of a predefined length that is scaled by dividing through a power of ten. This defines the number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry"). In this sense, the negative exponent of a decimal floating point number is called scaling that applies to the mantissa. For positive scaling, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scaling. Operations on decimal floating point numbers usually are given the scaling and thus the number of decimal places. One [predefined function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry") for changing the scaling is [rescale](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm). See also [Precision](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprecision_glosry.htm "Glossary Entry").