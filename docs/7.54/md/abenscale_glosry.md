---
title: "scale_glosry"
description: |
  scale_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscale_glosry.htm"
abapFile: "abenscale_glosry.htm"
keywords: ["do", "if", "try", "abenscale", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

scaling

Property of a [decimal floating point number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecfloat_glosry.htm "Glossary Entry"). A decimal floating point number can be seen as an integer number of a predefined length that is scaled by dividing through a power of ten. This defines the number of [decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry"). In this sense, the negative exponent of a decimal floating point number is called the scale that applies to the mantissa. If the scale is positive, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scales. Operations on decimal floating point numbers are usually given the scale and thus the number of decimal places. One [built-in function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry") for changing the scale is [rescale](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendec_floating_point_functions.htm). See also [precision](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprecision_glosry.htm "Glossary Entry").