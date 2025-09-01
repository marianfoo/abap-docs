  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: scaling, ABENSCALE_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

scaling

Property of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). A decimal floating point number can be viewed as an integer number of a given length that is scaled by dividing through a power of 10. This defines the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry"). In this sense, the negative exponent of a decimal floating point number is called scaling, which is applied to the mantissa. If the scaling is positive, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scaling. Operations on decimal floating point numbers usually retain the scaling and therefore the number of decimal places. A [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") for changing the scaling is [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)). See also [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry").