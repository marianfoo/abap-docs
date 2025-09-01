---
title: "Calculations"
description: |
  Background In ABAP, the arithmetic operators(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarithmetic_operator_glosry.htm 'Glossary Entry') in arithmetic expressions(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarithmetic_expression_glosry.htm 'Glossary Entry')
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalc_expresssion_guidl.htm"
abapFile: "abencalc_expresssion_guidl.htm"
keywords: ["do", "if", "try", "abencalc", "expresssion", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Alternative Spellings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalternative_spelling_gdl.htm) → 

Calculations

Background

In ABAP, the [arithmetic operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarithmetic_operator_glosry.htm "Glossary Entry") in [arithmetic expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") are used for numeric calculations. [Calculation assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the operators [+=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm), [\-=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm), [\*=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm), and [/=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignments.htm) are available for the basic arithmetic operations. These operator formats are accompanied by the dedicated ABAP keywords ADD, SUBTRACT, MULTIPLY, and DIVIDE.

Rule

Use the operator format

For calculations, use the operator format with the operators (+=, \-=, \*=, or /=) instead of the ABAP keyword format.

Details

Calculations with the statements ADD, SUBTRACT, MULTIPLY, and DIVIDE do not allow expressions in the operand positions and are often more difficult to read than the corresponding operator format.

Bad Example

The following source code shows a multiplication using the statement MULTIPLY.

MULTIPLY n1 by n2.

Good Example

The following source code shows the same example as above, but in the more compact operator format.

n1 \*=  n2.