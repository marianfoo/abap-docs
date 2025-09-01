  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calculations%2C%20ABENCALC_EXPRESSSION_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Calculations

Background   

In ABAP, the [arithmetic operators](javascript:call_link\('abenarithmetic_operator_glosry.htm'\) "Glossary Entry") in [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") are used for numeric calculations. [Calculation assignments](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operators [+=](javascript:call_link\('abencalculation_assignments.htm'\)), [\-=](javascript:call_link\('abencalculation_assignments.htm'\)), [\*=](javascript:call_link\('abencalculation_assignments.htm'\)), and [/=](javascript:call_link\('abencalculation_assignments.htm'\)) are available for the basic arithmetic operations. These operator formats are accompanied by the dedicated ABAP keywords ADD, SUBTRACT, MULTIPLY, and DIVIDE.

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