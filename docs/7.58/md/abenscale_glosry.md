  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20scaling%2C%20ABENSCALE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

scaling

Property of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). A decimal floating point number can be viewed as an integer number of a given length that is scaled by dividing through a power of 10. This defines the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry"). In this sense, the negative exponent of a decimal floating point number is called scaling, which is applied to the mantissa. If the scaling is positive, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scaling. Operations on decimal floating point numbers usually retain the scaling and therefore the number of decimal places. A [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") for changing the scaling is [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)). See also [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry").